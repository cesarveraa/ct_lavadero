"use client";

import { SectionWrapper } from "./ui/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <SectionWrapper id="cta" className="relative pb-0 pt-0 mt-20 mb-[-100px] z-20">
      <div className="relative rounded-3xl overflow-hidden glass-card border border-[#2E86DE]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2E86DE] opacity-20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1B3A5B] opacity-30 blur-[100px] rounded-full" />
        
        {/* Abstract structural diagonal line */}
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#2E86DE]/20 to-transparent transform rotate-45" />

        <div className="relative p-12 md:p-20 text-center flex flex-col items-center">
          <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter mb-6 text-white max-w-3xl">
            {siteConfig.finalCta.title}
          </h2>
          <p className="text-xl text-[#D9D9D9] mb-10 max-w-2xl font-light">
            {siteConfig.finalCta.subtitle}
          </p>
          <Button 
            href={whatsappUrl} 
            asExternal 
            size="lg" 
            className="shadow-[0_0_30px_rgba(46,134,222,0.4)] text-lg px-10 py-5"
            onClick={() => trackEvent({ name: 'generate_lead', params: { lead_type: 'whatsapp', location: 'final_cta' } })}
          >
            {siteConfig.finalCta.button}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
