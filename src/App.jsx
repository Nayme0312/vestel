import { Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useContext, lazy, Suspense } from "react";

// COMPONENTES (siempre visibles — import estático)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Snow from "./components/Snow";

// PAGINAS (lazy loading — se cargan bajo demanda)
const Planes = lazy(() => import("./components/Planes"));
const Canales = lazy(() => import("./components/Canales"));
const Transparencia = lazy(() => import("./pages/Transparencia"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Pqr = lazy(() => import("./pages/pqr"));
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));
const AccesoBloqueado = lazy(() => import("./pages/AccesoBloqueado"));
const InternetSano = lazy(() => import("./pages/InternetSano"));
const SeguridadRedFraudes = lazy(() => import("./pages/SeguridadRedFraudes"));
const SeguridadRedPage = lazy(() => import("./pages/seguridadred"));
const ReportarFalla = lazy(() => import("./pages/ReportarFalla"));
const Canalesdenuncia = lazy(() => import("./pages/Canalesdenuncia"));
const Neutralidad = lazy(() => import("./pages/neutralidad"));
const Sagrilaft = lazy(() => import("./pages/sagrilaft"));
const Sostenibilidad = lazy(() => import("./pages/Sostenibilidad"));
const Proteccionredfraude = lazy(() => import("./pages/Proteccionredfraude"));
const Proteccionusuario = lazy(() => import("./pages/Proteccionusuario"));
const Terminos = lazy(() => import("./pages/Terminos"));
const ProteccionDatos = lazy(() => import("./pages/protecciondatos"));


//  CONTENIDO DE LA APP
function AppContent() {
  const { nevar } = useContext(ThemeContext);

  return (
    <div className="min-h-screen font-sans relative">

      {/* ========= NIE GLOBAL=========== */}


      {nevar && <Snow />}

      <Navbar />

      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Stats />
                <Services />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/planes" element={<Planes />} />
          <Route path="/canales" element={<Canales />} />
          <Route path="/pqr" element={<Pqr />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/acceso-bloqueado" element={<AccesoBloqueado />} />
          <Route path="/InternetSano" element={<InternetSano />} />
          <Route path="/SeguridadRedFraudes" element={<SeguridadRedFraudes />} />
          <Route path="/seguridad-red" element={<SeguridadRedPage />} />
          <Route path="/Canalesdenuncia" element={<Canalesdenuncia />} />
          <Route path="/reporta-falla" element={<ReportarFalla />} />
          <Route path="/Neutralidad" element={<Neutralidad />} />
          <Route path="/Sagrilaft" element={<Sagrilaft />} />
          <Route path="/Sostenibilidad" element={<Sostenibilidad />} />
          <Route path="/Proteccionredfraude" element={<Proteccionredfraude />} />
          <Route path="/Proteccionusuario" element={<Proteccionusuario />} />
          <Route path="/Terminos" element={<Terminos />} />
          <Route path="/protecciondatos" element={<ProteccionDatos />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}


//  PRINCIPAL
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
