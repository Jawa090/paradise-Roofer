import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import completedRoof from "@/assets/completed-roof.jpg";
import roofInstallation from "@/assets/roof-installation.jpg";

const projects = [
  {
    title: "Leak Repair and Partial Roof Restoration",
    location: "McKinney, Texas",
    category: "Residential",
    image: project1,
  },
  {
    title: "Commercial Roof Coating Restoration",
    location: "Garland, Texas",
    category: "Commercial",
    image: project2,
  },
  {
    title: "Metal Roof Installation for Energy Efficiency",
    location: "Round Rock, Texas",
    category: "Residential",
    image: roofInstallation,
  },
  {
    title: "Shingle Roof Replacement After Storm Damage",
    location: "Plano, Texas",
    category: "Residential",
    image: completedRoof,
  },
];

export default function Projects() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container">
          <span className="section-label mb-4 inline-block">Our Projects</span>
          <h1 className="headline-xl text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Sometimes The Best Way To
            <br />
            Trust A Roofer Is To See
            <br />
            The Difference Yourself.
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 uppercase">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
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
