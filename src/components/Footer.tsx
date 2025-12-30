import { Link } from "react-router-dom";
import { Cloud, Mail, MessageCircle, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t, dir } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${dir === "rtl" ? "text-right" : ""}`}>
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className={`flex items-center gap-2 mb-4 group ${dir === "rtl" ? "flex-row-reverse justify-end" : ""}`}>
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Cloud className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-xl font-bold gradient-text">x69bits</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              {t.footer.description}
            </p>
            <div className={`flex items-center gap-4 ${dir === "rtl" ? "flex-row-reverse justify-end" : ""}`}>
              <a
                href="mailto:support@x69bits.com"
                className={`flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all hover:scale-105 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
              >
                <Mail className="w-4 h-4" />
                support@x69bits.com
              </a>
              <a
                href="https://discord.gg/x69bits"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all hover:scale-105 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
              >
                <MessageCircle className="w-4 h-4" />
                Discord
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { href: "#pricing", label: t.nav.pricing },
                { href: "#features", label: t.nav.features },
                { href: "https://panel.x69bits.com", label: t.nav.clientPortal, external: true },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-all inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-all inline-block hover:translate-x-1">
                  {t.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-all inline-block hover:translate-x-1">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} x69bits.com. {t.footer.allRightsReserved}
            <Heart className="w-3 h-3 text-primary animate-bounce-soft inline-block mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
