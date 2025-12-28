import { 
  Server, 
  Shield, 
  Zap, 
  Clock, 
  HardDrive, 
  Headphones,
  Globe,
  RefreshCw
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Pterodactyl Panel",
    description: "Industry-leading control panel with full FTP access, file manager, and console.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection against attacks up to 1Tbps included free.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Your server is deployed and ready within seconds of payment.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Guaranteed uptime with automatic failover and redundancy.",
  },
  {
    icon: HardDrive,
    title: "NVMe Storage",
    description: "Ultra-fast NVMe SSDs for blazing load times and performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert support team available around the clock via ticket system.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Multiple datacenter locations for optimal latency worldwide.",
  },
  {
    icon: RefreshCw,
    title: "Auto Backups",
    description: "Daily automatic backups with one-click restore functionality.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">NexusHost</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need for a seamless gaming experience with 
            enterprise-grade infrastructure at affordable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl glass hover-lift cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
