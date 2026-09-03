import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export default function Location() {
  return (
    <Section id="localizacao" className="bg-bege">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-branco shadow-sm ring-1 ring-verde-escuro/10">
          <Image
            src="/images/clinic.jpg"
            alt="Foto da Casa Gestar, consultório do Dr. Samir Salles"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 540px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="font-heading text-3xl font-bold text-verde-escuro sm:text-4xl">
            Onde atendemos
          </h2>
          <p className="mt-5 font-body text-base text-verde-escuro/80 sm:text-lg">
            O atendimento presencial acontece na Casa Gestar, um espaço
            pensado para oferecer conforto, privacidade e acolhimento em cada
            visita.
          </p>
          <p className="mt-4 font-body text-base font-semibold text-verde-escuro">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </p>
          <div className="mt-8">
            <Button
              href={SITE.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Clique aqui para acessar o endereço
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
