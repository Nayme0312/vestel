const Sagrilaft = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10"></div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 text-gray-300 leading-relaxed">

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Compromiso Anticorrupción y Prevención de LA/FT/FPADM
        </h1>

        <p className="text-center text-white font-semibold mb-6">
          Compromiso Anticorrupción y Prevención de LA/FT/FPADM
        </p>

        <p className="mb-8">
          El presente compromiso hace parte integral de la relación contractual y comercial entre Vesga Telecomunicaciones S.A.S. (en adelante, el “Operador”) y el Cliente (en adelante, el “Cliente”), conforme a la legislación vigente en la República de Colombia y los estándares internacionales aplicables.
        </p>

        {/* 1 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          1. Declaración del Cliente
        </h2>

        <p className="mb-4">
          El Cliente, bajo la gravedad del juramento, declara que:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Los recursos utilizados para el pago de los servicios provienen de actividades lícitas y verificables.</li>
          <li>No se encuentra incluido en listas restrictivas nacionales o internacionales relacionadas con lavado de activos, financiación del terrorismo o financiación de la proliferación de armas de destrucción masiva (LA/FT/FPADM).</li>
          <li>No ha sido condenado ni vinculado a procesos judiciales por delitos como narcotráfico, terrorismo, testaferrato, tráfico de estupefacientes o delitos contra el orden constitucional.</li>
          <li>Implementa controles internos razonables para prevenir que los servicios contratados sean utilizados como instrumento para el ocultamiento o legalización de recursos ilícitos.</li>
        </ul>

        {/* 2 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          2. Compromisos Anticorrupción
        </h2>

        <p className="mb-4">
          El Cliente se compromete expresamente a:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>No ofrecer, prometer ni entregar, directa o indirectamente, sobornos, dádivas o beneficios indebidos a empleados del Operador, funcionarios públicos o terceros relacionados con la ejecución del contrato.</li>
          <li>Exigir a sus empleados, agentes y contratistas el cumplimiento estricto de las leyes anticorrupción vigentes en Colombia y estándares internacionales aplicables.</li>
          <li>Reportar de forma inmediata cualquier acto o indicio de corrupción, soborno o conducta ilícita de la cual tenga conocimiento, a través de la línea ética dispuesta por el Operador.</li>
          <li>Abstenerse de realizar acuerdos colusorios, prácticas restrictivas de la competencia o cualquier conducta que afecte la transparencia del proceso contractual.</li>
        </ul>

        {/* 3 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          3. Facultades del Operador
        </h2>

        <p className="mb-4">
          El Operador podrá, sin previo aviso y sin generar derecho a indemnización a favor del Cliente:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Terminar de manera unilateral e inmediata la relación contractual si el Cliente resulta vinculado a investigaciones o sanciones por delitos relacionados con LA/FT/FPADM o corrupción.</li>
          <li>Suspender la prestación de los servicios en caso de detectar indicios razonables de operaciones inusuales o sospechosas.</li>
          <li>Reportar a las autoridades competentes cualquier actividad que pueda constituir infracción penal o administrativa.</li>
        </ul>

        {/* 4 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          4. Listas y Normativa Aplicable
        </h2>

        <p className="mb-4">
          El Cliente reconoce que la verificación de listas restrictivas incluye, entre otras:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Oficina de Control de Activos en el Exterior (OFAC) del Departamento del Tesoro de EE. UU.</li>
          <li>Consejo de Seguridad de la Organización de las Naciones Unidas (ONU).</li>
          <li>Listas restrictivas de la Unión Europea, INTERPOL y autoridades colombianas.</li>
        </ul>

        <p className="mb-8">
          El cumplimiento de la normativa SAGRILAFT (Superintendencia de Sociedades) es obligatorio cuando aplique por tamaño, sector o actividad económica del Cliente.
        </p>

        {/* 5 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          5. Responsabilidad del Cliente
        </h2>

        <p className="mb-4">
          El Cliente asume plena responsabilidad por:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>La veracidad de la información suministrada en procesos de vinculación, actualización o debida diligencia.</li>
          <li>Los daños y perjuicios ocasionados al Operador por inexactitud, omisión o falsedad en las declaraciones realizadas.</li>
          <li>La implementación de mecanismos internos de control para prevenir riesgos de LA/FT/FPADM y corrupción en la relación contractual.</li>
        </ul>

        {/* 6 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          6. Terminación y Sanciones
        </h2>

        <p className="mb-4">
          La relación contractual terminará de manera automática y sin derecho a indemnización si:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>El Cliente es incluido en listas restrictivas oficiales relacionadas con LA/FT/FPADM.</li>
          <li>Se comprueba judicial o administrativamente su participación en conductas ilícitas previstas en la normativa aplicable.</li>
          <li>Se detecta incumplimiento de los compromisos anticorrupción establecidos en este documento.</li>
        </ul>

        {/* 7 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          7. Legislación y Jurisdicción
        </h2>

        <p className="mb-4">
          Este compromiso se rige por las leyes de la República de Colombia, en especial:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Ley 190 de 1995 (Estatuto Anticorrupción).</li>
          <li>Ley 1474 de 2011 (Estatuto Anticorrupción y Transparencia).</li>
          <li>Ley 2195 de 2022 (Transparencia y Lucha contra la Corrupción).</li>
          <li>Normas SAGRILAFT y demás disposiciones aplicables emitidas por la Superintendencia de Sociedades y autoridades competentes.</li>
        </ul>

        <p className="mb-8">
          Cualquier controversia será sometida a los jueces competentes del domicilio del Operador, con renuncia expresa a cualquier otro fuero que pudiera corresponder.
        </p>

        {/* 8 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          8. Contacto y Canales de Reporte
        </h2>

        <p>
          El Cliente podrá reportar hechos relacionados con corrupción, lavado de activos o financiación del terrorismo a través de:
        </p>

        <p className="mt-4">
          Email:{" "}
          <a href="mailto:gerenciaveste@gmail.com" className="text-blue-400 hover:underline">
            gerenciaveste@gmail.com
          </a>
          <br />
          Teléfono:{" "}
          <a href="tel:+573009135141" className="text-blue-400 hover:underline">
            +57 300 913 5141
          </a>
          <br />
          Portal web:{" "}
          <a
            href="https://vestel.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            vestel.com.co
          </a>
        </p>

      </div>
    </div>
  );
};

export default Sagrilaft;
