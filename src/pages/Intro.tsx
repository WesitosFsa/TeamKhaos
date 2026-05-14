import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LetraA } from "../components/intro/LetraA";
import { LetraH } from "../components/intro/LetraH";
import { LetraK } from "../components/intro/LetraK";
import { LetraO } from "../components/intro/LetraO";
import { LetraS } from "../components/intro/LetraS";
import { ArribaLetra } from "../components/intro/ArribaLetra";
import { AbajoLetra } from "../components/intro/AbajoLetra";
import { Logo } from "../components/intro/Logo";
const Intro = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [flashColor, setFlashColor] = useState("white");

  useEffect(() => {
    // Intro inicial sequence (5s wait as in script.js)
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsFlashing(true);
      setIsShaking(true);

      // Clean up flash and shake after animation duration
      setTimeout(() => {
        setIsFlashing(false);
        setIsShaking(false);
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!isVisible || isExploding) return;

    // 1. Efecto inicial de Luz y Glitch
    setIsFlashing(true);
    setIsGlitching(true);

    // 2. LA EXPLOSIÓN (Ocurre 300ms después del clic)
    setTimeout(() => {
      setIsGlitching(false);
      setIsExploding(true);
      setFlashColor("cyan");

      // Reset flash to trigger animation again
      setIsFlashing(false);
      setTimeout(() => setIsFlashing(true), 10);
    }, 300);

    // 3. Limpieza total y navegación (1000ms después del clic)
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const letters = [
      { char: "K", rand: -2.5 },
      { char: "H", rand: 1.8 },
      { char: "A", rand: -0.5 },
      { char: "O", rand: 2.2 },
      { char: "S", rand: -1.2 },
  ];
  const componentsMap: Record<string, React.FC<any>> = {
    K: LetraK,
    H: LetraH,
    A: LetraA,
    O: LetraO,
    S: LetraS,
  };

  return (
    <div
      id="intro-container"
      className={`intro-container ${isShaking ? "shake-screen" : ""}`}
      onClick={handleClick}
    >
      <div
        className={`flash ${isFlashing ? "flash-active" : ""}`}
        style={{ backgroundColor: flashColor }}
      />

      <img
        src="/Layer cape.png"
        className={`bg-cape ${isVisible ? "visible" : ""} ${isZooming ? "zoom-bg" : ""} ${isGlitching ? "glitch-out" : ""} ${isExploding ? "bg-explode" : ""}`}
        alt="background"
      />

      <div className={`content-wrapper ${isVisible ? "visible" : ""}`}>
        {/* Contenedor de Efectos (Glitch, Explode, Zoom) */}
        <div
          className={`transition-all duration-500 ease-out 
                        ${isZooming ? "scale-105 brightness-110" : "scale-100"} 
                        ${isGlitching ? "glitch-out" : ""} 
                        ${isExploding ? "explode" : ""}`}
          style={{ "--rand": 0.5 } as React.CSSProperties}
        >
          {/* Contenedor de Máscara (Revelado) */}
          <div className={`logo-mask-container ${isVisible ? "logo-mask-reveal" : ""}`}>
            <Logo className="w-full h-auto block" />
          </div>

        </div>

        <div
          className="interactive-group"
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => setIsZooming(false)}
        >
          <ArribaLetra 
            className={`extra-decoration up ${isGlitching ? "glitch-out" : ""} ${isExploding ? "explode" : ""}`} 
          />

          <div className="word-wrapper">
            {letters.map((l, i) => {
              const commonProps = {
                key: i,
                className: `letter ${isGlitching ? "glitch-out" : ""} ${isExploding ? "explode" : ""}`,
                style: {
                  "--rand": l.rand,
                  "--i": i,
                } as React.CSSProperties,
              };

              // Buscamos el componente en nuestro mapa
              const LetterComponent = componentsMap[l.char];

              // Si el componente existe en el mapa, lo usamos
              return LetterComponent ? (
                <LetterComponent {...commonProps} />
              ) : (
                <img {...commonProps} alt={l.char} />
              );
            })}
          </div>
          <AbajoLetra 
            className={`extra-decoration down ${isGlitching ? "glitch-out" : ""} ${isExploding ? "explode" : ""}`} 
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
