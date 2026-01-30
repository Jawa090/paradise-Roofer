import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, PaintBucket, Hammer, Eraser, CheckCircle2, Home, Layers, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import roofInstallation from "@/assets/roof-installation.jpg";
import roofCoating from "@/assets/roof-coating.jpg"; // Placeholder
import completedRoof from "@/assets/completed-roof.jpg";

export default function InteriorRenos() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Post-Leak Restoration</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Ceiling & Drywall Repair<br />
                            Services
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A roof leak doesn't just damage shingles—it wrecks your ceilings and walls. Stains, bubbling paint, and mold are ugly reminders of past storms.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We are one of the few roofing companies with a dedicated interior team. We don't just stop the water outside; we make the inside look brand new again.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get Restoration Quote <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofInstallation} alt="Interior Ceiling Repair" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <PaintBucket className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Color Match Expert</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Mold Treatment</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Eraser className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Seamless Patching</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Finding a reliable painter or drywaller for a small leak repair is hard. Most contractors want big renovations, not spot repairs. We fill that gap. After we verify your roof is watertight, our interior specialists cut out damaged drywall, replace wet insulation, tape, mud, sand, and paint. We treat the area for mold spores so your family breathes safe air.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signs You Need Upgrade */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Eye className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Interior Damage Signs</h2>
                            <p className="text-lg font-medium text-muted-foreground">Don't ignore these symptoms of water intrusion:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Brown Ceiling Stains",
                                icon: PaintBucket,
                                points: [
                                    "Common 'coffee ring' stain",
                                    "Indicates dried water",
                                    "Usually directly below leak"
                                ]
                            },
                            {
                                title: "2. Bubbling Paint",
                                icon: Layers,
                                points: [
                                    "Water trapped behind paint",
                                    "Soft to the touch",
                                    "Will eventually peel"
                                ]
                            },
                            {
                                title: "3. Sagging Drywall",
                                icon: Home,
                                points: [
                                    "Ceiling bowing downwards",
                                    "Severe saturation risk",
                                    "Can collapse unexpectedly"
                                ]
                            },
                            {
                                title: "4. Black Mold Spots",
                                icon: CheckCircle2,
                                points: [
                                    "Fuzzy black/green growth",
                                    "Health hazard (spores)",
                                    "Needs professional removal"
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

            {/* Our Services Grid */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Interior Restoration Logic</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">We restore different surfaces to their original glory.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Drywall Patching", desc: "Cutting out damaged squares and installing new gypsum. Taped and mudded to be invisible." },
                            { title: "Stain Blocking", desc: "Applying oil-based Kilz primer to ensure yellow water stains never bleed through the new paint." },
                            { title: "Vapor Barrier Repair", desc: "Resealing the plastic polyethylene sheet in your ceiling to stop warm air entering the attic." },
                            { title: "Popcorn Ceiling Repair", desc: "Matching texture on stipple/popcorn ceilings (a difficult art we have mastered)." },
                            { title: "Insulation Replacement", desc: "removing wet batts that have lost R-value and replacing with fresh fiberglass." },
                            { title: "Mold Treatment", desc: "Spraying anti-microbial solution on framing and sheathing to kill fungal roots." },
                            { title: "Trim & Baseboard", desc: "Replacing MDF trim that has swelled from water absorption at the floor level." },
                            { title: "Full Room Painting", desc: "Repainting the entire ceiling or wall corner-to-corner for a perfect finish." }
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Restoration Steps</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Leak Verification",
                                time: "Inspection",
                                desc: "We confirm the roof leak is 100% fixed. It makes no sense to repair drywall if water is still coming in."
                            },
                            {
                                step: "02",
                                title: "Protection Setup",
                                time: "Prep",
                                desc: "We tarp your floors and furniture. We set up plastic barriers to contain drywall dust."
                            },
                            {
                                step: "03",
                                title: "Cut & Replace",
                                time: "Day 1",
                                desc: "Damaged material is removed. New insulation and drywall installed. First coat of mud applied."
                            },
                            {
                                step: "04",
                                title: "Finish & Paint",
                                time: "Day 2",
                                desc: "Sanding, texture matching, priming, and painting. We leave your room cleaner than we found it."
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Before & After</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Mississauga Master Bedroom",
                                img: completedRoof,
                                problem: "Large brown ring on popcorn ceiling",
                                result: "Stain blocked, re-stippled. Invisible repair."
                            },
                            {
                                title: "Toronto Upper Hallway",
                                img: roofCoating,
                                problem: "Drywall tape peeling due to humidity",
                                result: "Tape removed, re-mudded with setting compound. Painted."
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Restoration FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "Can't I just paint over the stain?", a: "No. Water stains contain tannins that will bleed through regular paint forever. You must use an oil-based stain blocker first." },
                            { q: "Do you fix popcorn ceilings?", a: "Yes. We can scrape it off to flat or patch damage and blend the texture. It is difficult but possible." },
                            { q: "Is the mold dangerous?", a: "It can be. Stachybotrys (black mold) releases toxins. We treat affected wood with fungicides before closing walls." },
                            { q: "Does insurance cover this?", a: "Often yes. If the leak was sudden (storm damage), interior repairs are usually part of the claim." },
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
