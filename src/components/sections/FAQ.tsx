"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FAQ_ITEMS, WHATSAPP_MESSAGES } from "@/lib/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="duvidas" className="bg-branco" narrow>
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold text-verde-escuro sm:text-4xl">
          Dúvidas Comuns
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl bg-bege ring-1 ring-verde-escuro/10"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-body text-base font-semibold text-verde-escuro sm:text-lg"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.question}
                  <ChevronIcon
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-5 pb-5 font-body text-sm text-verde-escuro/80 sm:text-base"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="outline">
          Tenho outras dúvidas
        </WhatsAppButton>
      </div>
    </Section>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
