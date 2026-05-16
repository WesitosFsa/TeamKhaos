
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const location = useLocation();
  const isVisitor = location.pathname.startsWith('/visitante');

  const navLinks = [
    { name: 'Inicio', path: '/visitante' },
    { name: 'Juegos', path: '/visitante/juegos' },
    { name: 'Proyectos', path: '/visitante/proyectos' },
    { name: 'Nosotros', path: '/visitante/nosotros' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-white/5 bg-gaming-black/80">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left: Hamburger & Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <a href={isVisitor ? "/visitante" : "/home"} className="flex items-center ml-6 group transition-transform duration-300 hover:scale-105">
              <img src="/Team_Khaos_pixel2.png" alt="Team Khaos Logo" className="h-10 object-contain" />
            </a>
          </div>

          {/* Center: Empty Space */}
          <div className="flex-1"></div>

          {/* Right: Navigation Links */}
          <div className="flex items-center space-x-2">
            {isVisitor && (
              <div className="hidden md:flex items-center space-x-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className={`px-4 py-2 font-bold uppercase tracking-wider text-sm transition-all relative group ${
                        isActive ? 'text-gaming-purple' : 'text-white hover:text-white'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${isActive ? 'bg-gaming-purple scale-x-100' : 'bg-white group-hover:bg-white'}`} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
