import { useState, useEffect } from 'react';

const Home = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
      title: "Explora Nuevos Mundos",
      subtitle: "Vive experiencias inmersivas con tecnología de vanguardia."
    },
    {
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200",
      title: "Competencia de Élite",
      subtitle: "Únete a los mejores jugadores del mundo en torneos globales."
    },
    {
      src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1200",
      title: "Desarrollo de Próxima Gen",
      subtitle: "Innovación constante en cada línea de código."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Star Animation Helper
  const [stars, setStars] = useState<{ id: number; left: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const starCount = 30;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`
    }));
    setStars(newStars);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-gaming-black">
      {/* Hero Section with Star Animation */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Golden Star Animation Background */}
        <div className="star-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                animationDuration: star.duration,
                animationDelay: star.delay
              }}
            />
          ))}
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gaming-purple/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gaming-purple/10 blur-[120px] rounded-full"></div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto px-4 z-10">
          <div className="relative aspect-[21/9] md:aspect-[21/7] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] bg-gaming-charcoal">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={img.src}
                  className="w-full h-full object-cover brightness-[0.6]"
                  alt={img.title}
                />
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-gaming-black via-transparent to-transparent">
                  <div className={`transition-all duration-700 delay-300 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                      {img.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light mb-8">
                      {img.subtitle}
                    </p>
                    <button className="px-8 py-4 bg-gaming-purple text-white font-bold rounded-xl purple-glow hover:scale-105 transition-all active:scale-95 uppercase tracking-widest text-sm">
                      Comenzar Ahora
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Controls */}
            <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
              <button onClick={prevSlide} className="p-3 glass-morphism rounded-full hover:bg-white/10 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextSlide} className="p-3 glass-morphism rounded-full hover:bg-white/10 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-8 flex space-x-3 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-gaming-purple' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Usuarios Activos", value: "2.5M+" },
            { label: "Juegos Lanzados", value: "150+" },
            { label: "Países", value: "45" },
            { label: "Premios", value: "12" }
          ].map((stat, i) => (
            <div key={i} className="glass-morphism p-8 rounded-3xl border border-white/5 text-center group hover:border-gaming-purple/30 transition-all">
              <div className="text-3xl md:text-4xl font-black text-gaming-purple mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gaming-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">¿Por qué <span className="text-gaming-purple">Khaos</span>?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Elevamos la experiencia de juego a un nivel corporativo sin perder la esencia que nos apasiona.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Rendimiento Extremo", desc: "Motores gráficos optimizados para la máxima fidelidad visual y FPS estables.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Seguridad Total", desc: "Protección de datos y transacciones con encriptación de grado militar.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Comunidad Global", desc: "Conecta con millones de jugadores y comparte tus logros al instante.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-gaming-black border border-white/5 hover:border-gaming-purple/20 transition-all">
                <div className="w-14 h-14 bg-gaming-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gaming-purple transition-colors">
                  <svg className="w-8 h-8 text-gaming-purple group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-24 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
                <div className="text-2xl font-black tracking-widest text-gaming-purple mb-2">TK</div>
                <div className="text-xl font-bold tracking-tighter">TEAM KHAOS</div>
                <p className="text-gray-500 text-sm mt-2">© 2026 Team Khaos. Todos los derechos reservados.</p>
            </div>
            
            <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Soporte</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;