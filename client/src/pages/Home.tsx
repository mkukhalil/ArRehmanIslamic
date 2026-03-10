import { Link } from "wouter";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Book,
  CheckCircle2,
  Clock,
  GraduationCap,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  ArrowRight,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useMemo, useState } from "react";

function HeroIllustration() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-accent/10 blur-2xl rounded-full" />
      <div className="relative rounded-3xl border border-border bg-white shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
              <BadgeCheck className="w-4 h-4" />
              Certified Teachers
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-primary px-3 py-1 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Secure Online Classes
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-secondary/40 border border-border p-4">
              <div className="text-xs font-semibold text-foreground/70">Lesson</div>
              <div className="mt-1 text-lg font-bold text-primary">Tajweed</div>
              <div className="mt-2 h-2 rounded-full bg-primary/10 overflow-hidden">
                <div className="h-full w-2/3 bg-primary rounded-full" />
              </div>
              <div className="mt-2 text-xs text-foreground/60">Progress: 66%</div>
            </div>
            <div className="rounded-2xl bg-secondary/40 border border-border p-4">
              <div className="text-xs font-semibold text-foreground/70">Focus</div>
              <div className="mt-1 text-lg font-bold text-primary">Pronunciation</div>
              <div className="mt-2 flex items-center gap-2 text-xs text-foreground/60">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                1-on-1 feedback
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-foreground/60">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Weekly report
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-primary text-white p-5 pattern-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/95" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/70">Live class</div>
                  <div className="text-lg font-bold">Teacher + Student</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                  <Play className="w-5 h-5 text-accent" />
                </div>
              </div>
              <div className="mt-3 text-xs text-white/75">Calm, engaging, and child-friendly instruction.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function useMonthEndCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, []);

  return useMemo(() => {
    const d = new Date();
    const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999).getTime();
    const diff = Math.max(0, monthEnd - now);
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds, isExpired: diff <= 0 };
  }, [now]);
}

