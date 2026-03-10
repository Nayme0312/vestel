import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { esNavidad } = useContext(ThemeContext);

  return (
    <footer className="bg-blue-950 text-white py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-5">

        {/* LINKS */}
        <div className="flex flex-col gap-2 text-sm">
          <a href="/transparencia" className="hover:text-yellow-500 transition">Vestel SAS</a>
          <a href="/transparencia" className="hover:text-yellow-500 transition">Transparencia y Normatividad</a>
          <a href="/Terminos" className="hover:text-yellow-500 transition">Términos y condiciones</a>
          <a href="/proteccion-datos" className="hover:text-yellow-500 transition">Tratamiento y protección de datos</a>
          <a href="/neutralidad" className="hover:text-yellow-500 transition">Neutralidad</a>
          <a href="/sagrilaft" className="hover:text-yellow-500 transition">Sagrilaft</a>
          <a href="/Sostenibilidad" className="hover:text-yellow-500 transition">Sostenibilidad</a>
        </div>

        {/* REDES */}
        <div className="flex gap-6 text-xl">
          <a href="https://www.facebook.com/vestelcasanare" className="hover:text-yellow-500 transition"><FaFacebook /></a>
          <a href="https://www.instagram.com/vestel.sas?igsh=MThha2Vzc3UwZDA1Mg==" className="hover:text-yellow-500 transition"><FaInstagram /></a>
          <a href="https://x.com/intent/post?text=Front%20Page&url=https%3A%2F%2Fvestel.com.co&via=" className="hover:text-yellow-500 transition"><FaTwitter /></a>
        </div>

        {/* DERECHOS */}
        <p className="text-sm opacity-70">
          © 2024 Vestel SAS. Todos los derechos reservados.
        </p>
      </div>

      {/* NIEVE SOLO EN NAVIDAD */}
      {esNavidad && (
        <>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-[100%] opacity-90" />
          <div className="absolute bottom-4 left-0 w-full h-10 bg-white/80 rounded-t-[100%]" />
        </>
      )}
    </footer>
  );
};

export default Footer;
