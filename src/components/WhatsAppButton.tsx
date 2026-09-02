import Button from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  "aria-label"?: string;
};

export default function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
  ...props
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message);

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
      {...props}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {children}
    </Button>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.24-1.27a9.95 9.95 0 0 0 4.8 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.14a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.11.75.76-3.03-.2-.31a8.14 8.14 0 0 1-1.25-4.24c0-4.5 3.66-8.15 8.16-8.15 4.5 0 8.15 3.66 8.15 8.15 0 4.5-3.66 8.14-8.15 8.14Zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.96-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.11-.22-.17-.46-.29Z" />
    </svg>
  );
}
