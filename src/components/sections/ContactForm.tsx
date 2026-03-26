import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock } from "lucide-react";

interface ContactFormProps {
  variant?: "light" | "dark";
}

export default function ContactForm({
  variant = "light"
}: ContactFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    plan: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, plan: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("message", formData.message);
      data.append("website", "paradise-roofer");
      if (formData.plan) {
        data.append("plan", formData.plan);
      }

      const API_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
        ? "http://localhost:5000/api/contact"
        : "https://constructionestimatingnewyork.com/api/contact";

      const response = await fetch(API_URL, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "", plan: null });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to connect to the server.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const bgClass = variant === "dark" ? "bg-foreground" : "bg-background";
  const textClass = variant === "dark" ? "text-background" : "text-foreground";

  return (
    <section className={`${bgClass} py-20`}>
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className={`${textClass} sticky top-24`}>
            <h2 className="font-['Oswald'] text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-8 tracking-wide">
              YOU CLICK. WE<br />
              CLIMB. DEAL?
            </h2>
            <p className="text-muted-foreground text-xl max-w-md font-medium leading-relaxed">
              Tell us what you need — we'll handle the rest (no ladders required on your part).
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 shadow-2xl rounded-sm border-t-4 border-[#FF9C45]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Name*</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-12 rounded-none placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Phone*</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    required
                    className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-12 rounded-none placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email*</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="sales@paradiseroofers.com"
                  required
                  className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-12 rounded-none placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Upload Plan (Optional)</label>
                <Input
                  name="plan"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.dwg,.jpg,.jpeg,.png,.zip"
                  className="bg-gray-100/50 border-2 border-dashed border-[#FF9C45]/20 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-16 rounded-none placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Message*</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your detailed message here"
                  rows={4}
                  required
                  className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] rounded-none resize-none placeholder:text-muted-foreground/50 p-4"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#FF9C45] text-black hover:bg-[#ff8a22] uppercase font-bold text-sm tracking-widest py-8 rounded-none mt-4 transition-all hover:scale-[1.01]">
                {isSubmitting ? "Sending..." : "Request Free Estimate"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}