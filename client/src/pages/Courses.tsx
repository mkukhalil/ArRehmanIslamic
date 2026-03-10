import AppLayout from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";

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
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
