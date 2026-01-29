import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import Hero3D from "@/components/sections/Hero3D";
import CurvedCarousel from "@/components/sections/CurvedCarousel";
import SplitRevealSection from "@/components/sections/SplitRevealSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BlogPreview from "@/components/sections/BlogPreview";
import RoofingTypesPreview from "@/components/sections/RoofingTypesPreview";
import ReviewsPreview from "@/components/sections/ReviewsPreview";
import HowWeWork from "@/components/sections/HowWeWork";
import roofInspection from "@/assets/roof-inspection.jpg";
import roofInstallation from "@/assets/roof-installation.jpg";
import roofCoating from "@/assets/roof-coating.jpg";
import completedRoof from "@/assets/completed-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";

const services = [
  {
    title: "Roof Installation",
    description: "Quality roof installation built to protect your home",
    image: roofInstallation,
    href: "/services",
  },
  {
    title: "Roof Repair",
    description: "Fast roof repairs to stop leaks and prevent damage",
    image: roofInspection,
    href: "/services",
  },
  {
    title: "Roof Replacement",
    description: "Out with the old—upgrade to a weather-ready roof",
    image: completedRoof,
    href: "/services",
  },
  {
    title: "Roof Inspections",
    description: "Spot problems early, fix them fast, and keep your roof happy.",
    image: roofInspection,
    href: "/services",
  },
  {
    title: "Roof Coating",
    description: "It's like sunscreen... but for your roof.",
    image: roofCoating,
    href: "/services",
  },
  {
    title: "Commercial Roofing",
    description: "From the ground up to the top of the build—we've got you covered.",
    image: metalRoof,
    href: "/services",
  },
];

const faqs = [
  {
    question: "How do I know if my roof needs replacing?",
    answer: "If your roof is over 20 years old, you see missing shingles, or you're collecting buckets during rainstorms — it's probably time. We can confirm with a free inspection.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all roofing projects. Just give us a call or fill out our contact form.",
  },
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements take 1-3 days depending on size and complexity. We'll give you an accurate timeline during your free estimate.",
  },
  {
    question: "What roofing materials do you offer?",
    answer: "We install asphalt shingles, metal roofing, clay tiles, slate, wood shake, and flat roofing systems. We'll help you choose the best option for your home.",
  },
  {
    question: "Are your roofers licensed and insured?",
    answer: "Absolutely. We're fully licensed, bonded, and insured. We carry comprehensive liability and workers' compensation coverage for your protection.",
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes, we offer comprehensive warranties on both materials and workmanship. The specific terms depend on the roofing system you choose.",
  },
  {
    question: "Can you help with insurance claims?",
    answer: "We can assist with documentation and work directly with your insurance company to help streamline the claims process.",
  },
  {
    question: "Do you do emergency repairs?",
    answer: "Yes — we're available 24/7 for emergency roof repairs. Call our emergency line anytime and we'll have someone out as soon as possible.",
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
              <p className="text-sm font-semibold uppercase tracking-wider">Our services</p>
              <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
            </div>
            {/* Centered H2 */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              heights, leaving you safe and worry-free.
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

      {/* 360° Curved Draggable Portfolio */}
      <CurvedCarousel />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Split Reveal Stats Section */}
      <SplitRevealSection />

      {/* How We Work */}
      <HowWeWork />

      {/* Reviews Preview */}
      <ReviewsPreview />

      {/* Roofing Types Preview */}
      <RoofingTypesPreview />

      {/* Blog Preview */}
      <BlogPreview />

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
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                    openFaq === i ? "bg-foreground text-background" : "hover:bg-muted"
                  }`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-heading font-bold text-sm uppercase tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 flex items-center justify-center shrink-0 ${
                    openFaq === i ? "bg-primary" : "bg-muted"
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
