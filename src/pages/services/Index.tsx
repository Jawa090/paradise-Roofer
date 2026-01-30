

import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Hammer, Home, PaintBucket, ShieldCheck, Building2, Wind, Thermometer, Component, Ruler, Camera, ChevronsRight, Droplets } from "lucide-react";
import roofInstallation from "@/assets/roof-installation.jpg";
import roofInspection from "@/assets/roof-inspection.jpg";
import roofCoating from "@/assets/roof-coating.jpg";
import completedRoof from "@/assets/completed-roof.jpg";

const services = [
  {
    id: "inspection",
    title: "Roof Inspections",
    subtitle: "Spot problems early, fix them fast, and keep your roof happy.",
    description: "Our maintenance and inspection service is like a checkup for your roof—preventing big issues with a little love, care, and expert eyes.",
    image: roofInspection,
    icon: Calendar,
    tags: ["Drone Roof Inspections", "Detailed Digital Reports", "Leak Detection", "Storm Damage Assessment", "Preventative Maintenance"],
    link: "/services/inspection"
  },
  {
    id: "installation",
    title: "Roof Installation",
    subtitle: "Quality roof installation built to protect your home",
    description: "Protect your home with expert roof installation services across Toronto & the GTA—built to handle Canada's harsh weather year-round.",
    image: roofInstallation,
    icon: Home,
    tags: ["New roof for custom homes", "Full roof replacement", "Asphalt shingle installation", "Metal roof installation", "Tile and slate roof installation", "Designer roof upgrades"],
    link: "/services/installation"
  },
  {
    id: "repair",
    title: "Roof Repair",
    subtitle: "Fast, reliable fixes for leaks and storm damage",
    description: "Expert leak detection and repair services. We stop water intrusion immediately and repair wind-damaged shingles to prevent costly interior damage.",
    image: roofInspection, // Using inspection image as placeholder for repair if separate one not available
    icon: Hammer,
    tags: ["Emergency Leak Repair", "Shingle Replacement", "Flashing Repair", "Wind Damage Repair", "chimney Flashing"],
    link: "/services/repair"
  },
  {
    id: "replacement",
    title: "Roof Replacement",
    subtitle: "Complete roof system upgrades with lifetime warranties",
    description: "When it's time for a new roof, trust our Master Elite installers. We provide full tear-offs, premium underlayment, and expert installation of top-tier shingle systems.",
    image: completedRoof,
    icon: ShieldCheck,
    tags: ["Full Tear-Offs", "Premium Asphalt Shingles", "Metal Roofing Options", "Warranty Protection", "Ventilation Upgrades"],
    link: "/services/replacement"
  },
  {
    id: "fascia",
    title: "Fascia Repair & Replacement",
    subtitle: "Protect your roof edges and improve curb appeal",
    description: "Rotten fascia can lead to gutter failure and water damage. We replace damaged boards with durable wood, aluminum, or PVC options to seal your roofline.",
    image: roofCoating, // Placeholder
    icon: Component,
    tags: ["Wood Rot Repair", "Aluminum Fascia Installation", "Visual Cladding", "Pest Protection", "Custom Color Matching"],
    link: "/services/fascia"
  },
  {
    id: "gutters",
    title: "Gutters Repair & Replacement",
    subtitle: "Seamless water management systems",
    description: "Keep your foundation safe with high-capacity 5\" and 6\" seamless gutter systems. We repair leaks, realign slopes, and install full replacements with leaf guards.",
    image: completedRoof, // Placeholder
    icon: Ruler,
    tags: ["Seamless Gutters", "Gutter Cleaning", "Leaf Guards", "Downspout Extensions", "Re-sloping & Realignment"],
    link: "/services/gutters"
  },
  {
    id: "soffit",
    title: "Soffit Repair & Replacement",
    subtitle: "Essential intake ventilation for attic health",
    description: "Proper soffit ventilation is key to preventing ice dams and mold. We install vented aluminum and vinyl soffit panels to ensure maximum airflow.",
    image: roofInspection, // Placeholder
    icon: Wind,
    tags: ["Vented Soffits", "Vinyl & Aluminum Options", "Intake Ventilation", "Attic Airflow Optimization", "Pest Exclusion"],
    link: "/services/soffit"
  },
  {
    id: "attic-insulation",
    title: "Attic Insulation",
    subtitle: "Boost energy efficiency and prevent ice dams",
    description: "Upgrade your attic with R50 blown-in insulation. Proper insulation keeps your home warm in winter, cool in summer, and stops heat loss that causes ice dams.",
    image: roofCoating, // Placeholder
    icon: Thermometer,
    tags: ["Blown-in Cellulose", "Fiberglass Batts", "R-Value Upgrades", "Air Sealing", "Energy Rebate Eligible"],
    link: "/services/attic-insulation"
  },
  {
    id: "interior-renos",
    title: "All Interior Renos",
    subtitle: "Complete restoration for water-damaged interiors",
    description: "We don't just fix the roof; we fix the damage below it. From drywall repair and painting to insulation replacement, we restore your home's interior to perfection.",
    image: roofInstallation, // Placeholder
    icon: PaintBucket,
    tags: ["Drywall Repair", "Ceiling Painting", "Water Damage Restoration", "Insulation & Vapor Barrier", "Mold Remediation"],
    link: "/services/interior-renos"
  },
  {
    id: "residential",
    title: "Residential Roofing",
    subtitle: "Complete roofing services for homeowners",
    description: "From asphalt shingles to cedar shakes, we offer a full range of residential roofing materials and services tailored to Toronto homes.",
    image: completedRoof,
    icon: Home,
    tags: ["Shingle Roofs", "Cedar Shake", "Slate & Tile", "Flat Roofs for Homes", "Skylight Installation"],
    link: "/services/residential"
  },
  {
    id: "commercial",
    title: "Commercial Roofing",
    subtitle: "Scalable solutions for businesses and industrial properties",
    description: "Specialized flat roofing systems including TPO, EPDM, and Tar & Gravel. We deliver durable, code-compliant roofing for warehouses, plazas, and office buildings.",
    image: roofInstallation,
    icon: Building2,
    tags: ["Flat Roof Systems", "TPO & EPDM", "Tar & Gravel", "Commercial Roof Coatings", "Maintenance Plans"],
    link: "/services/commercial"
  },
  {
    id: "coating",
    title: "Roof Coating & Restoration",
    subtitle: "Extend your roof life by 20 years for half the cost",
    description: "Don't replace—restore. Our silicone roof coating systems waterproof your existing commercial roof, stop leaks instantly, and reflect UV rays to lower cooling costs.",
    image: roofCoating,
    icon: Droplets,
    tags: ["Silicone Coatings", "Leak Stop", "Cool Roof Technology", "Cost Savings", "20-Year Warranty"],
    link: "/services/coating"
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background pt-20 pb-10">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#FF9C45]"></div>
            <span className="font-bold text-sm uppercase tracking-wider">Our Services</span>
            <div className="w-3 h-3 bg-[#FF9C45]"></div>
          </div>
          <h1 className="font-['Oswald'] text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-none max-w-5xl text-foreground">
            Need Roofing Help? Here's
            <br />
            Everything We Can Do For You
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 bg-background">
        <div className="container space-y-0">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 bg-muted/10`}
            >
              {/* Image Section - Alternating Order */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""} relative overflow-hidden group`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start bg-muted/30`}>
                <div className="bg-[#FF9C45] p-3 mb-6 inline-flex">
                  <service.icon className="h-6 w-6 text-black" />
                </div>

                <h2 className="font-['Oswald'] text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 text-foreground">
                  {service.title}
                </h2>

                <p className="font-bold text-lg mb-4 text-foreground/90">
                  {service.subtitle}
                </p>

                <div className="flex flex-col md:flex-row gap-6 md:items-start mb-8 w-full">
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <Link to={service.link} className="shrink-0">
                    <button className="bg-black text-white text-xs font-bold uppercase tracking-wider px-6 py-3 flex items-center gap-2 hover:bg-[#FF9C45] hover:text-black transition-colors duration-300">
                      View <ChevronsRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

                {/* Tags Grid */}
                {service.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag) => (
                      <span key={tag} className="bg-white px-3 py-1 text-xs font-semibold text-foreground/80 border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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
