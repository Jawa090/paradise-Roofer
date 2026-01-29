import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
interface ContactFormProps {
  variant?: "light" | "dark";
}
export default function ContactForm({
  variant = "light"
}: ContactFormProps) {
  const bgClass = variant === "dark" ? "bg-foreground" : "bg-background";
  const textClass = variant === "dark" ? "text-background" : "text-foreground";
  return <section className={`${bgClass}`}>

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={textClass}>
            <h2 className="headline-xl md:text-5xl lg:text-6xl mb-4 text-3xl">
              You Click. We
              <br />
              Climb. Deal?
            </h2>
            <p className="text-muted-foreground max-w-md">
              Tell us what you need — we'll handle the rest (no ladders required
              on your part).
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-background p-6 md:p-8 shadow-xl">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name*</label>
                <Input placeholder="Jane Smith" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email*
                  </label>
                  <Input type="email" placeholder="jane@framer.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone*
                  </label>
                  <Input type="tel" placeholder="(123) 456-7890" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Property Type*
                  </label>
                  <Select>
                    <SelectTrigger>
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
                  <label className="block text-sm font-medium mb-1">
                    Service Type*
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Roof Installation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">
                        Roof Installation
                      </SelectItem>
                      <SelectItem value="repair">Roof Repair</SelectItem>
                      <SelectItem value="replacement">
                        Roof Replacement
                      </SelectItem>
                      <SelectItem value="inspection">
                        Roof Inspection
                      </SelectItem>
                      <SelectItem value="coating">Roof Coating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Zip Code*
                  </label>
                  <Input placeholder="75024" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Best Time to Call
                  </label>
                  <Input type="time" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea placeholder="Write your detailed message here" rows={4} />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-semibold py-6">
                Request Free Estimate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}