
import React from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por contactarnos. Nuestro equipo técnico se comunicará con usted en breve.");
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-[#629ad0] font-bold tracking-widest uppercase text-sm mb-3">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#00037b] mb-8">Hablemos de su Próximo Proyecto</h3>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Estamos disponibles para brindarle asesoría especializada en cualquier momento. Nuestro compromiso es su eficiencia operativa.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#00037b]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#00037b] text-xl mb-1">Visítenos</h4>
                  <p className="text-gray-600">Calle Eliseo Grullón #10, sector Los Prados, Santo Domingo, República Dominicana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#00037b]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#00037b] text-xl mb-1">Teléfonos</h4>
                  <p className="text-gray-600">829-594-4701 / 829-447-7826</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#00037b]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#00037b] text-xl mb-1">Correos Electrónicos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-gray-600 text-sm">
                    <span>g.hernandez@csprd.net</span>
                    <span>repuestoscsp@csprd.net</span>
                    <span>jrosario@csprd.net</span>
                    <span>yroacsp@gmail.com</span>
                    <span>lissetterosadocsp@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-[#00037b] mb-4">Síguenos en redes:</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#00037b] hover:bg-[#629ad0] hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#00037b] hover:bg-[#629ad0] hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#00037b] hover:bg-[#629ad0] hover:text-white transition-all"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-inner border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#00037b] mb-2">Nombre Completo</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border-gray-200 border focus:ring-2 focus:ring-[#629ad0] focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#00037b] mb-2">Teléfono de Contacto</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border-gray-200 border focus:ring-2 focus:ring-[#629ad0] focus:border-transparent outline-none transition-all" placeholder="809-000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#00037b] mb-2">Correo Electrónico</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border-gray-200 border focus:ring-2 focus:ring-[#629ad0] focus:border-transparent outline-none transition-all" placeholder="ejemplo@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#00037b] mb-2">Tipo de Servicio</label>
                <select className="w-full px-4 py-3 rounded-xl border-gray-200 border focus:ring-2 focus:ring-[#629ad0] focus:border-transparent outline-none transition-all appearance-none bg-white">
                  <option>Mantenimiento Preventivo</option>
                  <option>Asistencia Técnica 24/7 (Urgencia)</option>
                  <option>Cotización de Repuestos</option>
                  <option>Instalación de Equipos</option>
                  <option>Diseño de Proyecto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#00037b] mb-2">Descripción del Requerimiento</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border-gray-200 border focus:ring-2 focus:ring-[#629ad0] focus:border-transparent outline-none transition-all" placeholder="Cuéntenos cómo podemos ayudarle..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#00037b] hover:bg-[#00025a] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]">
                Enviar Mensaje <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
