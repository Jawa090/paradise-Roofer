import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import asphaltShingle from "@/assets/asphalt-shingle.jpg";
import clayTile from "@/assets/clay-tile.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import woodShake from "@/assets/wood-shake.jpg";
import slateRoof from "@/assets/slate-roof.jpg";
import solarRoof from "@/assets/solar-roof.jpg";
import completedRoof from "@/assets/completed-roof.jpg";

const roofingTypes = [
  {
    name: "Asphalt Shingle",
    description: "Affordable, reliable, and made to handle the heat (and the hail).",
    image: asphaltShingle,
    lifespan: "15-30 years",
    price: "$3.50 to $5.50 per sq. ft. (installed)",
  },
  {
    name: "Clay Tile",
    description: "Timeless elegance, unbeatable heat resistance, extreme durability",
    image: clayTile,
    lifespan: "50-100+ years",
    price: "$10.00 - $18.00 per sq. ft. (installed)",
  },
  {
    name: "Concrete Tile",
    description: "Stylish, tough, and made to mimic high-end without the high cost.",
    image: completedRoof,
    lifespan: "40-75 years",
    price: "$8.00 - $12.00 per sq. ft. (installed)",
  },
  {
    name: "Synthetic Roofing",
    description: "The look of slate or shake—without the weight, cost, or fuss.",
    image: slateRoof,
    lifespan: "40-50 years",
    price: "$7.00 - $12.00 per sq. ft. (installed)",
  },
  {
    name: "Metal Roofing",
    description: "Sleek, strong, and built to outlast your neighbor's roof.",
    image: metalRoof,
    lifespan: "40-70+ years",
    price: "$7.00 - $14.00 per sq. ft. (installed)",
  },
  {
    name: "Architectural",
    description: "More dimension, more durability, and way more curb appeal.",
    image: asphaltShingle,
    lifespan: "25-40 years",
    price: "$4.50 - $7.50 per sq. ft. (installed)",
  },
  {
    name: "Wood Shake",
    description: "Rustic vibes, natural beauty, and a roof that stands out.",
    image: woodShake,
    lifespan: "20-30 years",
    price: "$6.00 - $10.00 per sq. ft. (installed)",
  },
  {
    name: "Solar Roofing",
    description: "Energy-saving tech meets modern design for future-ready homes.",
    image: solarRoof,
    lifespan: "25-30+ years",
    price: "$15.00 - $30.00 per sq. ft. (installed)",
  },
  {
    name: "Slate Roofing",
    description: "Luxury meets longevity—with stone that could outlive your home.",
    image: slateRoof,
    lifespan: "75-100+ years",
    price: "$15.00 - $30.00 per sq. ft. (installed)",
  },
  {
    name: "Flat Roofing",
    description: "Efficient, low-profile, and made for businesses—or modern homes.",
    image: metalRoof,
    lifespan: "15-30 years",
    price: "$4.00 - $8.00 per sq. ft. (installed)",
  },
];

export default function RoofingTypes() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container">
          <span className="section-label mb-4 inline-block">Roofing Types</span>
          <h1 className="headline-xl text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            The Right Roof Makes All The
            <br />
            Difference—Explore Our
            <br />
            Materials, Styles, And Systems
          </h1>
        </div>
      </section>

      {/* Roofing Types Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roofingTypes.map((type, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl uppercase mb-2">
                  {type.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {type.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Lifespan</span>
                    <p className="font-semibold">{type.lifespan}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Price</span>
                    <p className="font-semibold">{type.price}</p>
                  </div>
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
