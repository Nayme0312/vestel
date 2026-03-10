const Terminos = () => {
  return (
    // relative = permite capas
    <div className="relative bg-black min-h-screen overflow-hidden">

      {/* Fade inferior hacia el footer */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 text-gray-300 leading-relaxed">

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Términos y Condiciones
        </h1>

        {/* Intro */}
        <p className="text-center mb-6 text-white font-semibold">
          Términos y Condiciones Generales de Servicios
        </p>

        <p className="mb-6">
          Vesga Telecomunicaciones S.A.S., con domicilio en Carrera 20 # 26 – 80,
          identificada con NIT 844004979, en adelante la «Empresa».
        </p>

        <p className="mb-10">
          Al acceder, contratar o utilizar los servicios de telecomunicaciones, TI,
          internet, soporte remoto, hosting o cualquier otro servicio ofrecido por la
          Empresa (en adelante, los «Servicios»), el usuario (en adelante, el
          «Usuario» o «Cliente») acepta plenamente estos Términos y Condiciones.
          Si no está de acuerdo, debe abstenerse de contratar o utilizar los Servicios.
        </p>

        {/* 1 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          1. Objeto del Contrato
        </h2>
        <p className="mb-4">
          Estos Términos y Condiciones regulan la relación entre la Empresa y el
          Usuario en lo relativo a:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>El acceso y uso del sitio web y plataformas digitales de la Empresa.</li>
          <li>La provisión de servicios de telecomunicaciones, TI, conectividad, soporte remoto y demás soluciones tecnológicas.</li>
          <li>Las obligaciones, responsabilidades y derechos de cada parte.</li>
        </ul>

        {/* 2 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          2. Aceptación y Modificaciones
        </h2>
        <p className="mb-8">
          La Empresa podrá modificar estos Términos en cualquier momento mediante su
          publicación en el sitio web oficial. El uso continuado de los Servicios
          después de la publicación de cambios implica la aceptación de los mismos.
        </p>

        {/* 3 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          3. Registro y Veracidad de la Información
        </h2>
        <p className="mb-4">
          Algunos Servicios requieren registro previo. El Usuario garantiza:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>Que la información proporcionada es veraz, completa y actualizada.</li>
          <li>Que no usará datos falsos o de terceros sin autorización.</li>
          <li>Que notificará cualquier cambio en sus datos de contacto y facturación.</li>
        </ul>

        {/* 4 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          4. Uso Autorizado y Prohibiciones
        </h2>
        <p className="mb-4">
          El Usuario se compromete a utilizar los Servicios conforme a la ley, la
          moral y el orden público. Queda expresamente prohibido:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>Difundir malware, virus, ransomware o cualquier código malicioso.</li>
          <li>Acceder a redes, servidores o sistemas sin autorización.</li>
          <li>Utilizar los Servicios para actividades ilícitas, fraudulentas, difamatorias, discriminatorias o contrarias a la ley.</li>
          <li>Realizar acciones que afecten la estabilidad, seguridad o calidad del servicio para otros usuarios.</li>
        </ul>

        {/* 5 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          5. Planes, Tarifas y Facturación
        </h2>
        <ul className="list-disc list-inside mb-8">
          <li>Viabilidad técnica y cobertura geográfica.</li>
          <li>Políticas de riesgo crediticio y validación comercial.</li>
          <li>Facturación mensual o periódica según el plan contratado.</li>
          <li>
            La falta de pago podrá generar la suspensión temporal o terminación
            definitiva del Servicio, sin perjuicio de las acciones legales
            correspondientes.
          </li>
        </ul>

        {/* 6 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          6. Garantías y Niveles de Servicio (SLA)
        </h2>
        <ul className="list-disc list-inside mb-8">
          <li>Disponibilidad ininterrumpida en casos de fuerza mayor o fallas externas.</li>
          <li>Integridad de datos en caso de ataques informáticos fuera de su control razonable.</li>
          <li>Soporte técnico sujeto a tiempos y alcances definidos en el SLA.</li>
        </ul>

        {/* 7 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          7. Propiedad Intelectual
        </h2>
        <p className="mb-8">
          Todos los contenidos, software, documentación, marcas, logotipos y
          derechos de autor asociados a los Servicios son propiedad de la Empresa
          o de terceros autorizados. Queda prohibida su reproducción o distribución
          sin autorización expresa.
        </p>

        {/* 8 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          8. Protección de Datos y Confidencialidad
        </h2>
        <p className="mb-8">
          La Empresa garantiza el tratamiento adecuado de datos personales conforme
          a la Ley 1581 de 2012 y demás normas aplicables.
        </p>

        {/* 9 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          9. Seguridad Informática
        </h2>
        <p className="mb-8">
          La Empresa implementa medidas de seguridad razonables, pero no será
          responsable por ataques o accesos no autorizados fuera de su control.
        </p>

        {/* 10 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          10. Limitación de Responsabilidad
        </h2>
        <ul className="list-disc list-inside mb-8">
          <li>Lucro cesante, pérdida de datos o daños indirectos.</li>
          <li>Fallas en equipos del Usuario o proveedores externos.</li>
          <li>Mal uso de los Servicios por parte del Usuario o terceros.</li>
        </ul>

        {/* 11 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          11. Suspensión y Terminación
        </h2>
        <ul className="list-disc list-inside mb-8">
          <li>Incumplimiento de pagos.</li>
          <li>Uso indebido o ilícito de los Servicios.</li>
          <li>Órdenes judiciales o requerimientos de autoridades.</li>
        </ul>

        {/* 12 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          12. Fuerza Mayor
        </h2>
        <p className="mb-8">
          La Empresa no será responsable por incumplimientos causados por eventos
          de fuerza mayor como desastres naturales, pandemias o actos gubernamentales.
        </p>

        {/* 13 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          13. Ley Aplicable y Jurisdicción
        </h2>
        <p className="mb-8">
          Estos Términos se rigen por las leyes de la República de Colombia.
        </p>

        {/* 14 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          14. Contacto
        </h2>
        <p>
          Email:{" "}
          <a href="mailto:gerenciavestel@gamil.com" className="text-blue-400 hover:underline">
            gerenciavestel@gamil.com
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

export default Terminos;
