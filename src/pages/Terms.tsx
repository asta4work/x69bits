import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | NexusHost</title>
        <meta name="description" content="Read our Terms of Service to understand the rules and guidelines for using NexusHost game server hosting services." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            
            <div className="prose prose-invert prose-sm max-w-none space-y-8">
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using NexusHost services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
                <p className="text-muted-foreground">
                  NexusHost provides game server hosting services powered by Pterodactyl Panel. 
                  We offer virtual private servers, dedicated resources, and management tools for 
                  hosting game servers and related applications.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">3. Acceptable Use Policy</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to use our services for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Any illegal activities or content</li>
                  <li>Distribution of malware or harmful software</li>
                  <li>DDoS attacks or network abuse</li>
                  <li>Hosting pirated content or copyright infringement</li>
                  <li>Spamming, phishing, or fraudulent activities</li>
                  <li>Any activity that violates game publisher terms of service</li>
                </ul>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground">
                  All payments are processed through PayPal. Services are provided on a prepaid basis. 
                  Refunds may be issued within 24 hours of purchase if no resources have been utilized. 
                  After this period, refunds are at our sole discretion.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">5. Service Level Agreement</h2>
                <p className="text-muted-foreground">
                  We strive for 99.9% uptime. In the event of extended downtime beyond our control, 
                  service credits may be issued proportional to the downtime experienced.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">6. Account Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate accounts that violate these terms 
                  without prior notice. Users may cancel their service at any time through the 
                  control panel.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  NexusHost shall not be liable for any indirect, incidental, special, or 
                  consequential damages resulting from the use or inability to use our services. 
                  Our total liability shall not exceed the amount paid for services in the 
                  preceding month.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">8. Modifications</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be 
                  effective upon posting to our website. Continued use of services constitutes 
                  acceptance of modified terms.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">9. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:support@example.com" className="text-primary hover:underline">
                    support@example.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Terms;
