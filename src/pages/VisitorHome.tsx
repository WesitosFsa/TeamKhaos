import { useLocation } from 'react-router-dom';
import StarBackground from '../components/StarBackground';

const VisitorHome = () => {
  const location = useLocation();
  const activeTab = location.pathname.includes('/juegos') ? 'juegos' : location.pathname.includes('/proyectos') ? 'proyectos' : 'inicio';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <StarBackground />
      <div className="relative z-10">
      {/* 1. Hero Section */}
      {activeTab === 'inicio' && (
        <section className="relative w-full bg-transparent overflow-hidden py-24">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#7c3aed] opacity-5 blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#7c3aed]/15 text-[#7c3aed] text-xs font-bold uppercase tracking-widest border border-[#7c3aed]/20">
                Estudio Independiente
              </span>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Creamos <span className="text-[#7c3aed]">experiencias</span> épicas
              </h1>
              <p className="text-lg text-[rgba(255,255,255,0.45)]">
                Desarrollamos mundos inmersivos, mecánicas innovadoras y historias que te atraparán desde el primer segundo.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] font-bold rounded-lg transition-all">Ver Juegos</button>
                <button className="px-8 py-3 border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.2)] font-bold rounded-lg transition-all">Comunidad</button>
              </div>
            </div>
            <div className="relative h-[320px] hidden md:block">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="absolute w-64 h-40 bg-[#111111] rounded-xl border border-[rgba(255,255,255,0.07)] shadow-2xl"
                  style={{ top: `${i * 40}px`, left: `${i * 30}px`, zIndex: i }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-[#111] rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. Juegos Destacados */}
      {(activeTab === 'inicio' || activeTab === 'juegos') && (
        <section className="w-full py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black uppercase">Juegos Destacados</h2>
              <a href="#" className="text-[#7c3aed] font-bold hover:underline">Ver todos →</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Acción', 'RPG', 'Aventura'].map((genre, i) => (
                <div key={i} className="p-4 bg-[#111111] rounded-xl border border-[rgba(255,255,255,0.07)] hover:border-[#7c3aed]/50 transition-all">
                  <div className="h-48 bg-gradient-to-tr from-[#1a1a1a] to-[#222] rounded-lg mb-4"></div>
                  <h3 className="font-bold text-lg">Título de Juego {i + 1}</h3>
                  <span className="text-xs font-bold text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-1 rounded">{genre}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Últimas Noticias */}
      {activeTab === 'inicio' && (
        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-black uppercase mb-10">Últimas Noticias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-[#111111] rounded-xl border border-[rgba(255,255,255,0.07)]">
                <span className="text-[#7c3aed] text-sm font-bold">16 MAY, 2026</span>
                <h3 className="text-3xl font-black mt-2 mb-4">Gran anuncio del nuevo proyecto</h3>
                <p className="text-[rgba(255,255,255,0.45)]">Estamos emocionados de revelar en qué hemos estado trabajando los últimos meses.</p>
              </div>
              <div className="flex flex-col gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 bg-[#111111] rounded-xl border border-[rgba(255,255,255,0.07)] flex items-center gap-4">
                    <div className="w-20 h-20 bg-[#1a1a1a] rounded-lg"></div>
                    <div>
                      <h4 className="font-bold">Noticia corta {i}</h4>
                      <p className="text-sm text-[rgba(255,255,255,0.45)]">Detalle rápido sobre la novedad.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. CTA Comunidad */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto p-12 bg-[#14082a] border border-[#7c3aed]/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-white mb-2">Únete a la comunidad</h2>
            <p className="text-[rgba(255,255,255,0.45)]">Sé parte del crecimiento de Team Khaos y habla con otros desarrolladores.</p>
          </div>
          <button className="px-8 py-4 bg-[#7c3aed] hover:bg-[#6d28d9] font-bold rounded-lg transition-all whitespace-nowrap">Entrar ahora</button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default VisitorHome;
