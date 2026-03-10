import { useState } from "react";

const AccordionItem = ({ title, children, isPdf, pdfPath, isExternal, url, isInternalLink, route }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-[#111] border border-gray-800 p-3 rounded-lg cursor-pointer hover:border-blue-500 transition-all shadow-lg"
      >
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        <span className="text-gray-500 text-lg font-light">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 text-gray-400 text-xs bg-black/40 border-x border-b border-gray-800 rounded-b-lg -mt-1 ml-1 mr-1 animate-fadeIn">
          {children}
          
          {isPdf && (
            <div className="mt-3">
              <a 
                href={pdfPath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-transparent border border-gray-600 hover:border-blue-500 text-gray-300 px-4 py-1.5 rounded text-[10px] uppercase tracking-widest transition-colors"
              >
                Descargar PDF
              </a>
            </div>
          )}

          {isExternal && (
            <div className="mt-2 text-center">
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 font-bold text-xs uppercase tracking-tighter"
              >
                MINTIC
              </a>
            </div>
          )}

          {isInternalLink && (
            <div className="mt-3">
              <a 
                href={route} 
                className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-[10px] uppercase tracking-widest transition-colors"
              >
                Ir a la plataforma
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Proteccionusuario = () => {
  return (
    
    <div className="relative bg-black min-h-screen overflow-hidden font-sans">
      
      {/* FADE INFERIOR*/}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10 pointer-events-none"></div>

      {/* CONTENIDO */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-gray-400">
        
        <header className="mb-16 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest">
            Control Parental, Resoluciones y Decretos
          </h1>
        </header>

        <section className="mb-20 max-w-4xl">
          <div className="mb-10">
            <h2 className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Protección Al Usuario</h2>
            <p className="text-xs leading-relaxed text-gray-500">
              Protección al consumidor es el conjunto de normas que regulan las relaciones de consumo que nacen en la cadena de comercialización de bienes y servicios entre productores, proveedores y expendedores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold text-gray-200 mb-3">Protección Al Consumidor</h2>
              <p className="text-xs leading-relaxed">
                Protección al consumidor es el conjunto de normas que regulan las relaciones de consumo que nacen en la cadena de comercialización de bienes y servicios entre productores, proveedores y expendedores.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-200 mt-8 mb-3">Protección Al Consumidor</h2>
              <p className="text-xs leading-relaxed">
                Protección al consumidor es el conjunto de normas que regulan las relaciones de consumo que nacen en la cadena de comercialización de bienes y servicios entre productores, proveedores y expendedores.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-200 mb-3">Control Parental</h2>
              <p className="text-xs leading-relaxed">
                Actualmente los dispositivos electrónicos cuentan con aplicaciones y sistemas de control parental, los cuales son de gran utilidad, pues les permiten a los padres de familia conocer las actividades que realizan los niños y adolescentes mientras están en Internet.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-200 mt-8 mb-3">Cómo Denunciar</h2>
              <p className="text-xs leading-relaxed">
                Conozca cómo proteger a sus hijos para no ser víctimas de la pornografía y conozca nuestra gestión contra este delito y cómo denunciar.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-12 mb-10">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <AccordionItem title="RESOLUCIÓN NO. 5397 DE 2018" isPdf pdfPath="/pdfs/resolucion_5397_2018.pdf" />
            <AccordionItem title="RESOLUCIÓN NO. 5344 DE 2018" isPdf pdfPath="/pdfs/resolucion_5344_2018.pdf" />
            <AccordionItem title="RESOLUCIÓN NO. 5337 DE 2018" isPdf pdfPath="/pdfs/resolucion_5337_2018.pdf" />
            <AccordionItem title="RESOLUCIÓN NO. 5322 DE 2018" isPdf pdfPath="/pdfs/resolucion_5322_2018.pdf" />
            <AccordionItem title="DECRETO 90 DEL 18 DE ENERO DE 2018" isPdf pdfPath="/pdfs/decreto_90_2018.pdf" />
            <AccordionItem title="RESOLUCIÓN NO. 5321 DE 2018" isPdf pdfPath="/pdfs/resolucion_5321_2018.pdf" />
            <AccordionItem title="RESOLUCIÓN NO. 5299 DE 2018" isPdf pdfPath="/pdfs/resolucion_5299_2018.pdf" />
            <AccordionItem title="RESOLUCIÓN NO. 5300 DE 2018" isPdf pdfPath="/pdfs/resolucion_5300_2018.pdf" />
          </div>

          {/* COLUMNA DERECHA */}
          <div>
            <AccordionItem title="RÉGIMEN DE PROTECCIÓN AL USUARIO" isPdf pdfPath="/pdfs/regimen_proteccion.pdf" />
            <AccordionItem title="LEY 1480 DE 2011" isPdf pdfPath="/pdfs/ley_1480_2011.pdf" />
            <AccordionItem title="HABEAS DATA" isPdf pdfPath="/pdfs/habeas_data.pdf" />
            <AccordionItem title="LEY 679 DE 2001" isPdf pdfPath="/pdfs/ley_679_2001.pdf" />
            <AccordionItem title="CONTRATO DE PRESTACIÓN DE SERVICIOS" isPdf pdfPath="/pdfs/contrato_prestacion.pdf" />
            
            <AccordionItem 
                title="PLATAFORMA PQRS VIRTUAL" 
                isInternalLink={true} 
                route="/pqr"
            >
                Haga clic en el siguiente botón para radicar sus Peticiones, Quejas, Reclamos o Sugerencias a través de nuestra plataforma virtual.
            </AccordionItem>

            <AccordionItem title="Control Parental En Internet">
              Actualmente los dispositivos electrónicos cuentan con aplicaciones y sistemas de control parental, los cuales son de gran utilidad, pues les permiten a los padres de familia conocer las actividades que realizan los niños y adolescentes mientras están en Internet.
            </AccordionItem>
            
            <AccordionItem 
              title="Link De La Herramienta" 
              isExternal 
              url="https://www.mintic.gov.co/portal/inicio/Sala-de-Prensa/Noticias/53254:Usa-las-herramientas-de-control-parental-en-estas-vacaciones"
            >
              Usa las herramientas de control parental en estas vacaciones:
            </AccordionItem>
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Proteccionusuario;