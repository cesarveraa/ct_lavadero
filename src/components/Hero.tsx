"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Lavado automotriz profesional"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#111111]/80 to-[#111111] z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 mt-16 md:mt-0 pt-8 md:pt-0 pb-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B3A5B]/80 border border-[#2E86DE]/30 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#2E86DE] animate-pulse-glow" />
            <span className="text-sm font-medium text-[#D9D9D9] uppercase tracking-wider">
              {siteConfig.hero.badge}
            </span>
          </div>
          
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] mb-4 md:mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-[#D9D9D9]">
            {siteConfig.hero.title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#D9D9D9] mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
            {siteConfig.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button 
              href={whatsappUrl} 
              asExternal 
              size="lg" 
              className="w-full sm:w-auto shadow-[0_0_20px_rgba(46,134,222,0.3)]"
              onClick={() => trackEvent({ name: 'generate_lead', params: { lead_type: 'whatsapp', location: 'hero' } })}
            >
              {siteConfig.hero.ctaPrimary}
            </Button>
            <Button 
              href="#servicios" 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto backdrop-blur-sm bg-[rgba(13,27,42,0.4)]"
              onClick={() => trackEvent({ name: 'select_content', params: { content_type: 'link', item_id: 'ver_servicios' } })}
            >
              {siteConfig.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Hero Visual / Logo highlight */}
        <div className="flex-[0.8] w-full max-w-[200px] sm:max-w-[280px] md:max-w-lg animate-fade-in-up delay-200 block">
          <div className="relative aspect-square w-full m-auto drop-shadow-2xl">
            {/* Ambient glow behind logo */}
            <div className="absolute inset-0 bg-[#2E86DE] opacity-20 blur-[100px] rounded-full mix-blend-screen" />
            <Image
              src="/images/logo-metallic.png"
              alt={`${siteConfig.businessName} Logo`}
              fill
              priority
              className="object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
