
import React from 'react';
import { Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00037b]/5 hidden lg:block -skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-[#629ad0] font-bold tracking-widest uppercase text-sm mb-3">Sobre Nosotros</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#00037b] mb-8 leading-tight">
              Compromiso con la Calidad y Satisfacción
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              CSP Chiller Service Provide es una empresa especializada en la comercialización, instalación y servicios técnicos en el ámbito de la refrigeración y climatización, tanto en el sector industrial como comercial.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Contamos con un equipo de profesionales altamente capacitados en las áreas de proyectos, ventas y servicios técnicos, lo que nos permite brindar una atención oportuna, confiable y personalizada.
            </p>
            
            <div className="bg-[#00037b] text-white p-6 rounded-2xl shadow-xl">
              <p className="italic text-lg">
                "Trabajamos con visión de futuro, comprometidos con la excelencia y la innovación constante."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#00037b]" />
              </div>
              <h4 className="text-2xl font-bold text-[#00037b] mb-4 uppercase tracking-tight">Misión</h4>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar soluciones de refrigeración y climatización de vanguardia que superen las expectativas de nuestros clientes. Nos comprometemos a ofrecer servicios y productos de alta calidad, utilizando tecnología innovadora y un enfoque centrado en el cliente para garantizar el desarrollo y cumplimiento óptimo en todos los proyectos y servicios que realizamos.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#629ad0]" />
              </div>
              <h4 className="text-2xl font-bold text-[#00037b] mb-4 uppercase tracking-tight">Visión</h4>
              <p className="text-gray-600 leading-relaxed">
                Ser el referente líder en proyectos y servicios de refrigeración y climatización en la República Dominicana, reconocidos por nuestra excelencia técnica, compromiso con la satisfacción del cliente y contribución al desarrollo sostenible del país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
