import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t, language, dir } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} dir={dir} />
        <title>{t.seo.homeTitle}</title>
        <meta name="description" content={t.seo.homeDescription} />
        <meta name="keywords" content="vps hosting, cloud hosting, pterodactyl, business hosting, enterprise servers, ddos protection" />
        <link rel="canonical" href={`https://x69bits.com/${language === "en" ? "" : language}`} />
        
        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href="https://x69bits.com/" />
        <link rel="alternate" hrefLang="ar" href="https://x69bits.com/?lang=ar" />
        <link rel="alternate" hrefLang="de" href="https://x69bits.com/?lang=de" />
        <link rel="alternate" hrefLang="x-default" href="https://x69bits.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t.seo.homeTitle} />
        <meta property="og:description" content={t.seo.homeDescription} />
        <meta property="og:locale" content={language === "ar" ? "ar_SA" : language === "de" ? "de_DE" : "en_US"} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
