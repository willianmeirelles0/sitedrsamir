import Script from "next/script";
import Section from "@/components/ui/Section";

const DOCTORALIA_URL = "https://www.doctoralia.com.br/samir-salles/medico-clinico-geral/ipatinga";

export default function Booking() {
  return (
    <Section id="agendamento" className="bg-verde-escuro">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-branco sm:text-4xl">
          Agende sua consulta online
        </h2>
        <p className="mt-4 font-body text-base text-branco/80 sm:text-lg">
          Escolha o melhor horário direto pelo calendário do Doctoralia, sem
          precisar esperar resposta.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl justify-center overflow-hidden rounded-3xl bg-branco p-8 shadow-sm">
        <a
          id="zl-url"
          className="zl-url inline-flex items-center justify-center gap-2 rounded-full bg-verde-agua px-6 py-3 text-sm font-semibold text-verde-escuro transition-colors duration-200 hover:bg-verde-agua/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro sm:text-base"
          href={DOCTORALIA_URL}
          rel="nofollow"
          data-zlw-doctor="samir-salles"
          data-zlw-type="big_with_calendar"
          data-zlw-opinion="false"
          data-zlw-hide-branding="true"
          data-zlw-saas-only="true"
          data-zlw-a11y-title="Widget de marcação de consultas médicas"
        >
          Marque uma consulta
        </a>
      </div>

      <Script
        id="zl-widget-s"
        src="https://platform.docplanner.com/js/widget.js"
        strategy="lazyOnload"
      />
    </Section>
  );
}
