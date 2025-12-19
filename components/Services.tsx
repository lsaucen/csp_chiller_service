
import React from 'react';
import { Layout, Settings, Wrench, Package, Cpu, BarChart3 } from 'lucide-react';

const services = [
  {
    title: "Diseño y Proyectos",
    desc: "Diseño y ejecución de proyectos integrales adaptados a las necesidades específicas de su infraestructura.",
    icon: Layout,
    color: "bg-blue-50"
  },
  {
    title: "Instalación de Equipos",
    desc: "Instalación profesional de sistemas de climatización y refrigeración con estándares internacionales de calidad.",
    icon: Cpu,
    color: "bg-blue-50"
  },
  {
    title: "Remodelación y Sustitución",
    desc: "Actualización de piezas y equipos para mantener la operatividad y eficiencia de sus sistemas antiguos.",
    icon: Settings,
    color: "bg-blue-50"
  },
  {
    title: "Mantenimiento Preventivo",
    desc: "Mantenimientos regulares que permiten detectar y corregir oportunamente posibles fallas, evitando averías mayores.",
    icon: Wrench,
    color: "bg-blue-50"
  },
  {
    title: "Mantenimiento Correctivo",
    desc: "Servicio técnico inmediato las 24 horas para resolver averías y restablecer la rentabilidad operativa.",
    icon: BarChart3,
    color: "bg-blue-50"
  },
  {
    title: "Cotización y Repuestos",
    desc: "Suministro de componentes originales y cotización rápida de equipos de las mejores marcas del mercado.",
    icon: Package,
    color: "bg-blue-50"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#629ad0] font-bold tracking-widest uppercase text-sm mb-3">Nuestra Especialidad</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#00037b] mb-6">Soluciones Integrales</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            En CSP Chiller Service Provide, un servicio técnico eficiente es fundamental para preservar la eficiencia operativa, la rentabilidad y la vida útil de sus equipos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-[#629ad0]/30 hover:shadow-2xl hover:shadow-[#00037b]/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#629ad0]/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-[#629ad0]/10"></div>
              
              <div className="w-14 h-14 bg-[#00037b]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00037b] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#00037b] group-hover:text-white transition-colors" />
              </div>
              
              <h4 className="text-xl font-bold text-[#00037b] mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <a href="#contacto" className="text-[#629ad0] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Más Información <span className="text-xl">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
