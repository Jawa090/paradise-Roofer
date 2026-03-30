import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import Hero3D from "@/components/sections/Hero3D";
import SplitRevealSection from "@/components/sections/SplitRevealSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowWeWork from "@/components/sections/HowWeWork";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import ReviewsPreview from "@/components/sections/ReviewsPreview";
import RoofingTypesPreview from "@/components/sections/RoofingTypesPreview";
import roofInspectionImg from "@/assets/Home_page/FREERoofDroneInspectionTorontoGTAHomeowners.webp";
import roofRepairImg from "@/assets/Home_page/Roof_repair_image.png";
import roofInstallationImg from "@/assets/Home_page/Roof_INstallation2.png";
import roofReplacementImg from "@/assets/Home_page/CompleteRoofReplacementinToront0GTA.webp";
import roofCoatingImg from "@/assets/roof-coating.jpg";
import gutterRepairImg from "@/assets/Home_page/Gutter_Repair.webp";
import residentialRoofingImg from "@/assets/Home_page/ResidentialRoofingSolutions.webp";
import commercialRoofingImg from "@/assets/Home_page/CommercialServicesCommercialFlatRoofingSystemsToronto.webp";
import soffitRepairImg from "@/assets/Home_page/Soffit_Repair_New.png";
import fasciaRepairImg from "@/assets/Home_page/Fascia_Repair_New.png";
import atticInsulationImg from "@/assets/Home_page/AtticInsulationTorontoGTA.jpg";
import interiorRenosImg from "@/assets/Home_page/CompleteInteriorRenovationsinTorontoGTA.webp";

const services = [
  {
    title: "Free Drone Roof Inspection",
    description: "Professional drone inspection service delivering accurate, efficient and high-quality roof inspection for homes and businesses with safety and reliability.",
    image: roofInspectionImg,
    href: "/services/inspection",
  },
  {
    title: "Roof Repair",
    description: "Professional roof repair service delivering reliable, efficient and high-quality damage solutions for homes and businesses with safety and durability.",
    image: roofRepairImg,
    href: "/services/repair",
  },
  {
    title: "Roof Installation",
    description: "Professional roof installation service delivering reliable, efficient and high-quality roofing solutions for homes and businesses with safety and durability.",
    image: roofInstallationImg,
    href: "/services/installation",
  },
  {
    title: "Roof Replacement",
    description: "Professional roof replacement service delivering reliable, efficient and high-quality upgrade solutions for homes and businesses with safety and durability.",
    image: roofReplacementImg,
    href: "/services/replacement",
  },
  {
    title: "Residential Roofing",
    description: "Professional residential roofing service delivering reliable, efficient and high-quality home solutions for homeowners and properties with safety and durability.",
    image: residentialRoofingImg,
    href: "/services/residential",
  },
  {
    title: "Soffit Repair & Replacement",
    description: "Professional soffit repair service delivering reliable, efficient and high-quality ventilation solutions for homes and businesses with safety and durability.",
    image: soffitRepairImg,
    href: "/services/soffit",
  },
  {
    title: "Fascia Repair & Replacement",
    description: "Professional fascia repair service delivering reliable, efficient and high-quality protection solutions for homes and businesses with safety and durability.",
    image: fasciaRepairImg,
    href: "/services/fascia",
  },
  {
    title: "Gutters Repair & Replacement",
    description: "Professional gutter repair service delivering reliable, efficient and high-quality drainage solutions for homes and businesses with safety and durability.",
    image: gutterRepairImg,
    href: "/services/gutters",
  },
  {
    title: "Attic Insulation",
    description: "Professional attic insulation service delivering reliable, efficient and high-quality energy solutions for homes and businesses with safety and durability.",
    image: atticInsulationImg,
    href: "/services/attic-insulation",
  },
  {
    title: "All Interior Renos",
    description: "Professional interior renovation service delivering reliable, efficient and high-quality improvement solutions for homes and businesses with safety and durability.",
    image: interiorRenosImg,
    href: "/services/interior-renos",
  },
];

const faqs = [
  {
    question: "How much does roof repair cost in GTA, Toronto?",
    answer: "Roof repair costs $299, depending on damage size, materials and location. Free drone inspection available.",
  },
  {
    question: "How long does a new roof last in Canada?",
    answer: "Asphalt shingles last 20-30 years; metal roofing 40-70 years; tile 50+ years. Canadian winters can shorten lifespan without proper maintenance.",
  },
  {
    question: "What is emergency roof repair?",
    answer: "24/7 service for storm damage, leaks, or fallen branches. Includes tarping to prevent interior damage. Response within hours across Canada.",
  },
  {
    question: "Do you offer free roof inspections in Canada?",
    answer: "Yes, free on-site inspections for homes and businesses. We check shingles, leaks, ventilation and gutters using drone tech.",
  },
  {
    question: "When should I replace my roof?",
    answer: "Signs: curling shingles, granules in gutters, leaks, age 20+ years. Professional inspection confirms the need.",
  },
  {
    question: "What roofing materials work best for GTA Toronto weather?",
    answer: "American asphalt shingles are the top choice for Canada because they are engineered to remain flexible during extreme freeze-thaw cycles and resist heavy snow loads. When installed with a proper ice and water shield, they provide a durable, cost-effective barrier against ice damming and high winds.",
  },
  {
    question: "Do you handle insurance claims for storm damage?",
    answer: "Yes, we assist with hail, wind, storm claims under the Storm Care Program. Full documentation and direct insurer coordination in GTA Toronto.",
  },
  {
    question: "How long does roof installation take?",
    answer: "Asphalt shingle roof: 1-3 days for average home. Commercial or steep roofs: 3-7 days. Weather permitting.",
  },
  {
    question: "What warranty do you offer on roofing services?",
    answer: "50 years material warranties; 10-year workmanship. Full coverage on replacements and installations.",
  },
];

import PageSEO from "@/components/seo/PageSEO";

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <PageSEO slug="home" />
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
              Free Drone Roof Inspection
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



      {/* Before and After Projects Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
              <p className="text-sm font-semibold uppercase tracking-wider">Our Recent Roofing Projects</p>
              <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Before and After
            </h2>
          </div>

          {/* Single Before/After Card */}
          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider />
          </div>

          {/* View All Projects Button */}
          <div className="flex justify-center mt-10">
            <Link to="/projects">
              <button
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
                style={{ backgroundColor: 'rgb(255, 156, 69)', color: 'rgb(0, 0, 0)' }}
              >
                <span>View All Projects</span>
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

      {/* Reviews Preview */}
      <ReviewsPreview />

      {/* Roofing Types Preview */}
      <RoofingTypesPreview />

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
