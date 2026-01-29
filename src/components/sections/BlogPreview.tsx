import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import completedRoof from "@/assets/completed-roof.jpg";

const blogs = [
  {
    id: 1,
    category: "Tips",
    date: "June 22, 2025",
    title: "7 Easy Ways To Make Your Roof Last Longer",
    author: { name: "Thayer Juno", avatar: "" },
    image: project1,
  },
  {
    id: 2,
    category: "Guides",
    date: "July 5, 2025",
    title: "Choosing The Right Roofing Material: A Homeowner's Simple Guide",
    author: { name: "Bramwell Cutter", avatar: "" },
    image: project2,
  },
  {
    id: 3,
    category: "Guides",
    date: "June 22, 2025",
    title: "Roof Repair vs. Replacement: How To Make The Right Call",
    author: { name: "Thayer Juno", avatar: "" },
    image: completedRoof,
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="mb-12">
          <span className="section-label mb-4 inline-block">🔨 Blogs 🔨</span>
          <h2 className="headline-lg text-3xl md:text-4xl lg:text-5xl">
            The Roof Files — Stories,
            <br />
            Guides & Good Advice
          </h2>
        </div>

        <div className="space-y-0">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              to="/blogs"
              className="group flex flex-col md:flex-row gap-6 py-8 border-t border-border hover:bg-muted/50 transition-colors"
            >
              <div className="w-full md:w-64 h-48 md:h-40 overflow-hidden flex-shrink-0">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {blog.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {blog.date}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={blog.author.avatar} />
                    <AvatarFallback className="text-xs">
                      {blog.author.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{blog.author.name}</span>
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/blogs">
            <Button className="bg-foreground text-background hover:bg-foreground/90 uppercase font-semibold">
              Read All Blogs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
