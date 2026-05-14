
interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-white/5 bg-gaming-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* Hamburger menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo and Brand */}
            <a
              href="/"
              className="flex items-center space-x-3 ml-4 group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gaming-purple blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                <img
                  src="public/logo.png"
                  alt="logo"
                  className="relative h-12 w-12 rounded-xl object-contain border border-white/10 shadow-lg"
                />
              </div>
              <span className="font-black text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                TEAM KHAOS
              </span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500 group-focus-within:text-gaming-purple transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Explorar juegos..."
                className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-2.5 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gaming-purple/50 focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 5.158 6 8.583 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0a3 3 0 10-6 0"></path>
              </svg>
            </button>
            
            <a href="#" className="hidden sm:block">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Profile"
                className="h-10 w-10 rounded-xl border border-white/10 hover:border-gaming-purple transition-all cursor-pointer shadow-lg"
              />
            </a>

            <button className="relative px-6 py-2.5 bg-gaming-purple hover:bg-gaming-purple/90 text-white font-bold rounded-xl transition-all duration-300 purple-glow-hover active:scale-95 text-sm uppercase tracking-wider overflow-hidden group">
              <span className="relative z-10 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Subir
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
