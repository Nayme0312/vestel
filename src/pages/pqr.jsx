import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Pqr = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    mensaje: "",
    archivo: null,
  });

  const [estado, setEstado] = useState("idle");
  const { esNavidad } = useContext(ThemeContext);

  // Lógica para que el estado de React siempre guarde en MAYÚSCULAS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ 
      ...form, 
      [name]: value.toUpperCase() 
    });
  };

  const handleFile = (e) => {
    setForm({ ...form, archivo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("loading");

    try {
      const data = new FormData();
      data.append("nombre", form.nombre);
      data.append("cedula", form.cedula);
      data.append("correo", form.correo);
      data.append("tipo", tipo);
      data.append("mensaje", form.mensaje);
      if (form.archivo) data.append("archivo", form.archivo);

      const res = await fetch("http://localhost:3001/api/pqr", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setEstado("success");
        setForm({ nombre: "", cedula: "", correo: "", mensaje: "", archivo: null });
        setTipo("");
      } else {
        setEstado("error");
      }
    } catch (error) {
      setEstado("error");
    }
  };

  // Quitamos 'uppercase' de aquí para que el Placeholder se vea normal
  const inputStyle = `w-full rounded-md border px-3 sm:px-4 py-2 text-sm sm:text-base text-black font-bold outline-none transition-all ${
    esNavidad ? "border-red-300 focus:border-red-400" : "focus:border-yellow-400"
  }`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950 flex items-center justify-center px-3 sm:px-4 py-10 sm:py-20">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative">
        
        <button 
          onClick={() => navigate("/")} 
          className={`absolute top-3 right-3 sm:top-5 sm:right-2 transition-all duration-200 flex flex-col items-center group ${
            esNavidad ? "text-red-400 hover:text-red-600" : "text-gray-400 hover:text-yellow-500"
          }`}
          title="Salir"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span className="text-[10px] font-bold uppercase">Salir</span>
        </button>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center pr-6 sm:pr-0">
          PQR – Peticiones, Quejas y Reclamos
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
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
            placeholder="Número de Cédula o NIT"
            onChange={handleChange}
            className={`${inputStyle} ${form.cedula ? 'uppercase' : ''}`}
            required
          />

          <input
            type="email"
            name="correo"
            value={form.correo}
            placeholder="Correo electrónico"
            onChange={handleChange}
            className={`${inputStyle} ${form.correo ? 'uppercase' : ''}`}
            required
          />

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className={`${inputStyle} ${tipo ? 'uppercase' : ''}`}
            required
          >
            <option value="">Seleccione el tipo de trámite</option>
            <option value="PETICIÓN">Petición</option>
            <option value="QUEJA">Queja</option>
            <option value="RECLAMO">Reclamo</option>
            <option value="SUGERENCIA">Sugerencia</option>
          </select>

          <textarea
            name="mensaje"
            rows="4"
            value={form.mensaje}
            placeholder="Describe tu solicitud detalladamente..."
            onChange={handleChange}
            className={`${inputStyle} resize-none ${form.mensaje ? 'uppercase' : ''}`}
            required
          />

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <input
              type="file"
              onChange={handleFile}
              className={`block w-full text-sm text-gray-700
                file:mr-4 file:rounded-full file:border-0
                file:px-5 file:py-2 file:font-bold
                ${esNavidad
                  ? "file:bg-red-400 file:text-white hover:file:bg-red-600"
                  : "file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
                }`}
            />

            <video
              src="/imgPrincipales/abejatriste.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-24 h-24 sm:w-20 sm:h-20 object-contain rounded-lg flex-shrink-0"
            />
          </div>

          <button
            type="submit"
            disabled={estado === "loading"}
            className={`w-full font-extrabold py-3 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed ${
              esNavidad
                ? "bg-red-400 hover:bg-red-600 text-white"
                : "bg-yellow-400 hover:bg-yellow-500 text-black"
            }`}
          >
            {estado === "loading" ? "Enviando..." : "Enviar PQR"}
          </button>

          {/* MENSAJES DE ESTADO (en minúsculas normales como pediste) */}
          {estado === "success" && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center font-semibold">
               Tu PQR fue enviada correctamente. Te responderemos pronto.
            </div>
          )}

          {estado === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center font-semibold">
               Ocurrió un error al enviar tu PQR. Intenta nuevamente.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Pqr;