import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ratings = [
  { score: "4.9", label: "150+ Google Reviews" },
  { score: "5.00", label: "200+ Yelp Reviews" },
  { score: "A+", label: "BBB Rating" },
];

const testimonials = [
  {
    quote: "I called three companies. One ghosted me, one gave me a quote that made me cry, and then I found Ridge & Nail Roofing. These guys were fast, funny, and absolutely nailed it — literally.",
    author: "Dave Mulberry",
    role: "House Owner, Austin, TX",
  },
  {
    quote: "I thought I'd have to put buckets all over the office. Instead, Nate and the team fixed it in a flash and even cleaned up after themselves. My roof and my sanity are both saved.",
    author: "Ellis Granger",
    role: "House Owner, Austin, TX",
  },
  {
    quote: "I expected noise, mess, and weird upcharges. What I got was a clean job, friendly crew, and my lawn looking better than when they arrived. Shoutout to Nate for making roofing feel easy.",
    author: "Bennett Hale",
    role: "House Owner, Austin, TX",
  },
  {
    quote: "These folks showed up with good vibes, good tools, and got the job done like pros. Nate even sent drone pics after — now I brag about my roof at BBQs.",
    author: "Marcus Flint",
    role: "House Owner, Austin, TX",
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

        {/* Ratings */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
          {ratings.map((rating, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-1" style={{ color: 'rgb(33, 32, 27)' }}>
                {rating.score}
              </div>
              <div className="text-sm text-muted-foreground">{rating.label}</div>
            </div>
          ))}
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
