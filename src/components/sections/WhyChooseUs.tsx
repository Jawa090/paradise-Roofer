import { Shield, Award, Package, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Fully Insured & Licensed Protection",
    description: "No risks, no surprises. We're fully insured and licensed to protect your home and give you total peace of mind."
  },
  {
    icon: Award,
    title: "Certified Roofing Experts",
    description: "Verified experts with 20+ years experience. We exceed industry standards for quality roof installation, repair, and replacement."
  },
  {
    icon: Package,
    title: "Premium Roofing Materials",
    description: "Top-grade shingles, metal roofing, tile, and flat roof systems that withstand storms, hail, and harsh weather."
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Honest, affordable rates for roof repair, replacement, gutters, inspections, and all services have no hidden fees, just great value."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-background p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="section-label mb-4 inline-block">Why Choose Paradise Roofers?</span>
            <h2 className="headline-lg text-2xl md:text-3xl lg:text-4xl font-bold">
              Because Canadian roofs  
              <br />
              deserve roofing experts
              <br />
              you can trust
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border-b border-border md:border-b-0 md:border-r last:border-0 md:last:border-0 md:even:border-r-0">
                <div className="flex-shrink-0 w-10 h-10 bg-muted flex items-center justify-center">
                  <reason.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
