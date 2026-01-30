import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Wind, Thermometer, Construction, Fan, CheckCircle2, Home, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import roofInspection from "@/assets/roof-inspection.jpg";
import roofCoating from "@/assets/roof-coating.jpg"; // Placeholder
import completedRoof from "@/assets/completed-roof.jpg";

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
                            <span className="text-sm font-bold uppercase tracking-wider">Attic Ventilation Systems</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Soffit Repair<br />
                            & Replacement
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Your attic needs to breathe. Blocked or painted-over soffits trap heat and moisture, leading to mold, ice dams, and higher energy bills.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We install modern vented aluminum and vinyl soffit systems that maximize airflow while keeping pests out. Upgrade your intake ventilation today.
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
                                <Wind className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Increased Airflow</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Pest Resistant</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <LayoutDashboard className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Maintenance Free</span>
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

            {/* Signs You Need Upgrade */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Thermometer className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Signs of Blocked Soffits</h2>
                            <p className="text-lg font-medium text-muted-foreground">Is your attic suffocating? Look for these signs:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Ice Dams",
                                icon: Thermometer,
                                points: [
                                    "Common sign of heat loss",
                                    "Attic is too warm",
                                    "Need more cold air intake"
                                ]
                            },
                            {
                                title: "2. Peeling Paint",
                                icon: LayoutDashboard,
                                points: [
                                    "Paint peeling on overhangs",
                                    "Moisture trapped in wood",
                                    "Rotting look"
                                ]
                            },
                            {
                                title: "3. High AC Bills",
                                icon: Wind,
                                points: [
                                    "Air conditioner runs nonstop",
                                    "Upstairs rooms are hot",
                                    "Heat radiating from ceiling"
                                ]
                            },
                            {
                                title: "4. Mold Smell",
                                icon: Home,
                                points: [
                                    "Musty odor in upper floor",
                                    "Black spots on attic deck",
                                    "Rust on roofing nails"
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Soffit Ventilation Services</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">We increase your Net Free Area (NFA) for optimal attic health.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Aluminum Vented Soffit", desc: "Perforated aluminum panels installed over open rafter tails for maximum airflow." },
                            { title: "Vinyl Soffit Installation", desc: "Durable, dent-resistant vinyl options in a variety of UV-resistant colors." },
                            { title: "Intake Vent Installation", desc: "Adding new intake vents near the gutter line if overhangs are too small." },
                            { title: "Rafter Baffle Install", desc: "Ensuring insulation doesn't block the air path from soffit to ridge." },
                            { title: "Rotten Wood Removal", desc: "Removing old rotten plywood soffits before installing new panels." },
                            { title: "Fascia Coordination", desc: "Matching soffit colors perfectly with fascia capping and eavestroughs." },
                            { title: "Pot Light Integration", desc: "Cutting clean, safe openings for exterior recessed lighting." },
                            { title: "Animal Barrier Mesh", desc: "Adding steel mesh behind vents to prevent squirrels and raccoons entry." }
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Ventilation Upgrade Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Airflow Calculation",
                                time: "Inspection",
                                desc: "We identify your attic square footage and calculate required intake vs exhaust ventilation."
                            },
                            {
                                step: "02",
                                title: "Opening the Airway",
                                time: "Prep Work",
                                desc: "We cut holes in existing plywood soffits or remove them entirely to let air in."
                            },
                            {
                                step: "03",
                                title: "Panel Installation",
                                time: "Install",
                                desc: "New vented panels are cut to size and secured into channel runners for a clean look."
                            },
                            {
                                step: "04",
                                title: "Baffle Check",
                                time: "Interior Check",
                                desc: "We check inside the attic to ensure insulation isn't blocking the new airflow path."
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Results</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Brampton Subdivision",
                                img: completedRoof,
                                problem: "Builder installed solid wood soffits with 0 vents",
                                result: "Cut continuous strip vents. Installed perforated aluminum. Attic temp dropped 20 degrees."
                            },
                            {
                                title: "North York Reno",
                                img: roofInspection,
                                problem: "Raccoons pushed up weak vinyl soffit",
                                result: "Heavy gauge aluminum screwed into new framing. Animal proof."
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Soffit FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "What is soffit?", a: "Soffit is the material covering the underside of your roof overhang. It bridges the gap between your home's exterior wall and the roofline." },
                            { q: "Why does it need holes?", a: "Cold air enters through soffit holes (intake), rises as it warms, and exits the roof vents (exhaust). This cycle keeps your roof cold in winter to stop ice dams." },
                            { q: "Can critters get through the holes?", a: "Standard perforated soffit has tiny holes too small for insects or rodents. It's much safer than open vents." },
                            { q: "Does aluminum fade?", a: "Today's baked-on enamel aluminum finishes are incredibly resistant to UV fading and chalking." },
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
