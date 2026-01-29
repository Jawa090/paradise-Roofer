import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import roofInstallation from "@/assets/roof-installation.jpg";
import roofInspection from "@/assets/roof-inspection.jpg";
import roofCoating from "@/assets/roof-coating.jpg";
import completedRoof from "@/assets/completed-roof.jpg";

const services = [
  {
    id: "inspections",
    title: "Roof Inspections",
    subtitle: "Spot problems early, fix them fast, and keep your roof happy.",
    description: "Our maintenance and inspection service is like a checkup for your roof — preventing big issues with a little love, care, and expert eyes.",
    image: roofInspection,
    features: [
      "Seasonal roof inspection",
      "Annual maintenance plans",
      "Leak and moisture detection",
      "Siding and damage checkups",
      "Flashing and sealant checks",
      "Storm damage inspection",
      "Debris cleaning and minor repairs",
    ],
  },
  {
    id: "installation",
    title: "Roof Installation",
    subtitle: "Quality roof installation built to protect your home",
    description: "Protect your home with expert roof installation services across Toronto & the GTA — built to handle Canada's harsh weather year round.",
    image: roofInstallation,
    features: [
      "New roof for custom homes",
      "Full roof replacement",
      "Asphalt shingle installation",
      "Metal roof installation",
      "Tile and slate roof installation",
      "Designer roof upgrades",
    ],
  },
  {
    id: "repair",
    title: "Roof Repair",
    subtitle: "Fast roof repairs to stop leaks and prevent damage",
    description: "No matter the problem, we provide fast, dependable roof repairs designed to stop damage before it spreads.",
    image: roofInspection,
    features: [
      "Emergency roof repairs for storm and hail damage",
      "Roof leak detection and professional patching",
      "Quick scheduling with fast turnaround times",
      "Flashing repair and leak seals",
      "Shingle repairs starting at $499",
      "Emergency roof repairs: Pricing varies by scope",
    ],
  },
  {
    id: "replacement",
    title: "Roof Replacement",
    subtitle: "Out with the old—upgrade to a weather-ready roof",
    description: "When repairs just won't cut it, we'll tear off the old and give your home a fresh, strong new lid. Bonus: it might just boost your curb appeal, too.",
    image: completedRoof,
    features: [
      "Complete tear-off and disposal",
      "Upgraded underlayment installation",
      "New flashing and ventilation systems",
      "Multi-year material warranties",
      "Full cleanup after installation",
    ],
  },
  {
    id: "coating",
    title: "Roof Coating",
    subtitle: "Add years of life with protective roof coatings",
    description: "Extend your roof's life with a protective coating that seals, waterproofs, and reflects heat. Perfect for flat or low-slope roofs.",
    image: roofCoating,
    features: [
      "Elastomeric roof coatings",
      "Silicone waterproof membranes",
      "UV-reflective cool roof coatings",
      "Seamless protection for flat roofs",
      "Energy-efficient solutions",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Roofing",
    subtitle: "Professional roofing solutions for businesses",
    description: "From warehouses to office buildings, we provide commercial-grade roofing that meets code and exceeds expectations.",
    image: roofInstallation,
    features: [
      "Flat roof systems",
      "TPO and EPDM membranes",
      "Built-up roofing (BUR)",
      "Metal roofing for commercial",
      "Scheduled maintenance programs",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container">
          <span className="section-label mb-4 inline-block">Our Services</span>
          <h1 className="headline-xl text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Need Roofing Help? Here's
            <br />
            Everything We Can Do For You
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                  Service
                </div>
                <h2 className="headline-lg text-3xl md:text-4xl mb-2">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wide hover:underline"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
}
