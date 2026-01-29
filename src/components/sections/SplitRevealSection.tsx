import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, Puzzle, MessageCircle, Home, Search, ChevronRight } from "lucide-react";
import splitLeft from "@/assets/split-left.png";
import splitRight from "@/assets/split-right.png";

const leftStats = [
  { 
    number: "21", 
    suffix: "K+", 
    label: "roofs installed",
    description: "From cozy homes to massive commercial builds — we've covered a lot of ground"
  },
  { 
    number: "3,500", 
    suffix: "+", 
    label: "repairs completed",
    description: "Fast, reliable, and leak-proof — just how roof repairs should be."
  },
];

const rightStats = [
  { 
    number: "42", 
    suffix: "+", 
    label: "expert roofers",
    description: "Skilled, certified, and always up for the climb."
  },
  { 
    number: "4.9", 
    suffix: "-star", 
    label: "average rating",
    description: "Across Google, Facebook, and Yelp — customers love us"
  },
];

const features = [
  { icon: Puzzle, text: "Every roof we build is made to fit your home — not some template." },
  { icon: MessageCircle, text: "From your first call to final cleanup, you'll speak with real people who actually know roofs" },
  { icon: Home, text: "We live here too, so we treat your home like our own." },
  { icon: Search, text: "From hidden damage to tiny leaks — we catch the small stuff before it's big." },
];

// Animated number component
function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericValue = parseFloat(value.replace(/,/g, ''));
          const duration = 2000;
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(numericValue * easeOut);
            
            if (value.includes(',')) {
              setDisplayValue(current.toLocaleString());
            } else if (value.includes('.')) {
              setDisplayValue((numericValue * easeOut).toFixed(1));
            } else {
              setDisplayValue(current.toString());
            }
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <span 
        className="font-heading font-medium tracking-tight"
        style={{ 
          fontSize: '90px', 
          lineHeight: '1em',
          letterSpacing: '-0.04em',
          color: 'rgb(255, 251, 245)'
        }}
      >
        {displayValue}
      </span>
      <span 
        className="font-heading font-medium"
        style={{ 
          fontSize: '41px',
          lineHeight: '1em',
          letterSpacing: '-0.04em',
          color: 'rgb(255, 131, 59)'
        }}
      >
        {suffix}
      </span>
    </div>
  );
}

