import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye, Wrench, Hammer, Snowflake, Wind, Zap, Building, TreePine, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import richmondHillImage from "@/assets/locations/Richmond_Hill.png";

export default function RichmondHill() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Richmond Hill Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Richmond Hill Roofers<br />
                            Oak Ridges Specialists
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Looking for "roofing Richmond Hill"? We handle Oak Ridges, Jefferson, Bayview Hill, Mill Pond winter damage like ice dams, wind-blown shingles, flat roof leaks, and skylight failures. Free drone inspections. 24 years experience. 4.9★ reviews.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Oak Ridges mature trees drop branches in storms. Jefferson bungalows get massive ice dams. Bayview Hill two-stories lose shingles to 100km/h winds. Mill Pond commercial strips fight flat roof ponding. Richmond Hill Village sees frequent hail.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get Free Estimate <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
            <section className="pb-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="relative">
                        <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm">
                            <img src={richmondHillImage} alt="Richmond Hill Roofing Services" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">24+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">4.9★ Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">55-Min Response</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Our Richmond Hill roofing services include roof replacement, roof repair, eavestrough installation, flat roof repair, emergency roofing, and free drone inspections. We understand why Richmond Hill roofs need protection now and provide lasting solutions.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Replacement Richmond Hill</h2>
                            <p className="text-lg font-medium text-muted-foreground">$28K-$55K | 2-4 days | 40-year warranty</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Full 3-layer tear-off (building code compliant), Owens Corning Duration shingles (hail-resistant, 130mph wind), R60 attic insulation ($1,900 energy rebates), chimney flashing + skylight seals included.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Oak Ridges bungalow: Done in 2.3 days, Bayview Hill duplex: 4 days complete. No callbacks first winter guaranteed with our comprehensive installation process.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Eye className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Drone Roof Inspection ($400 Value)</h2>
                            <p className="text-lg font-medium text-muted-foreground">4K thermal imaging reveals problems 6-12 months before leaks show</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            4K thermal imaging reveals: Hidden chimney water trails, flat roof ponding zones, skylight rubber seal failures, ice dam heat patterns, squirrel chew marks. Finds problems 6-12 months BEFORE leaks show inside.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Advanced thermal technology detects moisture infiltration and structural issues invisible to ground-level inspections, preventing costly emergency repairs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Wrench className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Repair Richmond Hill</h2>
                            <p className="text-lg font-medium text-muted-foreground">Save 65% vs full replacement | 25-year warranty</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Common Repair Issues</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Wind-damaged/missing shingles</p>
                                <p>• Valley leaks + ridge cap repairs</p>
                                <p>• Raccoon/squirrel entry points</p>
                                <p>• Moss & algae treatment (north slopes)</p>
                                <p>• Storm damage restoration</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Cost-Effective Solutions</h3>
                            <p className="text-muted-foreground">
                                Professional repairs using premium materials with 25-year warranties. Save 65% compared to full replacement costs while ensuring long-lasting protection for your Richmond Hill home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Hammer className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough Installation Richmond Hill</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lifetime seamless aluminum | 98% debris-free</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            7-8" seamless gutters, heated downspouts (no ice dams), leaf guards + laser-measured slope, commercial-grade brackets every 14". Jefferson estates choose our copper half-round style.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Lifetime warranty on seamless construction with advanced leaf protection systems ensuring 98% debris-free performance year-round.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Building className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Flat Roof Repair Richmond Hill</h2>
                            <p className="text-lg font-medium text-muted-foreground">TPO, EPDM, Modified Bitumen | 40-year systems</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Commercial Solutions</h3>
                            <p className="text-muted-foreground">
                                Yonge Street businesses get same-day emergency patches. Professional TPO, EPDM, and Modified Bitumen systems designed for commercial applications.
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Long-Term Protection</h3>
                            <p className="text-muted-foreground">
                                40-year warranty systems with advanced drainage solutions, preventing ponding and extending roof life significantly beyond standard installations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Zap className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Emergency Roofing Richmond Hill</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response across all Richmond Hill neighborhoods</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            55 mins: Oak Ridges, Jefferson, Bayview Hill, Richmond Hill Village. 85 mins: Mill Pond, Gormley, Devonsleigh. Heavy-duty tarps + temporary seals included.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Last Richmond Hill hail storm: Protected 72 roofs from interior damage with our rapid emergency response and professional temporary protection systems.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <AlertTriangle className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Richmond Hill Roof Red Flags (Call Today)</h2>
                            <p className="text-lg font-medium text-muted-foreground">Don't wait if you notice these warning signs</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "Water Stains on Ceilings", icon: AlertTriangle, desc: "Brown or yellow ceiling stains indicate active leaks requiring immediate attention" },
                            { title: "Missing Shingles Post-Storm", icon: Wind, desc: "Shingles missing after storms expose underlayment to weather damage" },
                            { title: "Granules Clogging Gutters", icon: Wrench, desc: "Excessive granule accumulation indicates advanced shingle deterioration" },
                            { title: "Animals in Your Attic", icon: TreePine, desc: "Scratching or movement sounds indicate wildlife entry through roof damage" },
                            { title: "Ice Buildup Along Eaves", icon: Snowflake, desc: "Ice dam formation can cause significant structural and water damage" },
                            { title: "Visible Roof Sagging", icon: Home, desc: "Any visible sagging indicates serious structural issues requiring immediate inspection" }
                        ].map((item, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border">
                                <div className="flex items-center gap-3 mb-4">
                                    <item.icon className="h-6 w-6 text-[#FF9C45]" />
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Shield className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Richmond Hill Trusts Paradise Roofers?</h2>
                            <p className="text-lg font-medium text-muted-foreground">24+ years local roofing experience</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "24+ Years Experience", icon: Award, desc: "Local roofing experience serving Richmond Hill since 2005" },
                            { title: "4.9★ Google Reviews", icon: Star, desc: "600+ verified reviews from satisfied Richmond Hill customers" },
                            { title: "BBB A+ Perfect Record", icon: CheckCircle2, desc: "Perfect record with Better Business Bureau since 2005" },
                            { title: "Owens Corning Preferred", icon: Shield, desc: "Certified preferred contractor for premium Owens Corning systems" },
                            { title: "97% Insurance Approval", icon: Eye, desc: "97% insurance claim approval rate with thermal drone proof" },
                            { title: "No Callbacks Guaranteed", icon: Home, desc: "No callbacks first winter guaranteed on all installations" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-border">
                                <div className="flex items-center gap-3 mb-4">
                                    <item.icon className="h-6 w-6 text-[#FF9C45]" />
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Richmond Hill Neighborhood Response Times</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority response zones with guaranteed service times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">55-Minute Emergency Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Oak Ridges</span>
                                <span>• Jefferson</span>
                                <span>• Bayview Hill</span>
                                <span>• Richmond Hill Village</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Same Day Inspection Available</p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">85-Minute Standard Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Mill Pond</span>
                                <span>• Gormley</span>
                                <span>• Devonsleigh</span>
                                <span>• Langstaff</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Next Day Inspection Available</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-lg border border-border">
                        <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">Postal Codes Covered</h3>
                        <p className="text-muted-foreground">L4B, L4C, L4E, L4S - Complete Richmond Hill coverage</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">2026 Richmond Hill Roofing Costs & Insurance Claims</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-bold uppercase mb-6">Project Costs</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Bungalow Roof</span>
                                    <span className="text-[#FF9C45] font-bold">$28K-$38K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Two-Story Home</span>
                                    <span className="text-[#FF9C45] font-bold">$38K-$55K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Flat Roof (1,000sf)</span>
                                    <span className="text-[#FF9C45] font-bold">$22K-$32K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Roof Repairs</span>
                                    <span className="text-[#FF9C45] font-bold">$2K-$8K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Eavestroughs (avg home)</span>
                                    <span className="text-[#FF9C45] font-bold">$8K-$15K</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                Hail insurance claims? 97% approved with our thermal drone proof.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-bold uppercase mb-6">Insurance Claims? We Handle Everything</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Drone documentation (photos + thermal videos)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Meet insurance adjuster same day</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Fight for maximum payout (97% success rate)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Direct billing – zero upfront costs</span>
                                </div>
                                <div className="bg-[#F9F9F9] p-4 rounded-lg mt-4">
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Industry average:</strong> 60% approval rate<br />
                                        <strong>Paradise Roofers:</strong> 97% approval rate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Oak Ridges", "Jefferson", "Bayview Hill", "Richmond Hill Village",
                            "Mill Pond", "Gormley", "Devonsleigh", "Langstaff", 
                            "Richvale", "Crosby", "Elgin Mills", "Headford"
                        ].map((neighborhood, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg border border-border text-center">
                                <MapPin className="h-5 w-5 text-[#FF9C45] mx-auto mb-2" />
                                <span className="font-medium text-sm">{neighborhood}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactForm />
        </Layout>
    );
}