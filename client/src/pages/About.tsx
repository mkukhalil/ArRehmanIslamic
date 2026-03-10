import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { Target, Heart, Award, Shield } from "lucide-react";

export default function About() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display text-primary mb-6">About Al-Rehman</h1>
          <p className="text-lg text-foreground/70">
            Dedicated to illuminating hearts with the light of the Quran. We are a premier online Islamic institution bringing authentic teachings to your home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display text-primary">Our Mission</h2>
            <p className="text-foreground/70 leading-relaxed text-lg">
              Providing accessible, high-quality Quran education globally. We believe that distance should never be a barrier to learning the book of Allah.
            </p>
            <p className="text-foreground/70 leading-relaxed text-lg">
              At Al-Rehman Islamic Center, our goal is to nurture a deep connection with the Quran for students of all ages, utilizing modern technology without compromising traditional scholarly standards.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-accent pl-4">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-foreground/60 font-medium">Years Experience</div>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-foreground/60 font-medium">Active Students</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* abstract islamic architecture or quran reading */}
            <img 
              src="https://pixabay.com/get/g7eb8b72a68a3e79bd638f062b21d515ca80e6060418222c4044060abba1a1fb3d9bddadc3178cf9b313f70e93af9ddc428bcc2d41056bdba2ebebb491ef7de22_1280.jpg" 
              alt="Islamic Architecture" 
              className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex gap-2 text-accent mb-2">
                {[1, 2, 3, 4, 5].map(i => <Heart key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-foreground italic">"The best among you are those who learn the Quran and teach it."</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="text-accent w-8 h-8" />,
              title: "Excellence",
              desc: "We strictly maintain Tajweed rules and scholarly standards in every class."
            },
            {
              icon: <Shield className="text-accent w-8 h-8" />,
              title: "Trust",
              desc: "A secure, comfortable, and monitored environment for sisters and children."
            },
            {
              icon: <Award className="text-accent w-8 h-8" />,
              title: "Dedication",
              desc: "Committed teachers who view their work as an act of Ibadah (worship)."
            }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-foreground/70">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
