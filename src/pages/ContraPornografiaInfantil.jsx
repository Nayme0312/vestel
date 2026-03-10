const ContraPornografiaInfantil = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">

      {/* Fade inferior hacia el footer */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 text-gray-300 leading-relaxed">

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Política Corporativa contra la Pornografía Infantil (CSAM)
        </h1>

        <p className="mb-6">
          Vestel adopta esta política para prevenir, bloquear, denunciar y colaborar con las autoridades frente a cualquier forma de explotación sexual de niños, niñas y adolescentes y la circulación de material de abuso sexual infantil (CSAM).
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">Contenido</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Alcance y marco normativo</li>
          <li>Compromisos de la Empresa</li>
          <li>Medidas técnicas de prevención y bloqueo</li>
          <li>Obligaciones del Usuario</li>
          <li>Canales oficiales de denuncia</li>
          <li>Control parental y orientación</li>
          <li>Gestión de incidentes</li>
          <li>Limitaciones, neutralidad y privacidad</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">1. Alcance y marco normativo</h2>
        <p className="mb-4">
          Esta política es de obligatorio cumplimiento para todo el personal y Usuarios de Red Fibra. Se fundamenta en:
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>Ley 679 de 2001: Prevención y contrarresto de explotación, pornografía y turismo sexual con menores.</li>
          <li>Decreto 1524 de 2002: Medidas técnicas y administrativas para proteger a menores en Internet.</li>
          <li>Decreto 067 de 2003: Prórroga y refuerzos regulatorios.</li>
          <li>Ley 1336 de 2009: Fortalece medidas contra explotación sexual comercial de NNA.</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">2. Compromisos de la Empresa</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Tolerancia Cero: Red Fibra no permite la producción, almacenamiento, difusión, promoción o enlace a CSAM en sus redes, equipos o servicios bajo su administración.</li>
          <li>Prevención y filtrado: Implementamos mecanismos para bloquear dominios/URLs reportados por MinTIC y autoridades competentes.</li>
          <li>Información y denuncia: Mantenemos puntos de contacto para reportes y orientamos a la ciudadanía sobre canales oficiales.</li>
          <li>Colaboración: Cooperamos con autoridades (Fiscalía, Policía, ICBF, MinTIC) en las actuaciones correspondientes.</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">3. Medidas técnicas de prevención y bloqueo</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Filtrado DNS por listas MinTIC: Bloqueo de URLs/dominios denunciados y actualizados continuamente por las autoridades competentes.</li>
          <li>Plataforma de inspección/filtrado de tráfico: Detección y bloqueo de CSAM conforme a listados oficiales.</li>
          <li>Gestión de reputación y categorías: Integración de feeds reputacionales y listas negras para impedir acceso a material ilícito.</li>
          <li>Actualización continua: Los controles se revisan y actualizan regularmente para mantener su efectividad.</li>
        </ul>

        <p className="mb-6">
          Nota: Los bloqueos se limitan a lo exigido por la ley y listados oficiales; no sustituyen la responsabilidad del Usuario ni el control parental.
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">4. Obligaciones del Usuario</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Abstenerse de producir, alojar, compartir o acceder a CSAM en cualquier forma.</li>
          <li>Reportar inmediatamente cualquier contenido o actividad sospechosa a los canales oficiales indicados abajo.</li>
          <li>Implementar controles parentales y educar a menores sobre riesgos en línea.</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">5. Canales oficiales de denuncia</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-700 text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="border border-gray-700 px-3 py-2 text-left">Entidad</th>
                <th className="border border-gray-700 px-3 py-2 text-left">Canales</th>
                <th className="border border-gray-700 px-3 py-2 text-left">Web</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 px-3 py-2">MinTIC – En TIC Confío</td>
                <td className="border border-gray-700 px-3 py-2">Línea gratuita: 01 8000 912667</td>
                <td className="border border-gray-700 px-3 py-2">enticconfio.gov.co</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-3 py-2">Te Protejo</td>
                <td className="border border-gray-700 px-3 py-2">App iOS/Android · Línea 141 (ICBF)</td>
                <td className="border border-gray-700 px-3 py-2">teprotejo.org</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-3 py-2">Fiscalía General de la Nación</td>
                <td className="border border-gray-700 px-3 py-2">01 8000 912280 · contacto@fiscalia.gov.co</td>
                <td className="border border-gray-700 px-3 py-2">fiscalia.gov.co</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-3 py-2">DIJIN – Delitos Informáticos</td>
                <td className="border border-gray-700 px-3 py-2">PBX: (601) 426 6900 Ext. 6301-6302 · adelinfo@dijin.policia.gov.co</td>
                <td className="border border-gray-700 px-3 py-2">policia.gov.co</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-3 py-2">ICBF</td>
                <td className="border border-gray-700 px-3 py-2">Línea 141 · Anticorrupción: 01 8000 91 8080 · Prevención abuso sexual: 01 8000 11 2440</td>
                <td className="border border-gray-700 px-3 py-2">icbf.gov.co</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          También puede consultar internetsano.gov.co para orientación y denuncias.
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">6. Control parental y orientación</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Soluciones sugeridas: OpenDNS/FamilyShield, Net Nanny, Qustodio, SecureKids.</li>
          <li>Navegadores: Active “Búsqueda Segura” (SafeSearch) en Google/YouTube y controles de contenido en el navegador.</li>
          <li>Educación digital: Dialogue con menores sobre riesgos; fomente el uso responsable de TIC (En TIC Confío).</li>
        </ul>

        <p className="mb-6">
          Las herramientas de terceros son responsabilidad del Usuario; verifique licenciamiento, privacidad y compatibilidad.
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">7. Gestión de incidentes</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Detección: Alertas de Usuarios, sistemas internos o autoridades.</li>
          <li>Contención y bloqueo: Aislamiento de tráfico/URLs, actualización de listas y reglas.</li>
          <li>Cooperación: Respuesta coordinada con autoridades competentes.</li>
          <li>Notificación: Comunicación por contacto@redfibra.net.</li>
          <li>Mejora continua: Revisión de controles y capacitación periódica.</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">8. Limitaciones, neutralidad y privacidad</h2>

        <p className="mb-4">
          Red Fibra respeta la neutralidad de la red y solo aplica bloqueos exigidos por ley o mandatados por autoridades competentes.
        </p>

        <p className="mb-4">
          Los mecanismos de filtrado se enfocan en CSAM y amenazas asociadas; no implican inspección generalizada de contenidos más allá del marco legal.
        </p>

        <p className="mb-4">
          El tratamiento de datos se rige por la Política de Protección de Datos de Red Fibra.
        </p>

        <p className="mb-6">
          Exención de responsabilidad: Las medidas descritas reducen riesgos, pero no aseguran eliminación total de contenidos ilícitos en Internet. El Usuario es corresponsable del uso seguro y del reporte oportuno a los canales oficiales.
        </p>

      </div>
    </div>
  );
};

export default ContraPornografiaInfantil;
