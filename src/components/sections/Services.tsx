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

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
