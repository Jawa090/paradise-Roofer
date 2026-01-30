import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Home, Hammer, Trash2, Layers, Umbrella, DollarSign, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import completedRoof from "@/assets/completed-roof.jpg";
import roofInspection from "@/assets/roof-inspection.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import roofingBanner from "@/assets/roofers-banner.jpg";

export default function RoofReplacement() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Roof Replacement Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Complete Roof Replacement<br />
                            in Toronto & The GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Is your roof over 15 years old? Seeing curling shingles or granules in your gutters? It might be time to stop patching and start protecting.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We don't just "re-roof"—we install complete roofing systems engineered for Toronto winters. With 50-year material warranties and our leak-proof guarantee, a Paradise roof is the last roof you'll ever need.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get a Free Estimate <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={completedRoof} alt="Roof Replacement Project" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">50-Year Material Warranty</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">GAF Master Elite Certified</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Star className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">10-Year Labor Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            A roof replacement is a major investment, and the quality of installation matters just as much as the materials. Many Toronto roofers cut corners with cheap underlayment or generic flashing. We do it differently. We strip your roof to the deck, replace rotten wood, install 6-foot ice & water shields (double the code requirement), and use premium high-wind shingles to ensure your home stays dry through the harshest Canadian storms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signs You Need Replacement */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Signs You Need A New Roof</h2>
                            <p className="text-lg font-medium text-muted-foreground">If you see these signs, your roof may be past the point of repair:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Curling & Buckling Shingles",
                                icon: Layers,
                                points: [
                                    "Shingle edges verify upward",
                                    "Indicates older shingles drying out",
                                    "Risk: Wind will blow them off easily"
                                ]
                            },
                            {
                                title: "2. Heavy Granule Loss",
                                icon: Trash2,
                                points: [
                                    "Granules in gutters or downspouts",
                                    "Dark spots on shingles",
                                    "Risk: UV rays destroy asphalt core"
                                ]
                            },
                            {
                                title: "3. Daylight in Attic",
                                icon: Calendar,
                                points: [
                                    "Seeing light through roof boards",
                                    "Moisture/mold on insulation",
                                    "Risk: Active leaks & rotten deck"
                                ]
                            },
                            {
                                title: "4. Sagging Roof Deck",
                                icon: Home,
                                points: [
                                    "Depressions in the roof line",
                                    "Spongy feel when walking on it",
                                    "Risk: Structural failure impending"
                                ]
                            },
                            {
                                title: "5. Age Over 20 Years",
                                icon: Calendar,
                                points: [
                                    "Most 3-tab shingles last 15-20 yrs",
                                    "Sealant strips fail after decades",
                                    "Risk: Sudden failure in storms"
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

            {/* The Paradise Standard Grid */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">The Paradise Replacement Standard</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">We exceed Ontario Building Code requirements on every single install. Here is what makes our roofs superior:</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Complete Tear-Off", desc: "We never layer over old roofs. We strip down to the wood deck to inspect for rot and ensure a perfect nailing surface." },
                            { title: "6ft Ice & Water Shield", desc: "Code only requires 3ft. We install 6ft to prevent ice dams from backing water up into your eaves and walls." },
                            { title: "Synthetic Underlayment", desc: "No old-school felt paper. We use breathable, tear-proof synthetic underlayment for secondary water protection." },
                            { title: "Premium Drip Edge", desc: "Aluminum drip edge installed on all rakes and eaves to guide water directly into gutters, preventing fascia rot." },
                            { title: "Starter Shingle Row", desc: "Dedicated starter strips sealed at the eaves to prevent wind uplift (many roofers skip this)." },
                            { title: "Optimized Ventilation", desc: "Calculation of Net Free Area to install the perfect mix of ridge vents and soffit vents for longevity." },
                            { title: "High-Wind Shingles", desc: "Installation of GAF Timberline or Owens Corning Duration shingles rated for 130mph+ winds." },
                            { title: "Magnet Clean Sweep", desc: "We run industrial magnets over your lawn, driveway, and gardens to ensure 100% nail cleanup." }
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our 4-Step Replacement Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Consultation & Material Selection",
                                time: "Day 1",
                                desc: "We help you choose the right shingle color and profile. We verify ventilation needs and provide a fixed-price quote."
                            },
                            {
                                step: "02",
                                title: "Property Protection & Tear Off",
                                time: "Day 2 (Morning)",
                                desc: "We tarp your landscaping, driveway, and pool. We remove old shingles and haul them away immediately in our bin."
                            },
                            {
                                step: "03",
                                title: "System Installation",
                                time: "Day 2 (Afternoon)",
                                desc: "Installation of ice shield, underlayment, drip edge, flashings, and new shingles. Ridge vents installed last."
                            },
                            {
                                step: "04",
                                title: "Cleanup & Final Inspection",
                                time: "Day 2 (Evening)",
                                desc: "Magnetic sweep of entire property. Blower cleanup of gutters. Final drone photos and warranty registration."
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Recent Toronto Replacements</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Mississauga Executive Home",
                                img: completedRoof,
                                problem: "25-year old roof with curling shingles",
                                result: "GAF Timberline HDZ in Charcoal. 50-year warranty."
                            },
                            {
                                title: "East York Bungalow",
                                img: roofingBanner,
                                problem: "Severe ice dams and attic mold",
                                result: "New ventilation system + full ice shield coverage."
                            },
                            {
                                title: "Vaughan Estate",
                                img: metalRoof,
                                problem: "Wind damage on high-pitch roof",
                                result: "Premium Designer Shingles, high-profile ridge cap."
                            },
                            {
                                title: "Scarborough Semi-Detached",
                                img: roofInspection,
                                problem: "Rotten deck from years of leaks",
                                result: "Valid deck replacement + economy shingle package."
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
                                <DollarSign className="h-5 w-5 text-[#FF9C45]" />
                                Financing Options
                            </h3>
                            <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                                <span>• 0% Interest for 12 Months Available</span>
                                <span>• Low Monthly Payments starting at $99/mo</span>
                                <span>• No Payments for 6 Months O.A.C.</span>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "How much does a new roof cost in Toronto?", a: "Average ranges from $6,000 (small semi) to $15,000+ (large detached). Depends on pitch, access, and material." },
                                { q: "How long does installation take?", a: "Most residential roofs are completed in 1-2 days. We ensure your property is watertight every night." },
                                { q: "What warranties do you offer?", a: "We offer 50-year non-prorated material warranties (GAF/Owens Corning) and a 10-year workmanship guarantee." },
                                { q: "Do I need to be home?", a: "No. We need access to an exterior power outlet and your driveway clear, but you don't need to be present." },
                                { q: "Do you replace wood if it's rotten?", a: "Yes. We include up to 3 sheets of plywood in our quotes. Additional wood is billed at a fixed per-sheet rate." },
                                { q: "Can you install over my old shingles?", a: "We strongly recommend against it. Valid warranties require a clean deck. We always do a full tear-off." },
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
