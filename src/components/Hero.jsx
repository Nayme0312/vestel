import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CambioClave from "./CambioClave";
import { ThemeContext } from "../context/ThemeContext";
import CoberturaModal from "./CoberturaModal";

// ── Animación de entrada por palabra ─────────────────
const titleVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};
// ─────────────────────────────────────────────────────

const Hero = () => {
  const [animarAbeja, setAnimarAbeja] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setAnimarAbeja(true), 900);
    return () => clearTimeout(id);
  }, []);

  const { esNavidad } = useContext(ThemeContext);

  const logoImg = esNavidad
    ? "/imgPrincipales/logomanavi.png"
    : "/imgPrincipales/Logoma.png";

  const fondoImg = esNavidad
    ? "/imgPrincipales/navidad3.png"
    : "/imgPrincipales/fondo1.webp";

  const estiloBotonPrincipal = esNavidad
    ? "bg-red-400 text-white w-40 py-2 rounded-full font-bold text-sm shadow-lg transition flex items-center justify-center gap-2"
    : "bg-yellow-500 text-black w-40 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2";

  return (
    <>
      <section className="relative h-[480px] bg-slate-900 text-white overflow-hidden">

        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${fondoImg}')` }}
        >
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#22365d]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-xl">

            {/* TÍTULO */}
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 relative break-words"
            >
                  <motion.span
                    variants={wordVariants}
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0px 0px 6px rgba(56,189,248,0.35)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block cursor-default relative"
                  >
                    Conexión

                    {esNavidad && (
                      <img
                        src="/imgPrincipales/gorro1.png"
                        alt="gorrito"
                        className="absolute -top-1 -left-5 w-14 rotate-[-10deg]"
                      />
                    )}
                  </motion.span>

              {" "}

              <motion.span
                variants={wordVariants}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 6px rgba(56,189,248,0.35)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block cursor-default"
              >
                Rápida
              </motion.span>

              {" "}

              <motion.span
                variants={wordVariants}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 6px rgba(56,189,248,0.35)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block cursor-default"
              >
                y
              </motion.span>

              {" "}

              <motion.span
                variants={wordVariants}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 6px rgba(56,189,248,0.35)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block cursor-default"
              >
                Confiable
              </motion.span>
            </motion.h1>

            {/* TEXTO PEQUEÑO (zoom) */}
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="text-sm sm:text-base md:text-xl mb-8 opacity-90 max-w-md"
            >
              Internet y televisión de alta calidad para hogares y empresas.
            </motion.p>

            <div className="flex flex-wrap gap-3 mt-4">
              <div className="relative">
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className={estiloBotonPrincipal}
                >
                  SERVICIOS
                  <svg
                    className={`w-3 h-3 transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {submenuOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-[#22365d] rounded-lg shadow-2xl z-50 border border-white/10 text-sm">
                    <li>
                      <Link
                        to="/planes"
                        onClick={() => setSubmenuOpen(false)}
                        className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
                      >
                        Planes de Internet
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/canales"
                        onClick={() => setSubmenuOpen(false)}
                        className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
                      >
                        Television digital
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <button
                onClick={() => setModalAbierto(true)}
                className={estiloBotonPrincipal}
              >
                COBERTURA
              </button>

              <CambioClave />
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 translate-x-[18%] translate-y-[10%] sm:translate-x-[20%] sm:translate-y-[5%] z-10 pointer-events-none">
          <img
            src={logoImg}
            alt="Logo Vestel"
            className={`w-[220px] sm:w-[320px] lg:w-[450px] transition-all duration-1000 ${
              animarAbeja ? "opacity-100 translate-y-0 animacion-flotar" : "opacity-0 translate-y-10"
            }`}
          />
        </div>
      </section>

      <CoberturaModal
        abierto={modalAbierto}
        cerrar={() => setModalAbierto(false)}
      />
    </>
  );
};

export default Hero;