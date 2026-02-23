import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Home, HardHat, Crown, CheckCircle2, Box } from "lucide-react";
import { Link } from "react-router-dom";
import residentialRoofing from "@/assets/Home_page/ResidentialRoofingSolutions.webp";
import roofCoating from "@/assets/roof-coating.jpg"; // Placeholder
import metalRoof from "@/assets/metal-roof.jpg";

export default function ResidentialRoofing() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Home Roofing Experts</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Residential Roofing<br />
                            Solutions
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Your roof is 50% of your home's curb appeal and 100% of its defense. We install roofs that make neighbors jealous and keep families safe.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    From luxury asphalt to stunning metal, our residential systems are engineered for Toronto winters and backed by 50-year non-prorated warranties.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Free Roof Inspection <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={residentialRoofing} alt="Luxury Residential Roof" className="w-full h-full object-cover object-[center_20%]" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Most Trusted in GTA</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">CertainTeed Credentialed</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Star className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">5-Star Google Rated</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Roofing isn't just nailing shingles. It's a complex system of intake ventilation, vapor barriers, ice shields, flashings, and exhaust. If one piece is missing, the system fails. We treat every home like it's our mother's house. No nail guns set too deep, no shortcuts on the underlayment. Just honest, rock-solid craftsmanship that lets you sleep at night when the wind howls.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signs You Need Upgrade */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Our Material Options</h2>
                            <p className="text-lg font-medium text-muted-foreground">We install only the best brands in the business:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Architectural Shingles",
                                icon: Box,
                                points: [
                                    "GAF Timberline HDZ",
                                    "CertainTeed Landmark",
                                    "Dimensional laminate look"
                                ]
                            },
                            {
                                title: "2. Luxury Designer",
                                icon: Crown,
                                points: [
                                    "Looks like slate or shake",
                                    "Triple-layer thickness",
                                    "Premium aesthetic upgrade"
                                ]
                            },
                            {
                                title: "3. Metal Roofing",
                                icon: Shield,
                                points: [
                                    "Standing Seam (Hidden Fastener)",
                                    "Stone-Coated Steel",
                                    "Lasts 50-70 years"
                                ]
                            },
                            {
                                title: "4. Flat Roofing",
                                icon: HardHat,
                                points: [
                                    "2-Ply SBS Torch Down",
                                    "TPO or EPDM Membrane",
                                    "For porches and additions"
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Complete Home Protection</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">We don't just do the roof. We protect the whole envelope.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Roof Replacements", desc: "Full tear-off and replacement. We never do 'layovers' on old shingles." },
                            { title: "Skylight Installation", desc: "Adding natural light with leak-proof Velux skylights and sun tunnels." },
                            { title: "Chimney Flashing", desc: "Custom cutting metal flashing into the mortar for a permanent seal." },
                            { title: "Ventilation Upgrade", desc: "Adding ridge vents or turbines to lower attic temps and save AC costs." },
                            { title: "Plywood Replacement", desc: "Replacing rotten deck boards so nails have solid wood to bite into." },
                            { title: "Ice & Water Shield", desc: "Installing waterproof membrane 6ft up the eaves (double code requirement)." },
                            { title: "Drip Edge Install", desc: "Metal edge that kicks water away from fascia and into gutters." },
                            { title: "Cleanup Magnet", desc: "Running a magnetic sweeper to pick up every stray nail from your lawn." }
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">The Homeowner Experience</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Safety & Setup",
                                time: "7:00 AM",
                                desc: "We arrive. Bins are placed on wood planks to protect driveway. Tarp nets catch debris."
                            },
                            {
                                step: "02",
                                title: "The Tear Off",
                                time: "Morning",
                                desc: "Old shingles are removed. We inspect the naked wood deck for rot and replace bad wood."
                            },
                            {
                                step: "03",
                                title: "Waterproofing",
                                time: "Mid-Day",
                                desc: "Ice & Water shield goes on eaves and valleys. Synthetic underlayment covers the rest."
                            },
                            {
                                step: "04",
                                title: "Shingling & Cleanup",
                                time: "Afternoon",
                                desc: "New shingles nailed down. Flashing sealed. We blow off decks and magnetic sweep the grass."
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Scarborough Bungalow",
                                img: residentialRoofing,
                                problem: "20-year old 3-tab shingles meant for trash",
                                result: "GAF Timberline HDZ in Pewter Grey. 15 Bundles."
                            },
                            {
                                title: "Markham Estate",
                                img: metalRoof,
                                problem: "Complex roof lines with leaking valleys",
                                result: "Open metal valleys. CertainTeed Landmark Pro. High-End Finish."
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Homeowner FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "How much does a new roof cost?", a: "An average Toronto home (2000 sq ft) typically costs between $6,000 and $10,000 depending on pitch, layers, and material quality." },
                            { q: "How long does it take?", a: "90% of our residential jobs are completed in 1 day. Large complex roofs may take 2 days." },
                            { q: "Do you offer financing?", a: "Yes, we have plans starting at 0% interest for 12 months, or low monthly payments over 5 years." },
                            { q: "Is the warranty transferrable?", a: "Yes. GAF and CertainTeed warranties can be transferred to the new owner if you sell your home." },
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