export default function Home() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "One-on-One Classes",
      desc: "Personalized attention ensuring rapid progress and accurate pronunciation."
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Certified Teachers",
      desc: "Separate qualified male and female teachers to ensure a comfortable learning environment."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Kids-Friendly",
      desc: "Engaging, interactive methods designed specifically to keep young minds interested."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Timings",
      desc: "Schedule classes 24/7 at your convenience. Perfect for busy professionals and students."
    }
  ];

  const testimonials = [
    {
      name: "Ayesha K.",
      role: "Parent of 8-year-old",
      quote:
        "My son used to struggle with pronunciation. After a few weeks of one-on-one classes, his confidence and recitation improved noticeably.",
    },
    {
      name: "Sara M.",
      role: "Mother of 2 kids",
      quote:
        "The teachers are patient and professional. The flexible timing makes it easy with school and homework. The free trial helped us decide fast.",
    },
    {
      name: "Omar R.",
      role: "Parent",
      quote:
        "Clear Tajweed guidance, regular feedback, and a very respectful environment. Highly recommended for families who want real progress.",
    },
    {
      name: "Hina S.",
      role: "Parent",
      quote:
        "We appreciated the option of separate male/female teachers. The classes are structured, and my child actually looks forward to them.",
    },
  ];

  const courses = [
    {
      title: "Noorani Qaida",
      icon: <Book className="w-5 h-5" />,
      benefit: "Build a strong foundation in Arabic letters and sounds.",
    },
    {
      title: "Quran Reading with Tajweed",
      icon: <Sparkles className="w-5 h-5" />,
      benefit: "Recite fluently with correct rules and pronunciation.",
    },
    {
      title: "Hifz Memorization",
      icon: <Star className="w-5 h-5" />,
      benefit: "Structured memorization with consistent revision.",
    },
    {
      title: "Islamic Studies for Kids",
      icon: <GraduationCap className="w-5 h-5" />,
      benefit: "Learn duas, manners, and beliefs in a child-friendly way.",
    },
  ];

  const plans = [
    {
      name: "Basic",
      classes: "2 Classes / Week",
      price: "$35",
      period: "per month",
      features: ["30 mins/session", "1-on-1 live", "Flexible timings", "Monthly progress report"],
    },
    {
      name: "Best Value",
      classes: "3 Classes / Week",
      price: "$50",
      period: "per month",
      popular: true,
      features: ["30 mins/session", "1-on-1 live", "Flexible timings", "Weekly progress report", "Make-up classes"],
    },
    {
      name: "Intensive",
      classes: "5 Classes / Week",
      price: "$80",
      period: "per month",
      features: ["30 mins/session", "1-on-1 live", "Flexible timings", "Daily tracking", "Priority support"],
    },
  ];

  const countdown = useMonthEndCountdown();

  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* beautiful quran reading aesthetic */}
          <img 
            src="https://pixabay.com/get/g9e4746b2dfe88ee003888ae64a415b2d105dbf2d8f75ece3a584522184e5f88880fce439ae9dd097a255d56a31dd9d80f62b417822a3bde1acf9d72e9a093ba6_1280.jpg" 
            alt="Islamic Pattern Background" 
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20 w-fit"
              >
                <Star size={16} fill="currentColor" />
                <span>Trusted by families for safe online learning</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display text-primary leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Give Your Child the Gift of Quran Mastery{" "}
                <span className="text-accent relative whitespace-nowrap">
                  Online One-on-One
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>{" "}
                with Certified Teachers
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-foreground/70 mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Separate male & female teachers. Flexible timings. Trial class available.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-border px-4 py-2 text-sm">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  Certified teachers
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-border px-4 py-2 text-sm">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Secure online classes
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-border px-4 py-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  Flexible timings
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link 
                  href="/contact#booking" 
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-accent text-primary shadow-xl shadow-accent/20 hover:shadow-2xl hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Book Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold bg-white text-primary border-2 border-primary/10 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>

              <motion.div
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/70 border border-border px-4 py-3 text-sm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <strong className="text-primary">Only a few seats left</strong> this month
                </span>
                <span className="text-foreground/60 hidden sm:inline">•</span>
                <span className="text-foreground/70 hidden sm:inline">
                  Free trial offer ends in{" "}
                  <strong className="text-primary">
                    {countdown.days}d {String(countdown.hours).padStart(2, "0")}h:{String(countdown.minutes).padStart(2, "0")}m
                  </strong>
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:justify-self-end"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST / CREDIBILITY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
                A trustworthy, structured learning experience
              </h2>
              <p className="text-foreground/70">
                Parents choose Al Rehman Islamic Center for certified teachers, safe online classes, and measurable progress.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <strong className="text-foreground">Teacher credentials</strong>{" "}
                    <span className="text-foreground/70">Tajweed, Hifz, and Ijazah-trained</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <strong className="text-foreground">Secure & respectful</strong>{" "}
                    <span className="text-foreground/70">Separate male & female teachers</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <strong className="text-foreground">Flexible timings</strong>{" "}
                    <span className="text-foreground/70">Works for school, work, and weekends</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground/70 mt-1">Students taught since 2020</div>
                </div>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="text-3xl font-bold text-primary">1-on-1</div>
                  <div className="text-sm text-foreground/70 mt-1">Personalized attention every class</div>
                </div>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="text-3xl font-bold text-primary">Free</div>
                  <div className="text-sm text-foreground/70 mt-1">Trial class to get started</div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {testimonials.map((t, idx) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="rounded-2xl bg-white border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                        {t.name.split(" ")[0]?.[0]}
                        {t.name.split(" ")[1]?.[0]}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">{t.name}</div>
                        <div className="text-xs text-foreground/60">{t.role}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-foreground/80 leading-relaxed">“{t.quote}”</div>
                    <div className="mt-4 flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4" fill="currentColor" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">Why Choose Al-Rehman?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">We combine traditional teaching methods with modern technology to provide the best Quranic education experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES / FEATURES */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">Courses for every level</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Simple, structured pathways for kids and adults — from first letters to Tajweed and Hifz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-2xl bg-white border border-border p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  {c.icon}
                </div>
                <div className="mt-4 text-lg font-bold text-foreground font-display">{c.title}</div>
                <div className="mt-2 text-sm text-foreground/70">{c.benefit}</div>
                <div className="mt-5">
                  <Link
                    href="/contact#booking"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Book Free Trial <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold bg-white text-primary border border-border hover:border-primary/30 hover:bg-secondary/40 transition-all"
            >
              View full course details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW + URGENCY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">Simple pricing, real progress</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Choose a plan that fits your schedule. Every plan includes a <strong className="text-accent">Free Trial Class</strong>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-primary">Only a few seats left this month</div>
                <div className="text-xs text-foreground/70 mt-1">
                  Next available trial slot: <strong className="text-primary">within 24 hours</strong>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-border px-4 py-2 text-sm">
                <span className="text-foreground/70">Offer ends in</span>
                <strong className="text-primary">
                  {countdown.days}d {String(countdown.hours).padStart(2, "0")}h:{String(countdown.minutes).padStart(2, "0")}m
                </strong>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? "border-accent shadow-xl scale-100 md:scale-105 z-10"
                    : "border-border shadow-card hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={12} fill="currentColor" /> Best Value
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
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div
                        className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                          plan.popular ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact#booking"
                  className={`block w-full py-3 rounded-xl text-center text-sm font-bold transition-all ${
                    plan.popular
                      ? "bg-primary text-white shadow-lg hover:bg-primary/90"
                      : "bg-secondary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Book Free Trial
                </Link>
                <div className="mt-3 text-center text-[12px] text-foreground/60">No commitment • Start with a trial</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/pricing" className="text-accent font-semibold hover:underline">
              See full pricing details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO + FAQ */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">See how a class feels</h2>
              <p className="text-foreground/70 mb-6">
                A short demo helps parents feel confident before booking. (You can replace this video link anytime.)
              </p>
              <div className="rounded-3xl overflow-hidden border border-border shadow-sm bg-white">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/PxQrI3UF3SE"
                    title="Class demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact#booking"
                  className="px-7 py-3 rounded-full font-bold bg-accent text-primary shadow-md shadow-accent/20 hover:bg-accent/90 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
                >
                  Book Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/teachers"
                  className="px-7 py-3 rounded-full font-semibold bg-white text-primary border border-border hover:border-primary/30 hover:bg-secondary/40 transition-all inline-flex items-center justify-center gap-2"
                >
                  Meet the teachers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary font-display">FAQ</div>
                  <div className="text-sm text-foreground/70">Common parent questions</div>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is the trial class really free?</AccordionTrigger>
                  <AccordionContent>
                    Yes. The trial class is free so you can evaluate the teacher, class quality, and your child’s comfort before starting.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you have separate male & female teachers?</AccordionTrigger>
                  <AccordionContent>
                    Yes. We provide separate qualified male and female teachers to keep a respectful and comfortable learning environment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What age groups do you teach?</AccordionTrigger>
                  <AccordionContent>
                    We teach kids and adults. For children, lessons are kept engaging and interactive with clear weekly goals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do you track progress?</AccordionTrigger>
                  <AccordionContent>
                    We use structured lessons, regular revision, and progress updates. Parents can ask for feedback anytime via WhatsApp.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary pattern-bg"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of students discovering the beauty of the Quran. Register today for your complimentary evaluation class.
          </p>
          <Link 
            href="/contact#booking" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-accent text-primary text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-transform duration-300"
          >
            Get 3 Days Free Trial
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
