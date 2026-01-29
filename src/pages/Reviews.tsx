import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Star, Quote } from "lucide-react";
import roofInspection from "@/assets/roof-inspection.jpg";
import completedRoof from "@/assets/completed-roof.jpg";

const testimonials = [
  {
    title: '"I Landed to a Finished Roof and Zero Stress"',
    text: "We're not often home, and I needed a company I could trust to handle things without any micromanaging. These guys nailed it—pun intended. They kept me updated with texts, photos, and even a drone video of the final inspection. Landed to a finished roof and zero stress. Couldn't ask for more.",
    author: "Oliver Dempsey",
    role: "Business Owner from Portland",
    rating: 5,
    source: "Google Review",
    image: roofInspection,
  },
  {
    title: '"But This Crew? Absolute Pros"',
    text: "I work from home, so I was nervous about all the noise and chaos of a roof replacement. But this crew? Absolute pros. They showed up right on time, worked like clockwork, and even paused to explain what was going on when I peeked out with questions. Honestly, had to tell my routine Off—and they finished a day early. Who does that?",
    author: "Silas Hoffman",
    role: "Photographer in San Francisco",
    rating: 5,
    source: "Yelp Review",
    image: completedRoof,
  },
  {
    title: '"They Were Responsive, Respectful, and Full of Good Energy"',
    text: "My deal with contractors before, and let's just say... expectations were low. But this team company turned that around, from the first call to the final shingle, they were responsive, respectful, and full of good energy. Even my grumpy neighbor came over to say how clean the place looked. My house has new style, and honestly, I kinda miss having them around.",
    author: "Caleb Sutton",
    role: "Entrepreneur in Chicago",
    rating: 5,
    source: "Trustpilot Review",
    image: roofInspection,
  },
  {
    title: '"Who Knew Roofers Could Be This Geeky—In a Good Way?"',
    text: "I asked a lot of technical questions, and honestly? I was impressed. The team had a streamlined process, online tools, digital contracts, and real-time updates. They finished my modern home with care and even adjusted the ventilation based on smart sensor feedback. Who knew roofers could be this geeky — in a good way?",
    author: "Wyatt Kingsley",
    role: "Software Developer from Washington",
    rating: 5,
    source: "Google Review",
    image: completedRoof,
  },
  {
    title: '"The Roof Looks Sharp"',
    text: "I've got animals, equipment, and a whole lot of land—so when I hire someone, I need them to respect the space while they work. They were amazing. Parked where I asked, stayed out of the barn while they were here. Good people who care about more than just the job. The roof looks sharp, and so does my peace of mind.",
    author: "Levi Morgan",
    role: "Rancher in Denver",
    rating: 5,
    source: "Yelp Review",
    image: roofInspection,
  },
  {
    title: '"My Roof Looks Amazing"',
    text: "Running a small business and renovating a home at the same time is no joke, but this crew made the roofing part a breeze. They respected my time, worked around my hours, and even helped pointing one morning after I mentioned I was stressed. They're a cut above—and I'll tell anyone who'll listen, professional, and honest. We even gained an lunch date and techniques during the lunch break. My roof looks fabulous, and I genuinely respect their work ethic.",
    author: "Theo Hartman",
    role: "Restaurateur in Dallas",
    rating: 5,
    source: "Google Review",
    image: completedRoof,
  },
];

export default function Reviews() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container">
          <span className="section-label mb-4 inline-block">Testimonials</span>
          <h1 className="headline-xl text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            We Believe Great Work
            <br />
            Speaks For Itself—But Our
            <br />
            Customers Say It Even Better
          </h1>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-muted p-6 flex flex-col">
                {/* Image */}
                <div className="aspect-[4/3] mb-6 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Quote */}
                <h3 className="font-heading font-bold text-lg mb-4 uppercase">
                  {testimonial.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-4">
                  {testimonial.text}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Source */}
                <div className="text-xs uppercase tracking-wider text-primary mb-4">
                  {testimonial.source}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                    <span className="text-background font-semibold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
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
