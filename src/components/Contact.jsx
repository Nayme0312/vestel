import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "573145952167";

const Contact = () => {
  const { esNavidad } = useContext(ThemeContext);

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [servicio, setServicio] = useState("Internet");

  useEffect(() => {
    const planGuardado = localStorage.getItem("planSeleccionado");
    if (planGuardado) {
      setServicio(planGuardado);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `Hola
Nombre: ${nombre}
Dirección: ${direccion}
Plan seleccionado: ${servicio}`.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contacto"
      className="relative bg-cover bg-center bg-fixed py-24 overflow-hidden"
      style={{
        backgroundImage: esNavidad
          ? "url('/imgPrincipales/ciudadnochenieve.png')"
          : "url('/imgPrincipales/ciudad-noche.png')",
      }}
    >
      {/* CAPA OSCURA */}
      <div className="absolute inset-0 bg-blue-950/50"></div>

      {/* DEGRADADOS */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#e8efff] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-950 to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-white">

          {/* IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="opacity-80 max-w-md mb-8">
              Déjanos tus datos y te contactamos directamente por WhatsApp.
            </p>

            <div className="space-y-4 text-lg">
              <p>📞 +57 300 123 4567</p>
              <p>📍 Yopal, Casanare</p>
            </div>
          </motion.div>

          {/* FORMULARIO */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl w-full max-w-sm grid gap-4"
            >
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="p-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="Nombre y apellido"
              />

              <input
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
                className="p-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="Dirección"
              />

              <select
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option>Internet</option>
                <option>Televisión</option>
                <option>Internet + Televisión</option>
              </select>

              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`text-white font-bold py-3 rounded-full shadow-lg transition
                  ${
                    esNavidad
                      ? "bg-red-400 hover:bg-red-600"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
              >
                Enviar por WhatsApp
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                Te respondemos directamente por WhatsApp 💬
              </p>
            </motion.form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;