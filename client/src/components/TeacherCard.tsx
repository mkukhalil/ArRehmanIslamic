import { motion } from "framer-motion";
import { Award, User } from "lucide-react";

interface TeacherCardProps {
  teacher: {
    name: string;
    exp: string;
    desc: string;
  };
  isFemale: boolean;
  index: number;
}

export default function TeacherCard({ teacher, isFemale, index }: TeacherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg border border-border shadow-card hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-bold text-white ${isFemale ? "bg-rose-500" : "bg-blue-600"}`}
        >
          {teacher.name.split(' ')[0].charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-base font-display text-primary">
            {teacher.name}
          </h3>
          <span className="text-xs font-medium text-accent flex items-center gap-1">
            <Award size={12} /> {teacher.exp}
          </span>
        </div>
      </div>
      <p className="text-foreground/70 text-sm leading-relaxed">
        {teacher.desc}
      </p>
    </motion.div>
  );
}
