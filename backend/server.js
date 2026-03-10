const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");
const rateLimit = require("express-rate-limit");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();

/* ================= SEGURIDAD ================= */
app.disable("x-powered-by");
// Headers HTTP de seguridad (CSP, X-Frame-Options, X-Content-Type-Options, etc.)
app.use(helmet());

// Rate Limit global (máx 50 requests cada 15 min por IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// CORS: origen configurado desde variable de entorno (fallback a localhost para desarrollo)
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((o) => o.trim())
  : ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origen no permitido por CORS: ${origin}`));
      }
    },
  })
);

app.use(express.json({ limit: "10kb" }));

//  Configuración segura de Multer con DiskStorage (evita agotamiento de RAM)
const uploadDir = path.join(__dirname, "uploads_tmp");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase().replace(/[^.a-z0-9]/g, "");
    const unique = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
    cb(null, unique);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB máximo
  fileFilter: (_req, file, cb) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error("Tipo de archivo no permitido"));
    } else {
      cb(null, true);
    }
  },
});

/* ================= CONFIG CORREO ================= */

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true, // true para puerto 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false 
  }
});

/* ================= FUNCIONES SEGURIDAD ================= */

// Sanitizar texto: escapa HTML y elimina saltos de línea para evitar CRLF injection
const sanitize = (text) => {
  if (!text) return "";
  return text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\r/g, "")
    .replace(/\n/g, " ");
};

// Validar email simple
const validarEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validar cédula colombiana (6–10 dígitos numéricos)
const validarCedula = (cedula) => {
  return /^\d{6,10}$/.test(cedula);
};

// Validar teléfono colombiano (10 dígitos, empieza en 3 para móvil o 6/7 para fijo)
const validarTelefono = (telefono) => {
  return /^[3,6,7]\d{9}$/.test(telefono);
};

// Generar referencia única para auditoría
const generarReferencia = () => {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `REF-${ts}-${rand}`;
};

/* ================= RUTA PQR ================= */

// Tipos válidos de PQR (lista blanca)
const TIPOS_PQR = ["Petición", "Queja", "Reclamo"];

// Rate limit dedicado para PQR: máx 10 solicitudes por hora por IP
const limiterPQR = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Demasiadas solicitudes. Intente más tarde." },
});

app.post("/api/pqr", limiterPQR, upload.single("archivo"), async (req, res) => {
  try {
    const nombre = sanitize(req.body.nombre);
    const correo = sanitize(req.body.correo);
    const tipo = sanitize(req.body.tipo);
    const mensaje = sanitize(req.body.mensaje);

    if (!nombre || !correo || !tipo || !mensaje) {
      return res.status(400).json({ ok: false, error: "Campos incompletos" });
    }

    // Validaciones de longitud
    if (nombre.length < 3 || nombre.length > 100) {
      return res.status(400).json({ ok: false, error: "Nombre inválido" });
    }
    if (mensaje.length < 10 || mensaje.length > 2000) {
      return res.status(400).json({ ok: false, error: "El mensaje debe tener entre 10 y 2000 caracteres" });
    }

    // Validar tipo contra lista blanca
    if (!TIPOS_PQR.includes(tipo)) {
      return res.status(400).json({ ok: false, error: "Tipo de PQR inválido" });
    }

    if (!validarEmail(correo)) {
      return res.status(400).json({ ok: false, error: "Email inválido" });
    }

    // Sanitizar nombre del archivo: solo letras, números, guiones y extensión segura
    const safeFilename = req.file
      ? req.file.originalname
          .replace(/[^a-zA-Z0-9._-]/g, "_")
          .substring(0, 100)
      : null;

    await transporter.sendMail({
      from: `"PQR Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuevo PQR - ${tipo}`,
      html: `
        <h3>Nuevo PQR</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${correo}</p>
        <p><b>Tipo:</b> ${tipo}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `,
      attachments: req.file
        ? [{ filename: safeFilename, path: req.file.path }]
        : [],
    });

    // Eliminar archivo temporal del disco tras el envío
    if (req.file) fs.unlink(req.file.path, () => {});

    res.json({ ok: true });
  } catch (error) {
    if (req.file) fs.unlink(req.file.path, () => {});
    console.error("Error PQR:", error.message);
    res.status(500).json({ ok: false });
  }
});

