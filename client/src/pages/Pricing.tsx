import AppLayout from "@/components/layout/AppLayout";
import PricingCard from "@/components/PricingCard";
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
              <PricingCard key={idx} plan={plan} index={idx} />
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
