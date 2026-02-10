import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Shield, Award, Star, MapPin, Home, Hammer, Trash2, Layers, Umbrella, DollarSign, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import completedRoof from "@/assets/completed-roof.jpg";

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
                            in Toronto & GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Is your 15+ year old roof failing? We provide professional complete roof replacement for Toronto homes and businesses, handling everything from full tear-off to premium new installation with proper ice dam protection designed specifically for harsh Canadian winters.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Whether you need durable asphalt shingles, our licensed Paradise Roofers team delivers exceptional results.
                                </p>
                                <p className="text-lg font-bold text-[#FF9C45]">
                                    Every replacement starts with FREE drone inspection ($200 value) showing exactly what condition your deck and underlayment are in before we begin. Fast 1-3 day installations, 10-year workmanship warranties, zero mess guarantee, proudly serving Toronto, Mississauga, Brampton, Milton, Oakville and entire GTA region.
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
                                <span className="font-bold text-sm uppercase tracking-wide">10-Year Workmanship Warranty</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">FREE Drone Inspection</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Star className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Zero Mess Guarantee</span>
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

            {/* When It's Time to Replace */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">When It's Time to Replace Your Toronto Roof – Don't Wait</h2>
                            <p className="text-lg font-medium text-muted-foreground">Toronto roofs face brutal conditions that shorten lifespans significantly. Here are the 7 clear signs your roof needs complete replacement rather than endless repairs:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Age 15+ years",
                                icon: Calendar,
                                points: [
                                    "Even well-maintained asphalt shingles reach end of engineered life",
                                    "Granules wash completely away, flexible oils evaporate",
                                    "Becoming brittle and crack-prone"
                                ]
                            },
                            {
                                title: "Granules filling your gutters",
                                icon: Trash2,
                                points: [
                                    "Heavy granule loss indicates UV degradation through entire shingle mat",
                                    "More granules lost = faster leak progression",
                                    "Clear sign of advanced deterioration"
                                ]
                            },
                            {
                                title: "Interior ceiling stains or water marks",
                                icon: Umbrella,
                                points: [
                                    "Leaks already penetrated attic reaching interior surfaces",
                                    "Patching won't stop accelerating damage",
                                    "Structural damage may be occurring"
                                ]
                            },
                            {
                                title: "Skyrocketing hydro bills",
                                icon: DollarSign,
                                points: [
                                    "Poor attic insulation + ice dams force constant heating",
                                    "New roof + insulation upgrade cuts bills 25-35%",
                                    "Energy efficiency dramatically improved"
                                ]
                            },
                            {
                                title: "Missing or curling shingles",
                                icon: Layers,
                                points: [
                                    "Wind damage worsens exponentially",
                                    "Each storm loses more protection exposing underlayment",
                                    "Cascading failure pattern"
                                ]
                            },
                            {
                                title: "Annual ice dams",
                                icon: Home,
                                points: [
                                    "Missing ice/water shield + poor ventilation guarantees winter flooding",
                                    "Proper replacement eliminates permanently",
                                    "Prevents costly interior damage"
                                ]
                            },
                            {
                                title: "Professional inspection recommends replacement",
                                icon: CheckCircle2,
                                points: [
                                    "Our drone analysis reveals plywood deck rot, failed underlayment",
                                    "40%+ shingle damage = replace immediately",
                                    "Smart math: $25K new roof today vs $35K emergency replacement + $15K interior repairs = $25K savings replacing proactively"
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

            {/* Complete Service Delivery */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">What Our Complete Roof Replacement Service Delivers</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Professional roof replacement engineered for Toronto's extreme weather conditions.</p>

                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <Trash2 className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">1: Complete Tear-Off & Deck Restoration</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Full dumpster service hauls 3-5 tons old shingles offsite (never your driveway). Every plywood sheet inspected – rotted sections cut out, sistered with marine-grade plywood. Ice & water shield installed full 42" eaves coverage PLUS all valleys, penetrations (Toronto code + extra protection).
                            </p>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <Layers className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">2: Professional Underlayment & Shingle Installation</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Synthetic underlayment entire roof surface (not cheap asphalt felt). 6-nail fastening pattern meets 160km/h Toronto wind code. Proper starter strip installation prevents wind-driven rain entry. Architectural-grade shingles with impact resistance, algae protection, 40-year lifespan.
                            </p>
                        </div>

                        <div className="bg-muted/30 p-8 rounded-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <Hammer className="h-8 w-8 text-[#FF9C45]" />
                                <h3 className="font-bold text-xl">3: Precision Flashing & Final Details</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Step flashing rebuilt around Vents, skylights using color-matched metal. New valley liners double thickness prevent cross-flow leaks. Complete fascia inspection – rotten boards replaced before gutters installed.
                            </p>
                            <p className="text-sm text-[#FF9C45] font-semibold">
                                Bonus Services Included: Free attic insulation evaluation, soffit ventilation assessment, seamless gutter quote, 10-year transferable warranty registration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Materials */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8 text-center">Our Premium Roof Replacement Materials</h2>
                    <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
                        <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <Home className="h-6 w-6 text-[#FF9C45]" />
                                <h3 className="font-bold text-lg">Asphalt Architectural Shingles</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">GAF Timberline HDZ 50 years lifespan, Class 4 impact rating (hail resistant), StainGuard algae protection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Complete Roof Replacement Process</h2>
                    <div className="grid md:grid-cols-1 gap-8">
                        {[
                            {
                                step: "01",
                                title: "FREE Professional Drone Inspection",
                                desc: "FAA-certified pilot captures 4K aerial imagery, thermal moisture scan, precise square footage measurements. Same-day digital report reveals deck condition, ice shield presence, ventilation issues before work begins."
                            },
                            {
                                step: "02",
                                title: "Complete System Tear-Off & Deck Restoration",
                                desc: "Street-placed dumpster eliminates driveway damage. Full tear-off to plywood deck – every sheet inspected. Rotten plywood cut out, replaced with exterior-grade marine plywood. Ice & water shield installed all eaves (42\" minimum), valleys, skylights, chimneys."
                            },
                            {
                                step: "03",
                                title: "Precision Underlayment & Main Field Installation",
                                desc: "Synthetic underlayment entire surface (3x stronger than felt paper). 6-nail fastening pattern every shingle (Toronto 160km/h wind code). Architectural starter strips, metal drip edge, proper valley construction. Fascia boards replaced before final layers."
                            },
                            {
                                step: "04",
                                title: "Flashing Perfection & Quality Control",
                                desc: "Step flashing rebuilt Vents/skylights using color-matched aluminum. Double valley liners prevent cross-flow. Metal ridge caps sealed permanently. Final hose testing verifies zero leaks. Magnetic boot sweep collects every nail."
                            },
                            {
                                step: "05",
                                title: "Seamless Gutter Integration & Warranty Walkthrough",
                                desc: "6\" seamless aluminum gutters properly sloped (1/4\" per 10ft). Attic insulation evaluation included. Joint homeowner walkthrough verifies perfection. 10-year warranty paperwork completed + activated."
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
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">FAQs</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "How much does roof replacement cost in Toronto?", a: "Average 2,000 sq ft home: $18K-$32K installed. Asphalt shingles $450-650/square. Metal $900-1,400/square. Factors: pitch, layers, deck repairs needed." },
                                { q: "How long does professional installation take?", a: "Asphalt shingles 1-3 days. Metal roofing 3-5 days. Tile 5-7 days. Weather dependent. Commercial flat roofs 5-10 days." },
                                { q: "Do you offer free roof inspections before replacement?", a: "Yes – FREE Drone inspection standard $200. Reveals exact deck condition, ice shield status, ventilation issues before quoting." },
                                { q: "Will insurance cover my roof replacement?", a: "Paradise roofers assist you for the insurance claim process under the STORM CARE PROGRAM, 95% success rate. We provide drone documentation, Xactimate estimates, speak directly to adjusters. Most wind/hail claims approved." },
                                { q: "Is roof replacement messy for my property?", a: "Zero mess guarantee. Dumpster positioned street-side. Magnetic boots on crews. Continuous magnet sweeps. Final pressure wash + yard magnet sweeps before leaving." },
                                { q: "What warranties come with new roof replacement?", a: "10 years Paradise workmanship warranty + lifetime manufacturer material warranty (pro-rated after year 10). Fully transferable boosts resale value." },
                                { q: "Do you handle fascia, soffits, and gutters too?", a: "Complete exterior packages available. Roof replacement + fascia/soffit/gutter/insulation – one trusted crew handles everything seamlessly." },
                                { q: "Are installations Toronto Building Code compliant?", a: "100% compliant. 160km/h wind nailing, 42\" ice barriers, proper flashing specifications per Ontario Building Code roofing standards." }
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
