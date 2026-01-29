import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { CheckCircle, Users, Award, Target } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import completedRoof from "@/assets/completed-roof.jpg";

const timeline = [
  { year: "2008", title: "We Raised Roofing", description: "Founded in a small garage with big dreams and bigger ladders." },
  { year: "2012", title: "A Year of Growth", description: "Expanded our team and took on our first commercial projects." },
  { year: "2015", title: "Awards & Recognition", description: "Named Best Roofing Company in GTA three years running." },
  { year: "2023", title: "Leading with Purpose", description: "Now serving thousands of happy customers across Ontario." },
];

const values = [
  { icon: CheckCircle, title: "Craftsmanship You Can Trust", description: "Every nail, every shingle, done right the first time." },
  { icon: Users, title: "People Before Profit", description: "We build relationships, not just roofs." },
  { icon: Award, title: "Excellence in Every Detail", description: "From inspection to cleanup, we sweat the small stuff." },
  { icon: Target, title: "Accountability & Honesty", description: "If we make a mistake, we own it and fix it." },
];

const team = [
  { name: "Djaramillo 'Drake' Garcia", role: "Founder & CEO", image: teamPhoto },
  { name: "Marcus James", role: "Operations Manager", image: teamPhoto },
  { name: "Elena Ramirez", role: "Lead Estimator", image: teamPhoto },
];

const stats = [
  { number: "2450+", label: "Homes Happily Installed" },
  { number: "98.7%", suffix: "%", label: "Happy Customer Rating" },
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
          <span className="section-label text-primary mb-4 inline-block">About Us</span>
          <h1 className="headline-xl text-4xl md:text-6xl lg:text-7xl max-w-4xl">
            Our Story Is
            <br />
            As Sturdy As
            <br />
            Our Roofs—
            <br />
            Come Meet Us!
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="border-l-2 border-primary pl-6">
                <div className="text-primary font-heading font-bold text-2xl mb-2">{item.year}</div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
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
                <footer className="mt-2 text-sm not-italic font-semibold">— Drake Garcia, Founder</footer>
              </blockquote>
            </div>
            <div>
              <img src={completedRoof} alt="Completed roofing project" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label text-primary mb-4 inline-block">Our Vision</span>
            <h2 className="headline-lg text-3xl md:text-4xl mb-6">
              To Become The Most
              <br />
              Trusted Name In Roofing
            </h2>
            <p className="text-background/70">
              We're not just building roofs — we're building a legacy of trust, quality, and community. Our goal is to set the standard for what roofing should be: honest, reliable, and always putting the customer first.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label mb-4 inline-block">Our Values</span>
            <h2 className="headline-lg text-3xl md:text-4xl">
              The Heart Behind
              <br />
              The Hard Hats
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center p-6">
                <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="headline-lg text-3xl md:text-4xl">
              Hard Hats On, Results Up
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl md:text-7xl font-heading font-bold text-primary">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label mb-4 inline-block">Our Team</span>
            <h2 className="headline-lg text-3xl md:text-4xl">
              The Hands (And Hearts)
              <br />
              Behind Your Roof
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square mb-4 overflow-hidden bg-muted">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
}
