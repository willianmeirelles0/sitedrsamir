import Section from "@/components/ui/Section";
import { SITE, TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-bege">
      <div className="mb-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-verde-escuro sm:text-4xl">
          O que dizem os pacientes
        </h2>
      </div>

      <div className="mb-12 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <Stars rating={SITE.googleRating} className="h-5 w-5" />
        <p className="font-body text-sm text-verde-escuro/80 sm:text-base">
          {SITE.googleRating.toFixed(1).replace(".", ",")} · {SITE.googleReviewCount} avaliações
          no Google ·{" "}
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-verde-escuro underline underline-offset-2 hover:text-verde-escuro/80"
          >
            ver todas
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex h-full flex-col rounded-2xl bg-branco p-6 shadow-sm ring-1 ring-verde-escuro/10"
          >
            <Stars rating={testimonial.rating} className="h-4 w-4" />
            <p className="mt-4 flex-1 font-body text-sm text-verde-escuro/80 sm:text-base">
              {testimonial.text}
            </p>
            <p className="mt-4 font-body text-sm font-semibold text-verde-escuro">
              {testimonial.name}
            </p>
            <p className="font-body text-xs text-verde-escuro/60">Avaliação no Google</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className="flex items-center gap-0.5 text-verde-escuro" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          filled={index < Math.round(rating)}
          className={className}
        />
      ))}
    </div>
  );
}

function StarIcon({ filled, className = "" }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path
        strokeLinejoin="round"
        d="M10 2.5l2.29 4.64 5.12.75-3.7 3.61.87 5.1L10 14.1l-4.58 2.5.87-5.1-3.7-3.61 5.12-.75L10 2.5Z"
      />
    </svg>
  );
}
