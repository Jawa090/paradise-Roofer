import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, PaintBucket, Sun, Droplets, Layers, DollarSign, Repeat, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import roofCoating from "@/assets/roof-coating.jpg";
import commercialRoof from "@/assets/roof-inspection.jpg"; // Placeholder or different image
import completedRoof from "@/assets/completed-roof.jpg";

export default function RoofCoating() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Roof Restoration</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Silicone Roof<br />
                            Coatings
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Don't replace your commercial flat roof—restore it. Our high-solids silicone coating systems extend secure roof life by 15-20 years for half the cost of a tear-off.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Create a seamless, waterproof membrane that reflects 90% of UV rays, lowering your cooling costs and stopping leaks instantly.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get a Coating Estimate <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofCoating} alt="Silicone Roof Coating Application" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <DollarSign className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Save 50% vs Replacement</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Sun className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">UV Reflective (Cool Roof)</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <ShieldCheck className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">20-Year NDL Warranty</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Roof coatings are not "paint." They are thick, liquid-applied membranes that cure into a seamless rubber-like shield. If your existing Modified Bitumen, TPO, EPDM, or Metal roof is aging but structurally sound, coating it is the smartest financial decision you can make. It halts rust, seals micro-cracks, and you can expense it as maintenance in a single tax year rather than capitalizing it over 39 years.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <PaintBucket className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Coat Your Roof?</h2>
                            <p className="text-lg font-medium text-muted-foreground">The benefits go beyond just waterproofing:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Seamless Waterproofing",
                                icon: Droplets,
                                points: [
                                    "Monolithic layer (no seams)",
                                    "Self-flashing around vents",
                                    "Withstands ponding water"
                                ]
                            },
                            {
                                title: "2. Energy Efficiency",
                                icon: Sun,
                                points: [
                                    "Reflects 88% of sun's heat",
                                    "Lowers AC costs by 15-30%",
                                    "Reduces thermal shock"
                                ]
                            },
                            {
                                title: "3. Cost Savings",
                                icon: DollarSign,
                                points: [
                                    "Half the cost of reroofing",
                                    "No landfill fees",
                                    "Tax deductible as maintenance"
                                ]
                            },
                            {
                                title: "4. Rapid Installation",
                                icon: Repeat,
                                points: [
                                    "No business disruption",
                                    "Quiet application (no tear-off)",
                                    "Fast cure times"
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

            {/* Systems We Coat */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Compatible Roof Types</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Our silicone systems adhere aggressively to most existing commercial substrates.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Metal Roofs", desc: "Stops rust instantly. Seals loose fasteners and seams. Ideal for warehouses." },
                            { title: "Modified Bitumen", desc: "Seals alligator cracking and restores the granular surface to a smooth white finish." },
                            { title: "Single-Ply (TPO/EPDM)", desc: "Renews weathered membranes that are chalking or shrinking at the seams." },
                            { title: "Spray Foam (SPF)", desc: "Protects the foam insulation from UV degradation and hail damage." },
                            { title: "Built-Up Roofs (BUR)", desc: "Encapsulates gravel roofs (after spudding) to stop leaks and reduce weight." },
                            { title: "Concrete Decks", desc: "Waterproofs structural concrete to prevent carbonation and rebar corrosion." },
                            { title: "Skylights", desc: "Clear silicone options available to seal leaky skylight flashing without unnecessary replacement." },
                            { title: "Gutter Linings", desc: "Creates a seamless trough inside old rusted box gutters." }
                        ].map((service, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border hover:border-[#FF9C45] transition-colors">
                                <Layers className="h-8 w-8 text-[#FF9C45] mb-3" />
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">The Restoration Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Infrared Scan & Prep",
                                time: "Evaluation",
                                desc: "We scan for wet insulation. Wet areas must be replaced. Then we power wash the entire roof surface."
                            },
                            {
                                step: "02",
                                title: "Detailing Work",
                                time: "Sealing",
                                desc: "We apply thick mastic sealant to all penetrations, flashings, drains, and seams to reinforce weak points."
                            },
                            {
                                step: "03",
                                title: "Base Coat (If Needed)",
                                time: "Priming",
                                desc: "Some surfaces like asphalt require a bleed-block primer to prevent yellowing."
                            },
                            {
                                step: "04",
                                title: "Top Coat Application",
                                time: "Coating",
                                desc: "We spray or roll high-solids silicone to the specified thickness (e.g. 20-30 mils) to create the membrane."
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
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Restoration Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Mississauga Logistics Center",
                                img: commercialRoof,
                                problem: "Rusted metal roof with thousands of loose screws",
                                result: "Saved $150k vs replacement. 20-year silicone warranty."
                            },
                            {
                                title: "Vaughan Plaza",
                                img: completedRoof,
                                problem: "Leaking EPDM seams affecting retail tenants",
                                result: "Seamless restoration. Zero business downtime during work."
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
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Coating FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "How long does it last?", a: "A properly installed silicone system generally lasts 15-20 years. It can then be recoated for another 20 years of life." },
                            { q: "Can I walk on it?", a: "Yes, for maintenance. However, silicone can be slippery when wet. We install safety yellow walk pads for high-traffic areas." },
                            { q: "Does it work in winter?", a: "The coating must be applied in dry, above-freezing weather. Once cured, it withstands Canadian winters perfectly." },
                            { q: "Is it expensive?", a: "It typically costs $4-$8 per square foot, whereas a full tear-off and replacement often costs $12-$20 per square foot." },
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
