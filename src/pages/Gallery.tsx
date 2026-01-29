import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { useState } from "react";
import asphaltShingle from "@/assets/asphalt-shingle.jpg";
import clayTile from "@/assets/clay-tile.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import woodShake from "@/assets/wood-shake.jpg";
import slateRoof from "@/assets/slate-roof.jpg";
import solarRoof from "@/assets/solar-roof.jpg";
import completedRoof from "@/assets/completed-roof.jpg";
import project1 from "@/assets/project-1.jpg";

const categories = ["All", "Asphalt Shingle", "Metal", "Tile", "Wood", "Slate"];

const galleryImages = [
  { src: asphaltShingle, category: "Asphalt Shingle", title: "Asphalt Shingle Roof" },
  { src: clayTile, category: "Tile", title: "Clay Tile Roof" },
  { src: metalRoof, category: "Metal", title: "Metal Standing Seam" },
  { src: woodShake, category: "Wood", title: "Cedar Wood Shake" },
  { src: slateRoof, category: "Slate", title: "Slate Roofing" },
  { src: solarRoof, category: "Metal", title: "Solar Panel Installation" },
  { src: completedRoof, category: "Asphalt Shingle", title: "Completed Residential" },
  { src: project1, category: "Asphalt Shingle", title: "Aerial View" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container">
          <span className="section-label mb-4 inline-block">Our Gallery</span>
          <h1 className="headline-xl text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Explore Our Roofing
            <br />
            Portfolio—Your Future
            <br />
            Roof Might Be In Here.
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, i) => (
              <div key={i} className="group relative overflow-hidden aspect-square cursor-pointer">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-background">
                    <div className="text-xs uppercase tracking-wider text-primary mb-1">
                      {image.category}
                    </div>
                    <div className="font-semibold">{image.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label text-primary mb-4 inline-block">Video Gallery</span>
            <h2 className="headline-lg text-3xl md:text-4xl">
              Clips From The Crew
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-background/10 flex items-center justify-center">
              <span className="text-background/50">Video Coming Soon</span>
            </div>
            <div className="aspect-video bg-background/10 flex items-center justify-center">
              <span className="text-background/50">Video Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
}
