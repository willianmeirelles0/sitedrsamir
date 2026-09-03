import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-verde-escuro py-10 text-branco/85">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-icon-light.png"
            alt=""
            width={678}
            height={682}
            className="h-8 w-8 shrink-0"
          />
          <span className="font-body text-sm">
            © {year} {SITE.name}. Todos os direitos reservados.
          </span>
        </div>

        <nav className="flex gap-6 font-body text-sm">
          {/* Placeholder: substituir pelo link real quando disponível */}
          <a href="#" className="hover:text-branco">
            Condições e Suporte
          </a>
          <Link href="/politica-de-privacidade" className="hover:text-branco">
            Política de Privacidade
          </Link>
        </nav>
      </Container>

      <Container className="mt-8 flex items-center justify-center gap-2 border-t border-branco/10 pt-6 font-body text-sm">
        <span>Desenvolvido por</span>
        <a
          href="https://www.instagram.com/andrioli.marketing?igsi=Nzl1d3lwb2V5NWNs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Andrioli Marketing & Performance no Instagram"
          className="inline-flex items-center opacity-90 transition-opacity hover:opacity-100"
        >
          <Image
            src="/images/amp-logo-white.png"
            alt="Andrioli Marketing & Performance"
            width={1019}
            height={219}
            className="h-6 w-auto"
          />
        </a>
      </Container>
    </footer>
  );
}
