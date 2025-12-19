
import React from 'react';
import { Thermometer, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <div className="bg-[#629ad0] p-1.5 rounded-lg">
              <Thermometer className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-black text-lg leading-none">CSP</span>
              <span className="text-[#629ad0] text-[8px] font-bold uppercase tracking-widest leading-none mt-1">Chiller Service Provide</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} CSP Chiller Service Provide. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            Desarrollado con Excelencia Técnica en <span className="text-white">República Dominicana</span>
          </p>
        </div>
      </div>

      <a 
        href="#inicio" 
        className="absolute right-8 top-0 -translate-y-1/2 bg-[#629ad0] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:bg-[#00037b] transition-all"
      >
        <ChevronUp />
      </a>
    </footer>
  );
};

export default Footer;
