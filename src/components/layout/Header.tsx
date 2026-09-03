"use client";

import { useState } from "react";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE, WHATSAPP_MESSAGES } from "@/lib/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-verde-escuro/10 bg-branco/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/logo-horizontal.png"
            alt={`${SITE.name}, ${SITE.role}, ${SITE.crm}`}
            width={1719}
            height={488}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-verde-escuro/80 transition-colors hover:text-verde-escuro"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton message={WHATSAPP_MESSAGES.generic} variant="primary">
            Contato
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-verde-escuro md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </Container>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-verde-escuro/10 bg-branco md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 font-body text-base font-medium text-verde-escuro/85 hover:bg-bege"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.generic}
                variant="primary"
                className="w-full"
              >
                Contato
              </WhatsAppButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
