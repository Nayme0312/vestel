const SeguridadRedFraudes = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-900 to-blue-950 px-6 py-24">
      <div className="max-w-6xl mx-auto relative z-10 text-gray-200">

        {/* TÍTULO */}
        <h1 className="text-3xl text-center font-semibold text-white mb-12">
          Seguridad en la red y protección de fraudes
        </h1>

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* SEGURIDAD EN LA RED */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-6">
            <h2 className="text-xl text-white border-l-4 border-blue-500 pl-3">
              Conceptos generales sobre seguridad
            </h2>

            <div className="space-y-4 text-sm text-gray-400">
              <p><b className="text-gray-200">Integridad:</b> La información producida es de calidad, porque no puede ser modificada por quien no está autorizado.</p>

              <p><b className="text-gray-200">Confidencialidad:</b> La información solo debe ser legible para los autorizados, la misma debe llegar a destino con la cantidad y calidad con que fue prevista.</p>

              <p><b className="text-gray-200">Disponibilidad:</b> La información debe estar disponible cuando se la necesita.</p>

              <p><b className="text-gray-200">Irrefutabilidad / No repudio:</b> No se puede negar la autoría de quien provee la información.</p>

              <p><b className="text-gray-200">Activo:</b> Recursos con los que cuenta la empresa y que tiene valor, pueden ser tangibles (servidores, equipos, redes) o intangibles (información, políticas, normas,procedimientos)..</p>

              <p><b className="text-gray-200">Vulnerabilidad:</b> Exposición a un riesgo, fallo o hueco de seguridad detectado en algún programa o sistema informático.</p>

              <p><b className="text-gray-200">Amenaza:</b> Cualquier situación o evento con potencial de daño que pueda presentarse en un sistema.</p>

              <p><b className="text-gray-200">Riesgo:</b> Hecho potencial que, al ocurrir, puede impactar negativamente la seguridad o el negocio.</p>
            </div>

            <h3 className="text-lg text-white border-l-4 border-blue-500 pl-3">
              Medios para protección
            </h3>

            <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
              <li><b>Firewall:</b> Filtra paquetes de entrada o salida de una red, bloqueando direcciones, puertos o protocolos según reglas definidas.</li>
              <li><b>Antivirus:</b> Detecta, controla y elimina virus informáticos y otros códigos maliciosos como troyanos o rootkits.</li>
              <li><b>Anti-spam:</b> Detecta y elimina correos electrónicos no deseados.</li>
              <li><b>Criptografía:</b> Cifra y descifra información con claves secretas para evitar que sea leída por terceros no autorizados.</li>
            </ul>

            <h3 className="text-lg text-white border-l-4 border-blue-500 pl-3">
              Amenazas a la seguridad
            </h3>

            <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
              <li>
                <b>Correo electrónico:</b>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>No abra archivos adjuntos sin escanearlos.</li>
                  <li>Use antivirus con análisis de tráfico SMTP/POP.</li>
                  <li>Evite abrir correos de desconocidos.</li>
                </ul>
              </li>

              <li><b>Spam:</b> Envío masivo de correos no solicitados con contenido publicitario o malicioso.</li>

              <li><b>Suplantación de identidad:</b> Robar información personal haciéndose pasar por otra persona.</li>

              <li><b>Ingeniería social:</b> Manipular a las personas para obtener información confidencial.</li>

              <li><b>Código malicioso:</b> Programas que se instalan con el fin de causar daño o robo de información.</li>
            </ul>
          </div>

          {/* PROTECCIÓN DE FRAUDES */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-6">
            <h2 className="text-xl text-white border-l-4 border-blue-500 pl-3">
              Fraudes que se pueden presentar
            </h2>

            <div className="space-y-4 text-sm text-gray-400">
              <p>
                <b className="text-gray-200">Phishing:</b> Duplicar una página web para engañar al usuario y obtener datos personales.
              </p>

              <p className="text-blue-400">
                Evite suministrar datos personales o financieros sin verificar la autenticidad del sitio.
              </p>

              <div>
                <b className="text-gray-200">Fraudes por correo electrónico:</b>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Mensajes alarmistas o amenazas de cierre de cuentas.</li>
                  <li>Promesas de dinero rápido.</li>
                  <li>Solicitudes de donaciones sospechosas.</li>
                  <li>Errores ortográficos o de redacción.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg text-white border-l-4 border-blue-500 pl-3">
              Control Parental
            </h3>

            <p className="text-sm text-gray-400">
              Existen herramientas y aplicaciones que ayudan a los padres a supervisar las actividades en línea de sus hijos.
            </p>

            <ul className="list-disc list-inside text-sm text-gray-400">
              <li>Net Nanny</li>
              <li>Open DNS</li>
            </ul>

            <h3 className="text-lg text-white border-l-4 border-blue-500 pl-3">
              ¿Dónde denunciar contenidos de pornografía infantil?
            </h3>

            <div className="flex flex-wrap gap-3">
              <a href="https://www.mintic.gov.co" target="_blank" rel="noopener noreferrer" className="btn">mintic.gov.co</a>
              <a href="https://www.icbf.gov.co" target="_blank" rel="noopener noreferrer" className="btn">icbf.gov.co</a>
              <a href="https://www.teprotejo.org" target="_blank" rel="noopener noreferrer" className="btn">teprotejo.org</a>
              <a href="https://www.fiscalia.gov.co" target="_blank" rel="noopener noreferrer" className="btn">fiscalia.gov.co</a>
              <a href="https://www.policia.gov.co/dijin" target="_blank" rel="noopener noreferrer" className="btn">DIJIN</a>
            </div>
          </div>
        </div>
      </div>

      {/* DESVANECIDO */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />

      {/* BOTONES */}
      <style jsx>{`
        .btn {
          background: #1d4ed8;
          border: 1px solid #3b82f6;
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.8rem;
          transition: background 0.2s ease;
        }
        .btn:hover {
          background: #2563eb;
        }
      `}</style>
    </section>
  );
};

export default SeguridadRedFraudes;
