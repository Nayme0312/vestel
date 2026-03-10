
import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Snow = () => {
  const canvasRef = useRef();
  const { nevar } = useContext(ThemeContext);

  useEffect(() => {
    if (!nevar) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const flakes = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      d: Math.random() * 2 + 1,
      vx: Math.random() * 1 - 0.3, // viento lateral  
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.beginPath();

      flakes.forEach(f => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      });

      ctx.fill();
      update();
      requestAnimationFrame(draw);
    };

    const update = () => {
      flakes.forEach(f => {
        f.y += f.d;
        f.x += f.vx;

        if (f.y > canvas.height) {
          f.y = 0;
          f.x = Math.random() * canvas.width;
        }

        if (f.x > canvas.width) f.x = 0;
        if (f.x < 0) f.x = canvas.width;
      });
    };

    draw();
  }, [nevar]);

  if (!nevar) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999]"
    />
  );
};

export default Snow;