/* ================= RUTA CAMBIO DE CLAVE ================= */

// Rate limit estricto para esta ruta: máx 5 solicitudes por hora por IP
const limiterClaveCambio = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { ok: false, error: "Demasiadas solicitudes. Intente más tarde." },
});

app.post("/api/cambio-clave", limiterClaveCambio, async (req, res) => {
  try {
    const nombres = sanitize(req.body.nombres);
    const cedula = sanitize(req.body.cedula);
    const telefono = sanitize(req.body.telefono);
    const email = sanitize(req.body.email);
    const ciudad = sanitize(req.body.ciudad);
    const nombreRed = sanitize(req.body.nombreRed);

    // NOTA DE SEGURIDAD: La clave nueva NO se recibe ni se transmite por email.
    // El staff debe contactar al cliente por teléfono para coordinar el cambio.

    if (!nombres || !cedula || !telefono || !email || !ciudad) {
      return res.status(400).json({ ok: false, error: "Campos incompletos" });
    }

    // Validaciones de identidad
    if (nombres.length < 3 || nombres.length > 100) {
      return res.status(400).json({ ok: false, error: "Nombre inválido" });
    }
    if (!validarCedula(cedula)) {
      return res.status(400).json({ ok: false, error: "Cédula inválida (6–10 dígitos)" });
    }
    if (!validarTelefono(telefono)) {
      return res.status(400).json({ ok: false, error: "Teléfono inválido (10 dígitos)" });
    }
    if (!validarEmail(email)) {
      return res.status(400).json({ ok: false, error: "Email inválido" });
    }

    const referencia = generarReferencia();
    const fechaHora = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });

    await transporter.sendMail({
      from: `"Cambio de Clave" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Solicitud Cambio de Clave [${referencia}]`,
      html: `
        <h3>Solicitud de Cambio de Clave WiFi</h3>
        <p><b>Referencia:</b> ${referencia}</p>
        <p><b>Fecha y hora:</b> ${fechaHora}</p>
        <hr/>
        <p><b>Nombres y Apellidos:</b> ${nombres}</p>
        <p><b>Cédula:</b> ${cedula}</p>
        <p><b>Teléfono:</b> ${telefono}</p>
        <p><b>Correo electrónico:</b> ${email}</p>
        <p><b>Ciudad:</b> ${ciudad}</p>
        <p><b>Nombre de la red WiFi:</b> ${nombreRed || "-"}</p>
        <hr/>
        <p style="color:#c0392b;font-weight:bold;">
          ⚠ ACCIÓN REQUERIDA: Verificar la identidad del cliente llamando al número
          registrado (${telefono}) antes de realizar cualquier cambio.
          La nueva clave NO debe ser solicitada ni enviada por email.
        </p>
      `,
    });

    // Confirmar al cliente con su número de referencia
    await transporter.sendMail({
      from: `"VestelREA" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Solicitud recibida [${referencia}]`,
      html: `
        <h3>Recibimos tu solicitud de cambio de clave</h3>
        <p>Referencia: <b>${referencia}</b></p>
        <p>Nuestro equipo se comunicará contigo al número <b>${telefono}</b>
        para verificar tu identidad y coordinar el cambio de forma segura.</p>
        <p>Si no realizaste esta solicitud, ignora este mensaje o contáctanos.</p>
      `,
    });

    res.json({ ok: true, referencia });
  } catch (error) {
    console.error("Error Cambio Clave:", error.message);
    res.status(500).json({ ok: false });
  }
});

/* ================= MANEJO GLOBAL DE ERRORES ================= */

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada"
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error:
      process.env.NODE_ENV === "production"
        ? "Error interno del servidor"
        : err.message,
  });
});

/* ================= START SERVER ================= */

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto: ${PORT}`);
});