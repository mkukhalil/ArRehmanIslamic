import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsAppButton() {
  const whatsappNumber = "12345678900";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-green-400 transition-colors z-40"
      aria-label="Chat on WhatsApp"
      data-testid="floating-whatsapp-button"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
