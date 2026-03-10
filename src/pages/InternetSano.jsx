const InternetSano = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-900 to-blue-950 px-6 py-24">
      <div className="max-w-6xl mx-auto relative z-10 text-gray-200 space-y-12">

        {/* TÍTULO */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-semibold text-white">
            Internet Sano
          </h1>
          <p className="text-sm text-gray-400 italic">
            “Cero tolerancia con la explotación de menores de edad en redes electrónicas”
          </p>
        </div>

        {/* INTRO */}
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>
            Trabajamos por un mejor uso de la red. Vestel, en atención a la legislación
            vigente y acogiéndose a las disposiciones del Ministerio de Comunicaciones
            sobre Internet Sano (Ley 679 de 2001 y Decreto 1524 de 2004), ratifica su
            compromiso con la protección de los menores de edad.
          </p>

          <p>
            Se establecen normas de carácter preventivo y sancionatorio para prevenir,
            bloquear y denunciar la explotación, difusión y comercialización de material
            pornográfico o alusivo a actividades sexuales con menores de edad.
          </p>

          <p>
            Invitamos a toda la comunidad a denunciar y participar activamente en la
            prevención de estos delitos, promoviendo un uso responsable de Internet.
          </p>
        </div>

        {/* LEYES */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.icbf.gov.co/buscar?search=cargues%20avance%20docs%20decreto%201524%202002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Decreto 1524 de 2002
          </a>

          <a
            href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18309"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ley 679 de 2001
          </a>

          <a
            href="https://www.icbf.gov.co/buscar?search=ley%201336%202009"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ley 1336 de 2009
          </a>
        </div>

        {/* DENUNCIA */}
        <div className="space-y-4">
          <h2 className="text-2xl text-white font-semibold">
            ¿Cómo denunciar la pornografía infantil?
          </h2>

          <p className="text-sm text-gray-400">
            Para formular denuncias contra contenidos de pornografía infantil o páginas electrónicas en las que se ofrezcan servicios sexuales con menores de
            edad, existe una iniciativa ¡Te protejo: Canal de Denuncia Virtual- En TIC Confío! es la campaña del Ministerio de Comunicaciones para que todos los
            colombianos comprendamos el significado de la prevención de la pornografía infantil y juvenil en Internet.
          </p>

          <a
            href="https://www.enticconfio.gov.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-block"
          >
            enticconfio.gov.co
          </a>
        </div>

        {/* QUE HACE EL MINISTERIO */}
        <div className="space-y-4">
          <h2 className="text-2xl text-white font-semibold">
            ¿Qué hace el Ministerio de Comunicaciones con las denuncias?
          </h2>

          <p className="text-sm text-gray-400">
            Las denuncias recibidas por el Ministerio de Comunicaciones sobre páginas de pornografía con menores de edad en Internet, son enviadas a la Policía
            Nacional. Esta entidad adelanta el proceso de verificación, análisis e investigación de las URL y a su vez suministran al Ministerio de Comunicaciones
            administrativos exigiendo a los proveedores de Internet el bloqueo de estas
            un listado de URL clasificados como pornografía con menores de edad en Internet. El Ministerio con este listado, expide un acto administrativo
          </p>
        </div>

        {/* CONTACTOS */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Fiscalía General de la Nación",
              text: "Tel: 01 8000 912280\ncontacto@fiscalia.gov.co",
              label: "fiscalia.gov.co",
              link: "https://www.fiscalia.gov.co",
            },
            {
              title: "DIJIN – Delitos Informáticos",
              text: "PBX: 426 6900 Ext. 6301-6302\nadelinfo@dijin.policia.gov.co",
              label: "DIJIN",
              link: "https://www.policia.gov.co/dijin",
            },
            {
              title: "ICBF",
              text: "Tel: 01 8000 918080\nLínea 141",
              label: "icbf.gov.co",
              link: "https://www.icbf.gov.co",
            },
            {
              title: "MinTIC",
              text: "Tel: 01 8000 912667",
              label: "enticconfio.gov.co",
              link: "https://www.enticconfio.gov.co",
            },
            {
              title: "Centro Cibernético Policial",
              text: "CAI Virtual",
              label: "CAI Virtual",
              link: "https://caivirtual.policia.gov.co",
            },
            {
              title: "Personería Distrital",
              text: "Línea 143",
              label: "personeriabogota.gov.co",
              link: "https://www.personeriabogota.gov.co",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4"
            >
              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 whitespace-pre-line">
                {item.text}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-block text-sm"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* DESVANECIDO INFERIOR */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40
        bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />

      {/* ESTILO BOTONES */}
      <style jsx>{`
        .btn {
          padding: 0.5rem 1.25rem;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 0.375rem;
          font-size: 0.875rem;
          color: #e5e7eb;
          transition: all 0.2s ease;
        }
        .btn:hover {
          background: rgba(255,255,255,0.12);
        }
      `}</style>
    </section>
  );
};

export default InternetSano;
