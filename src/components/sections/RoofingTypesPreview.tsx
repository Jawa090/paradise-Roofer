import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import asphaltShingle from "@/assets/asphalt-shingle.jpg";
import clayTile from "@/assets/clay-tile.jpg";
import slateRoof from "@/assets/slate-roof.jpg";

const roofingTypes = [
  {
    id: 1,
    title: "Asphalt shingle",
    description: "Affordable, reliable, and made to handle the heat (and the hail).",
    image: asphaltShingle,
    lifespan: "15–30 years",
    price: "$3.50 to $5.50 per sq. ft. (installed)",
    href: "/roofing-types",
  },
  {
    id: 2,
    title: "Clay Tile",
    description: "Timeless elegance, unbeatable heat resistance, extreme durability",
    image: clayTile,
    lifespan: "50–100+ years",
    price: "$10.00 – $18.00 per sq. ft. (installed)",
    href: "/roofing-types",
  },
  {
    id: 3,
    title: "Concrete Tile",
    description: "Stylish, tough, and made to mimic high-end without the high cost.",
    image: slateRoof,
    lifespan: "40–75 years",
    price: "$8.00 – $12.00 per sq. ft. (installed)",
    href: "/roofing-types",
  },
];

interface TiltCardProps {
  image: string;
  title: string;
}

function TiltCard({ image, title }: TiltCardProps) {
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={cardRef}
      className="w-full h-full"
      style={{
        willChange: "transform",
        transition: "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)",
        overflow: "hidden",
        background: "transparent",
        position: "relative",
        transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-label="3D Tilt Card"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          userSelect: "none",
          backgroundColor: "transparent",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          display: "block",
        }}
        aria-label={title}
      />
    </div>
  );
}

export default function RoofingTypesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          {/* Label with orange lines */}
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="h-[2px] w-12" 
              style={{ backgroundColor: 'rgb(255, 131, 59)' }}
            />
            <p className="text-sm font-semibold uppercase tracking-wider">
              Roofing types
            </p>
            <div 
              className="h-[2px] w-12" 
              style={{ backgroundColor: 'rgb(255, 131, 59)' }}
            />
          </div>
          {/* Centered H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-heading">
            Shingle? Metal? Tile? Let's find your match
          </h2>
        </div>

        {/* Roofing Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roofingTypes.map((type) => (
            <Link
              key={type.id}
              to={type.href}
              className="group block overflow-visible"
              style={{ backgroundColor: 'rgb(255, 252, 252)' }}
            >
              {/* Header Content */}
              <div className="p-6 pb-4">
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </div>

              {/* Image Container with 3D Tilt */}
              <div 
                className="relative h-48 mx-4 overflow-visible"
                style={{ backgroundColor: 'rgb(245, 245, 245)' }}
              >
                <div 
                  className="absolute inset-0 w-full"
                  style={{ 
                    transform: 'translateY(-50%)',
                    transformOrigin: '50% 50% 0px',
                    willChange: 'transform',
                    height: '200%',
                    top: '50%'
                  }}
                >
                  <TiltCard image={type.image} title={type.title} />
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 pt-4">
                {/* Lifespan */}
                <div 
                  className="flex justify-between items-center py-3"
                  style={{ borderBottom: '1px solid rgba(20, 20, 20, 0.2)' }}
                >
                  <p className="text-sm text-muted-foreground">Lifespan</p>
                  <p className="text-sm text-right">{type.lifespan}</p>
                </div>
                {/* Price */}
                <div className="flex justify-between items-center py-3">
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="text-sm text-right">{type.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link to="/roofing-types">
            <button 
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
              style={{ backgroundColor: 'rgb(20, 20, 20)', color: 'rgb(255, 255, 255)' }}
            >
              <span>View All Types</span>
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
  );
}
