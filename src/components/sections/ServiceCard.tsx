import Image from "next/image";
import Card from "@/components/ui/Card";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-heading text-xl font-bold text-verde-escuro">
          {service.title}
        </h3>
        <p className="flex-1 font-body text-sm text-verde-escuro/80 sm:text-base">
          {service.description}
        </p>
        <WhatsAppButton
          message={service.whatsappMessage}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          Agende sua Consulta
        </WhatsAppButton>
      </div>
    </Card>
  );
}
