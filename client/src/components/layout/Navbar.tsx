import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/teachers", label: "Teachers" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-accent transition-colors">
              <BookOpen size={24} />
            </div>
            <span className="font-display font-bold text-2xl text-primary group-hover:text-accent transition-colors">
              Al-Rehman
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location === link.href ? "text-accent" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#booking"
              className="px-6 py-2.5 rounded-lg font-medium bg-accent text-primary hover:bg-accent/90 shadow-md shadow-accent/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              data-testid="navbar-book-trial"
            >
              Book Free Trial
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-lg font-medium bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              data-testid="navbar-contact"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t mt-3"
          >
            <nav className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium p-2 rounded-lg ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center mt-4 px-6 py-3 rounded-lg font-medium bg-accent text-primary shadow-md"
                data-testid="mobile-book-trial"
              >
                Book Free Trial
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-6 py-3 rounded-lg font-medium bg-primary text-white shadow-md"
                data-testid="mobile-contact"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
