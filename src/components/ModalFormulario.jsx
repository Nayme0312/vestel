import React, { useState } from "react";

const ModalFormulario = ({ open, onClose, plan }) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [servicio, setServicio] = useState("Solo Internet");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `
Hola quiero este plan:

 Plan: ${plan}
 Servicio: ${servicio}
 Nombre: ${nombre}
 Dirección: ${direccion}
    `;

window.open(
  `https://wa.me/573107014249?text=${encodeURIComponent(mensaje)}`,
  "_blank"
);

  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="relative bg-white/95 p-6 rounded-2xl shadow-2xl w-full max-w-sm">
        
        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h3 className="text-lg font-extrabold text-center mb-4">
          Solicitar Plan
        </h3>

        {/* PLAN SELECCIONADO */}
        <p className="text-sm text-center mb-4 font-semibold text-cyan-600">
          {plan}
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre y apellido"
            className="p-3 rounded-lg border border-gray-300"
          />

          <input
            required
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Dirección"
            className="p-3 rounded-lg border border-gray-300"
          />

          {/* SOLO INTERNET O INTERNET + TV */}
          <select
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            className="p-3 rounded-lg border border-gray-300"
          >
            <option>Solo Internet</option>
            <option>Internet + TV</option>
          </select>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-full transition"
          >
            Enviar por WhatsApp
          </button>

          <p className="text-xs text-gray-500 text-center">
            Te respondemos por WhatsApp
          </p>
        </form>
      </div>
    </div>
  );
};

export default ModalFormulario;
