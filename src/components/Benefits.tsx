"use client";

import { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

const icons = {
  detail: (
    <svg className="w-8 h-8 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  camera: (
    <svg className="w-8 h-8 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  eye: (
    <svg className="w-8 h-8 text-[#2E86DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
};

const images = [
  { src: "/images/hero-bg.jpeg", alt: "Vehículo con presentación impecable" },
  { src: "/images/espuman.jpeg", alt: "Lavado exterior avanzado con espuma" },
  { src: "/images/espuma.jpeg", alt: "Detalle minucioso de interiores" },
  { src: "/images/motor.jpeg", alt: "Limpieza química de motor" },
];

export default function Benefits() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    if (!sectionRef.current || hasTrackedView.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTrackedView.current) {
          trackEvent({ name: 'vista_galeria', params: { section: 'beneficios_evidencia' } });
          hasTrackedView.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="beneficios" className="bg-[#0a0f16]" ref={sectionRef}>
      <div className="flex flex-col gap-12 lg:gap-16 items-center">
        
        {/* Cabecera: Mensaje Comercial */}
        <div className="w-full max-w-3xl text-center flex flex-col items-center">
          <h2 className="text-sm font-bold text-[#2E86DE] tracking-widest uppercase mb-4">
            Por qué elegirnos
          </h2>
          <h3 className="font-heading font-black text-4xl sm:text-5xl tracking-tighter text-white mb-6 leading-tight">
             El Estándar Victoria. Resultados Irrefutables.
          </h3>
          <p className="text-[#D9D9D9] text-base sm:text-lg font-light leading-relaxed">
            No prometemos limpieza, prometemos cuidado automotriz. Nuestro enfoque combina técnicas seguras, productos precisos y un nivel de detalle que protege tu inversión día tras día.
          </p>
        </div>

        {/* Medio: Carrusel de Imágenes (Arriba / Principal) */}
        <div className="w-full lg:w-11/12 xl:w-10/12 flex flex-col justify-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:min-h-[500px] xl:min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden group border border-[#2E86DE]/20 shadow-2xl">
            
            {/* Imagen Activa */}
            <Image 
              src={images[currentImgIndex].src} 
              alt={images[currentImgIndex].alt} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority={currentImgIndex === 0}
            />
             
            {/* Overlay y Título */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/40 to-transparent p-6 sm:p-8 pt-24 pointer-events-none">
              <h4 className="text-white font-heading font-bold text-lg sm:text-xl drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {images[currentImgIndex].alt}
              </h4>
            </div>

            {/* Controles (Flechas) */}
            <button 
              onClick={() => setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111]/70 hover:bg-[#2E86DE] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
             
            <button 
              onClick={() => setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111]/70 hover:bg-[#2E86DE] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores (Dots) */}
            <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex justify-end px-6 sm:px-8 gap-2 z-10">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImgIndex(idx)}
                  className={`h-1.5 sm:h-2 transition-all duration-300 rounded-full ${
                    idx === currentImgIndex ? "w-6 sm:w-8 bg-[#2E86DE]" : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/90"
                  }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
             
            {/* Botón Ampliar (Lightbox) */}
            <button
              onClick={() => {
                setSelectedImg(images[currentImgIndex].src);
                trackEvent({ name: 'select_content', params: { content_type: 'image', item_id: images[currentImgIndex].alt } });
              }}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111]/70 hover:bg-[#2E86DE] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
              aria-label="Pantalla completa"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Abajo: Recuadros de Beneficios */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {siteConfig.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-[#0D1B2A]/40 border border-[rgba(255,255,255,0.03)] hover:border-[#2E86DE]/40 hover:bg-[#0D1B2A]/80 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(46,134,222,0.15)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#111111] flex items-center justify-center mb-6 shadow-inner border border-[#2E86DE]/20 group-hover:bg-[#2E86DE] transition-all duration-500">
                  <div className="text-[#2E86DE] group-hover:text-white group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                    {icons[benefit.icon as keyof typeof icons] || icons.shield}
                  </div>
                </div>
                <h4 className="text-xl font-heading font-black text-white mb-3 group-hover:text-white transition-colors">{benefit.title}</h4>
                <p className="text-[#A0A0A0] text-sm leading-relaxed group-hover:text-[#D9D9D9] transition-colors">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-[#0D1B2A]/95 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-black/40 rounded-full"
            onClick={() => setSelectedImg(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image src={selectedImg} alt="Vista ampliada" fill className="object-contain" />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
