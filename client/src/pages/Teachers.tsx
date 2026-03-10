import AppLayout from "@/components/layout/AppLayout";
import { BookOpen } from "lucide-react";
import TeacherCard from "@/components/TeacherCard";

export default function Teachers() {
  const maleTeachers = [
    {
      name: "Ustadh Ahmad",
      exp: "8 Years",
      desc: "Specializes in advanced Tajweed and Maqamat.",
    },
    {
      name: "Qari Syed Iftikhar",
      exp: "12 Years",
      desc: "Hafiz-e-Quran with Ijazah in Hafs 'an Asim.",
    },
    {
      name: "Ustadh Bilal",
      exp: "5 Years",
      desc: "Expert in children's education and Noorani Qaida.",
    },
  ];

  const femaleTeachers = [
    {
      name: "Ustadha Fatima",
      exp: "10 Years",
      desc: "Ijazah holder. Focuses on sisters' Hifz programs.",
    },
    {
      name: "Ustadha Aisha",
      exp: "7 Years",
      desc: "Specialist in interactive Islamic studies for kids.",
    },
    {
      name: "Ustadha Zainab",
      exp: "6 Years",
      desc: "Patient and encouraging, perfect for beginners.",
    },
  ];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-display text-primary mb-6">
            Our Certified Teachers
          </h1>
          <p className="text-lg text-foreground/70">
            Learn from qualified, experienced, and dedicated instructors. We
            provide separate male and female teachers to ensure a comfortable
            learning environment.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-display text-primary">
              Male Instructors
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maleTeachers.map((t, i) => (
              <TeacherCard key={i} teacher={t} isFemale={false} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-display text-primary">
              Female Instructors
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {femaleTeachers.map((t, i) => (
              <TeacherCard key={i} teacher={t} isFemale={true} index={i} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
