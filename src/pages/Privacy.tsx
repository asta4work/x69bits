import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | NexusHost</title>
        <meta name="description" content="Learn how NexusHost collects, uses, and protects your personal information in our Privacy Policy." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            
            <div className="prose prose-invert prose-sm max-w-none space-y-8">
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Account information (email, username, password)</li>
                  <li>Billing information (processed securely through PayPal)</li>
                  <li>Support communications and tickets</li>
                  <li>Server configuration and usage data</li>
                </ul>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">2. Automatically Collected Information</h2>
                <p className="text-muted-foreground mb-4">
                  When you use our services, we automatically collect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>IP addresses and access logs</li>
                  <li>Browser type and device information</li>
                  <li>Server performance metrics</li>
                  <li>Cookies and similar technologies for session management</li>
                </ul>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide and maintain our hosting services</li>
                  <li>Process payments and prevent fraud</li>
                  <li>Send service updates and security alerts</li>
                  <li>Respond to support requests</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">4. Data Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share data with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Payment processors (PayPal) for transaction handling</li>
                  <li>Infrastructure providers necessary for service delivery</li>
                  <li>Law enforcement when required by valid legal process</li>
                </ul>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures including encryption, 
                  firewalls, and access controls. However, no system is completely secure, 
                  and we cannot guarantee absolute security of your data.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your data for as long as your account is active or as needed 
                  to provide services. After account deletion, we may retain certain 
                  information for legal, accounting, or security purposes for up to 
                  90 days.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">8. Cookies</h2>
                <p className="text-muted-foreground">
                  We use essential cookies for authentication and session management. 
                  We may use analytics cookies to understand how visitors use our site. 
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 13. We do not knowingly 
                  collect information from children under 13. If you believe we have 
                  collected such information, please contact us immediately.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. We will notify you of 
                  significant changes via email or prominent notice on our website.
                </p>
              </section>

              <section className="glass p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground">
                  For privacy-related questions or requests, contact us at{" "}
                  <a href="mailto:privacy@example.com" className="text-primary hover:underline">
                    privacy@example.com
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

export default Privacy;
