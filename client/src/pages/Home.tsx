import { Link } from "wouter";
import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { Book, Users, Star, Clock, CheckCircle2, ArrowRight } from "lucide-react";

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
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20"
            >
              <Star size={16} fill="currentColor" />
              <span>Trusted by 1000+ Students Globally</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display text-primary leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Learn the Quran Online with <span className="text-accent relative whitespace-nowrap">
                Certified
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> Teachers
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/70 mb-10 text-balance mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              One-on-one professional Quran classes for kids and adults. Start your spiritual journey with expert guidance and flexible scheduling.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-2xl hover:bg-primary/95 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Book Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/courses" 
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold bg-white text-primary border-2 border-primary/10 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
              >
                Explore Courses
              </Link>
            </motion.div>
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

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary pattern-bg"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of students discovering the beauty of the Quran. Register today for your complimentary evaluation class.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-accent text-primary text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-transform duration-300"
          >
            Get 3 Days Free Trial
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
