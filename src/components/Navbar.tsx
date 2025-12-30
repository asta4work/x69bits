import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Cloud } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.pricing, path: "/#pricing" },
    { name: t.nav.features, path: "/#features" },
    { name: t.nav.terms, path: "/terms" },
    { name: t.nav.privacy, path: "/privacy" },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("/#")) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass border-b border-border/50 py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Cloud className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-xl font-bold gradient-text">x69bits</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <LanguageSwitcher />
            <Button variant="hero" size="sm" className="hover:scale-105 transition-transform" asChild>
              <a href="https://panel.x69bits.com" target="_blank" rel="noopener noreferrer">
                {t.nav.clientPortal}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-secondary hover:translate-x-1 ${dir === "rtl" ? "hover:-translate-x-1 hover:translate-x-0" : ""} ${
                    location.pathname === link.path
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" className="mt-2" asChild>
                <a href="https://panel.x69bits.com" target="_blank" rel="noopener noreferrer">
                  {t.nav.clientPortal}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
