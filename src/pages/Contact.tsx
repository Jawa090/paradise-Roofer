import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Hotlines",
    items: ["(866) 123-4567", "(866) 234-5678"],
  },
  {
    icon: Mail,
    label: "Email",
    items: ["info@paradiseroofers.com"],
  },
  {
    icon: MapPin,
    label: "Address",
    items: ["254 Eastern Street, Behind Taj Bridge, Centerburg, Texas, 4134"],
  },
];

const socialLinks = [
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Pinterest", href: "#" },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#FF9C45]"></div>
            <span className="font-bold text-sm uppercase tracking-widest text-[#FF9C45]">Contact</span>
          </div>
          <h1 className="font-['Oswald'] text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] max-w-5xl tracking-wide">
            Your Roof's New Best
            <br />
            Friend Is One Message Away
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      {/* Contact Info & Map */}
      <section className="bg-background">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Contact Details */}
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white">
            <div className="space-y-12 max-w-lg">

              {/* Hotline */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF9C45] mb-4">Hotline</h3>
                <div className="space-y-2">
                  <a href="tel:5551234567" className="block text-3xl font-bold hover:text-[#FF9C45] transition-colors">(555) 123-4567</a>
                  <a href="tel:55512427834" className="block text-3xl font-bold hover:text-[#FF9C45] transition-colors text-muted-foreground">(555) 124-27834</a>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF9C45] mb-4">Email</h3>
                <a href="mailto:sales@roofingestimators.com" className="text-2xl font-bold uppercase hover:text-[#FF9C45] transition-colors">sales@roofingestimators.com</a>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF9C45] mb-4">Headquarters</h3>
                <p className="text-xl font-medium leading-relaxed max-w-xs">
                  254 Eastern Street,
                  Behind Taj Bridge,
                  Centerburg, Texas, 4134
                </p>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF9C45] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm font-bold uppercase border-b-2 border-transparent hover:border-[#FF9C45] transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:w-1/2 min-h-[500px] bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.97486806547!2d-97.7430608!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1689623456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 block"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
}
