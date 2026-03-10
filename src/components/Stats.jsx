import React, { useEffect, useRef, useState } from "react";

const canales = [
  "/canales/noticiasynovelas/Canal_RCN.png",
  "/canales/caracol.png",
  "/canales/peliculas/Cinecanal.webp",
  "/canales/TVAgro.png",
  "/canales/regionales/Logo canal6.png",
  "/canales/MTV.png",
  "/canales/infantiles/Disney_Jr.png",
  "/canales/Logo telenovelas.png",
  "/canales/pasiones.png",
  "/canales/ParamountNetwork.png",
];

const Stats = () => {
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedCanales = [...canales, ...canales];

  //  CALCULAR EL ANCHO REAL EN MARQUEE
  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 2;
      setTrackWidth(width);
    }
  }, []);

  //  PAUSAR ANIMACION  SOLO EN  DESKTOP
  useEffect(() => {
    if (window.innerWidth < 768) return; // CLAVE

    const el = trackRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // TAP PARA MOBILES  ( PAUSAR / REANUDAR )
  const handleTap = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsPaused((prev) => !prev);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#22365d] to-[#e9eefb] pt-2 pb-6 overflow-hidden">
      <div className="relative overflow-hidden w-full -mt-2">
        <div
          ref={trackRef}
          onClick={handleTap}
          className={`flex items-center w-max marquee-track gap-20 md:gap-40 ${
            isPaused ? "is-paused" : ""
          }`}
          style={{ "--marquee-width": `${trackWidth}px` }}
        >
          {duplicatedCanales.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[120px] select-none"
            >
              <img
                src={logo}
                alt="Canal"
                loading="lazy"
                className="h-8 md:h-14 object-contain opacity-90 hover:opacity-100 hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
