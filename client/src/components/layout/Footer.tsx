import { Link } from "wouter";
import { BookOpen, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 pattern-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/95 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                <BookOpen size={24} />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Al-Rehman
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Providing accessible, high-quality online Quran education globally with certified male and female teachers.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-accent mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/courses", label: "Our Courses" },
                { href: "/teachers", label: "Meet Teachers" },
                { href: "/pricing", label: "Pricing Plans" }
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-accent mb-6">Courses</h3>
            <ul className="space-y-3">
              {[
                "Noorani Qaida",
                "Quran Reading & Tajweed",
                "Hifz (Memorization)",
                "Islamic Studies for Kids"
              ].map(course => (
                <li key={course} className="text-primary-foreground/80 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-accent mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                <span>info@alrehmanislamiccenter.com</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>Global Online Classes<br/>Available 24/7</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/12345678900" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Al-Rehman Islamic Center. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
