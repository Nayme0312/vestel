// src/context/ThemeContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [tema, setTema] = useState("normal");

  useEffect(() => {
    const checkTemporada = () => {
      const ahora = new Date();
      const year = ahora.getFullYear();

      const temporadas = [
        {
          nombre: "navidad",
          inicio: new Date(year, 11, 10),
          fin: new Date(year + 1, 0, 2)
        },
        {
          nombre: "halloween",
          inicio: new Date(year, 9, 25),
          fin: new Date(year, 9, 31)
        }
      ];

      let temaActivo = "normal";

      temporadas.forEach((t) => {
        if (ahora >= t.inicio && ahora <= t.fin) {
          temaActivo = t.nombre;
        }
      });

      setTema(temaActivo);
    };

    checkTemporada();
  }, []);

  return (
    <ThemeContext.Provider value={{ tema }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);