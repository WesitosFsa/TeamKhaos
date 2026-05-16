import { useState, useEffect, useRef } from "react";
import StarsOrbit from "../components/StarsOrbit";

const slides = [
  { city: "Team Khaos", country: "Miembros", img: "/Grupales/Equipo.jpg" },
  {
    city: "Equipo de Desarrollo",
    country: "Estudio",
    img: "/Grupales/Equipo2.jpg",
  },
  { city: "Nuestro Equipo", country: "Creativo", img: "/Grupales/Equipo3.png" },
  { city: "Team Khaos 2026", country: "Oficial", img: "/Grupales/Equipo4.jpg" },
];

const IMAGE_PARTS = 1;

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoChangeRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    autoChangeRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(autoChangeRef.current);
  }, [activeSlide]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === activeSlide ? "opacity-100" : "opacity-0"}`}
        >
          {Array.from({ length: IMAGE_PARTS }).map((_, part) => (
            <div
              key={part}
              className="absolute top-0 bottom-0 transition-transform duration-1000 ease-in-out"
              style={{
                left: `${part * (100 / IMAGE_PARTS)}%`,
                width: `${100 / IMAGE_PARTS}%`,
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow: "inset 0 0 60px rgba(124, 58, 237, 0.15)",
                transform:
                  i === activeSlide
                    ? "translateX(0)"
                    : i > activeSlide
                      ? "translateX(100px)"
                      : "translateX(-100px)",
              }}
            />
          ))}
          <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent flex flex-col items-center justify-center">
            <span className="text-white/60 uppercase tracking-widest text-sm font-bold mb-2">
              {slide.country}
            </span>
            <h2 className="text-white text-5xl font-black">{slide.city}</h2>
          </div>
        </div>
      ))}
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === activeSlide ? "bg-[#7c3aed]" : "bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

const Nosotros = () => {
  const team = [
    {
      name: "WESITOS",
      role: "Programador Principal",
      img: "/Miembros/Wesos.jpg",
      description:
        "Líder del equipo y programador principal, responsable de la arquitectura del juego y la implementación de mecánicas clave.",
    },
    {
      name: "DGOBAND64",
      role: "Programador de Juego",
      img: "/Miembros/Diego.jpg",
      description:
        "Encargado de la programación de mecánicas de juego, inteligencia artificial y optimización del rendimiento.",
    },
    {
      name: "WACKO",
      role: "Desarrollador",
      img: "/Miembros/Wacko.jpg",
      description:
        "Desarrollador versátil que colabora en diversas áreas del proyecto, desde la programación hasta el diseño de niveles.",
    },
    {
      name: "KAIROS",
      role: "Diseñador 3d / Developer",
      img: "/Miembros/Kairos.jpg",
      description:
        "Responsable del diseño y modelado 3D, así como de la integración de assets en el motor de juego.",
    },
    {
      name: "HIDOKUN",
      role: " Diseñador 2d / Project Manager ",
      img: "/Miembros/Yub.jpg",
      description:
        "Líder de proyecto y diseñador 2D, encargado de la dirección artística y la gestión del equipo.",
    },
    {
      name: "Aleja",
      role: "Publicidad y Marketing",
      img: "/Miembros/Aleja.jpg",
      description:
        "Encargada de la estrategia de marketing, redes sociales y promoción del juego para aumentar su visibilidad y alcance.",
    },

    {
      name: "F4RAM",
      role: "Desarrollador",
      img: "/Miembros/F4ram.jpg",
      description:
        "Desarrollador que colabora en la programación de mecánicas de juego y la implementación de características adicionales.",
    },
    {
      name: "NAIM Z",
      role: "Desarrollador",
      img: "/Miembros/Naim.jpeg",
      description:
        "Desarrollador que se enfoca en la optimización del rendimiento y la corrección de errores para garantizar una experiencia de juego fluida.",
    },
    {
      name: "JøsuSTK",
      role: "Programador de Juegos / Diseñador de Niveles",
      img: "/Miembros/Josu.jpg",
      description:
        "Responsable de la programación de mecánicas de juego y el diseño de niveles, creando experiencias desafiantes y atractivas para los jugadores.",
    },
    {
      name: "HANLY",
      role: "Diseñador de Sonido y Compositor",
      img: "/Miembros/Hanly.jpg",
      description:
        "Encargado de la creación de efectos de sonido y música para el juego, contribuyendo a la atmósfera y la inmersión del jugador.",
    },
    { 
      name: "Erick", 
      role: "Desarrollador", 
      img: "/Miembros/Erick.jpg", 
      description: 
      "Desarrollador que colabora en la programación de mecánicas de juego y la implementación de características adicionales." },
    { 
      name: "Mallita", 
      role: "Recursos Humanos", 
      img: "/Miembros/Mallita.jpg", 
      description: "Encargada de la gestión de recursos humanos y el apoyo en la coordinación del equipo." }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <StarsOrbit />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {/* Slider Section */}
        <section className="mb-24">
          <Slider />
        </section>
        {/* Separador */}
        <div className="w-full flex items-center gap-4 px-6 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/50 to-transparent" />
        </div>
        {/* Section: Team */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex flex-col items-center gap-3 mb-16">
            <h1
              className="text-4xl font-black uppercase tracking-widest text-white"
              style={{ textShadow: "0 0 30px rgba(124,58,237,0.8)" }}
            >
              EL TEAM KHAOS
            </h1>
            <p className="text-sm uppercase tracking-widest text-white/40">
              12 personas haciendo khaos desde Ecuador
            </p>
            <div className="bg-gradient-to-r from-transparent via-[#7c3aed]/60 to-transparent h-px w-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-[#111] rounded-2xl border border-[rgba(255,255,255,0.07)] overflow-hidden flex flex-col"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="font-black text-xl uppercase mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#7c3aed] text-xs uppercase tracking-widest mb-4">
                    {member.role}
                  </p>
                  <p className="text-[rgba(255,255,255,0.45)] text-sm mb-6 flex-grow">
                    {member.description}
                  </p>
                  <div className="flex justify-center gap-4 text-[#7c3aed] text-sm font-bold mt-auto">
                    <span>@usuario</span>
                    <span>Portfolio</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;
