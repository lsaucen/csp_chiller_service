
import React, { useState, useEffect } from 'react';
import { Menu, X, Thermometer } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#00037b] shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-[#629ad0] p-1.5 rounded-lg shadow-inner">
              <Thermometer className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl leading-none tracking-tighter">CSP</span>
              <span className="text-[#629ad0] text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Chiller Service Provide</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#629ad0] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                className="bg-[#629ad0] hover:bg-[#00037b] text-white px-5 py-2.5 rounded-lg text-sm font-bold border border-transparent hover:border-[#629ad0] transition-all duration-300"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#629ad0] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-[#00037b] transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#629ad0] block px-3 py-4 text-base font-medium border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-3 py-4">
            <a
              href="#contacto"
              className="block w-full text-center bg-[#629ad0] text-white px-5 py-3 rounded-lg text-base font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Asistencia 24/7
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
