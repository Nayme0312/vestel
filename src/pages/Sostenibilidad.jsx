const Sostenibilidad = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 text-gray-300 leading-relaxed">

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          SOSTENIBILIDAD
        </h1>

        <p className="text-center mb-10 text-white font-semibold">
          Política de Sostenibilidad (ESG)
        </p>

        <p className="mb-6">
          VESTEL integra criterios ambientales, sociales y de gobernanza en sus operaciones, cadenas de valor y oferta digital, comprometiéndose con metas climáticas, economía circular y respeto por los derechos humanos.
        </p>

        {/* Contenido */}
        <h2 className="text-white font-semibold text-lg mb-2">Contenido</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Alcance y marco normativo</li>
          <li>Principios y gobierno ESG</li>
          <li>Acción climática y energía</li>
          <li>Residuos, RAEE y economía circular</li>
          <li>Agua y biodiversidad</li>
          <li>Cadena de suministro responsable</li>
          <li>Personas y comunidad</li>
          <li>Transparencia y reporte</li>
          <li>Gobierno, contacto y vigencia</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">1. Alcance y marco normativo</h2>
        <p className="mb-4">
          Esta política es de aplicación a todo el personal, filiales, contratistas y aliados de VESTEL en Colombia, en armonía con la Ley General Ambiental, la Ley de Acción Climática y regulaciones de residuos (RAEE, envases y empaques, plásticos de un solo uso), además de estándares internacionales (ISO 14001, ISO 50001, GHG Protocol).
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>Ambiental: Ley 99 de 1993 (SINA), autoridades ambientales y licenciamiento.</li>
          <li>Clima: Ley 2169 de 2021 (carbono neutralidad y resiliencia).</li>
          <li>Residuos: Ley 1672 de 2013 (RAEE) y Res. 851 de 2022 (clasificación y sistemas de recolección/gestión).</li>
          <li>Envases/Empaques: Res. 1407 de 2018 y Res. 1342 de 2020 (REP y metas de aprovechamiento).</li>
          <li>Plásticos de un solo uso: Ley 2232 de 2022 (reducción/prohibiciones graduales).</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">2. Principios y gobierno ESG</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Legalidad: Cumplimiento estricto y mejora continua (ciclo PHVA/PDCA).</li>
          <li>Materialidad: Priorización de impactos relevantes (clima, energía, RAEE, empaques, seguridad digital).</li>
          <li>Precaución: Gestión preventiva del riesgo ambiental y social.</li>
          <li>Participación: Diálogo con grupos de interés y cultura interna.</li>
        </ul>

        <p className="mb-6">
          Estructura de gobierno:
          <br />
          Comité ESG presidido por [Cargo ejecutivo], con funciones de estrategia y supervisión trimestral.
          <br />
          Oficial de Cumplimiento Ambiental y líder de Energía responsables de ISO 14001/50001 y metas climáticas.
          <br />
          Transparencia y auditoría de metas con reporte anual público.
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">3. Acción climática y energía</h2>
        <p className="mb-4">
          Compromiso: Inventario de GEI (alcances 1, 2 y principales categorías de 3), metas de reducción alineadas con NDC de Colombia y carbono neutralidad a 2050. Implementación de ISO 50001 para eficiencia energética.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Inventario GEI: Metodología GHG Protocol; actualización anual; verificación cuando sea posible.</li>
          <li>Energía renovable: Prioridad a PPAs y/o certificación del consumo eléctrico con I-REC cuando aplique.</li>
          <li>Eficiencia: Gestión de usos significativos (UPS, climatización, data center, redes); metas de reducción de kWh/cliente y mejora de PUE (si aplica).</li>
          <li>Movilidad: Migración progresiva a flota eléctrica/híbrida y logística baja en carbono.</li>
          <li>Resiliencia: Evaluación de riesgos climáticos físicos y de transición; planes de adaptación.</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">4. Residuos, RAEE y economía circular</h2>
        <ul className="list-disc list-inside mb-6">
          <li>RAEE: Programas de retoma para CPE/equipos; convenios con gestores autorizados; trazabilidad y certificación.</li>
          <li>Envases y empaques: Plan de Gestión Ambiental (individual o colectivo) con metas anuales de aprovechamiento y educación al consumidor.</li>
          <li>Plásticos de un solo uso: Eliminación gradual según cronograma legal; sustitución por alternativas reutilizables o reciclables.</li>
          <li>Compras circulares: Preferencia por insumos con contenido reciclado, remanufacturados y/o con ecoetiquetas.</li>
        </ul>

        <h2 className="text-white font-semibold text-lg mb-2">5. Agua y biodiversidad</h2>
        <p className="mb-6">
          Gestión eficiente del agua (medición, reducción de consumos, reúso donde sea viable).
          <br />
          Prevención de impactos sobre ecosistemas; compensaciones y restauración cuando aplique normativa.
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">6. Cadena de suministro responsable</h2>
        <p className="mb-6">
          Código de Proveedores con criterios ambientales y sociales mínimos.
          <br />
          Debida diligencia de riesgos ESG; cláusulas contractuales y derecho de auditoría.
          <br />
          Prioridad a logística eficiente, materiales de bajo impacto y servicios certificados.
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">7. Personas y comunidad</h2>
        <p className="mb-6">
          Salud y seguridad ocupacional, formación en sostenibilidad y ética.
          <br />
          Iniciativas de inclusión digital y programas comunitarios alineados a ODS.
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">8. Transparencia y reporte</h2>
        <p className="mb-6">
          Reporte anual de sostenibilidad (GRI) y divulgación climática (TCFD) cuando aplique.
          <br />
          Publicación de metas, avances y metodologías relevantes.
        </p>

        <h2 className="text-white font-semibold text-lg mb-2">9. Gobierno, contacto y vigencia</h2>
        <p className="mb-6">
          El Comité ESG revisará esta política al menos una vez al año. Consultas o reportes: gerenciavestel@gmail.com · Política de Datos.
          <br />
          Vigente desde su publicación y aplicable en todos los sitios y operaciones de VESTEL.
        </p>

        <p className="mb-6">
          <strong>Plan de implementación 90–180 días (referencial)</strong>
          <br />
          Diagnóstico: huella GEI (alcances 1–2 y mapa de alcance 3), consumo energético y líneas base; brecha vs. Ley 2169/NDC.
          <br />
          Gobernanza: instalar Comité ESG; nombrar responsables ISO 14001/50001 y RAEE/REP.
          <br />
          Hoja de ruta energía: EnMS (ISO 50001), identificación de usos significativos, pipeline de proyectos (iluminación, climatización, TI).
          <br />
          Renovable: análisis PPA on/off-site y estrategia I-REC para consumo residual.
          <br />
          RAEE: contrato con gestor autorizado; diseño de retoma para CPE/routers; comunicaciones al cliente.
          <br />
          Envases/Empaques: PGAREE (individual/colectivo) con metas, trazabilidad e informes ante ANLA.
          <br />
          Plásticos: plan de sustitución conforme cronograma legal; compras sostenibles.
          <br />
          Capacitación: módulos cortos de clima, RAEE, REP, plásticos, compras, eco-diseño.
          <br />
          Reporte: tablero mensual de KPIs y plan de divulgación anual (GRI/TCFD).
          <br />
          Exención: Esta política no sustituye obligaciones regulatorias específicas de licencias o permisos ambientales. En caso de conflicto, prevalece la norma vigente.
        </p>

      </div>
    </div>
  );
};

export default Sostenibilidad;
