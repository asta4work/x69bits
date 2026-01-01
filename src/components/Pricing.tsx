import { Check, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const planConfigs = [
  {
    price: "9.99",
    features: [0, 1, 2, 3, 4, 5, 6],
    paypalButtonId: "WE3QPH9SAEYP4",
    popular: false,
  },
  {
    price: "24.99",
    features: [7, 8, 9, 10, 4, 5, 6, 11, 12],
    paypalButtonId: "WE3QPH9SAEYP4",
    popular: true,
  },
  {
    price: "49.99",
    features: [13, 14, 15, 16, 17, 5, 6, 18, 12, 19],
    paypalButtonId: "WE3QPH9SAEYP4",
    popular: false,
  },
];

const Pricing = () => {
  const { t, dir } = useLanguage();

  const handlePayPalClick = () => {
    window.open("https://www.paypal.com/ncp/payment/WE3QPH9SAEYP4", "_blank");
  };

  const allFeatures = t.pricing.features;

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-6 animate-fade-in opacity-0">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {dir === "ltr" ? "Flexible Plans" : "خطط مرنة"}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            {t.pricing.title1} <span className="gradient-text">{t.pricing.title2}</span>{" "}
            {dir === "ltr" ? "Pricing" : "الأسعار"}
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {planConfigs.map((config, index) => {
            const plan = t.pricing.plans[index];

            return (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up opacity-0 ${
                  config.popular ? "glass border-primary/50 animate-pulse-glow" : "glass hover:border-primary/30"
                } ${dir === "rtl" ? "text-right" : ""}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {config.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium animate-bounce-soft">
                    <Star className="w-4 h-4" />
                    {t.pricing.mostPopular}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div
                    className={`flex items-baseline justify-center gap-1 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
                  >
                    <span className="text-4xl font-bold gradient-text">${config.price}</span>
                    <span className="text-muted-foreground">{t.pricing.perMonth}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {config.features.map((featureIndex, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 text-sm group ${dir === "rtl" ? "flex-row-reverse" : ""}`}
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors">{allFeatures[featureIndex]}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={config.popular ? "hero" : "glass"}
                  size="lg"
                  className={`w-full group ${config.popular ? "" : "hover:border-primary/50"}`}
                  onClick={() => handlePayPalClick()}
                >
                  <svg
                    className={`w-5 h-5 ${dir === "rtl" ? "ml-2" : "mr-2"} group-hover:scale-110 transition-transform`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.93A.859.859 0 0 1 5.79 2.2h7.86c2.683 0 4.649.654 5.686 1.89.95 1.14 1.24 2.59.86 4.32-.01.06-.03.11-.04.17-.73 3.77-3.06 6.42-6.99 6.42H9.88l-1.16 5.63a.641.641 0 0 1-.633.54h-1.01v.167zm13.05-14.497c-.11.55-.26 1.08-.45 1.58-.94 2.5-3.03 4.19-6.04 4.19h-2.71c-.4 0-.75.29-.82.68l-.95 4.63-.27 1.31a.413.413 0 0 0 .41.48h2.89c.35 0 .65-.25.71-.59l.03-.14.56-3.56.04-.2a.72.72 0 0 1 .71-.59h.45c2.89 0 5.15-1.18 5.81-4.58.28-1.42.13-2.61-.6-3.44a2.83 2.83 0 0 0-.77-.77z" />
                  </svg>
                  {t.pricing.payWithPaypal}
                </Button>
              </div>
            );
          })}
        </div>

        <p
          className="text-center text-sm text-muted-foreground mt-8 animate-fade-in opacity-0"
          style={{ animationDelay: "0.8s" }}
        >
          {t.pricing.paymentNote}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
