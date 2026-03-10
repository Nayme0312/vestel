import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SolicitudServicio = () => {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
          servicio: servicio
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

  const inputStyle = `w-full rounded-md border px-4 py-2 text-black text-sm outline-none ${
    esNavidad ? "border-red-300 focus:border-red-400" : ""
  }`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950 flex items-center justify-center px-4 py-20">
      
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 relative">
        
        <button 
          onClick={() => window.history.back()} 
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

        <h1 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
          Solicitud de Servicios
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="nombre" value={form.nombre} placeholder="Nombre completo" onChange={handleChange} className={inputStyle} required />
            <input name="cedula" value={form.cedula} placeholder="Cédula / NIT" onChange={handleChange} className={inputStyle} required />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <input name="correo" type="email" value={form.correo} placeholder="Email" onChange={handleChange} className={inputStyle} required />
            <input name="telefono" type="tel" value={form.telefono} placeholder="Teléfono" onChange={handleChange} className={inputStyle} required />
          </div>

          <input name="direccion" value={form.direccion} placeholder="Dirección" onChange={handleChange} className={inputStyle} required />

          <select 
            value={servicio} 
            onChange={(e) => setServicio(e.target.value)} 
            className={`${inputStyle}`} 
            required
          >
            <option value="">¿Qué servicio deseas?</option>
            <option value="Instalación Nueva">Instalación Nueva</option>
            <option value="Traslado de Domicilio">Traslado de Domicilio</option>
            <option value="Cambio de Plan">Cambio de Plan / Mejora</option>
            <option value="Soporte Técnico">Soporte Técnico</option>
          </select>

          <textarea 
            name="mensaje" 
            rows="3" 
            value={form.mensaje} 
            placeholder="Comentarios adicionales..." 
            onChange={handleChange} 
            className={`${inputStyle} resize-none`} 
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

export default SolicitudServicio;