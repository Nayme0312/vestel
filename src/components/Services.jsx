import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";
import { FaGlobeAmericas, FaTv, FaCode } from "react-icons/fa";

const services = [
  {
    id: "internet",
    title: "Internet de Alta Velocidad",
    icon: FaGlobeAmericas,
    path: "/planes",
    showLink: true,
    description:
      "Conexión por fibra óptica con alta velocidad y estabilidad, ideal para trabajo, estudio, streaming y gaming sin interrupciones.",
  },
  {
    id: "tv",
    title: "Televisión Digital",
    icon: FaTv,
    path: "/canales",
    showLink: true,
    description:
      "Disfruta de una amplia variedad de canales regionales, deportivos, infantiles y de entretenimiento en alta calidad.",
  },
  {
    id: "hosting",
    title: "Desarrollo Web y Hosting",
    icon: FaCode,
    showLink: false,
    christmas: true,
    description:
      "Diseños, desarrollo y alojamiento de sitios web modernos, seguros y optimizados para tu negocio o emprendimiento.",
  },
];

const Services = () => {
  const { esNavidad } = useContext(ThemeContext);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#e9eefb] via-[#e8eefbb7] to-[#e8efff] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">

        {/* HEADER */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative inline-block mb-8 md:mb-12"
        >
          {esNavidad && (
            <>
              <img
                src="/imgPrincipales/campanas.png"
                className="absolute -top-15 left-0 w-10 md:w-24"
                alt="Campana"
              />
              <img
                src="/imgPrincipales/campanas.png"
                className="absolute -top-15 right-0 w-10 md:w-24"
                alt="Campana"
              />
            </>
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Nuestros Servicios
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Soluciones confiables de Internet, televisión y desarrollo web
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 60 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                className="relative bg-white p-6 md:p-10 rounded-xl shadow-lg
                           hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]
                           flex flex-col justify-between group"
              >
                {esNavidad && s.christmas && (
                  <img
                    src="/imgPrincipales/gorro-navidad.png"
                    className="absolute -top-4 -right-4 w-12 md:-top-6 md:-right-6 md:w-16 rotate-12"
                    alt="Gorro navidad"
                  />
                )}

                <div>
                  <div className="flex justify-center mb-6">
                    <motion.div
                      animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="bg-blue-100 p-5 rounded-full
                                 transition duration-300
                                 group-hover:bg-blue-600"
                    >
                      <Icon
                        className="text-3xl md:text-4xl text-blue-700
                                   transition duration-300
                                   group-hover:text-white"
                      />
                    </motion.div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">
                    {s.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-500 mb-6">
                    {s.description}
                  </p>
                </div>

                {s.showLink && (
                  <div>
                    <Link
                      to={s.path}
                      className={`w-full sm:w-auto px-6 py-2.5 rounded font-bold inline-block transition
                      ${
                        esNavidad
                          ? "bg-red-400 hover:bg-red-500 text-white"
                          : "bg-yellow-500 hover:bg-yellow-600 text-white"
                      }`}
                    >
                      Ver Más
                    </Link>
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;