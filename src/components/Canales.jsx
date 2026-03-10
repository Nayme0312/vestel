import { useEffect, useRef, useState } from "react";

// ================= ANIMACIÓN SCROLL =================
const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

// ================= DATA CANALES =================
const canales = {
  regionales: [
    { nombre: "CANAL 6", logo: "/canales/regionales/Logo canal6.png" },
    { nombre: "CANAL TRO", logo: "/canales/regionales/canaltroR.png" },
    { nombre: "TELEMEDELLIN", logo: "/canales/regionales/TelemedelllinR.png" },
    { nombre: "TELEPACIFICO", logo: "/canales/regionales/telepacificoR.png" },
    { nombre: "CITY TV", logo: "/canales/regionales/citytv.png" },
    { nombre: "CANAL CAPITAL", logo: "/canales/regionales/CanalCapitalR.png" },
    { nombre: "ZOOM TV", logo: "/canales/regionales/zoomR.png" },
    { nombre: "TELECAFE", logo: "/canales/regionales/TelecafeR.png" },
    { nombre: "CANAL 13", logo: "/canales/regionales/canal-trece.png" },
    { nombre: "SURAM", logo: "/canales/regionales/suram.png" },
    { nombre: "TELEISLAS", logo: "/canales/regionales/Teleislas.png" },
    { nombre: "CANAL INSTITUCIONAL", logo: "/canales/regionales/CanalInstitucional.png" },
    { nombre: "CANAL DEL CONGRESO", logo: "/canales/regionales/Congreso.png" },
    { nombre: "CANAL 1", logo: "/canales/regionales/Canal1.png" },
  ],
  deportes: [
    { nombre: "Win Sports", logo: "/canales/deportes/winsports.png" },
    { nombre: "canal 31", logo: "/canales/deportes/canal31.png" },
    { nombre: "ESPN1", logo: "/canales/deportes/espn.png" },
    { nombre: "ESPN 2", logo: "/canales/deportes/Espn2R.png" },
    { nombre: "ESPN 3", logo: "/canales/deportes/espn3R.png" },
    { nombre: "ESPN 4", logo: "/canales/deportes/espn4R.png" },
    { nombre: "ESPN 5", logo: "/canales/deportes/espn5R.png" },
    { nombre: "ESPN 6", logo: "/canales/deportes/espn6R.png" },
    { nombre: "ESPN 7", logo: "/canales/deportes/ESPN7.png" },
  ],
  infantiles: [
    { nombre: "Cartoon Network", logo: "/canales/infantiles/CartoonR.png" },
    { nombre: "Cartoonito", logo: "/canales/infantiles/CartoonitoR.png" },
    { nombre: "Adult Swim", logo: "/canales/infantiles/Adult_SwimR.png" },
    { nombre: "Discovery Kids", logo: "/canales/infantiles/discovery-kidsR.png" },
    { nombre: "Tooncast", logo: "/canales/infantiles/Tooncast.png" },
    { nombre: "Canal Infantil", logo: "/canales/infantiles/Canal_InfantilR.png" },
    { nombre: "Disney Channel", logo: "/canales/infantiles/disney_channel.png" },
    { nombre: "Disney Junior", logo: "/canales/infantiles/Disney_Jr.png" },
    { nombre: "BabyTV", logo: "/canales/infantiles/babytvR.png" },
  ],
  peliculas: [
    { nombre: "Cine canal", logo: "/canales/peliculas/Cinecanal.webp" },
    { nombre: "lifeTime", logo: "/canales/peliculas/lifetimeR.png" },
    { nombre: "latele", logo: "/canales/peliculas/LaTele.png" },
    { nombre: "Sony channel", logo: "/canales/peliculas/sonychannelR.jpg" },
    { nombre: "Az cimena", logo: "/canales/peliculas/azcinema.png" },
    { nombre: "Space", logo: "/canales/peliculas/spaceR.png" },
    { nombre: "Cine premium", logo: "/canales/peliculas/cinepremiumR.png" },
    { nombre: "FX", logo: "/canales/peliculas/fxR.png" },
    { nombre: "star channel", logo: "/canales/peliculas/starchannelR.png" },
    { nombre: "tnt", logo: "/canales/peliculas/TNT.png" },
    { nombre: "universal", logo: "/canales/peliculas/universalR.png" },
    { nombre: "cine hispano", logo: "/canales/peliculas/cinehispanoR.png" },
    { nombre: "golden-edge", logo: "/canales/peliculas/EdgeR.png" },
    { nombre: "cine familiar", logo: "/canales/peliculas/cinefamiliaR.webp" },
    { nombre: "studio universal", logo: "/canales/peliculas/studiouniversalR.png" },
    { nombre: "sony movie", logo: "/canales/peliculas/sonymovieR.png" },
    { nombre: "USA", logo: "/canales/peliculas/usaR.png" },
    { nombre: "AXN", logo: "/canales/peliculas/axn.png" },
    { nombre: "Entertain", logo: "/canales/peliculas/Entertain.png" },
    { nombre: "azteca internacional", logo: "/canales/peliculas/aztecainternacional.png" },
  ],
  musicales: [
    { nombre: "MI MUSICA REGGUETON", logo: "/canales/musicales/MIMUSICAREGGUETON.png" },
    { nombre: "MI MUSICA SALSA", logo: "/canales/musicales/MIMUSICASALSA.png" },
    { nombre: "HTV", logo: "/canales/musicales/Htv.png" },
    { nombre: "BANDAMAX", logo: "/canales/musicales/bandamax.png" },
    { nombre: "Telehitmusica", logo: "/canales/musicales/Telehitmusica.png" },
    { nombre: "MI MUSICA POPULAR", logo: "/canales/musicales/mimusicapopular.png" },
    { nombre: "LA KALLE", logo: "/canales/musicales/LaKalle.png" },
  ],
  documentales: [
    { nombre: "HISTORY", logo: "/canales/documentales/History.png" },
    { nombre: "INVESTIGATION DISCOVERY", logo: "/canales/documentales/InvestigationDiscovery.png" },
    { nombre: "EL MUNDO DEL CAMPO", logo: "/canales/documentales/mundodecampo.png" },
    { nombre: "DISCOVERY TURBO", logo: "/canales/documentales/DiscoveryTurbo.png" },
    { nombre: "H&H DISCOVERY", logo: "/canales/documentales/h&h DISCOVERY.png" },
    { nombre: "NATIONAL GEOGRAPHIC", logo: "/canales/documentales/NationalGeographic.png" },
    { nombre: "FOOD NETWORK", logo: "/canales/documentales/FOODNETWORK.png" },
    { nombre: "A&E", logo: "/canales/documentales/A&E.png" },
    { nombre: "DISCOVERY CHANNEL", logo: "/canales/documentales/discoverychannel.png" },
    { nombre: "SCI", logo: "/canales/documentales/DiscoveryScience.png" },
    { nombre: "HGTV", logo: "/canales/documentales/htvg.png" },
    { nombre: "HISTORY 2", logo: "/canales/documentales/hystori2.png" },
    { nombre: "DW", logo: "/canales/documentales/dw.png" },
    { nombre: "ANIMAL PLANET", logo: "/canales/documentales/animalplanet.png" },
  ],
  religiosos: [
    { nombre: "ENLACE", logo: "/canales/religiosos/Enlace.png" },
    { nombre: "CRISTO VISION", logo: "/canales/religiosos/Cristovision.png" },
    { nombre: "CANAL LUZ", logo: "/canales/religiosos/canaluz.png" },
    { nombre: "EWTN", logo: "/canales/religiosos/New_EWTN.png" },
  ],
  noticiasnovelas: [
    { nombre: "NTN24", logo: "/canales/noticiasynovelas/NTN24.png" },
    { nombre: "CANAL 9", logo: "/canales/noticiasynovelas/canal9.png" },
    { nombre: "RCN", logo: "/canales/noticiasynovelas/Canal_RCN.png" },
    { nombre: "RCN_Novelas", logo: "/canales/noticiasynovelas/RCN_Novelas.png" },
    { nombre: "CNN INTERNATIONAL", logo: "/canales/noticiasynovelas/cnninternational.png" },
    { nombre: "CNN", logo: "/canales/noticiasynovelas/cnn.png" },
    { nombre: "TELEMUNDO INTERNACIONAL", logo: "/canales/noticiasynovelas/telemundo.png" },
    { nombre: "TNT SERIE", logo: "/canales/noticiasynovelas/tntserie.png" },
    { nombre: "UNIVISION", logo: "/canales/noticiasynovelas/Univision.png" },
    { nombre: "AZTECA INTERNACIONAL", logo: "/canales/noticiasynovelas/Aztecainter.png" },
    { nombre: "LAS ESTRELLAS", logo: "/canales/noticiasynovelas/lasestrella.png" },
    { nombre: "PASIONES", logo: "/canales/noticiasynovelas/Pasiones.png" },
    { nombre: "TELENOVELAS", logo: "/canales/noticiasynovelas/tlnovelas.png" },
    { nombre: "AZ CORAZON", logo: "/canales/noticiasynovelas/corazon.png" },
    { nombre: "DISTRITO COMEDIA", logo: "/canales/noticiasynovelas/DistritoComedia.png" },
    { nombre: "TNT NOVELAS", logo: "/canales/noticiasynovelas/TNTNovelas.png" },
    { nombre: "RCN NUESTRA TELE", logo: "/canales/noticiasynovelas/RCNNuestra.png" },
  ],
};