export default function SplitRevealSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Calculate progress based on how much of the section has scrolled past
      // Start animation when section enters viewport, complete when it's 40% scrolled
      const triggerStart = windowHeight * 0.3;
      const triggerEnd = -sectionHeight * 0.3;
      
      if (sectionTop <= triggerStart && sectionTop >= triggerEnd) {
        const progress = Math.min(1, Math.max(0, (triggerStart - sectionTop) / (triggerStart - triggerEnd)));
        setScrollProgress(progress);
      } else if (sectionTop > triggerStart) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll progress
  // Phase 1: 0-0.4 - Header and description appear
  // Phase 2: 0.4-1 - Video and benefits appear, header fades
  const splitDistance = scrollProgress * 150; // Max 150% translateX
  
  // Header section (lines 286-295): appears 0-0.4, fades out 0.4-0.7
  const headerOpacity = scrollProgress < 0.4 
    ? scrollProgress / 0.4 
    : scrollProgress < 0.7 
      ? 1 - ((scrollProgress - 0.4) / 0.3) 
      : 0;
  const headerTranslateY = scrollProgress < 0.4 
    ? (1 - scrollProgress / 0.4) * 100 
    : 0;
  
  // Description (line 297): appears 0-0.4, fades out 0.4-0.7
  const descOpacity = headerOpacity;
  const descTranslateY = headerTranslateY;
  
  // Video and benefits (lines 304-367): appears 0.4-0.8, stays visible
  const videoOpacity = scrollProgress < 0.4 
    ? 0 
    : scrollProgress < 0.8 
      ? (scrollProgress - 0.4) / 0.4 
      : 1;
  const videoTranslateY = scrollProgress < 0.4 
    ? 100 
    : scrollProgress < 0.8 
      ? (1 - (scrollProgress - 0.4) / 0.4) * 100 
      : 0;
  
  // Center container opacity and scale
  const centerContentOpacity = scrollProgress > 0 ? 1 : 0;
  const centerContentScale = 0.85 + (Math.min(scrollProgress, 0.4) / 0.4) * 0.15;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[200vh]" 
      id="about" 
      data-framer-name="Section - About"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Statistics - Split Layout */}
        <div className="grid md:grid-cols-2 h-full" data-framer-name="Statistics - Sticky">
          {/* Left Panel - Slides Left */}
          <div 
            className="relative h-full transition-transform duration-100 ease-out" 
            data-framer-name="Left"
            style={{ 
              transform: `translateX(-${splitDistance}%)`,
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0">
              <img 
                src={splitLeft} 
                alt="Roofing team at work" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Left Stats Overlay - Right Aligned */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
              <div className="ml-auto text-right max-w-[300px]">
                <AnimatedNumber value={leftStats[0].number} suffix={leftStats[0].suffix} />
                <h3 
                  className="font-heading font-bold text-xl uppercase mt-2"
                  style={{ color: 'rgb(255, 251, 245)' }}
                >
                  {leftStats[0].label}
                </h3>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'rgb(255, 251, 245)' }}
                >
                  {leftStats[0].description}
                </p>
              </div>
              <div className="ml-auto text-right max-w-[300px]">
                <AnimatedNumber value={leftStats[1].number} suffix={leftStats[1].suffix} />
                <h3 
                  className="font-heading font-bold text-xl uppercase mt-2"
                  style={{ color: 'rgb(255, 251, 245)' }}
                >
                  {leftStats[1].label}
                </h3>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'rgb(255, 251, 245)' }}
                >
                  {leftStats[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Slides Right */}
          <div 
            className="relative h-full transition-transform duration-100 ease-out" 
            data-framer-name="Right"
            style={{ 
              transform: `translateX(${splitDistance}%)`,
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0">
              <img 
                src={splitRight} 
                alt="Roofing team at work" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right Stats Overlay - Left Aligned */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
              <div className="mr-auto text-left max-w-[300px]">
                <AnimatedNumber value={rightStats[0].number} suffix={rightStats[0].suffix} />
                <h3 
                  className="font-heading font-bold text-xl uppercase mt-2"
                  style={{ color: 'rgb(255, 251, 245)' }}
                >
                  {rightStats[0].label}
                </h3>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'rgb(255, 251, 245)' }}
                >
                  {rightStats[0].description}
                </p>
              </div>
              <div className="mr-auto text-left max-w-[300px]">
                <AnimatedNumber value={rightStats[1].number} suffix={rightStats[1].suffix} />
                <h3 
                  className="font-heading font-bold text-xl uppercase mt-2"
                  style={{ color: 'rgb(255, 251, 245)' }}
                >
                  {rightStats[1].label}
                </h3>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'rgb(255, 251, 245)' }}
                >
                  {rightStats[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content - About Section (rises up in the middle) */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: centerContentOpacity,
            transform: `scale(${centerContentScale})`,
            willChange: 'transform, opacity'
          }}
        >
          <div className="bg-background w-full max-w-4xl mx-4 md:mx-8 p-8 md:p-12 pointer-events-auto">
            {/* Section Header - Phase 1: appears first, fades out */}
            <div 
              className="flex flex-col items-center mb-8 transition-all duration-100" 
              data-framer-name="About - Sticky"
              style={{
                opacity: headerOpacity,
                transform: `translateY(${headerTranslateY}px)`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
                <p className="text-sm font-semibold uppercase tracking-wider">About us</p>
                <div className="h-[2px] w-12" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center">
                Serving Roofs Since 1982
              </h2>
            </div>

            {/* Description - Phase 1: appears with header, fades out */}
            <p 
              className="text-center max-w-3xl mx-auto text-muted-foreground mb-8 transition-all duration-100"
              style={{
                opacity: descOpacity,
                transform: `translateY(${descTranslateY}px)`,
              }}
            >
              We're a friendly, family-run roofing company that's been keeping homes dry and happy since 1982. 
              Whether it's a sneaky leak or a full roof makeover, we show up with tools in hand, smiles on our faces, 
              and zero drama. Great work, fair prices, and roofs that last — that's how we roll.
            </p>

            {/* Video and Benefits Wrapper - Phase 2: appears later, stays visible */}
            <div 
              className="grid md:grid-cols-2 gap-8 transition-all duration-100" 
              data-framer-name="Video and Benefits Wrapper" 
              id="video"
              style={{
                opacity: videoOpacity,
                transform: `translateY(${videoTranslateY}px)`,
              }}
            >
              {/* Video Section */}
              <div 
                className="relative aspect-video bg-muted overflow-hidden cursor-pointer group"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                <video 
                  src="https://videos.pexels.com/video-files/9700224/9700224-hd_1920_1080_30fps.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.05) grayscale(1)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgb(255, 148, 54)' }}
                  >
                    <Play className="h-6 w-6 text-black fill-current" />
                  </div>
                </div>
              </div>

              {/* Benefits and Button */}
              <div className="flex flex-col">
                {/* Benefits List */}
                <div className="space-y-0">
                  {features.map((feature, i) => (
                    <div 
                      key={i} 
                      className={`flex items-start gap-4 py-4 ${i > 0 ? 'border-t' : ''}`}
                      style={{ borderColor: 'rgba(20, 20, 20, 0.2)' }}
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: 'rgba(20, 20, 20, 0.1)' }}
                      >
                        <feature.icon className="h-5 w-5 text-foreground" />
                      </div>
                      <p className="text-sm text-foreground">{feature.text}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <Link to="/about">
                    <button 
                      className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
                      style={{ backgroundColor: 'rgb(20, 20, 20)', color: 'rgb(255, 255, 255)' }}
                    >
                      <span>Know More About Us</span>
                      <div className="flex items-center -space-x-2">
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-75" strokeWidth={3} />
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-100" strokeWidth={3} />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
