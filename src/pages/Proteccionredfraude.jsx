import { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-[#111] border border-gray-800 p-3 rounded-md cursor-pointer hover:border-blue-500 transition-all shadow-md"
      >
        <span className="text-gray-400 text-xs font-medium">{title}</span>
        <span className="text-gray-500 text-lg font-light">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 text-gray-400 text-xs bg-black/40 border-x border-b border-gray-800 rounded-b-md -mt-1 ml-1 mr-1 animate-fadeIn leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const Proteccionredfraude = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden font-sans">
      
      {/* FADE INFERIOR*/}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10 pointer-events-none"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20 text-gray-400">
        
        {/* TÍTULO PRINCIPAL */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-white text-center mb-16 tracking-tight">
            Seguridad en la red y protección de fraudes
          </h1>
        </header>

        {/* 1. CONCEPTOS GENERALES */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">Conceptos generales sobre seguridad</h2>
          <div className="space-y-1">
            <AccordionItem title="Integridad">La información producida es de calidad, porque no puede ser modificada por quien no está autorizado   .</AccordionItem>
            <AccordionItem title="Confidencialidad">La información solo debe ser legible para los autorizados, la misma debe llegar a destino con la cantidad y calidad con que fue prevista.</AccordionItem>
            <AccordionItem title="Disponibilidad">La información debe estar disponible cuando se la necesita.</AccordionItem>
            <AccordionItem title="Irrefutabilidad / (No-Rechazo o No Repudio)">Que no se pueda negar la autoría de quien provee de dicha información.</AccordionItem>
            <AccordionItem title="Activo">Recursos con los que cuenta la empresa y que tiene valor, pueden ser tangibles (servidores, desktop, equipos de comunicación) o intangibles (información, políticas, normas, procedimientos).</AccordionItem>
            <AccordionItem title="Vulnerabilidad">Exposición a un riesgo, fallo o hueco de seguridad detectado en algún programa o sistema informático.</AccordionItem>
            <AccordionItem title="Amenaza">Cualquier situación o evento posible con potencial de daño, que pueda presentarse en un sistema.</AccordionItem>
            <AccordionItem title="Riesgo">Es un hecho potencial, que en el evento de ocurrir puede impactar negativamente la seguridad, los costos, la programación o el alcance de un proceso de negocio o de un proyecto.</AccordionItem>
            <AccordionItem title="Correo electrónico">El correo electrónico es un servicio de red que permite que los usuarios envíen y reciban mensajes, incluyendo textos, imágenes, videos, audio, programas, etc., mediante sistemas de comunicación electrónicos.</AccordionItem>
          </div>
        </section>

        {/* 2. MEDIOS PARA PROTECCIÓN */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">Medios para protección</h2>
          <div className="space-y-1">
            <AccordionItem title="Firewall en la red">Elemento de protección que sirve para filtrar paquetes (entrada o salida) de un sistema conectado a una red, que puede ser Internet o una intranet. Existen firewall de software o hardware. Este filtrado se hace a través de reglas, donde es posible bloquear direcciones (URL), puertos, protocolos, entre otros.</AccordionItem>
            <AccordionItem title="Anti-virus en tu computador">Programa capaz de detectar, controlar y eliminar virus informáticos y algunos códigos maliciosos (Troyanos, Works, Rootkits, Adware, Backdoor, entre otros).</AccordionItem>
            <AccordionItem title="Anti-spam">Programas capaces de detectar, controlar y eliminar correos spam.</AccordionItem>
            <AccordionItem title="Criptografía">Es el arte de cifrar y descifrar información con claves secretas, donde los mensajes o archivos sólo puedan ser leídos por las personas a quienes van dirigidos, evitando la interceptación de éstos.</AccordionItem>
          </div>
        </section>

        {/* 3. AMENAZAS A LA SEGURIDAD */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">Amenazas a la seguridad</h2>
          <div className="space-y-1">
            <AccordionItem title="Correo electrónico">Siendo esta una de las formas más extendidas de propagación de virus y gusanos, el cliente debe tomar las precauciones necesarias como:
                <li>Nunca abra un archivo adjunto sin escanearlo antes con antivirus.</li>
                <li>Instale preferiblemente un antivirus que disponga de un complemento / plug – in de outlook express o que pueda analizar tráfico SMTP/POP/NNTP.</li>
                <li>Evite abrir correos de los cuales no conozca la procedencia.</li>
            </AccordionItem>
            <AccordionItem title="Spam">Es el envío de correos electrónicos masivamente a personas, que incluyen temas de pornografía, bromas, publicidad, venta de productos, los cuales el destinatario no ha solicitado.</AccordionItem>
            <AccordionItem title="Suplantación de identidad">Es la forma de robar información personal haciéndose pasar por alguien.</AccordionItem>
            <AccordionItem title="Ingeniería social">Busca aprovecharse de la ingenuidad de la gente para obtener información confidencial a través de la manipulación de usuarios, la más conocida es la estafa nigeriana, la cual consiste en recibir correos con promesas de entregar herencias a cambio de proporcionar datos de cuentas bancarias y contraseñas.</AccordionItem>
            <AccordionItem title="Código malicioso">Descripción de códigos maliciosos...</AccordionItem>
          </div>
        </section>

        {/* 4. FRAUDES QUE SE PUEDEN PRESENTAR */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">Fraudes que se pueden presentar</h2>
          <div className="space-y-1">
            <AccordionItem title="Phishing">Descripción detallada del Phishing...</AccordionItem>
            <AccordionItem title="Fraudes a los que se expone el usuario de una cuenta de correo">Descripción de los fraudes...</AccordionItem>
          </div>
        </section>

        {/* 5. CONTROL PARENTAL (TEXTO) */}
        <section className="mb-16 border-t border-gray-900 pt-12">
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter">Control Parental</h2>
          <p className="text-sm leading-relaxed mb-6">
            Actualmente los dispositivos electrónicos cuentan con aplicaciones y sistemas de control parental, los cuales son de gran utilidad durante las vacaciones, pues les permiten a los padres de familia conocer sobre las actividades que realizan los niños, niñas y adolescentes mientras están en Internet.
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
            Conozca cómo proteger a sus hijos para no ser víctimas de la Pornografía e Infórmese acerca de nuestra gestión contra este delito y cómo denunciar.
          </p>
        </section>

        {/* 6. DENUNCIA PORNOGRAFÍA INFANTIL */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">¿Dónde denunciar contenidos de pornografía infantil?</h2>
          <p className="text-xs mb-8">En los siguientes lugares se pueden realizar denuncias relacionadas con sitios y contenidos de pornografía infantil, así como páginas web que ofrezcan servicios sexuales con niños:</p>
          
          <div className="space-y-8 text-xs">
            <div>
              <p className="font-bold text-gray-300">• Ministerio de las tecnologías de la información y las comunicaciones</p>
              <a href="#" className="text-blue-500 hover:underline ml-4">MINTIC</a>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-gray-300">• Instituto colombiano de bienestar familiar</p>
              <div className="ml-4 space-y-1">
                <p>Línea gratuita nacional ICBF: (57 1) 01 8000 91 80 80. Disponible de lunes a domingo las 24 horas.</p>
                <p>Línea de prevención abuso sexual: (57 1) 01 8000 11 24 40. Disponible de lunes a domingo las 24 horas.</p>
                <p className="font-semibold mt-2">Canales de atención en línea:</p>
                <p>Chat ICBF y llamada en línea disponibles de lunes a domingo las 24 horas.</p>
                <p>Videollamada disponible de lunes a viernes de 7:00 am a 7:00 pm en jornada continua.</p>
                <p>Correo de atención al ciudadano.</p>
                <a href="https://www.icbf.gov.co" target="_blank" className="text-blue-500 hover:underline block mt-1">WWW.ICBF.GOV.CO</a>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-300">• Te Protejo</p>
              <div className="ml-4">
                <a href="https://teprotejo.org" target="_blank" className="text-blue-500 hover:underline">TEPROTEJO.ORG</a>
                <p className="mt-1">O descarga el app en las tiendas iOS o Android.</p>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-300">• Fiscalía General de la Nación</p>
              <div className="ml-4">
                <p>Teléfono: 01 800 0912280</p>
                <a href="https://www.fiscalia.gov.co" target="_blank" className="text-blue-500 hover:underline">FISCALIA.GOV.CO</a>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-300">• Dirección central de policía judicial – DIJIN</p>
              <div className="ml-4">
                <p>Grupo investigativo delitos informáticos</p>
                <p>Carrera 77A # 45-61 barrio Modelia</p>
                <p>Teléfonos: PBX: 426 6900 ext. 6301-6302</p>
                <p>Directo: 4266300</p>
                <a href="#" className="text-blue-500 hover:underline">DIJIN</a>
              </div>
            </div>

            <div className="flex flex-col gap-2 font-bold text-gray-300">
              <p>• PERSONERÍA</p>
              <p>• CENTRO CIBERNÉTICO POLICIAL</p>
            </div>
          </div>
        </section>

        {/* 7. CONTROL PARENTAL - HERRAMIENTAS */}
        <section className="mb-20">
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">CONTROL PARENTAL</h2>
          <p className="text-xs mb-6 text-gray-500">Las siguientes son algunas aplicaciones que puede utilizar para el control del uso del internet por parte de sus hijos.</p>
          
          <div className="space-y-4 text-xs font-bold text-gray-300">
            <p>NET NANNY</p>
            <p>OPEN DNS</p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-500 hover:underline uppercase">HERRAMIENTA</a>
              <a href="#" className="text-blue-500 hover:underline uppercase">MINTIC</a>
            </div>
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

export default Proteccionredfraude;