import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Building2, Wind, DollarSign, PenTool, CheckCircle2, Factory, Warehouse, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import commercialRoofing from "@/assets/Home_page/CommercialServicesCommercialFlatRoofingSystemsToronto.webp";
import metalRoof from "@/assets/metal-roof.jpg";
import roofingBanner from "@/assets/roofers-banner.jpg";

export default function CommercialRoofing() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Commercial Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Commercial Flat Roofing<br />
                            Systems Toronto
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Your business operations depend on a dry interior. Don't let a leaking flat roof disrupt production or damage inventory.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We specialize in TPO, EPDM, and Modified Bitumen roofing for plazas, warehouses, and multi-unit buildings across the GTA. Durable, code-compliant, and installed with minimal downtime.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Request Proposal <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={commercialRoofing} alt="Commercial Flat Roof" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Building2 className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Plazas & Warehouses</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">$5M Liability Insured</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Timer className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">24/7 Leak Response</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Flat roofs present unique challenges: water pooling, HVAC penetrations, and massive thermal expansion/contraction. Generic residential roofers often lack the specialized welding equipment and knowledge for these systems. Our commercial division is fully equipped to handle large-scale TPO membrane installations, 2-ply torch-down systems, and complex custom metal flashing for parapet walls.
                        </p>
                    </div>
                </div>
            </section>

            {/* Systems Grid */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Factory className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Commercial Systems</h2>
                            <p className="text-lg font-medium text-muted-foreground">We install and repair the industry's leading flat roof membranes:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. TPO Single-Ply",
                                icon: Building2,
                                points: [
                                    "Heat-welded seams (Strongest bond)",
                                    "White reflective surface (Cool Roof)",
                                    "Grease/Chemical resistant"
                                ]
                            },
                            {
                                title: "2. Modified Bitumen",
                                icon: Factory,
                                points: [
                                    "2-Ply Torch Down System",
                                    "Extreme durability for foot traffic",
                                    "Granulated surface protection"
                                ]
                            },
                            {
                                title: "3. EPDM Rubber",
                                icon: Shield,
                                points: [
                                    "Large sheets = fewer seams",
                                    "Proven 40-year lifespan",
                                    "Excellent hail resistance"
                                ]
                            },
                            {
                                title: "4. Maintenance Plans",
                                icon: PenTool,
                                points: [
                                    "Bi-annual inspections",
                                    "Drain & Scupper clearing",
                                    "Detailed condition reports"
                                ]
                            },
                            {
                                title: "5. Custom Metal Work",
                                icon: Building2,
                                points: [
                                    "Parapet cap flashing",
                                    "Commercial box gutters",
                                    "HVAC curb flashing"
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

            {/* Process */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Project Workflow</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Site Assessment & Core Cut",
                                time: "Day 1",
                                desc: "We inspect drainage, deck condition, and take core samples to check for wet insulation."
                            },
                            {
                                step: "02",
                                title: "Detailed Proposal",
                                time: "Day 3",
                                desc: "Fixed-price quote with options for repair vs replacement. ROI calculation included."
                            },
                            {
                                step: "03",
                                title: "Safety Setup & Execution",
                                time: "Project Start",
                                desc: "Safety rails installed. Crane setup. We strip manually or vacuum ballast. New system install."
                            },
                            {
                                step: "04",
                                title: "Final Signoff",
                                time: "Project End",
                                desc: "Manufacturer inspection for warranty. Clean site. Final drone photos provided."
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

            {/* Case Studies */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Standard Commercial Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Mississauga Plaza",
                                img: metalRoof,
                                problem: "Multiple leaks destroying flexible ceiling tiles",
                                result: "20,000 sq ft TPO Overlay. 20-Year Warranty."
                            },
                            {
                                title: "Etobicoke Warehouse",
                                img: roofingBanner,
                                problem: "Ponding water causing structural sag",
                                result: "New tapered insulation system + 2-Ply Mod Bit."
                            }
                        ].map((story, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 h-48 md:h-auto bg-muted">
                                    <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                    <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                                    <div className="space-y-1 text-sm">
                                        <p><span className="font-bold text-red-600">Problem:</span> {story.problem}</p>
                                        <p><span className="font-bold text-green-600">Result:</span> {story.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Commercial FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "Do you work on high-rises?", a: "We primarily service low-rise to mid-rise commercial buildings, warehouses, and strip malls up to 5 stories." },
                            { q: "Is TPO better than Tar & Gravel?", a: "Yes. TPO is seamless (welded), reflects heat (lowering AC costs), and is much lighter, reducing structural load." },
                            { q: "Can you fix leaks without full replacement?", a: "Often yes. We use infrared cameras to find the wet insulation boundary and only replace the damaged section." },
                            { q: "What is your warranty?", a: "10-Year Workmanship on all new installs + Manufacturer Material Warranties up to 20 or 25 years." },
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
            </section>

            <ContactForm />
        </Layout>
    );
}
