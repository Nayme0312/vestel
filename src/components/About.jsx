import { Link } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const About = () => {
  const { esNavidad } = useContext(ThemeContext);
  const videoRef = useRef(null);

  // Forzar reproducción en móviles que bloquean autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.muted = true;
        video.play().catch(() => {});
      }
    };

    // Intentar reproducir inmediatamente al montar
    playVideo();

    // Intentar reproducir cuando el video sea visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playVideo();
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    // Fallback: algunos móviles necesitan una interacción del usuario primero
    const onUserInteraction = () => {
      playVideo();
      document.removeEventListener("touchstart", onUserInteraction);
      document.removeEventListener("scroll", onUserInteraction);
      document.removeEventListener("click", onUserInteraction);
    };

    document.addEventListener("touchstart", onUserInteraction, { once: true });
    document.addEventListener("scroll", onUserInteraction, { once: true });
    document.addEventListener("click", onUserInteraction, { once: true });

    // Reintentar si el video se carga tarde
    video.addEventListener("loadeddata", playVideo);

    return () => {
      observer.disconnect();
      document.removeEventListener("touchstart", onUserInteraction);
      document.removeEventListener("scroll", onUserInteraction);
      document.removeEventListener("click", onUserInteraction);
      video.removeEventListener("loadeddata", playVideo);
    };
  }, []);

  return (
    <section className="relative bg-[#e8efff] py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-5/12 flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline=""
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/imgPrincipales/tecnicos-trabajando.mp4"
                  type="video/mp4"
                />
              </video>

              {/* OVERLAY (incluye el tinte que antes era opacity-90 en el video) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-white/10"></div>
            </motion.div>

            <p className="text-gray-700 mt-6 mb-4 text-center font-medium max-w-sm">
              Puede realizar un test de velocidad para comprobar la calidad de su conexión
            </p>

            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.speedtest.net/es"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white px-8 py-3 rounded-full font-bold
                         transition-all duration-300 shadow-lg text-center
                         ${
                           esNavidad
                             ? "bg-red-400 hover:bg-red-600"
                             : "bg-yellow-500 hover:bg-yellow-600"
                         }`}
            >
              Speed Test
            </motion.a>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-5/12 text-center lg:text-left z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Sobre Nosotros
            </h2>

            <div
              className={`w-16 h-1 mb-6 rounded-full mx-auto lg:mx-0
              ${esNavidad ? "bg-red-500" : "bg-yellow-500"}`}
            />

            <p className="text-gray-700 font-semibold mb-6">
              Vestel SAS: Innovación y compromiso con la tecnología
            </p>

            <ul className="space-y-4 mb-8 inline-block lg:block text-left">
              {[
                "Alta velocidad y estabilidad",
                "Atención al cliente 8:00 am / 5:30 pm",
                "Tecnología en fibra óptica",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: false }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span
                    className={
                      esNavidad ? "text-red-500" : "text-green-500"
                    }
                  >
                    
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/sobre-nosotros"
                className={`text-white px-10 py-3 rounded-full font-bold
                           transition-all duration-300 shadow-lg inline-block
                           ${
                             esNavidad
                               ? "bg-red-400 hover:bg-red-600"
                               : "bg-yellow-500 hover:bg-yellow-600"
                           }`}
              >
                Leer Más
              </Link>
            </motion.div>
          </motion.div>

          {/* ARBOL NAVIDAD */}
          {esNavidad && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute bottom-8 -right-10 md:right-0 lg:bottom-20 lg:right-10 opacity-40 lg:opacity-100 pointer-events-none"
            >
              <img
                src="/imgPrincipales/arbol.png"
                alt="Árbol de Navidad"
                className="w-40 md:w-64 lg:w-[380px] h-auto object-contain"
              />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default About;