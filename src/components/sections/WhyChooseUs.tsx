import { Shield, Award, Package, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "No Worries, No What-Ifs.",
    description: "We're fully insured so your home — and your peace of mind — are always protected."
  },
  {
    icon: Award,
    title: "Certified, Verified, And Trusted.",
    description: "We're officially recognized pros who play by the rules (and raise the bar)."
  },
  {
    icon: Package,
    title: "Only The Good Stuff Up Top.",
    description: "We use top-tier materials that hold strong through storms, sun, and squirrel attacks."
  },
  {
    icon: DollarSign,
    title: "Fair Prices, No Funny Business.",
    description: "We keep things affordable without cutting corners — great roofs at great value."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-background p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="section-label mb-4 inline-block">🔨 Why Choose Rooferio 🔨</span>
            <h2 className="headline-lg text-2xl md:text-3xl lg:text-4xl">
              Because Your Roof
              <br />
              Deserves Better
              <br />
              Than 'Good Enough'
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
