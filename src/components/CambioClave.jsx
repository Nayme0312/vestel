import React, { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "../context/ThemeContext";

const CambioClave = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [estado, setEstado] = useState("idle");
  const [referencia, setReferencia] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { esNavidad } = useContext(ThemeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);
    setEstado("idle");
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:3001/api/cambio-clave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        setReferencia(json.referencia || "");
        setEstado("success");
        e.target.reset();
      } else {
        setErrorMsg(json.error || "Ocurrió un error. Intente nuevamente.");
        setEstado("error");
      }
    } catch {
      setErrorMsg("No se pudo conectar con el servidor.");
      setEstado("error");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = `w-full border px-4 py-2.5 rounded-2xl ${
    esNavidad
      ? "border-red-200 focus:outline-red-400"
      : "border-gray-200 focus:outline-yellow-500"
  }`;

  const modalLayout = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-white text-black rounded-3xl w-full max-w-md p-8 relative shadow-2xl overflow-y-auto max-h-[95vh]">
        
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-xl font-bold text-gray-400 hover:text-red-500 transition-colors"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-[#22365d]">
          Cambio de Clave 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="nombres" required placeholder="Nombres y Apellidos" className={inputStyle} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="cedula" required placeholder="Cédula" className={inputStyle} />
            <input name="telefono" required placeholder="Teléfono" className={inputStyle} />
          </div>

          <input name="email" type="email" required placeholder="Correo electrónico" className={inputStyle} />

          <select name="ciudad" required className={`${inputStyle} bg-white`}>
            <option value="">Seleccione su ciudad</option>
            <option value="Yopal">Yopal</option>
            <option value="Aguazul">Aguazul</option>
            <option value="Tauramena">Tauramena</option>
            <option value="Monterrey">Monterrey</option>
            <option value="Villanueva">Villanueva</option>
          </select>

          <input name="nombreRed" placeholder="Nombre de la red WiFi (opcional)" className={inputStyle} />

          <p className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
            Por seguridad, un asesor te contactará al número registrado para coordinar el cambio de clave. No compartas tu contraseña por ningún otro medio.
          </p>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 rounded-full font-bold transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : esNavidad
                ? "bg-red-400 hover:bg-red-600 text-white shadow-lg"
                : "bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg"
            }`}
          >
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>

          {estado === "success" && (
            <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-xl text-center font-medium space-y-1">
              <p>Solicitud enviada correctamente.</p>
              {referencia && (
                <p className="text-sm">Referencia: <span className="font-bold">{referencia}</span></p>
              )}
              <p className="text-xs">Un asesor te contactará pronto para verificar tu identidad.</p>
            </div>
          )}

          {estado === "error" && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl text-center font-medium">
              {errorMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`
          w-44
          py-2
          rounded-full
          font-bold
          text-sm
          shadow-lg
          flex
          items-center
          justify-center
          gap-2
          transition
          border
          ${esNavidad 
            ? "bg-red-400 hover:bg-red-600 text-white border-red-400" 
            : "border-white bg-transparent hover:bg-white hover:text-black"}
        `}
      >
        CAMBIO CLAVE WIFI 
      </button>

      {open && createPortal(modalLayout, document.body)}
    </>
  );
};

export default CambioClave;