import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      classes: "2 Classes / Week",
      price: "$35",
      period: "per month",
      features: [
        "30 Minutes per session",
        "One-on-One Live Class",
        "Flexible Scheduling",
        "Monthly Progress Report"
      ]
    },
    {
      name: "Standard",
      classes: "3 Classes / Week",
      price: "$50",
      period: "per month",
      popular: true,
      features: [
        "30 Minutes per session",
        "One-on-One Live Class",
        "Flexible Scheduling",
        "Weekly Progress Report",
        "Make-up Classes Available"
      ]
    },
    {
      name: "Intensive",
      classes: "5 Classes / Week",
      price: "$80",
      period: "per month",
      features: [
        "30 Minutes per session",
        "One-on-One Live Class",
        "Flexible Scheduling",
        "Daily Progress Tracking",
        "Make-up Classes Available",
        "Priority Support"
      ]
    }
  ];

  return (
    <AppLayout>
      <div className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-6">Affordable Pricing Plans</h1>
            <p className="text-lg text-foreground/70">
              High-quality education with straightforward pricing. All plans include a <strong className="text-accent">Free Trial Class</strong> to evaluate our teaching methodology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-accent shadow-2xl scale-100 lg:scale-105 z-10' 
                    : 'border-border shadow-md hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={14} fill="currentColor" /> Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="text-primary font-display text-2xl mb-4">{plan.classes}</div>
                  <div className="flex justify-center items-end gap-1">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-foreground/60 mb-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-accent/20 text-accent' : 'bg-primary/10 text-primary'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${
                    plan.popular
                      ? 'bg-primary text-white shadow-lg hover:bg-primary/90'
                      : 'bg-secondary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center bg-white p-8 rounded-2xl border border-border max-w-3xl mx-auto shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-2">Need a custom plan?</h4>
            <p className="text-foreground/70 mb-6 text-sm">
              We offer family discounts and custom schedules. Contact our support team to discuss your specific requirements.
            </p>
            <Link href="/contact" className="text-accent font-semibold hover:underline">
              Contact Support &rarr;
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
