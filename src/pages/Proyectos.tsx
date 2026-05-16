import StarsOrbit from '../components/StarsOrbit';

const Proyectos = () => {
  const projects = [
    { title: "Proyecto Alpha", status: "EN DESARROLLO", tags: ["Unity", "2D"], color: "bg-[#7c3aed]" },
    { title: "Proyecto Beta", status: "PRÓXIMAMENTE", tags: ["React", "Web"], color: "bg-gray-600" },
    { title: "Proyecto Gamma", status: "COMPLETADO", tags: ["Multijugador", "C++"], color: "bg-emerald-800" },
    { title: "Proyecto Delta", status: "EN DESARROLLO", tags: ["Unity", "3D"], color: "bg-[#7c3aed]" },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <StarsOrbit />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <header className="flex flex-col items-center gap-3 mb-16 pt-12 text-center">
          <h1 className="text-4xl font-black uppercase tracking-widest text-white" style={{ textShadow: '0 0 30px rgba(124,58,237,0.8)' }}>PROYECTOS</h1>
          <p className="text-sm uppercase tracking-widest text-white/40">Lo que estamos construyendo</p>
          <div className="bg-gradient-to-r from-transparent via-[#7c3aed]/60 to-transparent h-px w-2/3 mx-auto mt-4" />
        </header>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-8 border-b border-white/5 pb-16">
              <span className="text-7xl font-black text-[#7c3aed]/30 select-none">
                0{index + 1}
              </span>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded ${project.color}`}>
                    {project.status}
                  </span>
                </div>
                
                <h2 className="text-3xl font-black">{project.title}</h2>
                <p className="text-[rgba(255,255,255,0.45)] max-w-2xl leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs border border-white/10 rounded-full text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