// ================= CARD CANAL =================
const CanalCard = ({ nombre, logo, index }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`
        group relative overflow-hidden
        rounded-xl
        bg-slate-400
        border border-yellow-400
        p-6 flex flex-col items-center justify-center
        text-center text-black
        font-semibold
        transition-all duration-700 ease-out
        shadow-[0_0_25px_rgba(234,179,8,0.45)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        md:hover:scale-105
        md:hover:border-yellow-500
        active:scale-95
      `}
    >
      <div
        className="
          absolute inset-0 bg-black
          [background-image:radial-gradient(#38bdf8_0.8px,transparent_0.8px)]
          [background-size:18px_18px]
          opacity-20 transition duration-500
          group-hover:opacity-70
        "
      />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <img
          src={logo}
          alt={nombre}
          className="h-14 object-contain drop-shadow-lg"
        />
        <span className="text-xs font-bold tracking-wide">
          {nombre}
        </span>
      </div>
    </div>
  );
};

// ================= SECTION =================
const Section = ({ title, items }) => (
  <section className="mb-24">
    <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-widest">
      {title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {items.map((canal, i) => (
        <CanalCard
          key={i}
          index={i}
          nombre={canal.nombre}
          logo={canal.logo}
        />
      ))}
    </div>
  </section>
);

// ================= PAGE =================
const Canales = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-blue-950 py-16 md:py-24 px-6 overflow-hidden">
      <div className="container mx-auto relative z-10">
        
        {/*  LOGO  */}
        <div className="relative flex flex-col items-center justify-center max-w-4xl mx-auto mb-10 md:mb-16">
          
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 text-center leading-tight">
            Television  Digital
          </h1>

          {/* LOGO ABEJA*/}
          <div className="mt-4 md:mt-0 md:absolute md:-right-10 lg:-right-24 md:top-0">
            <img 
              src="/imgPrincipales/Logoabeja.png" 
              alt="Logo Abeja" 
              className="w-24 md:w-40 lg:w-48 h-auto animacion-flotar pointer-events-none drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            />
          </div>
        </div>

        <Section title="Regionales" items={canales.regionales} />
        <Section title="Deportes" items={canales.deportes} />
        <Section title="Infantiles" items={canales.infantiles} />
        <Section title="Peliculas" items={canales.peliculas} />
        <Section title="Musicales" items={canales.musicales} />
        <Section title="Documentales" items={canales.documentales} />
        <Section title="Religiosos" items={canales.religiosos} />
        <Section title="Noticias/Novelas" items={canales.noticiasnovelas} />
      </div>

      {/* GRADIENTE INFERIOR */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />
    </div>
  );
};

export default Canales;