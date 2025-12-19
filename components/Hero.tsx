
import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
          alt="Industrial Chiller Unit" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00037b]/90 via-[#00037b]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-[#629ad0]/20 border border-[#629ad0]/50 px-4 py-2 rounded-full mb-6">
            <Clock className="w-5 h-5 text-[#629ad0]" />
            <span className="text-[#629ad0] font-bold text-sm tracking-wide uppercase">Asistencia Técnica 24/7</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Líderes en <br />
            <span className="text-[#629ad0]">Refrigeración</span> <br />
            Industrial.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
            Especialistas en comercialización, instalación y servicios técnicos de climatización en el sector industrial y comercial de la República Dominicana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="bg-[#629ad0] hover:bg-[#5289bc] text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all duration-300 shadow-xl shadow-[#629ad0]/20 flex items-center justify-center gap-2"
            >
              Solicitar Asistencia 24/7
            </a>
            <a 
              href="#servicios" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg text-center border border-white/20 transition-all duration-300"
            >
              Explorar Servicios
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Equipos de Alta Eficiencia",
              "Soporte Personalizado",
              "Optimización Energética",
              "Repuestos Originales"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#629ad0]" />
                <span className="text-sm font-medium text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic wave shape */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
