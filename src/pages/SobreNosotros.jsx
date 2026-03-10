import React from "react";

const SobreNosotros = () => {
  return (
    // ================= SECCIÓN PRINCIPAL =================
    
    <section className="relative bg-neutral-900 py-24 px-6 text-white overflow-hidden">

      {/* ================= CONTENEDOR ================= */}
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">

        {/* ================= CABECERA ================= */}
        <div className="relative flex flex-col items-center justify-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
                Sobre Nosotros
            </h1>
            
            <div className="mt-6 md:mt-0 md:absolute md:-right-10 lg:-right-20 md:-top-5">
                <img 
                    src="/imgPrincipales/Logoabeja.png" 
                    alt="Logo Abeja" 
                    className="w-32 md:w-58 h-auto animacion-flotar pointer-events-none"
                />
            </div>
        </div>

        {/* ================= VESTEL ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/imgPrincipales/vest.jpg"
            className="rounded-xl shadow-lg"
            alt="Vestel"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              VESTEL
            </h2>
            <p className="text-gray-300">
              Es una empresa que se encuentra en constante mejoramiento,
              evolución y crecimiento, adaptándose al mercado cambiante,
              implementando tecnología de punta con el fin de dar mayor
              valor agregado a nuestros usuarios.
            </p>
          </div>
        </div>

        {/* ================= MISIÓN ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              MISIÓN
            </h2>
            <p className="text-gray-300">
              Somos una empresa que satisface de manera eficiente las
              necesidades de televisión por cable e internet, entregando
              soluciones integrales confiables e innovadoras, con vocación
              de servicio al cliente y responsabilidad social.
            </p>
          </div>

          <img
            src="/imgPrincipales/mision.jpg"
            className="rounded-xl shadow-lg"
            alt="Misión"
          />
        </div>

        {/* ================= VISIÓN ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/imgPrincipales/vision.jpg"
            className="rounded-xl shadow-lg"
            alt="Visión"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              VISIÓN
            </h2>
            <p className="text-gray-300">
              Comprendemos las necesidades y expectativas de nuestros usuarios
              en un ambiente de cooperación y trabajo en equipo que permite
              que Vestel sea líder en el sur de Casanare, prestando servicios
              de televisión por cable e internet con tecnología de punta.
            </p>
          </div>
        </div>

        {/* ================= PORTAFOLIO / VALORES ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              CONSTRUIMOS NUESTRO PORTAFOLIO PARA REPRESENTAR NUESTROS VALORES
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Comprendemos las necesidades y expectativas de nuestros
              usuarios en un ambiente de cooperación y trabajo en equipo
              que nos permite que Vestel sea líder en el sur de Casanare
              prestando servicios de televisión por cable e internet, apoyados
              con tecnología de punta, con precios equitativos, y reconocida
              por nuestro cumplimiento, eficacia y calidad de nuestros
              servicios.
            </p>
          </div>

          <img
            src="/imgPrincipales/valores.webp"
            className="rounded-xl shadow-lg"
            alt="Valores Vestel"
          />
        </div>

      </div>

      {/* ================= DESVANECIDO INFERIOR ================= */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-56
        bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent"
      />
    </section>
  );
};

export default SobreNosotros;