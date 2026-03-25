"use client";

import { useState } from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <SectionWrapper id="faq" className="bg-[#111111]">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        <div className="w-full lg:w-1/3">
          <h2 className="text-sm font-medium text-[#2E86DE] tracking-widest uppercase mb-4">
            Dudas Frecuentes
          </h2>
          <h3 className="font-heading font-black text-4xl tracking-tighter mb-6 text-white">
            Respuestas a tus consultas
          </h3>
          <p className="text-[#D9D9D9] leading-relaxed mb-8">
            Si necesitás más detalles técnicos o querés consultar la disponibilidad de nuestros próximos turnos, escribinos y te asesoramos al instante.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B3A5B] text-white font-bold rounded-md hover:bg-[#2E86DE] transition-colors"
            onClick={() => trackEvent({ name: 'generate_lead', params: { lead_type: 'whatsapp', location: 'faq_section' } })}
          >
            Preguntar por WhatsApp
          </a>
        </div>

        <div className="w-full lg:w-2/3">
          <div className="flex flex-col gap-4">
            {siteConfig.faq.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? "border-[#2E86DE]/50 bg-[#0D1B2A]/80 shadow-[0_0_15px_rgba(46,134,222,0.1)]" 
                    : "border-[rgba(255,255,255,0.1)] bg-[#0D1B2A]/30 hover:border-[#2E86DE]/30 hover:bg-[#0D1B2A]/50"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading font-bold text-lg text-white pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "bg-[#2E86DE] rotate-180" : "bg-[#1B3A5B]"
                  }`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-[#D9D9D9] leading-relaxed border-t border-[rgba(255,255,255,0.05)]">
                    {faq.answer.includes("[") ? (
                      <span className="bg-[#1B3A5B]/50 px-2 py-1 rounded text-sm font-mono text-[#2E86DE]">
                        {faq.answer}
                      </span>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
