"use client";

import { SectionWrapper } from "./ui/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

export default function Services() {
  return (
    <SectionWrapper id="servicios" className="gradient-section">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-[#2E86DE] tracking-widest uppercase mb-4">
          Nuestros Servicios
        </h2>
        <h3 className="font-heading font-black text-4xl md:text-5xl tracking-tighter mb-6 text-white">
          Cuidado especializado para tu vehículo
        </h3>
        <p className="text-[#D9D9D9] text-lg">
          Dedicamos el tiempo exacto que tu vehículo necesita para lograr un 
          resultado visiblemente superior en cada rincón, protegiendo tu inversión.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.services.map((service, index) => (
          <div 
            key={service.id}
            className={`glass-card rounded-2xl p-8 flex flex-col items-start glass-card-hover group transition-all duration-500
              ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            `}
          >
            <div className="w-14 h-14 rounded-xl bg-[#1B3A5B] flex items-center justify-center mb-6 border border-[#2E86DE]/20 group-hover:bg-[#2E86DE] transition-colors duration-300">
               {/* Decorative icon shape instead of complex SVGs for simplicity and performance */}
               <div className="w-6 h-6 border-2 border-white rounded-sm opacity-80" />
            </div>
            
            <h4 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-[#2E86DE] transition-colors">
              {service.name}
            </h4>
            
            <p className="text-[#D9D9D9] leading-relaxed mb-6 flex-1">
              {service.description}
            </p>

            <a 
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=Hola, quiero consultar por el servicio de ${service.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white tracking-wide uppercase hover:text-[#2E86DE] transition-colors mt-auto"
              onClick={() => trackEvent({ name: 'generate_lead', params: { lead_type: 'whatsapp', location: 'services_grid', service_name: service.name } })}
            >
              Consultar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}

        {/* Missing 6th card used as a visual filler/CTA */}
        <div className="rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#1B3A5B] to-[#0D1B2A] border border-[#2E86DE]/30">
          <h4 className="text-2xl font-heading font-bold mb-4 text-white">
            ¿Necesitás asesoramiento?
          </h4>
          <p className="text-[#D9D9D9] leading-relaxed mb-6">
            Escribinos, contanos qué vehículo tenés y te recomendamos el mejor servicio.
          </p>
          <a
             href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
             className="px-6 py-3 bg-[#2E86DE] text-white font-bold rounded-md hover:bg-white hover:text-[#0D1B2A] transition-colors"
             onClick={() => trackEvent({ name: 'generate_lead', params: { lead_type: 'whatsapp', location: 'services_cta' } })}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
