import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>x69bits - Enterprise VPS & Cloud Hosting | Pterodactyl Panel</title>
        <meta 
          name="description" 
          content="Deploy VPS and cloud servers in seconds with x69bits. Enterprise-grade performance, DDoS protection, and 24/7 support. Powered by Pterodactyl Panel." 
        />
        <meta name="keywords" content="vps hosting, cloud hosting, pterodactyl, business hosting, enterprise servers, ddos protection" />
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
