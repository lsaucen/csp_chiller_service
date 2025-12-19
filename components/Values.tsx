
import React from 'react';
import { Award, Zap, HeartHandshake } from 'lucide-react';

const valuesData = [
  {
    title: "Excelencia",
    subtitle: "Compromiso con la excelencia",
    icon: Award,
    description: "Nos comprometemos a ofrecer servicios y soluciones de refrigeración y climatización de la más alta calidad, superando las expectativas de nuestros clientes en cada proyecto. Buscamos la excelencia en todos los aspectos de nuestro trabajo, desde la planificación y el diseño hasta la instalación y el mantenimiento.",
    accent: "bg-[#00037b]"
  },
  {
    title: "Innovación",
    subtitle: "Innovación y sostenibilidad",
    icon: Zap,
    description: "Abrazamos la innovación y nos esforzamos por estar a la vanguardia de las últimas tecnologías en refrigeración y climatización. Nos comprometemos a desarrollar soluciones sostenibles que minimicen el impacto ambiental y maximicen la eficiencia energética, contribuyendo así a un futuro más limpio y sostenible.",
    accent: "bg-[#629ad0]"
  },
  {
    title: "Integridad",
    subtitle: "Integridad y servicio al cliente",
    icon: HeartHandshake,
    description: "Actuamos con integridad en todas nuestras relaciones comerciales y con nuestros colaboradores, manteniendo altos estándares éticos y transparencia en todas nuestras operaciones. Nos esforzamos por construir relaciones sólidas y duraderas con nuestros clientes, basadas en la confianza y el respeto.",
    accent: "bg-[#5e5e5d]"
  }
];

const Values: React.FC = () => {
  return (
    <section className="py-24 bg-[#00037b] text-white overflow-hidden relative">
      {/* Dynamic light effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#629ad0] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#629ad0] rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#629ad0] font-bold tracking-widest uppercase text-sm mb-3">Nuestros Cimientos</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Valores Corporativos</h3>
          <div className="w-24 h-1.5 bg-[#629ad0] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valuesData.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 ${val.accent} rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                <val.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-black mb-2 text-[#629ad0] uppercase tracking-tighter">{val.title}</h4>
              <p className="text-lg font-bold mb-4 text-white/80">{val.subtitle}</p>
              <p className="text-gray-300 leading-relaxed font-light">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
