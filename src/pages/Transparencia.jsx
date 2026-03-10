import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Transparencia = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const items = [
    {
      titulo: "Resolución CRC 6242",
      texto: "Resolución CRC 6242 de 2021",
      pdf: "/pdfs/Resolucion-CRC-6242-de-2021.pdf",
    },
   
    {
      titulo: "Resolución CRC 5111",
      texto: "articles-62266_doc_norma",
      pdf: "/pdfs/articles-62266_doc_norma.pdf",
    },
    {
      titulo: "Resolución 5050 de 2016",
      texto: "crc_5050_2016",
      pdf: "/pdfs/crc_5050_2016.pdf",
    },
    {
      titulo: "Contenido Bloqueado",
      texto: "Contenido Bloqueado",
      route: "/acceso-bloqueado",
      bloqueado: true,
    },

    
     
    {
      titulo: "Internet sano",
      texto: "Internet sano",
      route: "/internetSano",
      bloqueado: true,
    },
     {
      titulo: "Seguridad Red Fraudes",
      isMulti: true,
      subOptions: [
        { label: "Protección de fraudes", route: "/SeguridadRedFraudes" },
        { label: "Seguridad en la Red", route: "/seguridad-red" }
      ]
    },
    {
      titulo: "Protección al usuario",
      texto: "Protección al usuario",
      route: "/Proteccionusuario",
      bloqueado: true,
    },
    {
      titulo: "Canales de Denuncia",
      texto: "Links de Denuncia",
      route: "/Canalesdenuncia",
      bloqueado: true,
    },
    {
      titulo: "Protección de Red y fraude",
      texto: "Protección de Red y fraude",
      route: "/Proteccionredfraude",
      bloqueado: true,
    },
 
  ];

  // PROTECION INFANTIL 

  
  const proteccionInfantil = [
    {
      titulo: "Decreto 1524 de 2022",
      texto: "Decreto 1524 de 2022",
      pdf: "/pdfs/ley_679_2001.pdf",
    },
    {
      titulo: "Ley 679 de 2001",
      texto: "Ley 679 de 2001",
      pdf: "/pdfs/articles-62266_doc_norma.pdf",
    },
    {
      titulo: "Ley 1336 de 2009",
      texto: "Ley 1336 de 2009",
      pdf: "/pdfs/Ley_1336_de_2009.pdf",
    },
    {
      titulo: "Contra la pornografía infantil",
      texto: "Contra la pornografía infantil",
      route: "/ContraPornografiaInfantil",
      bloqueado: true,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black to-blue-950 px-6 py-20 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* CABECERA CON EL LOGO  */}
        <div className="relative flex flex-col items-center justify-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl font-bold text-yellow-400 text-center leading-tight">
            Transparencia y Normatividad
          </h1>

          {/* LOGO MANO */}
          <div className="mt-6 md:mt-0 md:absolute md:-right-20 lg:-right-32 md:-top-5">
            <img 
              src="/imgPrincipales/Logoabeja.png" 
              alt="Logo Abeja" 
              className="w-28 md:w-40 lg:w-48 h-auto animacion-flotar pointer-events-none drop-shadow-2xl"
            />
          </div>
        </div>

        {/* PRIMER ACORDEÓN */}
        <div className="bg-white rounded-xl shadow-xl border divide-y overflow-hidden max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div key={index}>
              <div
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold text-gray-800">
                  {item.titulo}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <div className="p-4 bg-gray-50 flex flex-col gap-3">
                  {item.isMulti ? (
                    item.subOptions.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => navigate(opt.route)}
                        className="text-blue-600 hover:underline font-medium text-left"
                      >
                        {opt.label}
                      </button>
                    ))
                  ) : !item.bloqueado ? (
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.texto}
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate(item.route)}
                      className="text-blue-600 hover:underline font-medium text-left"
                    >
                      {item.texto}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TÍTULO PROTECION IFANTIL */}
        <h2 className="text-1xl font-bold text-white mt-4 mb-3 max-w-3xl mx-auto text-left">
          Protección infantil
        </h2>

        {/* SEGUNDO ACORDEÓN */}
        <div className="bg-white rounded-xl shadow-xl border divide-y overflow-hidden max-w-3xl mx-auto">
          {proteccionInfantil.map((item, index) => (
            <div key={index}>
              <div
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100"
                onClick={() =>
                  setOpenIndex(
                    openIndex === `infantil-${index}`
                      ? null
                      : `infantil-${index}`
                  )
                }
              >
                <span className="font-semibold text-gray-800">
                  {item.titulo}
                </span>
                <span className="text-xl">
                  {openIndex === `infantil-${index}` ? "−" : "+"}
                </span>
              </div>

              {openIndex === `infantil-${index}` && (
                <div className="p-4 bg-gray-50 flex flex-col gap-3">
                  {!item.bloqueado ? (
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.texto}
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate(item.route)}
                      className="text-blue-600 hover:underline font-medium text-left"
                    >
                      {item.texto}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />
    </section>
  );
};

export default Transparencia;