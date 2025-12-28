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

const features = [
  {
    icon: Server,
    title: "Pterodactyl Panel",
    description: "Full server control with FTP access, file manager, console, and resource monitoring.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade mitigation against attacks up to 1Tbps included with every plan.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Your server is provisioned and ready within seconds of payment confirmation.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "Guaranteed uptime backed by service credits and automatic failover systems.",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description: "Ultra-fast NVMe drives for blazing database queries and application performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Technical specialists available around the clock via ticket and live chat.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Strategic datacenter locations for optimal latency to your customers worldwide.",
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "SSL certificates, firewalls, and automated backups to protect your business.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">x69bits</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise infrastructure designed for businesses that demand reliability, 
            performance, and scalability without the enterprise price tag.
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
