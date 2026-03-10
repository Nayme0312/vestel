import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom"; // 1. Importamos para la navegación

const ReportarFalla = () => {
  const navigate = useNavigate(); // 2. Inicializamos el navegador
  const [servicio, setServicio] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    cedula: "", 
    correo: "",
    telefono: "",
    direccion: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState("idle"); 
  const { esNavidad } = useContext(ThemeContext);

  // 3. Lógica para convertir a MAYÚSCULAS automáticamente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ 
      ...form, 
      [name]: value.toUpperCase() 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("loading");

    try {
      const res = await fetch("http://localhost:3001/api/solicitudes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          servicio: servicio.toUpperCase() // Aseguramos que el servicio también vaya en mayúsculas
        }),
      });

      if (res.ok) {
        setEstado("success");
        setForm({ nombre: "", cedula: "", correo: "", telefono: "", direccion: "", mensaje: "" });
        setServicio("");
      } else {
        setEstado("error");
      }
    } catch (error) {
      setEstado("error");
    }
  };

  const inputStyle = `w-full rounded-md border px-3 sm:px-4 py-2 text-black text-sm outline-none font-bold transition-all ${
    esNavidad ? "border-red-300 focus:border-red-400" : "focus:border-yellow-400"
  }`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950 flex items-center justify-center px-3 sm:px-4 py-10 sm:py-20">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-4 sm:p-6 relative">
        
        {/* BOTÓN VOLVER - Ahora directo al Navbar */}
        <button 
          onClick={() => navigate("/")} // 4. Navegación directa al inicio
          className={`absolute top-4 right-4 transition-all flex flex-col items-center group ${
            esNavidad ? "text-red-400 hover:text-red-600" : "text-gray-400 hover:text-yellow-500"
          }`}
          title="Volver"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span className="text-[10px] font-bold">VOLVER</span>
        </button>

        <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center uppercase tracking-tighter pr-6 sm:pr-0">
          reportar falla
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              name="nombre" 
              value={form.nombre} 
              placeholder="Nombres / Apellidos" 
              onChange={handleChange} 
              className={`${inputStyle} ${form.nombre ? 'uppercase' : ''}`} 
              required 
            />
            <input 
              name="cedula" 
              value={form.cedula} 
              placeholder="Cédula / NIT" 
              onChange={handleChange} 
              className={`${inputStyle} ${form.cedula ? 'uppercase' : ''}`} 
              required 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              name="correo" 
              type="email" 
              value={form.correo} 
              placeholder="Email" 
              onChange={handleChange} 
              className={`${inputStyle} ${form.correo ? 'uppercase' : ''}`} 
              required 
            />
            <input 
              name="telefono" 
              type="tel" 
              value={form.telefono} 
              placeholder="Teléfono / Celular" 
              onChange={handleChange} 
              className={`${inputStyle} ${form.telefono ? 'uppercase' : ''}`} 
              required 
            />
          </div>

          <input 
            name="direccion" 
            value={form.direccion} 
            placeholder="Dirección" 
            onChange={handleChange} 
            className={`${inputStyle} ${form.direccion ? 'uppercase' : ''}`} 
            required 
          />

          <select 
            value={servicio} 
            onChange={(e) => setServicio(e.target.value)} 
            className={`${inputStyle} ${servicio ? 'uppercase' : ''}`} 
            required
          >
            <option value="">¿Qué servicio deseas?</option>
            <option value="INSTALACIÓN NUEVA">Instalación Nueva</option>
            <option value="TRASLADO DE DOMICILIO">Traslado de Domicilio</option>
            <option value="CAMBIO DE PLAN">Cambio de Plan / Mejora</option>
            <option value="SOPORTE TÉCNICO">Soporte Técnico</option>
          </select>

          <textarea 
            name="mensaje" 
            rows="3" 
            value={form.mensaje} 
            placeholder="Comentarios adicionales..." 
            onChange={handleChange} 
            className={`${inputStyle} resize-none ${form.mensaje ? 'uppercase' : ''}`} 
          />

          <button 
            type="submit" 
            disabled={estado === "loading"} 
            className={`w-full font-extrabold py-3 rounded-full transition transform active:scale-95 disabled:opacity-60 ${
              esNavidad
                ? "bg-red-400 hover:bg-red-500 text-white"
                : "bg-yellow-400 hover:bg-yellow-500 text-black"
            }`}
          >
            {estado === "loading" ? "Enviando..." : "ENVIAR SOLICITUD"}
          </button>

          {estado === "success" && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-center text-sm font-semibold border border-green-400">
               ¡Solicitud recibida! Un asesor te contactará pronto.
            </div>
          )}

          {estado === "error" && (
            <div className="bg-red-100 text-red-500 px-4 py-2 rounded-lg text-center text-sm font-semibold border border-red-400">
               Ocurrió un error. Intenta nuevamente.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ReportarFalla;