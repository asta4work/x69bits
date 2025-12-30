import { Link } from "react-router-dom";
import { Cloud, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t, dir } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${dir === "rtl" ? "text-right" : ""}`}>
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className={`flex items-center gap-2 mb-4 ${dir === "rtl" ? "flex-row-reverse justify-end" : ""}`}>
              <div className="p-2 rounded-lg bg-primary/10">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold gradient-text">x69bits</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              {t.footer.description}
            </p>
            <div className={`flex items-center gap-4 ${dir === "rtl" ? "flex-row-reverse justify-end" : ""}`}>
              <a
                href="mailto:support@x69bits.com"
                className={`flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ${dir === "rtl" ? "flex-row-reverse" : ""}`}
              >
                <Mail className="w-4 h-4" />
                support@x69bits.com
              </a>
              <a
                href="https://discord.gg/x69bits"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ${dir === "rtl" ? "flex-row-reverse" : ""}`}
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
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a 
                  href="https://panel.x69bits.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.clientPortal}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} x69bits.com. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
