import Image from "next/image";
import Section from "@/components/ui/Section";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, WHATSAPP_MESSAGES } from "@/lib/site";

export default function Hero() {
  return (
    <Section id="inicio" className="bg-branco pt-12 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <h1 className="font-heading text-3xl font-bold leading-tight text-verde-escuro sm:text-4xl lg:text-5xl">
            Cuidado médico com critério e humanidade
          </h1>
          <p className="mt-5 max-w-xl font-body text-base text-verde-escuro/80 sm:text-lg">
            Atendimento clínico integrado, acupuntura médica e decisões baseadas
            em evidência científica.
          </p>
          <div className="mt-8">
            <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="primary">
              Entre em Contato
            </WhatsAppButton>
          </div>
          <p className="mt-4 flex items-center gap-1.5 font-body text-sm text-verde-escuro/60">
            <PinIcon className="h-4 w-4 shrink-0" />
            {SITE.location}
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-bege shadow-sm ring-1 ring-verde-escuro/10 lg:max-w-none">
            <Image
              src="/images/doctor.jpg"
              alt="Dr. Samir Salles"
              fill
              priority
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 384px, 90vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
