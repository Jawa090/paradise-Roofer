import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ratings = [
  { score: "4.9", label: "150+ Google Reviews" },
  { score: "5.00", label: "200+ Yelp Reviews" },
  { score: "A+", label: "BBB Rating" },
];

const testimonials = [
  {
    quote: "I thought I’d have buckets everywhere in our Toronto home. Instead, the team fixed our shingle roof leak fast and cleaned up perfectly. Roof and sanity saved!",
    author: "",
    role: "Homeowner, Brampton, ON",
  },
  {
    quote: "Expected mess and delays for Shingle roof replacement. Got clean work, friendly Canadian crew, and my yard looking better. Roofing made it easy!",
    author: "",
    role: "Homeowner, Mississauga, ON",
  },
  {
    quote: "The pro team showed up with top tools for emergency storm repair. I even sent drone photos after now I recommend them across GTA!",
    author: "",
    role: "Homeowner, Milton, ON",
  },
  {
    quote: "Called three roofers—one ghosted, one overpriced. Paradise Roofers experts did the Shingle roof install fast, fair, and flawlessly.",
    author: "",
    role: "Business Owner, Scarborough ON",
  },
  {
    quote: "Free roof inspection caught skylight leaks early. Honest local pros saved us thousands on our Oakville home.",
    author: "",
    role: "Homeowner, Oakville, ON",
  },
];

export default function ReviewsPreview() {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          {/* Label with orange lines */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
            <p className="text-sm font-semibold uppercase tracking-wider">Reviews</p>
            <div className="h-[2px] w-12" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
          </div>
          {/* Centered H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-heading">
            Don't take our word for it — take theirs
          </h2>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative">
        <div className="flex animate-scroll gap-6 py-4">
          {duplicatedTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-2xl"
              style={{ backgroundColor: 'rgb(245, 245, 245)' }}
            >
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgb(33, 32, 27)' }}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(20, 20, 20)' }}
                >
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'rgb(33, 32, 27)' }}>
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <Link to="/reviews">
          <button 
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold uppercase text-sm tracking-wide transition-all hover:opacity-90 group"
            style={{ backgroundColor: 'rgb(20, 20, 20)', color: 'rgb(255, 255, 255)' }}
          >
            <span>View All Reviews</span>
            <div className="flex items-center -space-x-2">
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-75" strokeWidth={3} />
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 delay-100" strokeWidth={3} />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
}
