import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Thermometer, Wind, DollarSign, Home, CheckCircle2, AlertTriangle, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import roofCoating from "@/assets/roof-coating.jpg";
import roofInspection from "@/assets/roof-inspection.jpg";
import completedRoof from "@/assets/completed-roof.jpg";

export default function AtticInsulation() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Attic Insulation Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Attic Insulation<br />
                            & Ventilation Upgrades
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Stop heating the neighborhood. If your home has uneven temperatures, high energy bills, or giant icicles in winter, you likely have an attic insulation problem.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We upgrade Toronto homes to R60 standards, preventing heat loss and stopping ice dams permanently. Save up to 25% on your utility bills this year.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get Free Assessment <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofCoating} alt="Attic Insulation" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Thermometer className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">R-60 Upgrade Standard</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <DollarSign className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Eligible for Rebates</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Snowflake className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Stops Ice Dams</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Most older Toronto homes have R12 to R20 insulation (3-5 inches), which is woefully inadequate for our climate. This causes heat to escape into your attic, melting snow on your roof which then refreezes at the eaves as destructive ice dams. Our comprehensive attic tune-up includes air sealing, baffle installation for airflow, and top-up with premium fiberglass or cellulose to R60 depth (22 inches+).
                        </p>
                    </div>
                </div>
            </section>

            {/* Signs You Need Upgrade */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <AlertTriangle className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Signs of Poor Insulation</h2>
                            <p className="text-lg font-medium text-muted-foreground">Is your attic working against you? Look for these symptoms:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Ice Dams",
                                icon: Snowflake,
                                points: [
                                    "Thick ice at roof edges",
                                    "Icicles hanging from gutters",
                                    "Water leaking behind walls"
                                ]
                            },
                            {
                                title: "2. Uneven Rooms",
                                icon: Thermometer,
                                points: [
                                    "Upstairs is boiling in summer",
                                    "Freezing cold bedrooms in winter",
                                    "Furnace runs constantly"
                                ]
                            },
                            {
                                title: "3. High Energy Bills",
                                icon: DollarSign,
                                points: [
                                    "Steadily increasing heating costs",
                                    "AC working overtime",
                                    "Drafty ceilings"
                                ]
                            },
                            {
                                title: "4. Roof Snow Melt",
                                icon: Home,
                                points: [
                                    "Patterned snow melt on roof",
                                    "Bare shingles while neighbors represent snow",
                                    "Sign of heat escaping"
                                ]
                            },
                            {
                                title: "5. Mold in Attic",
                                icon: AlertTriangle,
                                points: [
                                    "Black spots on plywood deck",
                                    "Musty smell upstairs",
                                    "Condensation on nails"
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Complete Attic Services</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">We do more than just blow in fluff. We seal the envelope of your home.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Blown-in Insulation", desc: "Top-up with premium Owens Corning fiberglass or cellulose to achieve R60 thermal resistance." },
                            { title: "Baffle Installation", desc: "We install rafter baffles at every soffit vent to ensure fresh air intake is never blocked by insulation." },
                            { title: "Air Sealing", desc: "We find and foam-seal gaps around pot lights, plumbing stacks, and electrical wires preventing heat loss." },
                            { title: "Hatch Weatherstripping", desc: "We build a localized dam box around your access hatch and insulate the lid to stop drafts." },
                            { title: "Old Insulation Removal", desc: "Safe vacuum removal of old, animal-contaminated, or vermiculite insulation." },
                            { title: "Mold Remediation", desc: "Treatment of mold on attic sheathing caused by previous moisture issues." },
                            { title: "Bathroom Fan Venting", desc: "Replacing cheap flex hoses with insulated rigid ducting vented properly through the roof." },
                            { title: "Solar Fan Upgrade", desc: "Installation of solar-powered attic vents to actively pull heat out in summer." }
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Upgrade Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Attic Inspection",
                                time: "30 Minutes",
                                desc: "We measure current depth, check for mold, and inspect baffles/ventilation intake."
                            },
                            {
                                step: "02",
                                title: "Prep & Seal",
                                time: "1-2 Hours",
                                desc: "Hose setup. We install baffles, seal gaps, and clear debris. Protective runners laid in your home."
                            },
                            {
                                step: "03",
                                title: "Machine Blow-In",
                                time: "1-2 Hours",
                                desc: "Truck-mounted system blows fresh insulation to precise R60 depth (approx 22 inches)."
                            },
                            {
                                step: "04",
                                title: "Clean Up & Signoff",
                                time: "30 Minutes",
                                desc: "We vacuum the hatch area. You inspect the depth rulers. Immediate difference in comfort."
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Insulation Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "North York 2-Story",
                                img: completedRoof,
                                problem: "$400/mo gas bills & freezing master bedroom",
                                result: "Upgraded R12 to R60. Bedroom now warm, bills down 20%."
                            },
                            {
                                title: "Etobicoke Leaky Attic",
                                img: roofInspection,
                                problem: "Ice dams causing leaks every Feb",
                                result: "Proper air sealing + baffles. Zero ice dams this winter."
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

            {/* Coverage & FAQs */}
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl space-y-20">

                    {/* Coverage */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                Service Availability
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
                                <DollarSign className="h-5 w-5 text-[#FF9C45]" />
                                Government Rebates
                            </h3>
                            <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                                <span>• We help document R-Value upgrades</span>
                                <span>• Eligible for Enbridge Home Efficiency Rebates (Program dependent)</span>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "How messy is the process?", a: "Very clean. The machine stays in the truck. We run a hose through your front door or window. We use drop cloths and vacuum everything before leaving." },
                                { q: "Fiberglass or Cellulose?", a: "Both achieve R60. Cellulose settles more but is denser/quieter. Ultraviolet fiberglass is dust-free and lighter. We install both." },
                                { q: "Can you just add on top of old insulation?", a: "Yes, as long as the old insulation isn't wet, moldy, or full of rodent droppings. It saves money to layer it." },
                                { q: "How long does it take?", a: "A typical 1500 sq ft attic takes about 2-3 hours from start to finish." },
                                { q: "Will this help in summer too?", a: "Yes! It prevents attic heat (which can reach 150°F) from radiating down into your bedrooms, helping your AC." },
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
