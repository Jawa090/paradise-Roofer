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
    items: ["rooferio@email.com"],
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
      <section className="bg-muted py-20">
        <div className="container">
          <span className="section-label mb-4 inline-block">Contact</span>
          <h1 className="headline-xl text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Your Roof's New Best
            <br />
            Friend Is One Message Away
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-2">
                    <info.icon className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{info.label}:</span>
                  </div>
                  {info.items.map((item, j) => (
                    <p key={j} className="text-muted-foreground ml-7">
                      {item}
                    </p>
                  ))}
                </div>
              ))}

              {/* Social Media */}
              <div>
                <span className="font-semibold block mb-4">Social Media:</span>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 transition-colors text-sm"
                    >
                      <span className="w-2 h-2 bg-primary" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-square lg:aspect-auto bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Interactive Map</p>
                <p className="text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
}
