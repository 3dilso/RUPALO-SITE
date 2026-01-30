import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "244923456789";
  const message = encodeURIComponent("Olá! Gostaria de pedir um orçamento para serviços de ar condicionado.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse-subtle" />
    </motion.a>
  );
};

export default WhatsAppButton;
