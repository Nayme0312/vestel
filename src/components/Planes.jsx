import React, { useEffect, useRef, useState } from "react";
import ModalFormulario from "./ModalFormulario";

// ================= ANIMACIÓN SCROLL =================

const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

// ================= TARJETAS PLANES =================

const planes = {
  familiares: [
    {
      velocidad: "100 Megas",
      tipo: "Familiar",
      features: ["Redes sociales", "Videos SD", "4 dispositivos"],
    },
    {
      velocidad: "200 Megas",
      tipo: "Familiar",
      popular: true,
      features: [
        "Redes sociales",
        "Videoconferencia",
        "Video HD",
        "6 dispositivos",
      ],
    },
    {
      velocidad: "300 Megas",
      tipo: "Familiar",
      features: [
        "Streaming 4K",
        "8 dispositivos",
        "Alta estabilidad",
        "Trabajo remoto",
        "Juegos en línea",
      ],
    },
  ],
  streaming: [
    {
      velocidad: "100 Megas",
      tipo: "Streaming",
      popular: true,
      features: [
        "Netflix y YouTube",
        "Video Full HD",
        "4 dispositivos",
        "Sin cortes",
      ],
    },
    {
      velocidad: "200 Megas",
      tipo: "Streaming",
      features: [
        "Streaming 4K",
        "6 dispositivos",
        "Baja latencia",
        "Alta estabilidad",
      ],
    },
    {
      velocidad: "300 Megas",
      tipo: "Streaming",
      features: [
        "Streaming 4K+",
        "8 dispositivos",
        "Máximo rendimiento",
        "Ideal Smart TV",
      ],
    },
  ],
  dedicados: [
    {
      velocidad: "100 Megas",
      popular: true,
      tipo: "Dedicado",
      features: [
        "Alta disponibilidad",
        "Ancho de banda garantizado",
        "Soporte prioritario",
      ],
    },
    {
      velocidad: "200 Megas",
      tipo: "Dedicado",
      features: [
        "Alta disponibilidad",
        "Videoconferencias estables",
        "Soporte prioritario",
      ],
    },
    {
      velocidad: "300 Megas",
      tipo: "Dedicado",
      features: [
        "Tráfico garantizado",
        "Empresas grandes",
        "Soporte prioritario",
      ],
    },
  ],
};

// ================= TARJETA =================

const Card = ({ velocidad, tipo, features, popular, index, onSolicitar }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-slate-900
        shadow-2xl
        p-5 sm:p-6
        text-white
        flex flex-col items-center
        transition-all duration-700 ease-out
        border border-gray-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        active:scale-95
        md:hover:scale-105
        md:hover:border-cyan-400
        shadow-[0_0_40px_rgba(56,189,248,0.25)]
      `}
    >

      <div
        className="
          absolute inset-0
          rounded-2xl
          bg-black
          [background-image:radial-gradient(#38bdf8_0.8px,transparent_0.8px)]
          [background-position:center]
          [background-size:16px_16px]
          opacity-30
        "
      />

      <div className="relative z-10 w-full flex flex-col items-center">

        {popular && (
          <span className="absolute -top-3 right-1 bg-yellow-400 text-black text-xs font-extrabold px-3 py-1 rounded-full shadow-lg uppercase">
            Más vendido
          </span>
        )}

        <h3 className="uppercase tracking-wide text-xs text-cyan-400 font-semibold">
          {tipo}
        </h3>

        <p className="text-3xl sm:text-4xl font-extrabold my-3">
          {velocidad}
        </p>

        <ul className="text-xs opacity-90 space-y-1 mb-5 text-left">
          {features.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>

        <button
          onClick={() => onSolicitar(`${tipo} - ${velocidad}`)}
          className="mt-auto bg-cyan-400 text-black font-bold px-6 py-2 rounded-full transition active:scale-95 md:hover:bg-white"
        >
          Solicitar
        </button>

      </div>
    </div>
  );
};

// ================= SECCIÓN =================

const Section = ({ title, items, onSolicitar }) => (
  <section className="mb-24">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">
      {title}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((plan, i) => (
        <Card
          key={i}
          index={i}
          velocidad={plan.velocidad}
          tipo={plan.tipo}
          features={plan.features}
          popular={plan.popular}
          onSolicitar={onSolicitar}
        />
      ))}
    </div>
  </section>
);

// ================= PAGE =================

const Planes = () => {

  const [openModal, setOpenModal] = useState(false);
  const [planSeleccionado, setPlanSeleccionado] = useState("");

  const abrirModal = (plan) => {
    setPlanSeleccionado(plan);
    setOpenModal(true);
  };

  return (

    <div className="relative min-h-screen bg-gradient-to-b from-black to-blue-950 py-16 md:py-24 px-6 overflow-hidden">

      <div className="container mx-auto relative z-10">

        {/* CABECERA */}
        <div className="relative flex flex-col items-center justify-center max-w-4xl mx-auto mb-10 md:mb-16">
          
          {/* TITULO */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight">
            Nuestros Planes de Internet
          </h1>

          {/* LOGO ABEJA */}
          <div className="mt-4 md:mt-0 md:absolute md:-right-10 lg:-right-24 md:top-0">
            <img
              src="/imgPrincipales/Logoabeja.png"
              alt="Logo Abeja"
              className="w-24 md:w-40 lg:w-48 h-auto animacion-flotar pointer-events-none drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            />
          </div>

        </div>

        <Section
          title="Planes Familiares"
          items={planes.familiares}
          onSolicitar={abrirModal}
        />

        <Section
          title="Planes Streaming"
          items={planes.streaming}
          onSolicitar={abrirModal}
        />

        <Section
          title="Planes Dedicados"
          items={planes.dedicados}
          onSolicitar={abrirModal}
        />

      </div>

      <ModalFormulario
        open={openModal}
        onClose={() => setOpenModal(false)}
        plan={planSeleccionado}
      />

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />

    </div>
  );
};

export default Planes;