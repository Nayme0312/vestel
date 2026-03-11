import { useState, useContext } from "react";
import { zonasCobertura } from "../data/zonasCobertura";
import { createPortal } from "react-dom";
import { ThemeContext } from "../context/ThemeContext";

const CoberturaModal = ({ abierto, cerrar }) => {
  const { esNavidad } = useContext(ThemeContext);

  const [ciudad, setCiudad] = useState("");
  const [barrioEscrito, setBarrioEscrito] = useState(""); 
  const [tipoVia, setTipoVia] = useState("");
  const [direccion, setDireccion] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [esExito, setEsExito] = useState(false);

  if (!abierto) return null;

  // Normalizar texto
  const normalizarTexto = (texto) => {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");
  };

  // Parser flexible
  const parsearNumeros = (dir) => {

    const direccionLimpia = dir.trim().replace(/\s+/g, " ");

    const regex = /^(calle|carrera|transversal|diagonal)\s*(\d+)\s*#\s*(\d+)\s*-\s*(\d+)$/i;

    const match = direccionLimpia.match(regex);

    if (!match) return null;

    return {
      numeroVia: parseInt(match[2]),
      numeroPrincipal: parseInt(match[3]),
    };
  };

  // 🔧 Formatear dirección automáticamente
  const formatearDireccion = (texto) => {

    let t = texto;

    t = t.replace(/\s*#\s*/g, " # ");
    t = t.replace(/\s*-\s*/g, "-");

    return t;
  };

  const verificarCobertura = () => {
    setMensaje(null);
    setEsExito(false);

    if (!ciudad || !barrioEscrito.trim() || !tipoVia || !direccion.trim()) {
      setMensaje("Completa todos los campos.");
      return;
    }

    const datosDir = parsearNumeros(direccion.trim());

    if (!datosDir) {
      setMensaje(`Dirección inválida. Ej: ${tipoVia || "Calle"} 30 # 50-86`);
      return;
    }

    const ciudadData = zonasCobertura.find(
      (z) => z.ciudad.toLowerCase() === ciudad.toLowerCase()
    );

    if (!ciudadData) {
      setMensaje("No tenemos cobertura en esta ciudad.");
      return;
    }

    const barrioUsuarioNormalizado = normalizarTexto(barrioEscrito);

    const barrioEncontrado = ciudadData.barrios?.find(
      (b) => normalizarTexto(b.nombre) === barrioUsuarioNormalizado
    );

    if (!barrioEncontrado) {
      setMensaje("El barrio ingresado no está en nuestra zona de cobertura.");
      return;
    }

    if (ciudadData.coberturaTotal) {
      setMensaje(`¡Si tenemos cobertura en ${barrioEncontrado.nombre}, ${ciudadData.ciudad}!`);
      setEsExito(true);
      return;
    }

    if (barrioEncontrado.limites) {

      const { carreraDesde, carreraHasta, calleDesde, calleHasta } = barrioEncontrado.limites;

      if (
        datosDir.numeroVia >= carreraDesde &&
        datosDir.numeroVia <= carreraHasta &&
        datosDir.numeroPrincipal >= calleDesde &&
        datosDir.numeroPrincipal <= calleHasta
      ) {
        setMensaje("¡Si tenemos cobertura en esa dirección!");
        setEsExito(true);
        return;
      }
    }

    setMensaje("Lo sentimos, no tenemos cobertura en esa dirección específica.");
  };

  const inputStyle = `w-full border px-4 py-2.5 rounded-2xl ${
    esNavidad
      ? "border-red-200 focus:outline-red-400"
      : "border-gray-200 focus:outline-yellow-500"
  }`;

  const botonPrincipal = `w-full py-3 mb-4 rounded-full font-bold transition-all ${
    esNavidad
      ? "bg-red-400 hover:bg-red-600 text-white shadow-lg"
      : "bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg"
  }`;

  const modalLayout = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-white text-black rounded-3xl w-full max-w-md p-8 relative shadow-2xl">

        <button
          onClick={cerrar}
          className={`absolute top-5 right-5 text-xl font-bold text-gray-400 transition-colors ${
            esNavidad ? "hover:text-red-500" : "hover:text-yellow-500"
          }`}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-[#22365d]">
          Consultar Cobertura
        </h2>

        <select
          className={`${inputStyle} mb-4`}
          value={ciudad}
          onChange={(e) => {
            setCiudad(e.target.value);
            setMensaje(null);
          }}
        >
          <option value="">Selecciona Ciudad</option>
          {zonasCobertura.map((zona) => (
            <option key={zona.ciudad} value={zona.ciudad}>
              {zona.ciudad}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Barrio"
          className={`${inputStyle} mb-4`}
          value={barrioEscrito}
          onChange={(e) => setBarrioEscrito(e.target.value)}
        />

        <select
          className={`${inputStyle} mb-4`}
          value={tipoVia}
          onChange={(e) => {
            const via = e.target.value;
            setTipoVia(via);
            setDireccion(via + " ");
          }}
        >
          <option value="">Tipo de vía</option>
          <option value="Carrera">Carrera</option>
          <option value="Calle">Calle</option>
          <option value="Transversal">Transversal</option>
          <option value="Diagonal">Diagonal</option>
        </select>

        <input
          type="text"
          placeholder={`Ej: ${tipoVia || "Calle"} 30 # 50-86`}
          className={`${inputStyle} mb-4`}
          value={direccion}
          onChange={(e) => {
            const texto = formatearDireccion(e.target.value);
            setDireccion(texto);
            setMensaje(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              verificarCobertura();
            }
          }}
        />

        <button onClick={verificarCobertura} className={botonPrincipal}>
          Verificar Cobertura
        </button>

        {mensaje && (
          <p
            className={`text-center font-semibold ${
              esExito
                ? "text-green-600"
                : esNavidad
                ? "text-red-600"
                : "text-yellow-600"
            }`}
          >
            {mensaje}
          </p>
        )}

      </div>
    </div>
  );

  return createPortal(modalLayout, document.body);
};

export default CoberturaModal;