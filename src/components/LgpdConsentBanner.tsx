"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const CONSENT_STORAGE_KEY = "lgpd-consent-accepted";

export default function LgpdConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage indisponível (modo privado, navegador restrito, etc.):
      // segue sem exibir o aviso, para não travar a navegação.
    }
  }, []);

  function handleAccept() {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "true");
    } catch {
      // Sem localStorage disponível, apenas fecha o aviso nesta visita.
    }
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label="Aviso de privacidade"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-branco/10 bg-verde-escuro px-5 py-5 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.3)] sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-body text-sm text-branco/85 sm:text-base">
          Usamos cookies e ferramentas de análise para melhorar sua experiência neste site, em
          conformidade com a LGPD.{" "}
          <Link
            href="/politica-de-privacidade"
            className="font-semibold underline underline-offset-2 hover:text-branco"
          >
            Saiba mais na nossa Política de Privacidade
          </Link>
          .
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={handleAccept}
          className="w-full shrink-0 sm:w-auto"
        >
          Aceitar
        </Button>
      </div>
    </div>
  );
}
