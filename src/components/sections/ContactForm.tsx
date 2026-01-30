import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock } from "lucide-react";

interface ContactFormProps {
  variant?: "light" | "dark";
}

export default function ContactForm({
  variant = "light"
}: ContactFormProps) {
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

          {/* Right Form */}
          <div className="bg-white p-8 md:p-10 shadow-2xl rounded-sm border-t-4 border-[#FF9C45]">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Name*</label>
                <Input
                  placeholder="Jane Smith"
                  className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-12 rounded-none placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email*</label>
                  <Input
                    type="email"
                    placeholder="jane@framer.com"
                    className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-12 rounded-none placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Phone*</label>
                  <Input
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-12 rounded-none placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Property & Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Property Type*</label>
                  <Select>
                    <SelectTrigger className="bg-gray-100/50 border-0 focus:ring-1 focus:ring-[#FF9C45] h-12 rounded-none">
                      <SelectValue placeholder="Residential" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Service Type*</label>
                  <Select>
                    <SelectTrigger className="bg-gray-100/50 border-0 focus:ring-1 focus:ring-[#FF9C45] h-12 rounded-none">
                      <SelectValue placeholder="Roof Installation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">Roof Installation</SelectItem>
                      <SelectItem value="repair">Roof Repair</SelectItem>
                      <SelectItem value="replacement">Roof Replacement</SelectItem>
                      <SelectItem value="inspection">Roof Inspection</SelectItem>
                      <SelectItem value="coating">Roof Coating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Zip & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Zip Code*</label>
                  <Input
                    placeholder="M5V 2T6"
                    className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-12 rounded-none placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Best Time to Call</label>
                  <div className="relative">
                    <Input
                      type="time"
                      className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] h-12 rounded-none block w-full"
                    />
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                <Textarea
                  placeholder="Write your detailed message here"
                  rows={4}
                  className="bg-gray-100/50 border-0 focus-visible:ring-1 focus-visible:ring-[#FF9C45] rounded-none resize-none placeholder:text-muted-foreground/50 p-4"
                />
              </div>

              <Button className="w-full bg-[#FF9C45] text-black hover:bg-[#ff8a22] uppercase font-bold text-sm tracking-widest py-8 rounded-none mt-4 transition-all hover:scale-[1.01]">
                Request Free Estimate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}