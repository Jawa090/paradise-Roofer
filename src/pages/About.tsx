import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { CheckCircle, Users, Award, Target } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import completedRoof from "@/assets/completed-roof.jpg";

const team = [
  { name: "Mike P.", role: "Lead Installer", description: "18 yrs experience. GAF Master Elite. Scarborough family man.", image: teamPhoto },
  { name: "Sarah T.", role: "Service Manager", description: "12 yrs coordinating 100+ weekly jobs. Ex-insurance adjuster.", image: teamPhoto },
  { name: "Carlos R.", role: "Drone Tech", description: "Certified pilot finds leaks others miss. Mississauga dad of 4.", image: teamPhoto },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-foreground text-background py-32">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />
        </div>
        <div className="container relative z-10">
          <span className="section-label text-primary mb-4 inline-block">About Paradise Roofers</span>
          <h1 className="headline-xl text-4xl md:text-6xl lg:text-7xl max-w-4xl">
            Extensive Industry Expertise
            <br />
            of Toronto Roofing Excellence
          </h1>
          <p className="text-background/80 text-lg mt-6 max-w-3xl">
            Trusted roofers serving GTA - Toronto, Mississauga, Vaughan, Markham, Brampton, Milton, Oakville & GTA. At Paradise Roofers, we believe a roof is more than just a shelter—it is a critical investment in your property's longevity. Our team is composed of seasoned technical specialists who bring master-level skill to every project. By focusing on structural integrity and meticulous execution, we've built a reputation for delivering roofing systems that stand up to the most demanding environments.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="headline-lg text-3xl md:text-4xl mb-8">Proven Results</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">2,000+</div>
              <h3 className="font-heading font-bold text-lg mb-2">roofs installed</h3>
              <p className="text-muted-foreground text-sm">From residential homes to major commercial landmarks across GTA and Toronto</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">24</div>
              <h3 className="font-heading font-bold text-lg mb-2">hrs emergency response</h3>
              <p className="text-muted-foreground text-sm">GTA-wide coverage guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4 inline-block">Our Mission</span>
              <h2 className="headline-lg text-3xl md:text-4xl mb-6">
                To Protect What
                <br />
                Matters Most
              </h2>
              <p className="text-muted-foreground mb-6">
                We believe a roof isn't just shingles and nails — it's the shelter that protects your family, your memories, and your peace of mind. That's why we approach every job with the care we'd give our own homes.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic">
                "When you trust us with your roof, you trust us with your home."
                <footer className="mt-2 text-sm not-italic font-semibold">— Paradise Roofers Team</footer>
              </blockquote>
            </div>
            <div>
              <img src={completedRoof} alt="Completed roofing project" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="headline-lg text-3xl md:text-4xl">
              Why Choose Paradise Roofers?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold text-lg mb-2">Free Drone Roof Inspections</h3>
              <p className="text-muted-foreground text-sm">4K aerial analysis spots leaks invisible from ladders ($200 value, always free)</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold text-lg mb-2">Complete Exterior Packages</h3>
              <p className="text-muted-foreground text-sm">Roof + gutters + fascia + soffit + attic insulation by one expert crew</p>
            </div>
            <div className="text-center p-6">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold text-lg mb-2">24/7 Emergency Service</h3>
              <p className="text-muted-foreground text-sm">Active leaks, storm damage, ice dams – GTA response within 2 hours</p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold text-lg mb-2">Proven Reliability</h3>
              <p className="text-muted-foreground text-sm">We handle complete roofing solutions with documentation and quality assurance for Toronto homeowners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
}
