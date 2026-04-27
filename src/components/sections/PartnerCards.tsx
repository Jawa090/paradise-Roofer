import { ExternalLink } from "lucide-react";
import LogoBar from "./LogoBar";

const partners = [
  {
    name: "Paradise Construction",
    url: "https://paradiseconstruction.com/",
    logo: "/footerlogos/paradiseC.png",
    description: "Premier construction company delivering exceptional residential and commercial building solutions with quality craftsmanship and innovative design since 1998."
  },
  {
    name: "Paradise Estimating",
    url: "https://paradiseestimating.com/",
    logo: "/footerlogos/paradiseE.webp",
    description: "Professional construction cost estimation services providing accurate project budgeting and comprehensive takeoff solutions for all building trades."
  },
  {
    name: "ContractorsList",
    url: "https://staging.contractorslist.com/",
    logo: "/footerlogos/contractorL.png",
    description: "Comprehensive contractor directory platform connecting property owners with verified, licensed contractors across various construction specialties."
  },
  {
    name: "Bitwords",
    url: "https://www.bitwords.com/",
    logo: "/footerlogos/bitwords.png",
    description: "Digital marketing and content creation agency providing comprehensive online presence solutions for businesses across multiple industries."
  },
  {
    name: "Fusion Cortex",
    url: "https://fusioncortex.com/",
    logo: "/footerlogos/Fusion-Cortex.jpg",
    description: "Leading technology solutions provider specializing in AI-driven software development and digital transformation services."
  },
  {
    name: "Grobots",
    url: "https://grobots.ai/",
    logo: "/footerlogos/grobot.png",
    description: "Advanced robotics and automation company delivering intelligent solutions for industrial and commercial applications."
  },
  {
    name: "Rush Corporation",
    url: "https://rushcorporation.com/",
    logo: "/footerlogos/rush.png",
    description: "Multi-industry corporation offering diverse business solutions and strategic consulting services across various sectors."
  },
  {
    name: "MEP Estimate",
    url: "https://mepestimate.us",
    logo: "/footerlogos/mep.png",
    description: "Mechanical, Electrical, and Plumbing estimation services providing integrated building systems cost analysis."
  },
];

export default function PartnerCards() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
            <p className="text-sm font-semibold uppercase tracking-wider">Our Group of Companies</p>
            <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Industry Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A network of specialized companies delivering excellence in construction, estimating, technology, and more. Click on any company below to explore their services and offerings.
          </p>
        </div>

        {/* Partner Logos Bar */}
        <LogoBar />

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center h-24 mb-4 bg-gray-50 rounded-lg group-hover:bg-primary/5 transition-colors">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-20 max-h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Company Name */}
              <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                {partner.description}
              </p>

              {/* Visit Link */}
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                <span>Visit Website</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
