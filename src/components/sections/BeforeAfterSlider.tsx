import { useState, useRef, useEffect } from "react";
import { Move } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMoveEvent = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMoveEvent = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMoveEvent);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMoveEvent);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveEvent);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMoveEvent);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[300px] lg:h-[600px] lg:min-h-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group select-none"
      style={{ opacity: 1 }}
    >
      {/* After Image (Base Layer) */}
      <img
        src={project2}
        alt="After Design"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 }}
        draggable={false}
      />

      {/* Before Image (Clipped Layer) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          clipPath: `inset(0px ${100 - sliderPosition}% 0px 0px)`,
        }}
      >
        <img
          src={project1}
          alt="Before Design"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 group-hover:bg-[#FF9C45] transition-colors"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#FF9C45]">
          <Move className="w-5 h-5 text-[#FF9C45]" />
        </div>
      </div>

      {/* Before Badge */}
      <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
        Before
      </div>

      {/* After Badge */}
      <div className="absolute top-6 right-6 bg-[#FF9C45] px-3 py-1 rounded-md text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
        After
      </div>

      {/* Counter Badge */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-gray-800 text-[10px] font-bold uppercase tracking-widest pointer-events-none">
        1 / 1
      </div>
    </div>
  );
}
