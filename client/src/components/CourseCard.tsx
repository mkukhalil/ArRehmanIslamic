import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    points: string[];
    level: string;
  };
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-lg p-8 shadow-card border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          <BookOpen size={28} />
        </div>
        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
          {course.level}
        </span>
      </div>
      
      <h2 className="text-xl font-display font-bold text-primary mb-3">{course.title}</h2>
      <p className="text-foreground/70 mb-8 text-sm leading-relaxed">{course.description}</p>
      
      <div className="mt-auto">
        <h4 className="font-semibold text-foreground mb-4 text-sm">What you'll learn:</h4>
        <ul className="space-y-3 mb-8">
          {course.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-xs text-foreground/80">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href="/contact#booking"
          className="w-full py-3 rounded-lg font-medium bg-secondary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:shadow-md"
        >
          Enroll Now
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
