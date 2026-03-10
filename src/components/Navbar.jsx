import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

/* ANIMACIONES NAVBAR */
const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const navItem = {
  hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

const Navbar = () => {
  const { esNavidad } = useContext(ThemeContext);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setSubmenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollNav(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ESTILO LINKS MENÚ MÓVIL */
    const mobileLinkStyle = (path) =>
      `px-6 py-4 font-bold text-lg border border-blue-200 rounded-3xl mx-4 my-2 shadow-md transition-all duration-200 flex items-center justify-between
      ${
        location.pathname === path
          ? "bg-yellow-400 text-black"
          : "text-[#0f1e3a] bg-blue-100 hover:bg-yellow-400 hover:text-black"
      }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 text-white transition-all duration-500
        ${scrollNav ? "bg-[#0f1e3a] py-3 shadow-2xl" : "bg-transparent py-5"}`}
      >
        <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">

          {/* BOTÓN HAMBURGUESA */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300
              ${mobileMenuOpen ? "rotate-45 translate-y-1.5 bg-yellow-400" : "group-hover:bg-yellow-400"}`}
            />

            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1
              ${mobileMenuOpen ? "opacity-0" : "group-hover:bg-yellow-400"}`}
            />

            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1
              ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5 bg-yellow-400" : "group-hover:bg-yellow-400"}`}
            />
          </button>

          {/* LOGO */}
          <Link
            to="/"
            className="font-black text-2xl tracking-tighter hover:text-yellow-400 transition-all duration-300"
          >
            Vestel SAS
          </Link>

          {/* MENU DESKTOP */}
          <motion.ul
            variants={navContainer}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center gap-8 font-bold text-[13px] uppercase tracking-wide"
          >
            <motion.li variants={navItem}>
              <motion.div whileHover={{ scale: 1.08 }}>
                <Link
                  to="/"
                  className={`hover:text-yellow-400 transition ${isHome ? "text-yellow-400" : ""}`}
                >
                  Inicio
                </Link>
              </motion.div>
            </motion.li>

            <motion.li className="relative" ref={menuRef} variants={navItem}>
              <motion.button
                onClick={() => setSubmenuOpen(!submenuOpen)}
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-1 hover:text-yellow-400 transition uppercase font-bold"
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              {submenuOpen && (
                <ul className="absolute top-full left-0 mt-4 w-60 bg-[#22365d] rounded-xl shadow-2xl overflow-hidden border border-white/10">
                  <li>
                    <Link
                      to="/planes"
                      onClick={() => setSubmenuOpen(false)}
                      className="block px-6 py-4 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Planes de Internet
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/canales"
                      onClick={() => setSubmenuOpen(false)}
                      className="block px-6 py-4 hover:bg-yellow-500 hover:text-black transition border-t border-white/5"
                    >
                      Television Digital
                    </Link>
                  </li>
                </ul>
              )}
            </motion.li>

            <motion.li variants={navItem}>
              <motion.div whileHover={{ scale: 1.08 }}>
                <Link to="/reporta-falla" className="hover:text-yellow-400 transition">
                  Reportar Fallas
                </Link>
              </motion.div>
            </motion.li>

            <motion.li variants={navItem}>
              <motion.div whileHover={{ scale: 1.08 }}>
                <Link to="/PQR" className="hover:text-yellow-400 transition">
                  PQR
                </Link>
              </motion.div>
            </motion.li>

            <motion.li variants={navItem}>
              <motion.div whileHover={{ scale: 1.08 }}>
                <Link to="/sobre-nosotros" className="hover:text-yellow-400 transition">
                  Nosotros
                </Link>
              </motion.div>
            </motion.li>

            <motion.li variants={navItem}>
              <motion.div whileHover={{ scale: 1.08 }}>
                <Link to="/contacto" className="hover:text-yellow-400 transition">
                  Contáctanos
                </Link>
              </motion.div>
            </motion.li>
          </motion.ul>

                {/* BOTÓN REGISTRARSE */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contacto"
                    className={`hidden lg:inline-block px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg transition-all
                    ${esNavidad ? "bg-red-500 text-white" : "bg-yellow-500 text-black hover:bg-yellow-400"}`}
                  >
                    Registrarse
                  </Link>
                </motion.div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#0f1e3a]/70 backdrop-blur-md z-[60] transition-opacity duration-500 lg:hidden 
        ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* SIDEBAR MÓVIL */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-blue-50 z-[70] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden flex flex-col
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-blue-200 bg-[#1a2a4a]">
          <span className="font-black text-xl text-white tracking-tighter italic uppercase">
            Vestel SAS
          </span>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white hover:text-yellow-400 transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col py-4 overflow-y-auto">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle("/")}>Inicio</Link>
          <Link to="/planes" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle("/planes")}>Planes de Internet</Link>
          <Link to="/canales" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle("/canales")}>Televisión Digital</Link>
          <Link to="/reporta-falla" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle("/reporta-falla")}>Reportar Falla</Link>
          <Link to="/PQR" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle("/PQR")}>PQR</Link>
          <Link to="/sobre-nosotros" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle("/sobre-nosotros")}>Nosotros</Link>
          <Link to="/contacto" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle("/contacto")}>Contáctanos</Link>
        </div>

        <div className="mt-auto p-6 bg-[#0f1e3a]">
          <Link
            to="/contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-blue-200 hover:bg-yellow-400 text-black py-4 rounded-3xl font-black text-center block uppercase text-sm shadow-lg active:scale-95 transition-all"
          >
            ¡Regístrate Ahora!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;