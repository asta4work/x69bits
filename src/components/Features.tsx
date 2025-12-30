import { 
  Server, 
  Shield, 
  Zap, 
  Clock, 
  HardDrive, 
  Headphones,
  Globe,
  Lock
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const featureIcons = [Server, Shield, Zap, Clock, HardDrive, Headphones, Globe, Lock];

const Features = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0">
            {t.features.title1} <span className="gradient-text">{t.features.title2}</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.title}
                className={`group p-6 rounded-xl glass hover-lift cursor-default animate-fade-in opacity-0 ${dir === "rtl" ? "text-right" : ""}`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 ${dir === "rtl" ? "mr-auto" : ""}`}>
                  <Icon className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                     style={{ boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.1)" }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
