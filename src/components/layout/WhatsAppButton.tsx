import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "244923411375";
  const message = encodeURIComponent("Olá, gostaria de solicitar um orçamento para manutenção de frio industrial.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse-subtle" />
    </a>
  );
};

export default WhatsAppButton;