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
        <title>NexusHost - Premium Game Server Hosting | Pterodactyl Panel</title>
        <meta 
          name="description" 
          content="Deploy your game servers in seconds with NexusHost. Enterprise-grade performance, DDoS protection, and 24/7 support. Powered by Pterodactyl Panel." 
        />
        <meta name="keywords" content="game server hosting, pterodactyl, minecraft hosting, game hosting, ddos protection" />
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
