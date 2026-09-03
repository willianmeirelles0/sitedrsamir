import Image from "next/image";
import Section from "@/components/ui/Section";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BIO_REASONS, WHATSAPP_MESSAGES } from "@/lib/site";

export default function Bio() {
  return (
    <Section id="sobre" className="bg-bege">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-branco shadow-sm ring-1 ring-verde-escuro/10 lg:max-w-none">
          <Image
            src="/images/doctor-bio.jpg"
            alt="Dr. Samir Salles"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 384px, 90vw"
            className="object-cover object-left-top"
          />
        </div>

        <div>
          <h2 className="font-heading text-3xl font-bold text-verde-escuro sm:text-4xl">
            Sobre o Dr. Samir
          </h2>
          <p className="mt-5 font-body text-base text-verde-escuro/80 sm:text-lg">
            Sou médico generalista, formado pela Faculdade IMES, com um olhar
            voltado para a saúde como um todo. Meu compromisso é oferecer um
            cuidado acessível, direto e sem complicações, para quem busca
            orientação médica com seriedade e escuta atenta.
          </p>
          <p className="mt-4 font-body text-base text-verde-escuro/80 sm:text-lg">
            No dia a dia, muitos pacientes chegam com dúvidas simples que
            acabam se arrastando por falta de um atendimento resolutivo,
            como:
          </p>

          <ul className="mt-4 flex flex-col gap-2">
            {BIO_REASONS.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-2 font-body text-base text-verde-escuro/80 sm:text-lg"
              >
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-verde-escuro" />
                {reason}
              </li>
            ))}
          </ul>

          <p className="mt-4 font-body text-base text-verde-escuro/80 sm:text-lg">
            A consulta acontece de forma online, mas com a mesma seriedade e
            proximidade de um atendimento presencial: escuta humana,
            diagnóstico bem explicado e segurança em cada conduta.
          </p>

          <div className="mt-8">
            <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="primary">
              Agende sua Consulta
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
