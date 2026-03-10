import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

function scrollToBookingForm() {
  const el = document.getElementById("booking");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function FloatingTrialButton() {
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    if (location === "/contact") {
      scrollToBookingForm();
      window.location.hash = "booking";
      return;
    }
    setLocation("/contact#booking");
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full bg-accent text-primary px-4 py-3 shadow-xl shadow-accent/20 hover:shadow-2xl hover:bg-accent/90 transition-all"
      aria-label="Book free trial"
      data-testid="floating-book-trial"
    >
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/40">
        <CalendarCheck className="w-5 h-5" />
      </span>
      <span className="font-bold leading-none">
        Book Free Trial
        <span className="block text-[11px] font-semibold opacity-80 -mt-0.5">
          Limited slots this month
        </span>
      </span>
    </motion.button>
  );
}

