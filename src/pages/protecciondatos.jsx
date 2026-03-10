const ProteccionDatos = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">

      {/* FADE INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10"></div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 text-gray-300 leading-relaxed">

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Política de Privacidad y Protección de Datos
        </h1>

        <p className="text-center mb-6 text-white font-semibold">
          Política de Tratamiento y Protección de Datos Personales
        </p>

        <p className="mb-10">
          La presente política regula el tratamiento de los datos personales recolectados,
          almacenados, usados, circulados y/o suprimidos por Vesga Telecomunicaciones S.A.S.
          (en adelante, la «Empresa»), en cumplimiento de la Ley 1581 de 2012,
          el Decreto 1377 de 2013 y demás normas concordantes.
        </p>

        {/* 1 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          1. Principios para el Tratamiento de Datos
        </h2>

        <p className="mb-4">
          El tratamiento de datos personales por parte de la Empresa se regirá por los siguientes principios:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li><strong>Legalidad:</strong> Todo tratamiento se realizará conforme a la normativa vigente.</li>
          <li><strong>Finalidad:</strong> Los datos serán tratados únicamente para los fines autorizados por el titular.</li>
          <li><strong>Transparencia:</strong> El titular podrá solicitar en cualquier momento información sobre el uso de sus datos.</li>
          <li><strong>Acceso y circulación restringida:</strong> Los datos serán accedidos únicamente por personal autorizado.</li>
          <li><strong>Seguridad:</strong> La Empresa adoptará medidas técnicas, humanas y administrativas para proteger la información.</li>
        </ul>

        {/* 2 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          2. Finalidades del Tratamiento
        </h2>

        <p className="mb-4">
          Los datos personales podrán ser tratados para las siguientes finalidades:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Gestión administrativa, operativa, comercial y de facturación.</li>
          <li>Prevención y control de fraudes, validación de identidad y autenticación biométrica.</li>
          <li>Campañas comerciales, informativas y publicitarias mediante correo electrónico, SMS, llamadas o aplicaciones de mensajería.</li>
          <li>Gestión de cobranza y recuperación de cartera.</li>
          <li>Publicación en directorios telefónicos cuando aplique.</li>
          <li>Evaluación de riesgo crediticio y consulta en centrales de información financiera autorizadas.</li>
          <li>Compartir información con terceros aliados o proveedores en Colombia o en el exterior, para fines contractuales, comerciales o de cumplimiento normativo.</li>
        </ul>

        {/* 3 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          3. Datos Sensibles y Biométricos
        </h2>

        <p className="mb-4">
          Los datos biométricos y demás datos catalogados como sensibles serán tratados únicamente para:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Verificación de identidad.</li>
          <li>Prevención de fraudes y validación de transacciones.</li>
          <li>Suscripción y ejecución de contratos.</li>
        </ul>

        <p className="mb-8">
          El titular no está obligado a autorizar el tratamiento de datos sensibles y podrá negarse
          sin repercusiones contractuales, salvo en los casos previstos por la ley.
        </p>

        {/* 4 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          4. Responsabilidad del Usuario
        </h2>

        <p className="mb-4">
          El Usuario es responsable de mantener la confidencialidad de sus credenciales de acceso.
          Se equipara el uso de dichas credenciales a su firma electrónica, otorgando plena validez jurídica
          a las transacciones realizadas.
        </p>

        <p className="mb-8">
          En caso de pérdida o sustracción de credenciales, el Usuario deberá informar de inmediato
          a la Empresa para proceder al bloqueo. La Empresa no será responsable por transacciones
          realizadas antes de recibir dicha notificación.
        </p>

        {/* 5 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          5. Derechos del Titular de los Datos
        </h2>

        <p className="mb-4">
          El titular de los datos personales tiene derecho a:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Conocer, actualizar y rectificar sus datos personales.</li>
          <li>Solicitar prueba de la autorización otorgada para el tratamiento de datos.</li>
          <li>Revocar la autorización o solicitar la supresión de sus datos cuando no exista deber legal o contractual de conservarlos.</li>
          <li>Ser informado sobre el uso dado a sus datos personales.</li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley de protección de datos.</li>
        </ul>

        {/* 6 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          6. Transferencia y Transmisión de Datos
        </h2>

        <p className="mb-4">
          La Empresa podrá transferir o transmitir datos personales a terceros ubicados en Colombia o en el exterior, siempre que:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Exista autorización expresa del titular.</li>
          <li>Se garantice el cumplimiento de estándares adecuados de protección de datos.</li>
          <li>La transferencia tenga fines legítimos y compatibles con la finalidad inicial del tratamiento.</li>
        </ul>

        {/* 7 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          7. Medidas de Seguridad
        </h2>

        <p className="mb-4">
          La Empresa implementará medidas técnicas, físicas, administrativas y legales para:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Prevenir accesos no autorizados, pérdida, uso indebido o alteración de la información.</li>
          <li>Garantizar la integridad, confidencialidad y disponibilidad de los datos personales.</li>
          <li>Monitorear accesos y actividades para detectar posibles riesgos o incidentes de seguridad.</li>
        </ul>

        {/* 8 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          8. Canales para Ejercer Derechos
        </h2>

        <p className="mb-4">
          El titular podrá presentar peticiones, quejas o reclamos relacionados con el tratamiento de sus datos a través de:
        </p>

        <p className="mb-8">
          Email:{" "}
          <a href="mailto:gerenciavestel@gmail.com" className="text-blue-400 hover:underline">
            gerenciavestel@gmail.com
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

        {/* 9 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          9. Vigencia de la Política
        </h2>

        <p className="mb-8">
          La presente política rige a partir de su publicación y permanecerá vigente
          mientras la Empresa realice tratamiento de datos personales.
        </p>

        {/* 10 */}
        <h2 className="text-white font-semibold text-lg mb-2">
          10. Legislación y Jurisdicción
        </h2>

        <p className="mb-4">
          Esta política se rige por las leyes de la República de Colombia, en especial:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Ley 1581 de 2012 (Protección de Datos Personales).</li>
          <li>Decreto 1377 de 2013 (Reglamentación Ley 1581).</li>
          <li>Circular 002 de 2015 de la SIC.</li>
        </ul>

        <p>
          Cualquier controversia será resuelta ante los jueces competentes del domicilio principal de la Empresa.
        </p>

      </div>
    </div>
  );
};

export default ProteccionDatos;
