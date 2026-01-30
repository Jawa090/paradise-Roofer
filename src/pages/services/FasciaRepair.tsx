import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Component, Home, Search, Hammer, CheckCircle2, AlertTriangle, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import fasciaImage from "@/assets/roof-coating.jpg"; // Using coating as placeholder for now or maybe one of the other images
import completedRoof from "@/assets/completed-roof.jpg";

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
                            <span className="text-sm font-bold uppercase tracking-wider">Exterior Woodwork</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Fascia & Soffit Repair<br />
                            Specialists
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Your fascia boards do more than just look good—they hold your gutters up. Rotten wood leads to sagging gutters, water damage, and pest infestations.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We replace rotten wood and install heavy-gauge aluminum capping that never needs painting. Protect your roof's edge with a maintenance-free finish.
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
                                <Component className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Custom Aluminum Bending</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Rot-Proof Guarantee</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Perfect Color Match</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Water overflowing from clogged gutters often splashes back onto the fascia board. If it is painted wood, it eventually rots. Once the wood softens, gutter spikes pull out, and your eavestroughs begin to fall. Our solution is to remove the rot, install structural spruce sub-fascia, and cap it with custom-bent aluminum that matches your home's aesthetic and sheds water permanently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signs You Need Upgrade */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Search className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Signs of Fascia Rot</h2>
                            <p className="text-lg font-medium text-muted-foreground">Check your roofline for these warning signs:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Peeling Paint",
                                icon: Layers,
                                points: [
                                    "Flaking paint on wood trim",
                                    "Discolored or grey wood",
                                    "Sign of moisture saturation"
                                ]
                            },
                            {
                                title: "2. Detached Gutters",
                                icon: AlertTriangle,
                                points: [
                                    "Gutters pulling away from house",
                                    "Spikes coming loose",
                                    "Wood too soft to hold screws"
                                ]
                            },
                            {
                                title: "3. Pest Entry",
                                icon: Home,
                                points: [
                                    "Holes in wood",
                                    "Squirrels/Raccoons in attic",
                                    "Wasps nesting in gaps"
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Our Aluminum Services</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">We use Gentek and Kaycan aluminum for a premium, long-lasting finish.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Wood Replacement", desc: "Removing verify rotten fascia and installing fresh spruce structural boards." },
                            { title: "Aluminum Capping", desc: "Custom bending heavy gauge aluminum on-site to wrap your wood fascia perfectly." },
                            { title: "Soffit Ventilation", desc: "Replacing blocked plywood soffits with vented aluminum panels for attic airflow." },
                            { title: "Drip Edge Install", desc: "Adding roof-edge metal to ensure water drips into the gutter, not behind the fascia." },
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Installation Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Inspection",
                                time: "On-Site",
                                desc: "We check if the wood is structurally sound or needs replacement."
                            },
                            {
                                step: "02",
                                title: "Gutters Down",
                                time: "Construction",
                                desc: "We carefully remove existing gutters to access the fascia board behind them."
                            },
                            {
                                step: "03",
                                title: "Wood Repair & Wrap",
                                time: "Construction",
                                desc: "Rotten wood is replaced. Aluminum is bent and installed with colour-matched nails."
                            },
                            {
                                step: "04",
                                title: "Re-Install",
                                time: "Completion",
                                desc: "Gutters are re-hung (or replaced) with hidden hangers screwed into fresh wood."
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Before & After</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Scarborough Side-Split",
                                img: completedRoof,
                                problem: "Raccoon hole in rotten fascia corner",
                                result: "Wood replaced, steel mesh installed, capped in black aluminum."
                            },
                            {
                                title: "Markham Heritage Home",
                                img: fasciaImage,
                                problem: "Peeling paint every 2 years",
                                result: "Entire trim system wrapped in white woodgrain aluminum."
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Common Questions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "Does aluminum capping rust?", a: "No, aluminum does not rust. It is the perfect material for Canadian weather." },
                            { q: "Can you match my window color?", a: "Yes, we carry over 30 colors including standard white, brown, black, sandalwood, and grey." },
                            { q: "Do I have to change my gutters too?", a: "Not necessarily. If your gutters are in good shape, we can detach them, do the fascia work, and reinstall them." },
                            { q: "Is wood better than aluminum?", a: "Structurally, wood is needed for strength. But for the exterior surface, aluminum is superior because it never needs painting." },
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
