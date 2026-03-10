import { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-[#111] border border-gray-800 p-4 rounded-lg cursor-pointer hover:border-blue-500 transition-all shadow-md"
      >
        <span className="text-gray-300 font-medium">{title}</span>
        <span className="text-gray-500 text-xl font-light">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 text-gray-400 text-sm bg-black/40 border-x border-b border-gray-800 rounded-b-lg -mt-1 ml-1 mr-1 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const SeguridadRed = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden font-sans">
      
      {/* FADE INFERIOR  */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10 pointer-events-none"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20 text-gray-300">
        
        {/* ENCABEZADO PRINCIPAL */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Seguridad en la Red
          </h1>
          <p className="text-white italic text-lg">
            Todo lo que necesita saber para evitar amenazas en la red, y llevar a cabo una navegación segura
          </p>
        </header>

        {/* SECCION: TIPO DE AMENAZAS */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Tipos de amenazas en la red
          </h2>
          <p className="mb-8">
            Para <span className="text-white font-bold">Vestal</span> su seguridad en la red es muy importante, por tal razón en este documento encontrará información de su interés para una navegación segura:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <AccordionItem title="Malware">
              Es un término general que se utiliza para referirse a distintas formas de
              software hostil, intrusivo o molesto. El software malintencionado o
              malware es un software creado por hackers para perturbar las
              operaciones de una computadora, obtener información
              confidencial o acceder a sistemas informáticos privados. El malware
              incluye virus informáticos, gusanos, troyanos, spyware, adware, la
              mayoría de rootkits y otros programas malintencionados.
            </AccordionItem>
            <AccordionItem title="Pharming">
              Es una forma de ataque cuyo objetivo es redireccionar el tráfico de un sitio
              web hacia una página fraudulenta. El término “pharming” es un neologismo
              formado por la unión de las palabras inglesas “phishing” y “farming”. El
              phishing es una técnica de ingeniería social que pretende obtener datos de
              acceso, como nombres de usuarios y contraseñas. Tanto el pharming como el
              phishing se han utilizado en los últimos años con el fin de adquirir
              información que permita el robo de identidades online. El pharming es ya un
              problema grave para las empresas de comercio electrónico y banca
              electrónica.
            </AccordionItem>
            <AccordionItem title="Spam">
              Consiste en el uso de sistemas de mensajes electrónicos para enviar de forma
              indiscriminada un gran número de mensajes no solicitados. Aunque la forma
              más conocida de spam es el de correo electrónico, el término se aplica
              también a abusos similares en otros medios: spam de mensajes instantáneos,
              spam de grupos de noticias de Usenet, spam de motores de búsqueda en la
              web, spam en blogs, spam en wikis, spam en anuncios clasificados de
              Internet, spam de mensajes de teléfonos móviles, spam en foros de Internet,
              transmisiones fraudulentas por fax, spam en redes sociales, publicidad en
              televisión y spam en redes de uso compartido de archivos.
            </AccordionItem>
            <AccordionItem title="Pishing">
              Consiste en el intento de adquirir información (y, en ocasiones, también de
              dinero, aunque sea de forma indirecta), como nombres de usuarios,
              contraseñas y datos de tarjetas de crédito haciéndose pasar por una entidad
              de confianza en una comunicación electrónica. Los correos electrónicos de
              phishing pueden contener enlaces a páginas web infectadas con malware. La
              forma más habitual de phishing utiliza mensajes instantáneos o correos
              electrónicos fraudulentos en los que se pide a los usuarios que introduzcan
              sus datos en una página web falsa que es casi idéntica a la página auténtica.
            </AccordionItem>
            <AccordionItem title="Spyware">
              Es un tipo de malware (software malintencionado) que se instala en las
              computadoras para obtener información sobre los usuarios sin que éstos lo
              sepan. El spyware suele estar oculto al usuario y puede ser difícil de detectar.
              Algunos spywares, como los keyloggers —registradores de teclas—, pueden
              ser instalados de forma intencionada por el propietario de una computadora
              de uso común, corporativo o público para controlar a los usuarios.
            </AccordionItem>
          </div>
        </section>

        {/* SECCION: RECOMENDACIONES */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Recomendaciones de Seguridad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <AccordionItem title="Pornografía Infantil">
              Evite Alojar, publicar o trasmitir información, mensajes, gráficos, dibujos,
              archivos de sonido, imágenes, fotografías, grabaciones o software que en
              forma indirecta o directa se encuentren actividades sexuales con
              menores de edad, en los términos de la legislación internacional o
              nacional, tales como la Ley 679 de 2001 y el Decreto 1524 de 2002.
            </AccordionItem>
            <AccordionItem title="Control de Spam y Hoax">
              <ul className="list-disc pl-4 space-y-2">
                <li>Nunca hacer click en enlaces dentro del correo electrónico aun si parecen legítimos.</li>
                <li>Para los sitios que indican ser seguros, revise su certificado SSL.</li>
                <li>No reenvié los correos cadenas para evitar congestiones y robo de información.</li>
              </ul>
            </AccordionItem>
            <AccordionItem title="Control de virus y códigos maliciosos">
              Mantenga siempre un antivirus actualizado, use anti-spyware y bloqueadores de
              pop-up. Evite visitar páginas no confiables o instalar software de dudosa
              procedencia. Asegúrese de aplicar actualizaciones en sistemas operativos y navegadores.
            </AccordionItem>
            <AccordionItem title="Control de la Ingeniería social">
              <ul className="list-disc pl-4 space-y-2">
                <li>No divulgue información confidencial propia o de terceros.</li>
                <li>No hable con extraños de asuntos laborales o personales comprometedores.</li>
                <li>Utilice canales de comunicación adecuados.</li>
              </ul>
            </AccordionItem>
            <AccordionItem title="Correo electrónico">
              No publique su cuenta en sitios no confiables ni la preste. No divulgue información confidencial. Si recibe advertencias sospechosas de su banco, no conteste y valide directamente con la entidad.
            </AccordionItem>
            <AccordionItem title="Control de phishing y sus modalidades">
              No conteste mensajes alarmistas sobre sus cuentas bancarias. Revise certificados SSL en sitios seguros y valide siempre la validez de los mensajes con su proveedor de servicios oficial.
            </AccordionItem>
            <AccordionItem title="Robo de contraseñas">
              Cambie sus contraseñas mínimo cada 30 días. Use contraseñas fuertes (mínimo 10 caracteres, combinando números y caracteres especiales). Nunca envíe claves por medios no encriptados.
            </AccordionItem>
          </div>
        </section>

        {/* SECCION: MECANISMO DE SEGURIDAD */}
        <section className="bg-[#0a0a0a] p-8 rounded-xl border border-gray-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Mecanismos de Seguridad
          </h2>
          <p className="mb-6 leading-relaxed">
            <span className="text-white font-bold">VESTEL</span> cuenta con sistemas de autenticación y autorización para controlar el acceso a los diferentes servicios de la red, al igual que controles de autenticación para los usuarios.
          </p>
          <p className="mb-8 leading-relaxed">
            Para proteger las plataformas de los servicios de Internet, <span className="text-white font-bold">VESTEL</span> ha implementado configuraciones de seguridad base además del establecimiento de medidas a través de:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <AccordionItem title="Firewall">
              A través de éste elemento de red se hace la primera protección
              perimetral en las redes de VESTEL y sus clientes, creando el 
              primer control que reduce el nivel de impacto ante los riesgos de seguridad.

            </AccordionItem>
            <AccordionItem title="Antivirus">
              Tanto las estaciones de trabajo como los servidores de
              procesamiento interno de información en VESTEL están
              protegidos a través de sistemas anti códigos maliciosos.
              
            </AccordionItem>
            <AccordionItem title="Antispam">
              Todos los servidores de correo poseen antispam que reduce el nivel de
              correo basura o no solicitado hacia los clientes, descongestionando los
              buzones y el tráfico en la red.

            </AccordionItem>
            <AccordionItem title="Filtrado de URLs">
              VESTEL para el bloqueo de sitios con contenido de pornografía
              infantil, utiliza Servidores para realizar el filtrado de estos sitios.
              El objetivo principal de este filtrado es denegar el acceso a los
              sitios que contengan o promuevan la pornografía infantil en
              Internet a través imágenes, textos, documentos y/o archivos
              audiovisuales. Se sugiere instalar además sistemas parentales.

            </AccordionItem>
            <AccordionItem title="Seguridad a nivel del CPE">
              Los dispositivos de conexión final ubicados en las premisas de
              los clientes cuentan con elementos bases para la autenticación
              y autorización, con ello permiten hacer una conexión a Internet
              de manera más segura.
            </AccordionItem>
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SeguridadRed;