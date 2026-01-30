import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Eye, FileText, Camera, Smartphone, CheckCircle2, AlertTriangle, CloudRain, Wind, Home } from "lucide-react";
import { Link } from "react-router-dom";
import roofInspection from "@/assets/roof-inspection.jpg";
import completedRoof from "@/assets/completed-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import roofingBanner from "@/assets/roofers-banner.jpg";

export default function RoofInspection() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Roof Inspection Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Free Roof Drone Inspection<br />
                            in Toronto & The GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Stop guessing about your roof's health. Traditional ladders and binoculars can't see hairline cracks or hidden moisture.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We use advanced 4K cinematic drones to scan every square inch of your roof—shingles, flashings, chimneys, and vents—without a single boot touching your granules. Safe, fast, and completely free.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Book Free Inspection <ArrowRight className="h-4 w-4" strokeWidth={3} />
                                    </button>
                                </Link>
                                <a href="tel:+16475550123" className="w-full sm:w-auto bg-muted text-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-muted/80 transition-colors flex items-center justify-center gap-4">
                                    <Phone className="h-5 w-5 text-[#FF9C45]" />
                                    +1 (647) 555-0123 <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Image & Badges */}
            <section className="pb-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="relative">
                        <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm">
                            <img src={roofInspection} alt="Drone Roof Analysis" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Camera className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">4K High-Res Imagery</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Zero Liability / Safe</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <FileText className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Instant PDF Report</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Why risk a roofer falling off your property or damaging your shingles by walking on them? Our drone technology provides a superior inspection. We can zoom in 50x to see nail pops, granule loss, and sealant failures that human eyes miss. Within hours, you receive a comprehensive digital report documenting every defect, ready for your insurance company or your own peace of mind.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Look For */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Eye className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">What Our Drones Detect</h2>
                            <p className="text-lg font-medium text-muted-foreground">We uncover hidden issues before they become expensive leaks:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Missing or Damaged Shingles",
                                icon: Wind,
                                points: [
                                    "Wind-blown tabs",
                                    "Creased shingles (storm damage)",
                                    "Thermal splitting"
                                ]
                            },
                            {
                                title: "2. Flashing Failures",
                                icon: AlertTriangle,
                                points: [
                                    "Rusted chimney flashing",
                                    "Lifted wall step flashing",
                                    "Failed valley metal"
                                ]
                            },
                            {
                                title: "3. Granule Loss",
                                icon: CloudRain,
                                points: [
                                    "Bald spots on asphalt",
                                    "uv exposure risks",
                                    "Gutters full of granules"
                                ]
                            },
                            {
                                title: "4. Ventilation Issues",
                                icon: Home,
                                points: [
                                    "Blocked soffit vents",
                                    "Inadequate ridge venting",
                                    "Heat buildup signs"
                                ]
                            },
                            {
                                title: "5. Chimney Deterioration",
                                icon: Home,
                                points: [
                                    "Cracked masonry cap",
                                    "Missing mortar joints",
                                    "Spalling bricks"
                                ]
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <item.icon className="h-6 w-6 text-[#FF9C45]" />
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {item.points.map((pt, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Benefits Grid */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Why Choose Drone Inspection?</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Modern problems require modern solutions. Here is why Toronto homeowners prefer our drone service:</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Completely Contactless", desc: "We don't need to enter your home. You don't even need to be there. We fly, scan, and email you." },
                            { title: "No Roof Damage", desc: "Walking on hot asphalt shingles scuffs granules and voids warranties. We never touch them." },
                            { title: "Hard-to-Reach Areas", desc: "We see behind chimneys, steep peaks, and 3rd-story dormers that ladders can't reach safely." },
                            { title: "Objective Evidence", desc: "Photos don't lie. You see exactly what we see. No 'trust me' sales tactics." },
                            { title: "Insurance Format", desc: "Our reports meet insurance standards for claims. Date-stamped, geo-tagged, 4K resolution." },
                            { title: "Measurable Data", desc: "We can measure your roof surface area, pitch, and facet angles with 99% accuracy." },
                            { title: "Thermal Ready", desc: "Optional thermal scans can detect wet insulation under the roof deck at sunset." },
                            { title: "Fast Turnaround", desc: "Get your full report in your inbox within 4 hours of the flight." }
                        ].map((service, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border hover:border-[#FF9C45] transition-colors">
                                <CheckCircle2 className="h-8 w-8 text-[#FF9C45] mb-3" />
                                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">How It Works</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Request Inspection",
                                time: "Online / Phone",
                                desc: "Fill out our form. We check airspace regulations for your address instantly."
                            },
                            {
                                step: "02",
                                title: "We Fly the Mission",
                                time: "15-20 Minutes",
                                desc: "Our distinct truck arrives. Pilot deploys drone. Automated flight path captures 50+ images."
                            },
                            {
                                step: "03",
                                title: "Data Analysis",
                                time: "In-Office",
                                desc: "We review footage on large monitors. We annotate defects and grade your roof condition."
                            },
                            {
                                step: "04",
                                title: "Report Delivery",
                                time: "Same Day",
                                desc: "You receive a PDF link via email or SMS. Consult with us over phone if repairs are needed."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="text-5xl font-black text-[#FF9C45]/20 font-mono">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <span className="text-sm font-bold text-[#FF9C45] uppercase tracking-wider mb-2 block">{item.time}</span>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">What We Found (Case Studies)</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "New Home Purchase",
                                img: completedRoof,
                                problem: "Seller said roof was 'new' (2020)",
                                result: "Drone found 30% granule loss. Buyer got $5k credit."
                            },
                            {
                                title: "Post-Wind Storm",
                                img: roofingBanner,
                                problem: "Homeowner couldn't see damage from ground",
                                result: "Found 12 missing shingles on rear slope. Repaired same day."
                            },
                            {
                                title: "Leak Investigation",
                                img: metalRoof,
                                problem: "Mystery leak in master bedroom",
                                result: "Drone spotted cracked chimney crown invisible from ladder."
                            },
                            {
                                title: "Insurance Dispute",
                                img: roofInspection,
                                problem: "Insurer denied hail claim",
                                result: "4K close-ups proved bruising. Claim approved $12000."
                            }
                        ].map((story, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 h-48 md:h-auto bg-muted">
                                    <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                    <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                                    <div className="space-y-1 text-sm">
                                        <p><span className="font-bold text-red-600">Issue:</span> {story.problem}</p>
                                        <p><span className="font-bold text-green-600">Outcome:</span> {story.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage & FAQs */}
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl space-y-20">

                    {/* Coverage */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                Service Areas
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Toronto (All Districts)</span>
                                <span>• Mississauga & Brampton</span>
                                <span>• Vaughan & Richmond Hill</span>
                                <span>• Markham & Scarborough</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <Camera className="h-5 w-5 text-[#FF9C45]" />
                                Drone Fleet
                            </h3>
                            <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                                <span>• DJI Mavic 3 Enterprise (Thermal)</span>
                                <span>• DJI Mini 4 Pro (Tight Spaces)</span>
                                <span>• Licensed Advanced Pilot Certificate</span>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "Do I have to pay if I get repairs done?", a: "If you hire us for the repair or replacement, the cost of the inspection is 100% credited back to you. It becomes free." },
                                { q: "Is it legal to fly over my house?", a: "Yes. Our pilots hold Transport Canada certifications and we follow all privacy and airspace regulations." },
                                { q: "Can you fly in winter?", a: "Yes, as long as it is not currently snowing or raining. Drones provide safest way to inspect icy roofs." },
                                { q: "Do I get the photos?", a: "Yes! You own all the data. We send you a link to download high-res images and the PDF report." },
                                { q: "How fast can you come?", a: "We usually have a pilot available within 24-48 hours. Emergency response is available." },
                                { q: "Can you inspect commercial flat roofs?", a: "Absolutely. Drones are perfect for large flat roof thermal scans to find wet insulation." },
                            ].map((faq, i) => (
                                <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h4 className="font-bold text-base mb-2 flex items-start gap-2">
                                        <span className="text-[#FF9C45]">Q.</span> {faq.q}
                                    </h4>
                                    <p className="text-sm text-muted-foreground pl-6">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <ContactForm />
        </Layout>
    );
}
