import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Zap, Shield, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated floating orbs */}
      <div className={`absolute top-1/4 ${dir === "rtl" ? "right-1/4" : "left-1/4"} w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float`} />
      <div className={`absolute bottom-1/4 ${dir === "rtl" ? "left-1/4" : "right-1/4"} w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float`} style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Spinning accent circle */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-20 h-20 border border-primary/10 rounded-full animate-spin-slow hidden lg:block" style={{ animationDirection: "reverse" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8 animate-fade-in opacity-0 hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-4 h-4 text-primary animate-bounce-soft" />
            <span className="text-sm font-medium text-muted-foreground">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
            {t.hero.title1}
            <span className="block gradient-text glow-text bg-[length:200%_200%] animate-gradient-shift">{t.hero.title2}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in opacity-0 ${dir === "rtl" ? "sm:flex-row-reverse" : ""}`} style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" className="group animate-pulse-glow" asChild>
              <a href="#pricing" className="flex items-center gap-2">
                {t.hero.viewPlans}
                <Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
            </Button>
            <Button variant="glass" size="xl" className="hover:scale-105 transition-transform" asChild>
              <a href="#features">{t.hero.whyUs}</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { icon: Globe, value: "99.9%", label: t.hero.uptimeSLA, delay: "0.6s" },
              { icon: Shield, value: "DDoS", label: t.hero.protection, delay: "0.7s" },
              { icon: Zap, value: "NVMe", label: t.hero.ssdStorage, delay: "0.8s" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-default animate-scale-in opacity-0"
                style={{ animationDelay: stat.delay }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
