import Section from "@/components/ui/Section";
import ServiceCard from "@/components/sections/ServiceCard";
import { SERVICES } from "@/lib/site";

export default function Services() {
  return (
    <Section id="servicos" className="bg-branco">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold text-verde-escuro sm:text-4xl">
          Serviços
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.slug}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.3334rem)]"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </Section>
  );
}
