import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Link } from "wouter";

interface PricingCardProps {
  plan: {
    name: string;
    classes: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
  };
  index: number;
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative bg-white rounded-lg p-8 border transition-all duration-300 ${
        plan.popular 
          ? 'border-accent shadow-xl scale-100 md:scale-105 z-10' 
          : 'border-border shadow-card hover:shadow-lg'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star size={12} fill="currentColor" /> Most Popular
        </div>
      )}
      
      <div className="text-center mb-8 pt-4">
        <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
        <div className="text-primary font-display text-xl mb-4">{plan.classes}</div>
        <div className="flex justify-center items-end gap-1">
          <span className="text-4xl font-bold text-primary">{plan.price}</span>
          <span className="text-foreground/60 mb-1 text-sm">{plan.period}</span>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs ${plan.popular ? 'bg-accent/20 text-accent' : 'bg-primary/10 text-primary'}`}>
              <Check size={10} strokeWidth={3} />
            </div>
            <span className="text-xs text-foreground/80">{feature}</span>
          </div>
        ))}
      </div>

      <Link
        href="/contact#booking"
        className={`block w-full py-3 rounded-lg text-center text-sm font-bold transition-all ${
          plan.popular
            ? 'bg-primary text-white shadow-lg hover:bg-primary/90'
            : 'bg-secondary text-primary hover:bg-primary hover:text-white'
        }`}
      >
        Start Free Trial
      </Link>
    </motion.div>
  );
}
