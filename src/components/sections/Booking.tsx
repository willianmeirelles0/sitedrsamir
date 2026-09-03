import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

/**
 * Renders nothing until NEXT_PUBLIC_BOOKING_URL is configured.
 * Placeholder for a future booking platform (Calendly, Cal.com, Doctoralia, etc.),
 * see README for activation instructions.
 */
export default function Booking() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  if (!bookingUrl) {
    return null;
  }

  return (
    <Section id="agendamento" className="bg-verde-escuro" narrow>
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-branco sm:text-4xl">
          Agende sua consulta online
        </h2>
        <p className="mt-4 font-body text-base text-branco/80 sm:text-lg">
          Escolha o melhor horário direto pelo nosso calendário, sem precisar
          esperar resposta.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </Section>
  );
}
