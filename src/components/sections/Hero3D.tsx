import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roofers.png";
const badges = [{
  icon: "🏆",
  text: "served for 13+ years"
}, {
  icon: "🏆",
  text: "Certified Contractor"
}, {
  icon: "🏆",
  text: "voted to be the best in GTA"
}];
export default function Hero3D() {
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0
  });
  const [scrollTransform, setScrollTransform] = useState({ translateY: 0, scale: 1 });
  const containerRef = useRef<HTMLElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = (e.clientX - centerX) / (rect.width / 2) * 8;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5;
    setTransform({
      rotateX,
      rotateY
    });
  };
  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));
      const translateY = scrollProgress * 200;
      const scale = 1 + scrollProgress * 0.15;
      setScrollTransform({ translateY, scale });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section ref={containerRef} className="relative bg-[#141414] text-background flex flex-col overflow-hidden pt-20" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
    perspective: "1500px"
  }}>
    {/* Section 1: Top Badge Row */}
    <div className="container pt-6 z-10 relative">
      <div className="flex flex-wrap justify-between gap-4">
        {badges.map((badge, i) => <span key={i} className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-background/80">
          <span>{badge.icon}</span>
          {badge.text}
        </span>)}
      </div>
    </div>

    {/* Section 2: Hero Content - Top Content */}
    <div className="container relative z-10 md:py-16 mx-px py-[20px] my-0" data-framer-name="Top Content">
      {/* Heading Wrapper */}
      <div className="max-w-4xl" data-framer-name="Heading Wrapper">
        <div style={{ transform: "none" }}>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-left leading-tight"
            style={{ color: 'rgb(255, 251, 245)' }}
          >
            Best Roofing Contractor<br />
            Free Roof Inspection Today
          </h1>
        </div>
      </div>

      {/* Buttons and Subtext */}
      <div className="border-t border-white/20 pt-6" data-framer-name="Buttons and Subtext">
        {/* Buttons Wrapper */}
        <div className="flex flex-row justify-around flex-wrap gap-4 mb-6 items-center py-10" data-framer-name="Buttons Wrapper">
          {/* Orange CTA Button */}
          <Link to="/contact">
            <button
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
              style={{ backgroundColor: 'rgb(255, 156, 69)', color: 'rgb(0, 0, 0)' }}
            >
              <span>Get Your Free Quote</span>
              <div className="flex items-center -space-x-2">
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-75" strokeWidth={3} />
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-100" strokeWidth={3} />
              </div>
            </button>
          </Link>

          {/* Phone Button */}
          <a href="tel:2125027604">
            <button
              className="inline-flex items-center gap-3 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'rgb(255, 252, 252)' }}
            >
              <Phone className="h-5 w-5 fill-current" />
              <span>(212) 502-7604</span>
              <div className="flex items-center -space-x-2">
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-75" strokeWidth={3} />
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-100" strokeWidth={3} />
              </div>
            </button>
          </a>
          {/* Subtext Wrapper */}
          <div data-framer-name="Subtext Wrapper">
            <p className="text-white/80 text-sm md:text-base max-w-2xl font-bold">
              Paradise Roofing services for homes and businesses. Licensed experts handle roof installation, repair, replacement, inspections, and more with free quotes and 20+ years experience in roofing services.          </p>
          </div>
        </div>
      </div>
    </div>

    {/* Section 3: Hero Image Wrapper */}
    <div className="relative w-full overflow-visible" style={{
      aspectRatio: "4.46097",
      backgroundColor: "#141414"
    }}>
      <div
        className="absolute overflow-hidden transition-transform duration-200 ease-out"
        style={{
          inset: "-100px 50px -160px 50px",
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(1.05)`,
          transformStyle: "preserve-3d",
          transformOrigin: "center center"
        }}
      >
        <img
          src={heroImage}
          alt="Professional roofers installing shingles"
          className="w-full h-full object-cover"
          style={{
            willChange: "transform",
            transform: `translateY(${scrollTransform.translateY}px) scale(${scrollTransform.scale})`,
            transition: "transform 0.1s ease-out"
          }}
        />
      </div>
    </div>
  </section>;
}