import { SITE } from "@/lib/site";

export function buildWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodedMessage}`;
}
