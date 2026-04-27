import { useState, useEffect, useRef } from "react";
import { Wrench, Users, ThumbsUp, Calendar } from "lucide-react";

const stats = [
  {
    icon: Wrench,
    number: 1500,
    title: "Roofing Jobs Completed (Repairs & Installations)",
    color: "rgb(255, 156, 69)", // Orange color
    showPlus: true
  },
  {
    icon: Users,
    number: 1200,
    title: "Clients Served (Residential & Commercial Projects)",
    color: "rgb(255, 156, 69)", // Orange color
    showPlus: true
  },
  {
    icon: ThumbsUp,
    number: 100,
    title: "Customer Satisfaction (Based on Client Feedback)",
    color: "rgb(255, 156, 69)", // Orange color
    showPlus: false,
    showPercent: true
  },
  {
    icon: Calendar,
    number: 8,
    title: "Years Experience (Trusted Roofing Professionals)",
    color: "rgb(255, 156, 69)", // Orange color
    showPlus: true
  }
];

interface CounterProps {
  target: number;
  duration: number;
  isVisible: boolean;
  showPlus?: boolean;
  showPercent?: boolean;
}

function Counter({ target, duration, isVisible, showPlus = false, showPercent = false }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, isVisible]);

  return (
    <span>
      {count.toLocaleString()}
      {showPercent && '%'}
      {showPlus && '+'}
    </span>
  );
}

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-background"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon className="h-10 w-10 text-white" />
              </div>

              {/* Number */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold text-foreground">
                  <Counter 
                    target={stat.number} 
                    duration={1500} 
                    isVisible={isVisible}
                    showPlus={stat.showPlus}
                    showPercent={stat.showPercent}
                  />
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-muted-foreground text-center">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}