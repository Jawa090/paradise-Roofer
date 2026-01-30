import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Calendar, User } from "lucide-react";
import roofInspection from "@/assets/roof-inspection.jpg";
import completedRoof from "@/assets/completed-roof.jpg";
import roofInstallation from "@/assets/roof-installation.jpg";
import metalRoof from "@/assets/metal-roof.jpg";

const categories = ["All", "Featured", "Tips", "Guides", "News"];

const blogPosts = [
  {
    title: "7 Easy Ways to Make Your Roof Last Longer",
    excerpt: "Simple maintenance tips that can add years to your roof's lifespan.",
    image: roofInspection,
    category: "Tips",
    author: "Thayer June",
    date: "Jun 22, 2025",
  },
  {
    title: "Choosing the Right Roofing Material: A Homeowner's Simple Guide",
    excerpt: "Compare asphalt, metal, tile, and more to find your perfect match.",
    image: metalRoof,
    category: "Guides",
    author: "Bramwell Cutter",
    date: "Jul 5, 2025",
  },
  {
    title: "Roof Repair vs. Replacement: How to Make the Right Call",
    excerpt: "When is it time to patch, and when should you start fresh?",
    image: completedRoof,
    category: "Guides",
    author: "Thayer June",
    date: "Jun 22, 2025",
  },
  {
    title: "Spot It Before It Leaks: 6 Early Signs Your Roof Needs Attention",
    excerpt: "Don't wait for water damage—catch these warning signs early.",
    image: roofInstallation,
    category: "Tips",
    author: "Bramwell Cutter",
    date: "Jul 5, 2025",
  },
  {
    title: "Roofing Industry Update 2025: What's Changing (And What It Means For You)",
    excerpt: "New materials, regulations, and trends shaping the roofing world.",
    image: metalRoof,
    category: "News",
    author: "Thayer June",
    date: "Jun 22, 2025",
  },
  {
    title: "We Won! Paradise Roofers Named Best Roofing Company of 2025",
    excerpt: "Thank you to our amazing customers and hardworking team.",
    image: completedRoof,
    category: "News",
    author: "Bramwell Cutter",
    date: "May 14, 2025",
  },
  {
    title: "How We Helped Restore 10 Roofs After Last Month's Storm",
    excerpt: "Emergency response in action—real stories from real homeowners.",
    image: roofInspection,
    category: "Featured",
    author: "Bramwell Cutter",
    date: "May 14, 2025",
  },
  {
    title: "Roof Repair vs. Replacement: How to Know What You Really Need",
    excerpt: "A deep dive into the decision-making process for your roof.",
    image: roofInstallation,
    category: "Guides",
    author: "Thayer June",
    date: "Jun 23, 2025",
  },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container">
          <span className="section-label mb-4 inline-block">Blogs</span>
          <h1 className="headline-xl text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Stories, Lessons, And Insights
            <br />
            From Up High (So You Don't
            <br />
            Have To Climb Up There).
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted hover:bg-muted/80"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span className="text-primary uppercase tracking-wider font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg uppercase mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
}
