const AccesoBloqueado = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-900 to-blue-950 px-6 py-24">
      <div className="max-w-4xl mx-auto relative z-10 text-gray-200 space-y-10">

        {/* LEY 679  */}
        <div>
          <h1 className="text-3xl font-semibold text-amber-300 mb-4">
            Ley 679 de 2001
          </h1>

          <p className="text-sm text-gray-400 leading-relaxed">
            La página a la que intenta acceder se encuentra bloqueada por disposición del
            Ministerio de Tecnologías de la Información y las Comunicaciones, en cumplimiento
            de la Ley 679 de 2001, publicada en el Diario Oficial No. 44.509 del 4 de agosto de 2001.
          </p>

          <div className="mt-4 border-l-4 border-blue-500 bg-white/5 p-4 rounded-md text-sm italic text-gray-300">
            “Por medio de la cual se expide un estatuto para prevenir y contrarrestar
            la explotación, la pornografía y el turismo sexual con menores,
            en desarrollo del artículo 44 de la Constitución.”
          </div>
        </div>

        {/* ADVERTENCIA  */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">
            Advertencia: Páginas Online ilegales
          </h2>

          <p className="text-sm text-gray-400 mb-3">
            Esto ocurre cuando se intenta ingresar a páginas de apuestas ilegales en línea.
          </p>

          <p className="text-sm text-gray-400">
            Para su seguridad, consulte el listado de operadores autorizados por Coljuegos y
            reporte cualquier sitio sospechoso en{" "}
            <a
              href="https://www.coljuegos.gov.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              www.coljuegos.gov.co
            </a>
          </p>
        </div>

        {/* Ley 1753 */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">
            Ley 1753 de 2015 - Artículo 93
            <span className="block text-base font-normal text-gray-400">
              (Juegos novedosos)
            </span>
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            Conforme al Artículo 93 de la Ley 1753 de 2015 (y normas concordantes),
            Coljuegos y las autoridades competentes pueden disponer de alertas y bloqueos
            frente a sitios que operen juegos de suerte y azar no autorizados por Internet
            en el territorio colombiano.
          </p>

          <div className="border-l-4 border-blue-500 bg-white/5 p-4 rounded-md text-sm italic text-gray-300">
            “Los administradores del Monopolio, las autoridades de inspección,
            vigilancia y control y las autoridades de policía podrán hacer monitoreo
            a los canales, entidades financieras, páginas de internet y medios de
            cualquier forma sirvan a la explotación, operación, venta, pago, publicidad
            o comercialización de juegos de suerte y azar no autorizados, y ordenar
            las alertas y bloqueos correspondientes.”
          </div>
        </div>
      </div>

      {/* DESVANECIDO INFERIOR */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40
        bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />
    </section>
  );
};

export default AccesoBloqueado;
