import { useState, useRef, useEffect } from "react";
import { Move, ChevronLeft, ChevronRight } from "lucide-react";
import beforeImage1 from "@/assets/Home_page/before2.webp";
import afterImage1 from "@/assets/Home_page/after2.webp";
import beforeImage2 from "@/assets/Home_page/before3.png";
import afterImage2 from "@/assets/Home_page/after3.png";

const imagesSets = [
  {
    before: beforeImage2,
    after: afterImage2,
    title: "Roof Restoration Project"
  },
  {
    before: beforeImage1,
    after: afterImage1,
    title: "Roof Replacement Project"
  }
];

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentImageSet, setCurrentImageSet] = useState(0);
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

  const nextImageSet = () => {
    setCurrentImageSet((prev) => (prev + 1) % imagesSets.length);
  };

  const prevImageSet = () => {
    setCurrentImageSet((prev) => (prev - 1 + imagesSets.length) % imagesSets.length);
  };

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

  const currentImages = imagesSets[currentImageSet];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[300px] lg:h-[600px] lg:min-h-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group select-none"
      style={{ opacity: 1 }}
    >
      {/* After Image (Base Layer) */}
      <img
        src={currentImages.after}
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
          src={currentImages.before}
          alt="Before Design"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
          draggable={false}
        />
      </div>

      {/* Navigation Arrows */}
      {imagesSets.length > 1 && (
        <>
          <button
            onClick={prevImageSet}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImageSet}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

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
        {currentImageSet + 1} / {imagesSets.length}
      </div>

      {/* Project Title */}
      <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
        {currentImages.title}
      </div>

      {/* Dots Indicator */}
      {imagesSets.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {imagesSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageSet(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageSet ? 'bg-[#FF9C45]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
