import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Shield, Award, MapPin, Component, Home, Search, Hammer, CheckCircle2, AlertTriangle, Layers, Wrench, FileText, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import fasciaImage from "@/assets/Home_page/FasciaRepairReplacementinTorontoGTA.webp";

export default function FasciaRepair() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Fascia Repair & Replacement Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Fascia Repair & Replacement<br />
                            in Toronto & GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Rotten fascia boards causing gutter problems? We specialize in fascia repair and complete replacement for Toronto homes where wood rot has compromised roof edges, gutters, and exterior appearance. Licensed Paradise Roofers fix sagging gutters, leaking fascia joints, and deteriorated boards across Toronto, Mississauga, Brampton, Milton, Oakville and entire GTA.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Free drone inspection reveals hidden rot before it spreads. Same-day repairs for minor damage. Full replacement packages include soffit ventilation + seamless gutters. 20-year warranty on aluminum/PVC fascia systems.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get Free Quote <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={fasciaImage} alt="Aluminum Fascia Work" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <FileText className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">FREE Drone Assessment</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">20-Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Zap className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Same-Day Repairs</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4">Why Toronto Fascia Boards Fail Fast</h3>
                        <p className="text-lg text-muted-foreground mb-4">
                            Fascia rot destroys 70% of gutter systems. Water trapped behind gutters rots unprotected wood within 5-7 years in Toronto's humid climate. Standing water from a poor gutter slope accelerates decay. Freeze-thaw cycles crack already weakened boards.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6 Common Fascia Failure Signs */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Search className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">6 Common Fascia Failure Signs</h2>
                            <p className="text-lg font-medium text-muted-foreground">Check your roofline for these warning signs:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Gutters sagging or pulling away from house",
                                icon: AlertTriangle,
                                points: [
                                    "Visible separation between gutter and fascia",
                                    "Gutter spikes coming loose",
                                    "Water pooling behind gutters"
                                ]
                            },
                            {
                                title: "Brown streaks below gutter seams (rot stains)",
                                icon: Layers,
                                points: [
                                    "Dark staining on fascia boards",
                                    "Discoloration spreading downward",
                                    "Evidence of water infiltration"
                                ]
                            },
                            {
                                title: "Peeling paint or soft wood when probed",
                                icon: Component,
                                points: [
                                    "Paint flaking off in large sections",
                                    "Wood feels spongy to touch",
                                    "Screwdriver easily penetrates wood"
                                ]
                            },
                            {
                                title: "Gutter leaks at fascia connection points",
                                icon: Home,
                                points: [
                                    "Water dripping from gutter joints",
                                    "Loose or missing gutter brackets",
                                    "Visible gaps between gutter and fascia"
                                ]
                            },
                            {
                                title: "Small woodpecker holes (rot entry points)",
                                icon: Search,
                                points: [
                                    "Multiple small holes in fascia",
                                    "Evidence of insect activity",
                                    "Birds targeting soft, rotted wood"
                                ]
                            },
                            {
                                title: "Icicles forming directly on fascia (no protection)",
                                icon: Wrench,
                                points: [
                                    "Ice buildup on fascia boards",
                                    "No proper ice and water shield",
                                    "Winter damage accelerating rot"
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


            {/* Complete Fascia Repair & Replacement Services */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Complete Fascia Repair & Replacement Services</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Professional fascia solutions engineered for Toronto's extreme weather conditions.</p>

                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">Free Drone Fascia Assessment $200</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                4K aerial reveals rot patterns, gutter attachment failures, soffit ventilation blockages. Thermal scan shows moisture trapped behind boards.
                            </p>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <Wrench className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">Targeted Fascia Repair (Under 30% Damage)</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Individual board section replacement. Epoxy consolidation for minor rot. Custom-cut matching wood. Metal flashing prevents recurrence.
                            </p>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <Component className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">Complete Fascia Replacement (Recommended)</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Full perimeter aluminum or PVC fascia boards. Seamless gutter reattachment. Proper flashing/soffit integration. Color-matched to siding.
                            </p>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">Emergency Fascia Service</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Sagging gutters pulling fascia off house. Storm-damaged fascia/gutter systems. Temporary bracing until full repair.
                            </p>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <Home className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">Fascia + Soffit + Gutter Packages</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Continuous ventilation soffits (50% net free area). Seamless aluminum gutters properly sloped. Complete exterior water management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Materials Comparison Table */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8 text-center">Fascia Materials Toronto Weather Tested</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-border">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Material</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Rot Proof</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Toronto Lifespan</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Maintenance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Aluminum Fascia</td>
                                    <td className="px-6 py-4 font-bold text-green-600">Yes</td>
                                    <td className="px-6 py-4">35-50 years</td>
                                    <td className="px-6 py-4 font-bold text-green-600">None</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">PVC Fascia</td>
                                    <td className="px-6 py-4 font-bold text-green-600">Yes</td>
                                    <td className="px-6 py-4">40-60 years</td>
                                    <td className="px-6 py-4 font-bold text-green-600">None</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Pressure Treated Wood</td>
                                    <td className="px-6 py-4 font-bold text-red-600">No</td>
                                    <td className="px-6 py-4">7-12 years</td>
                                    <td className="px-6 py-4 text-red-600">Annual paint</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Cedar (Premium)</td>
                                    <td className="px-6 py-4 font-bold text-red-600">No</td>
                                    <td className="px-6 py-4">10-15 years</td>
                                    <td className="px-6 py-4 text-red-600">Annual seal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-lg font-bold text-[#FF9C45]">
                            Aluminum = 5x longer life, zero maintenance, perfect gutter support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Simple Process of Fascia Repair</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "FREE Drone + Ground Inspection",
                                desc: "Laser level checks gutter slope. Moisture meter probes rot depth. Drone reveals hidden upper damage. Digital report same day."
                            },
                            {
                                step: "02",
                                title: "Custom Fabrication & Prep",
                                desc: "Aluminum/PVC fascia cut to exact lengths onsite. Rotten wood completely removed (not patched). Soffit ventilation planned."
                            },
                            {
                                step: "03",
                                title: "Precision Installation",
                                desc: "Hidden brackets every 16\". Seamless gutter reattachment. Metal flashing prevents water behind fascia. Color-matched caulking."
                            },
                            {
                                step: "04",
                                title: "Final Test",
                                desc: "High-pressure hose verifies zero leaks at all joints."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="text-5xl font-black text-[#FF9C45]/20 font-mono">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "How long does installation take?", a: "Single story average home: 1 day. Two-story or complex 1.5 days." },
                            { q: "Free inspection included?", a: "Yes – drone assessment standard. Reveals rot you can't see." },
                            { q: "Warranty on fascia replacement?", a: "20 years aluminum/PVC. Lifetime against rot." },
                            { q: "Do gutters need replacing too?", a: "90% yes. We slope new gutters properly during fascia work." },
                            { q: "Emergency service available?", a: "24/7 for sagging/falling gutters. Temporary bracing until full repair." }
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
