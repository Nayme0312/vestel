import React from "react";

const sedes = [
  {
    ciudad: "YOPAL",
    direccion: "Carrera 20 # 26-76",
    barrio: "Provivienda",
    email: "yopal@vestel.com.co",
    telefono: "573001112233",
    imagen: "/imgPrincipales/sede1.jpg",
  },
  {
    ciudad: "MONTERREY",
    direccion: "Calle 20a # 13-36",
    barrio: "Esteros",
    email: "monterrey@vestel.com.co",
    telefono: "573002223344",
    imagen: "/imgPrincipales/sede2.jpg",
  },
  {
    ciudad: "VILLANUEVA",
    direccion: "Carrera 7 # 11-47",
    barrio: "Bello Horizonte",
    email: "villanueva@vestel.com.co",
    telefono: "573003334455",
    imagen: "/imgPrincipales/sede3.jpg",
  },
  {
    ciudad: "TAURAMENA",
    direccion: "Carrera 11 # 7-06",
    barrio: "Palmarito",
    email: "tauramena@vestel.com.co",
    telefono: "573004445566",
    imagen: "/imgPrincipales/sede4.jpg",
  },
  {
    ciudad: "AGUAZUL",
    direccion: "Calle 12 # 14-27",
    barrio: "El Centro",
    email: "aguazul@vestel.com.co",
    telefono: "573005556677",
    imagen: "/imgPrincipales/sede5.jpg",
  },
];

const Contacto = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-blue-950 overflow-hidden">
      
      {/* CABECERA   */}
      <div className="relative flex flex-col items-center justify-center max-w-4xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-center text-white text-3xl sm:text-4xl font-bold">
          Nuestras Sedes
        </h2>
        
        {/* LOGO ABEJA */}
        <div className="mt-4 md:mt-0 md:absolute md:-right-12 lg:-right-24 md:-top-6">
          <img 
            src="/imgPrincipales/Logoabeja.png" 
            alt="Logo Abeja" 
            className="w-24 md:w-36 lg:w-44 h-auto animacion-flotar pointer-events-none drop-shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {sedes.map((sede, index) => {
          const direccionCompleta = `${sede.direccion} ${sede.ciudad}`;

          return (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              {/* IMAGEN */}
              <img
                src={sede.imagen}
                alt={sede.ciudad}
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition flex flex-col items-center justify-center text-white p-4 sm:p-6 text-center">
                <span className="text-yellow-400 text-2xl sm:text-3xl mb-2 sm:mb-3">
                  📍
                </span>

                <h3 className="text-lg sm:text-xl font-bold">
                  {sede.ciudad}
                </h3>

                <p className="text-sm sm:text-sm mt-2">
                  {sede.direccion}
                </p>
                <p className="text-xs sm:text-sm text-gray-200">
                  {sede.barrio}
                </p>

                {/* CORREO */}
                <a
                  href={`mailto:${sede.email}`}
                  className="mt-4 border border-yellow-400 px-5 sm:px-6 py-2 text-sm font-bold text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
                >
                  {sede.email.toUpperCase()}
                </a>

                {/* GOOGLE MAPS */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    direccionCompleta
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-blue-300 hover:underline"
                >
                  Ver en Google Maps
                </a>
              </div>

              {/* WHATSAPP ICONO */}
              <a
                href={`https://wa.me/${sede.telefono}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-20"
                title="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-black"
                >
                  <path d="M16 2C8.3 2 2 8.1 2 15.7c0 2.8.7 5.4 2.1 7.8L2 30l6.7-2c2.3 1.2 4.9 1.9 7.3 1.9 7.7 0 14-6.1 14-13.7C30 8.1 23.7 2 16 2zm0 25.1c-2.2 0-4.4-.6-6.3-1.8l-.4-.2-4 1.2 1.3-3.8-.3-.4c-1.3-2-2-4.2-2-6.5C4.3 9.2 9.6 4 16 4s11.7 5.2 11.7 11.7S22.4 27.1 16 27.1zm6.4-8.7c-.3-.2-1.9-.9-2.2-1s-.6-.2-.9.2-.9 1-.9 1.1-.3.2-.6.1c-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.8-1.6-2.1-.2-.3 0-.5.2-.6.2-.2.3-.3.5-.5.2-.2.3-.3.4-.5.1-.2.1-.4 0-.6s-.9-2.1-1.2-2.9c-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 3c0 1.8 1.3 3.5 1.5 3.7.2.2 2.6 4 6.3 5.5.9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z" />
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contacto;