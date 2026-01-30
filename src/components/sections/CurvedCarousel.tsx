import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, GripHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import completedRoof from "@/assets/completed-roof.jpg";
import roofInstallation from "@/assets/roof-installation.jpg";
import roofInspection from "@/assets/roof-inspection.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import slateRoof from "@/assets/slate-roof.jpg";
import clayTile from "@/assets/clay-tile.jpg";
import woodShake from "@/assets/wood-shake.jpg";
import roofersBanner from "@/assets/roofers-banner.jpg";
const projects = [{
  id: 1,
  image: project1,
  title: "Modern Residential"
}, {
  id: 2,
  image: clayTile,
  title: "Clay Tile Home"
}, {
  id: 3,
  image: project2,
  title: "Commercial Complex"
}, {
  id: 4,
  image: completedRoof,
  title: "Heritage Restoration"
}, {
  id: 5,
  image: roofInstallation,
  title: "New Construction"
}, {
  id: 6,
  image: roofInspection,
  title: "Maintenance Project"
}, {
  id: 7,
  image: metalRoof,
  title: "Metal Roofing"
}, {
  id: 8,
  image: slateRoof,
  title: "Slate Installation"
}, {
  id: 9,
  image: woodShake,
  title: "Wood Shake"
}];
export default function CurvedCarousel() {
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);
  const lastTime = useRef(Date.now());
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    lastX.current = e.clientX;
    lastTime.current = Date.now();
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setOffsetX(prev => prev + deltaX);
    setStartX(e.clientX);
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      setVelocity((e.clientX - lastX.current) / dt);
    }
    lastX.current = e.clientX;
    lastTime.current = now;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(velocity) > 0.1) {
      momentum();
    }
  };
  const momentum = () => {
    let currentVelocity = velocity * 20;
    const animate = () => {
      if (Math.abs(currentVelocity) < 0.5) return;
      setOffsetX(prev => prev + currentVelocity);
      currentVelocity *= 0.92;
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    lastX.current = e.touches[0].clientX;
    lastTime.current = Date.now();
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setOffsetX(prev => prev + deltaX);
    setStartX(e.touches[0].clientX);
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      setVelocity((e.touches[0].clientX - lastX.current) / dt);
    }
    lastX.current = e.touches[0].clientX;
    lastTime.current = now;
  };
  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Calculate card properties based on position
  const getCardStyle = (index: number) => {
    const cardWidth = 180;
    const cardGap = 8;

    // Center point of the carousel
    const centerIndex = Math.floor(projects.length / 2);
    const baseOffset = -centerIndex * (cardWidth + cardGap);

    // Position with drag offset
    const x = baseOffset + index * (cardWidth + cardGap) + offsetX;

    // Normalize position to get distance from center (0 = center, 1 = edge)
    const containerWidth = containerRef.current?.offsetWidth || 1200;
    const normalizedX = x / (containerWidth * 0.5);

    // Calculate rotation based on position (curved arc effect)
    const maxRotation = 45;
    const rotateY = normalizedX * maxRotation;

    // Scale - slightly smaller at edges
    const scale = 1 - Math.abs(normalizedX) * 0.15;

    // Blur amount increases at edges
    const blur = Math.min(Math.abs(normalizedX) * 8, 12);

    // Vertical offset for arc effect - center cards are higher
    const arcOffset = Math.abs(normalizedX) * 40;

    // Z-index based on position (center has highest)
    const zIndex = Math.round((1 - Math.abs(normalizedX)) * 10);
    return {
      transform: `translateX(${x}px) translateY(${arcOffset}px) rotateY(${rotateY}deg) scale(${Math.max(scale, 0.6)})`,
      filter: blur > 1 ? `blur(${blur}px)` : 'none',
      zIndex,
      opacity: Math.max(1 - Math.abs(normalizedX) * 0.3, 0.4)
    };
  };
  return <section className="bg-secondary overflow-hidden" data-framer-name="Section - Portfolio">
    {/* Heading And Buttons */}
    <div className="container py-12" data-framer-name="Heading And Buttons">
      {/* Section Header - Dark Text Middle Aligned */}
      <div className="flex flex-col items-center mb-8">
        {/* Label with orange lines */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-12" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
          <p className="text-sm font-semibold uppercase tracking-wider">Our Recent Roofing Projects
          </p>
          <div className="h-[2px] w-12" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
        </div>
        {/* Centered H2 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          A Look at What We've Nailed
        </h2>
      </div>

      {/* Buttons Wrapper */}
      <div className="flex justify-center gap-4" data-framer-name="Buttons Wrapper">
        <Link to="/projects">
          <button
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
            style={{ backgroundColor: 'rgb(20, 20, 20)', color: 'rgb(255, 255, 255)' }}
          >
            <span>View Projects</span>
            <div className="flex items-center -space-x-2">
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-75" strokeWidth={3} />
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-100" strokeWidth={3} />
            </div>
          </button>
        </Link>
        <Link to="/gallery">
          <button
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
            style={{ backgroundColor: 'rgb(20, 20, 20)', color: 'rgb(255, 255, 255)' }}
          >
            <span>View Gallery</span>
            <div className="flex items-center -space-x-2">
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-75" strokeWidth={3} />
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-100" strokeWidth={3} />
            </div>
          </button>
        </Link>
      </div>
    </div>

    {/* Curved Carousel */}
    <div ref={containerRef} className={`relative h-[350px] md:h-[400px] ${isDragging ? "cursor-grabbing" : "cursor-grab"}`} style={{
      perspective: "1000px"
    }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleMouseUp}>
      {/* Cards Container */}
      <div className="absolute inset-0 flex items-center justify-center" style={{
        transformStyle: "preserve-3d"
      }}>
        {projects.map((project, i) => {
          const style = getCardStyle(i);
          return <div key={project.id} className="absolute w-[150px] md:w-[180px] h-[200px] md:h-[260px] overflow-hidden shadow-xl" style={{
            ...style,
            transition: isDragging ? "none" : "transform 0.15s ease-out, filter 0.15s ease-out",
            transformStyle: "preserve-3d"
          }}>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" draggable={false} />
          </div>;
        })}
      </div>

      {/* Drag Indicator */}
      <div className="absolute bottom-4 right-8 md:right-16 flex items-center gap-2 bg-foreground/80 text-background px-4 py-2 text-xs font-bold uppercase">
        <GripHorizontal className="h-4 w-4" />
        <span>Drag</span>
      </div>
    </div>

    {/* Edge Blur Overlays */}
    <div className="pointer-events-none absolute left-0 w-24 md:w-48 h-[400px] bg-gradient-to-r from-secondary via-secondary/80 to-transparent" style={{
      marginTop: "-400px"
    }} />
    <div className="pointer-events-none absolute right-0 w-24 md:w-48 h-[400px] bg-gradient-to-l from-secondary via-secondary/80 to-transparent" style={{
      marginTop: "-400px"
    }} />
  </section>;
}