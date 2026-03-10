import React from "react";

const CanalCard = ({ title, description, url }) => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-2xl font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-xs text-gray-400 mb-4 leading-relaxed min-h-[40px]">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#a88d32] hover:bg-[#8e772a] text-black text-[10px] font-bold py-2 px-6 rounded transition-colors uppercase tracking-widest"
      >
        Ir al sitio
      </a>
    </div>
  );
};

const Canalesdenuncia = () => {
  const canales = [
    {
      title: "Ministerio TIC",
      description: "Denuncias relacionadas con servicios de telecomunicaciones y bloqueo de páginas ilegales.",
      url: "https://www.mintic.gov.co/portal/inicio/"
    },
    {
      title: "SIC",
      description: "Protección de datos personales, fraudes en línea y quejas por incumplimientos de habeas data.",
      url: "https://sedeelectronica.sic.gov.co/"
  },
    {
      title: "CRC",
      description: "Quejas relacionadas con operadores de telecomunicaciones y servicios de Internet.",
      url: "https://www.crcom.gov.co/es" 
    },
    {
      title: "CAI Virtual Policía",
      description: "Denuncias de delitos informáticos, grooming, pornografía infantil y fraudes en línea.",
      url: "https://caivirtual.policia.gov.co/" 
    },
    {
      title: "Fiscalía General",
      description: "Canales oficiales para interponer denuncias judiciales por delitos cibernéticos.",
      url: "https://www.fiscalia.gov.co/colombia/" 
    },
    {
      title: "ICBF",
      description: "Protección de menores de edad en casos de riesgos en línea y violencia digital.",
      url: "https://www.icbf.gov.co/" 
    }
  ];

  return (
    <div className="relative bg-black min-h-screen overflow-hidden font-sans">
      
      {/* FADE INFERIOR  */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10 pointer-events-none"></div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20">
        
        {/* ENCABEZADO  */}
        <header className="bg-[#111] border border-gray-800 p-10 rounded-lg text-center mb-20 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
            Canales de denuncia
          </h1>
          <p className="text-gray-400 text-sm max-w-3xl mx-auto">
            Si eres víctima de un delito informático o encuentras contenido ilegal en Internet, puedes acudir a los siguientes entes oficiales de control en Colombia.
          </p>
        </header>

        {/* REJILLA DE  CANALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 px-4">
          {canales.map((canal, index) => (
            <CanalCard 
              key={index}
              title={canal.title}
              description={canal.description}
              url={canal.url}
            />
          ))}
        </div>

        {/* NOTA  */}
        <footer className="mt-24 border-t border-gray-900 pt-8">
          <p className="text-[10px] text-gray-500 italic italic">
            Recuerda: las denuncias son confidenciales y se atienden únicamente por las autoridades competentes.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Canalesdenuncia;