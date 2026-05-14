import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Categorías", href: "#", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
        { name: "Populares", href: "#", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { name: "Nuevos", href: "#", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { name: "Mi Perfil", href: "#", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
        { name: "Configuración", href: "#", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gaming-black text-white">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex flex-1 relative overflow-hidden">
                {/* Sidebar Overlay */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                    ></div>
                )}

                {/* Sidebar */}
                <aside
                    className={`fixed top-0 left-0 h-full w-72 bg-gaming-charcoal border-r border-white/5 shadow-2xl p-8 transform transition-all duration-500 ease-out z-40 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="mt-20">
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-gaming-purple/80">
                            Navegación
                        </h2>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="flex items-center space-x-4 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-gaming-purple transition-all duration-300 group"
                                    >
                                        <svg className="w-5 h-5 text-gray-500 group-hover:text-gaming-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={link.icon} />
                                        </svg>
                                        <span className="font-medium">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-gaming-purple/20 to-transparent border border-gaming-purple/20">
                            <p className="text-xs text-gray-400 mb-2">Estado del Servidor</p>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-bold">Online</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className={`flex-1 transition-all duration-500 ease-in-out ${isOpen ? "ml-72 opacity-50 scale-[0.98]" : ""}`}>
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
