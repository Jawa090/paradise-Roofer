import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Shield, Award, MapPin, Wind, Thermometer, Construction, Fan, CheckCircle2, Home, LayoutDashboard, FileText, Zap, DollarSign, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import roofCoating from "@/assets/roof-coating.jpg";

export default function SoffitRepair() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Soffit Repair & Replacement Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Complete Soffit Repair & Replacement<br />
                            in Toronto & GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Soffit problems causing ice dams and poor attic ventilation? We provide professional soffit repair and complete replacement for Toronto homes where clogged vents, rotten wood, and failing soffits create moisture buildup, ice dams, and skyrocketing hydro bills. Licensed Paradise Roofers serve Toronto, Mississauga, Brampton, Milton, Oakville and entire GTA region with continuous ventilation soffits, proper fascia integration, and complete exterior packages.
                                </p>
                                <p className="text-lg font-bold text-[#FF9C45]">
                                    Every soffit job starts with FREE drone inspection $200 revealing hidden rot, ventilation blockages, and moisture patterns before work begins. Fast 1-2 day installations, 25-year warranties, zero mess guarantee across entire GTA region.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Improve Airflow Now <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofCoating} alt="Vented Soffit Installation" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <FileText className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">FREE Drone Inspection</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">25-Year Warranties</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Zap className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">1-2 Day Installation</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            For decades, builders used solid plywood soffits with tiny vents that get painted shut or clogged with insulation. This suffocates your attic. In summer, temperatures soar to 150°F, cooking your shingles from underneath. In winter, warm moist air from your house gets trapped, condensing into frost and mold. Our solution is full-vented aluminum soffit panels that allow your attic to "inhale" cool fresh air properly.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Our Complete Soffit Replacement Service Delivers */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">What Our Complete Soffit Replacement Service Delivers?</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Professional soffit solutions engineered for Toronto's extreme weather conditions.</p>

                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <Construction className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">1: Complete Tear-Off & Ventilation Planning</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Full soffit removal reveals rotten fascia boards, blocked rafter vents. Continuous vent strips planned for 50% net free ventilation area (Toronto code + extra capacity). Rotten fascia repaired before new soffits installed.
                            </p>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <LayoutDashboard className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">2: Professional Soffit Installation</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Aluminum or vinyl soffit panels with hidden fasteners (no visible screws). Vented panels every 16" provide maximum attic airflow. Proper fascia/soffit transition with metal flashing prevents water entry. Color-matched to siding/gutters.
                            </p>
                            <p className="text-sm text-[#FF9C45] font-semibold">
                                Bonus Services: Seamless gutter reinstallation, attic insulation evaluation, ice dam prevention package quote.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Premium Soffit Materials */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8 text-center">Our Premium Soffit Materials</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Aluminum Soffit – Most Popular (80% of Jobs)",
                                desc: "0.027 gauge seamless aluminum, continuous vent strips, 35-50 year lifespan. No rot, no paint, perfect ventilation.",
                                icon: Shield
                            },
                            {
                                title: "Vinyl Soffit – Budget Maintenance Free",
                                desc: "Heavy-duty 0.040 gauge PVC, interlocking panels, 30-45 year lifespan. No dents, no rot, good ventilation.",
                                icon: Award
                            }
                        ].map((material, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <material.icon className="h-6 w-6 text-[#FF9C45]" />
                                    <h3 className="font-bold text-lg">{material.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{material.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Complete Soffit Replacement Process</h2>
                    <div className="grid md:grid-cols-1 gap-8">
                        {[
                            {
                                step: "Day 0",
                                title: "FREE Professional Drone Inspection",
                                desc: "4K aerial thermal scan reveals moisture trapped behind soffits, ventilation blockages, rot patterns affecting fascia. Precise linear footage measurement + digital report emailed same day."
                            },
                            {
                                step: "Day 1",
                                title: "Complete System Removal & Fascia Repair",
                                desc: "Laser level verifies fascia straightness. Rotten fascia boards cut out, replaced with aluminum/PVC. Rafter block vents cleaned – wasp nests, debris, painted over vents removed completely. Ice & water shield extended to proper eaves coverage."
                            },
                            {
                                step: "Day 2",
                                title: "Precision Soffit Installation & Ventilation",
                                desc: "0.027 aluminum panels installed with hidden clips every 16 inches. Continuous vent strips every panel (50% net free area). Metal flashing transitions to fascia/gutters prevent water entry. Color-matched caulking all joints."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 bg-muted/30 p-6 rounded-lg border border-border">
                                <div className="text-4xl font-black text-[#FF9C45]/20 font-mono shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
                            { q: "How long does soffit installation take?", a: "Single story: 1 day. Two-story homes: 1.5-2 days. Weather dependent." },
                            { q: "Free inspection before quoting?", a: "FREE drone inspection standard $200. Reveals exact rot, ventilation issues before work starts." },
                            { q: "Do soffits affect ice dams?", a: "80% of ice dams caused by poor soffit ventilation. Proper continuous vents eliminate permanently." },
                            { q: "Mess during soffit replacement?", a: "Zero mess. Drop cloths everywhere. Magnetic boots. Continuous cleanup. Final magnet sweep." },
                            { q: "What warranty on new soffits?", a: "25-year Paradise workmanship + lifetime manufacturer warranty on aluminum panels. Transferable." },
                            { q: "Do gutters need fixing too?", a: "95% need new gutters during soffit work. We reinstall seamless gutters properly sloped." }
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
