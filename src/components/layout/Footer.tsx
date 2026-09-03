import Image from "next/image";
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
          {/* Placeholder: substituir pelo link real quando disponível */}
          <a href="#" className="hover:text-branco">
            Política de Privacidade
          </a>
        </nav>
      </Container>
    </footer>
  );
}
