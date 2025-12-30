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
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.features.title1} <span className="gradient-text">{t.features.title2}</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-xl glass hover-lift cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
