"use client";

import { SectionWrapper } from "./ui/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <SectionWrapper id="contacto" className="bg-[#0D1B2A] border-t border-[rgba(46,134,222,0.1)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Contact Information */}
        <div className="order-2 lg:order-1">
          <h2 className="text-sm font-medium text-[#2E86DE] tracking-widest uppercase mb-4">
            Contacto y Ubicación
          </h2>
          <h3 className="font-heading font-black text-4xl md:text-5xl tracking-tighter mb-8 text-white">
            Encontranos en {siteConfig.zone.includes("[") ? "nuestra ciudad" : siteConfig.zone}
          </h3>
          
          <div className="space-y-8 mb-10">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A5B] flex items-center justify-center border border-[#2E86DE]/30">
                <svg className="w-5 h-5 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Dirección</h4>
                <p className="text-[#D9D9D9]">
                  {siteConfig.address.includes("[") ? (
                    <span className="bg-[#111111] px-2 py-1 rounded font-mono text-xs">{siteConfig.address}</span>
                  ) : siteConfig.address}
                  <br />
                  {siteConfig.zone}, {siteConfig.city}
                </p>
                {siteConfig.mapsUrl && !siteConfig.mapsUrl.includes("[") && (
                  <a 
                    href={siteConfig.mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-[#2E86DE] hover:underline mt-2 inline-block"
                    onClick={() => trackEvent({ name: 'clic_mapa', params: { location: 'contacto' } })}
                  >
                    Abrir en Google Maps
                  </a>
                )}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A5B] flex items-center justify-center border border-[#2E86DE]/30">
                <svg className="w-5 h-5 text-[#2E86DE]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">WhatsApp</h4>
                <p className="text-[#D9D9D9]">
                  {siteConfig.whatsapp.includes("[") ? (
                    <span className="bg-[#111111] px-2 py-1 rounded font-mono text-xs">{siteConfig.whatsapp}</span>
                  ) : siteConfig.whatsapp}
                </p>
                <p className="text-sm text-[#D9D9D9]/70 mt-1">Respuesta rápida garantizada</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3A5B] flex items-center justify-center border border-[#2E86DE]/30">
                <svg className="w-5 h-5 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Horario de Atención</h4>
                <p className="text-[#D9D9D9]">
                  {siteConfig.hours.includes("[") ? (
                    <span className="bg-[#111111] px-2 py-1 rounded font-mono text-xs">{siteConfig.hours}</span>
                  ) : siteConfig.hours}
                </p>
              </div>
            </div>
          </div>

          <Button 
            href={whatsappUrl} 
            asExternal 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => trackEvent({ name: 'generate_lead', params: { lead_type: 'whatsapp', location: 'contact_section' } })}
          >
            Contactar por WhatsApp
          </Button>
        </div>

        {/* Map / Image location area */}
        <div className="order-1 lg:order-2 h-[400px] lg:h-full min-h-[400px] w-full relative rounded-2xl overflow-hidden glass-card">
          {siteConfig.googleMapsEmbed.includes("[") ? (
            <div className="absolute inset-0 bg-[#111111] flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-[#1B3A5B] m-4 rounded-xl">
              <svg className="w-12 h-12 text-[#2E86DE]/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h4 className="text-white font-medium mb-2">Espacio para Google Maps</h4>
              <p className="text-[#D9D9D9] text-sm">
                Completá <code>googleMapsEmbed</code> en <code>site-config.ts</code> con el iframe de Maps.
              </p>
            </div>
          ) : (
            <div 
              className="absolute inset-0"
              dangerouslySetInnerHTML={{ __html: siteConfig.googleMapsEmbed }}
            />
          )}
        </div>

      </div>
    </SectionWrapper>
  );
}
