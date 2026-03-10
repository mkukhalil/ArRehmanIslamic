import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Courses() {
  const courses = [
    {
      id: "qaida",
      title: "Noorani Qaida",
      description: "The foundational course for beginners to read Arabic letters with perfect pronunciation.",
      points: ["Alphabet Recognition", "Makharij (Pronunciation)", "Connecting Letters", "Basic Tajweed Rules"],
      level: "Beginner"
    },
    {
      id: "reading",
      title: "Quran Reading & Tajweed",
      description: "Learn to read the Holy Quran fluently while applying advanced Tajweed rules.",
      points: ["Fluent Recitation", "Advanced Tajweed Application", "Waqf Rules", "Voice Modulation"],
      level: "Intermediate"
    },
    {
      id: "hifz",
      title: "Hifz (Memorization)",
      description: "Structured memorization program with systematic review (Muraja'ah) to retain what is learned.",
      points: ["Daily New Lesson", "Sabaq (Recent Review)", "Manzil (Old Review)", "Retention Strategies"],
      level: "All Levels"
    },
    {
      id: "islamic-studies",
      title: "Islamic Studies for Kids",
      description: "A comprehensive curriculum covering basic beliefs, manners, and stories of Prophets.",
      points: ["Basic Fiqh & Aqeedah", "Daily Duas & Sunnahs", "Stories of Prophets", "Islamic Manners"],
      level: "Kids"
    }
  ];

  return (
    <AppLayout>
      <div className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-6">Our Courses</h1>
            <p className="text-lg text-foreground/70">
              Structured learning paths designed for all ages and levels. Start your journey from basic Arabic reading to complete Quranic memorization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <BookOpen size={28} />
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                    {course.level}
                  </span>
                </div>
                
                <h2 className="text-2xl font-display font-bold text-primary mb-3">{course.title}</h2>
                <p className="text-foreground/70 mb-8">{course.description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold text-foreground mb-4">What you'll learn:</h4>
                  <ul className="space-y-3 mb-8">
                    {course.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact"
                    className="w-full py-3.5 rounded-xl font-medium bg-secondary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    Enroll Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
