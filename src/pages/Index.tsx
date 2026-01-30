import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import Hero3D from "@/components/sections/Hero3D";
import SplitRevealSection from "@/components/sections/SplitRevealSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowWeWork from "@/components/sections/HowWeWork";
import roofInspection from "@/assets/roof-inspection.jpg";
import roofInstallation from "@/assets/roof-installation.jpg";
import roofCoating from "@/assets/roof-coating.jpg";
import completedRoof from "@/assets/completed-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";

const services = [
  {
    title: "Roof Installation",
    description: "New roofs built right: shingle, metal, tile, flat, or asphalt for homes and commercial properties.",
    image: roofInstallation,
    href: "/services/installation",
  },
  {
    title: "Roof Replacement",
    description: "Remove old roofs, install durable upgrades. Residential and commercial specialists.",
    image: completedRoof,
    href: "/services/replacement",
  },
  {
    title: "Roof Repair",
    description: "Fix leaks, shingles, damage fast. Includes leak detection, wind/hail, storm repair.",
    image: roofInspection,
    href: "/services/repair",
  },

  {
    title: "Roof Inspections",
    description: "Spot issues early with detailed checks.",
    image: roofInspection,
    href: "/services/inspection",
  },
  {
    title: "Emergency Roof Repair",
    description: "24/7 emergency roof repair. Fast response for leaks, storm damage, urgent issues.",
    image: roofCoating,
    href: "/services/repair",
  },
  {
    title: "Gutter Services",
    description: "Installation, repair, cleaning to prevent water damage.",
    image: metalRoof,
    href: "/services/gutters",
  },
  {
    title: "Skylight & Ventilation",
    description: "Install/repair skylights, attic ventilation, insulation for energy savings.",
    image: metalRoof,
    href: "/services/attic-insulation",
  },
];

const faqs = [
  {
    question: "How much does roof repair cost in Canada?",
    answer: "Roof repair costs $500–$5,000 depending on damage size, materials, and location. Minor shingle fixes start at $300; full leak repair averages $2,000. Free quotes available.",
  },
  {
    question: "How long does a new roof last in Canada?",
    answer: "Asphalt shingles last 15-30 years; metal roofing 40-70 years; tile 50+ years. Canadian winters shorten lifespan without proper maintenance.",
  },
  {
    question: "What is emergency roof repair?",
    answer: "24/7 service for storm damage, leaks, or fallen branches. Includes tarping to prevent interior damage. Response within hours across Canada.",
  },
  {
    question: "Do you offer free roof inspections in Canada?",
    answer: "Yes, free on-site inspections for homes and businesses. We check shingles, leaks, ventilation, and gutters using drone tech.",
  },
  {
    question: "How much does roof replacement cost per square?",
    answer: "$400-$800/square (100 sq ft) installed. Asphalt shingles cheapest; metal/tile higher. Factors: pitch, access, materials.",
  },
  {
    question: "When should I replace my roof?",
    answer: "Metal roofing for snow/ice; asphalt shingles with ice shield; TPO flat roofs for commercial use. All impact-resistant.",
  },
  {
    question: "What roofing materials work best for Canadian weather?",
    answer: "Metal roofing for snow/ice; asphalt shingles with ice shield; TPO flat roofs for commercial use. All impact-resistant.",
  },
  {
    question: "Do you handle insurance claims for storm damage?",
    answer: "Yes, we assist with hail, wind, storm claims. Full documentation and direct insurer coordination in Canada.",
  },
  {
    question: "How long does roof installation take?",
    answer: "Asphalt shingle roof: 1-3 days for average home. Commercial or steep roofs: 3-7 days. Weather permitting.",
  },
  {
    question: "What warranty do you offer on roofing services?",
    answer: "10-50 year material warranties; 5-10 year workmanship. Full coverage on installations, repairs, gutters.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      {/* Hero Section with 3D Mouse-Tracking Effect */}
      <Hero3D />

      {/* Services Section */}
      <section className="py-20 bg-background" data-framer-name="Section - Services">
        <div className="container" data-framer-name="Container">
          {/* Section Header - Dark Text Middle Aligned */}
          <div className="flex flex-col items-center mb-12">
            {/* Label with orange lines */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
              <p className="text-sm font-semibold uppercase tracking-wider">Our Roofing Services
              </p>
              <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
            </div>
            {/* Centered H2 */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Heights, Leaving You Safe and Worry-Free.
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-framer-name="Services">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.href}
                className="group relative rounded-2xl overflow-hidden transition-all"
                style={{ backgroundColor: 'rgb(245, 245, 245)' }}
                data-framer-name="Service Card"
              >
                <div className="p-6 pb-4">
                  <div className="mb-4">
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: 'rgb(33, 32, 27)' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: 'rgb(33, 32, 27)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Image Container with Hover Effect */}
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-all duration-300 group-hover:scale-110"
                    style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%', width: '200%', height: '200%' }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Hover Overlay with View Button */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgb(255, 148, 54)' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold uppercase text-sm text-black">View</span>
                      <div className="flex items-center -space-x-2">
                        <ChevronRight className="h-4 w-4 text-black" strokeWidth={3} />
                        <ChevronRight className="h-4 w-4 text-black" strokeWidth={3} />
                        <ChevronRight className="h-4 w-4 text-black" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="flex justify-center mt-10">
            <Link to="/services">
              <button
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
                style={{ backgroundColor: 'rgb(20, 20, 20)', color: 'rgb(255, 255, 255)' }}
              >
                <span>View All Services</span>
                <div className="flex items-center -space-x-2">
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-75" strokeWidth={3} />
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-100" strokeWidth={3} />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Split Reveal Stats Section */}
      <SplitRevealSection />

      {/* How We Work */}
      <HowWeWork />

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-label mb-4 inline-block">🔨 FAQs 🔨</span>
            <h2 className="headline-lg text-3xl md:text-4xl">
              Let's Climb Through Your
              <br />
              Questions, One By One.
            </h2>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border">
                <button
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openFaq === i ? "bg-foreground text-background" : "hover:bg-muted"
                    }`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-heading font-bold text-sm uppercase tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 flex items-center justify-center shrink-0 ${openFaq === i ? "bg-primary" : "bg-muted"
                    }`}>
                    {openFaq === i ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </Layout>
  );
}
