import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye, Wrench, Hammer, Snowflake, Wind, Zap, Building, TreePine, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import auroraImage from "@/assets/locations/Aurora.png";

export default function Aurora() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Aurora Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Aurora Roofers<br />
                            Heritage Town Experts
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Need "roofing Aurora" fast? We cover Aurora Heights, Bayview Hill, Aurora Village, Petch with ice dam removal, wind damage repairs, flat roof fixes, skylight leaks. Free drone inspections. 24 years experience. 4.9★ reviews.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Aurora Heights trees drop branches in 100km/h winds. Bayview Hill bungalows get huge ice dams. Aurora Village two-stories lose shingles. Petch commercial fights flat roof ponding. Lakeshore sees summer hail storms.
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
                            <img src={auroraImage} alt="Aurora Roofing Services" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">24+ Years Aurora</span>
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
                            Our Aurora roofing services include roof replacement, roof repair, eavestrough installation, flat roof repair, emergency roofing, and free drone inspections. We understand why Aurora roofs take a beating and provide lasting solutions.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Replacement Aurora</h2>
                            <p className="text-lg font-medium text-muted-foreground">$28K-$55K | 2-4 days | 40-year warranty</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Full 3-layer tear-off (Ontario code compliant), Owens Corning Duration shingles (hail-proof, 130mph wind), R60 attic insulation ($1,900 rebates), chimney flashing + skylight seals included.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Aurora Heights bungalow: 2.3 days complete, Bayview Hill duplex: 4 days total. Zero callbacks first winter guaranteed with our comprehensive installation process.
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
                            <p className="text-lg font-medium text-muted-foreground">4K thermal drone finds damage 6-12 months before interior leaks</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our 4K thermal drone spots: Hidden chimney leaks, flat roof ponding areas, skylight seal failures, ice dam hot spots, animal entry chew marks. Finds damage 6-12 months BEFORE interior leaks.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Advanced thermal imaging technology reveals moisture infiltration and structural issues invisible to ground-level inspections, preventing costly emergency repairs.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Repair Aurora</h2>
                            <p className="text-lg font-medium text-muted-foreground">Save 65% vs replacement | 25-year warranty</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Common Repair Issues</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Wind-stripped shingles</p>
                                <p>• Valley leaks + ridge repairs</p>
                                <p>• Raccoon/squirrel damage</p>
                                <p>• Moss treatment (north-facing slopes)</p>
                                <p>• Storm damage restoration</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Cost-Effective Solutions</h3>
                            <p className="text-muted-foreground">
                                Professional repairs using premium materials with 25-year warranties. Save 65% compared to full replacement costs while ensuring long-lasting protection for your Aurora home.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough Installation Aurora</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lifetime seamless aluminum | 98% leaf-free</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            7-8" seamless gutters, heated downspouts (ice-free), leaf guards + laser slope, heavy brackets every 14". Aurora Village estates love copper half-rounds.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Flat Roof Repair Aurora</h2>
                            <p className="text-lg font-medium text-muted-foreground">TPO/EPDM systems | 40-year warranty</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Commercial Solutions</h3>
                            <p className="text-muted-foreground">
                                Yonge Street stores get same-day leak stops. Professional TPO and EPDM systems designed for commercial applications with superior durability.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Emergency Roofing Aurora</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response across all Aurora neighborhoods</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            55 mins: Aurora Heights, Bayview Hill, Aurora Village, Petch. 85 mins: Lakeshore, Rural Aurora, Cedar Valley. Tarps + temporary seals included FREE.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Last Aurora hail storm: Protected 70 roofs from water damage with our rapid emergency response and professional temporary protection systems.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Aurora Roof Warning Signs (Call Now)</h2>
                            <p className="text-lg font-medium text-muted-foreground">Act fast if you see these warning signs</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "Ceiling Water Stains", icon: AlertTriangle, desc: "Brown or yellow ceiling stains indicate active leaks requiring immediate attention" },
                            { title: "Missing Shingles After Wind", icon: Wind, desc: "Shingles missing after windstorms expose underlayment to weather damage" },
                            { title: "Gutters Full of Granules", icon: Wrench, desc: "Excessive granule accumulation indicates advanced shingle deterioration" },
                            { title: "Animals in Attic at Night", icon: TreePine, desc: "Scratching or movement sounds indicate wildlife entry through roof damage" },
                            { title: "Ice Dams Along Your Eaves", icon: Snowflake, desc: "Ice dam formation can cause significant structural and water damage" },
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Aurora Chooses Paradise Roofers</h2>
                            <p className="text-lg font-medium text-muted-foreground">24+ years Aurora roofing experience</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "24+ Years Aurora", icon: Award, desc: "Local roofing experience serving Aurora since 2005" },
                            { title: "4.9★ Google Reviews", icon: Star, desc: "600+ verified reviews from satisfied Aurora customers" },
                            { title: "BBB A+ Perfect Record", icon: CheckCircle2, desc: "Perfect record with Better Business Bureau" },
                            { title: "Owens Corning Preferred", icon: Shield, desc: "Certified preferred contractor for premium systems" },
                            { title: "97% Insurance Success", icon: Eye, desc: "97% insurance claim success rate with drone documentation" },
                            { title: "Zero Callbacks", icon: Home, desc: "Zero callbacks first winter guaranteed on all installations" }
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Aurora Neighborhood Response Times</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority response zones with guaranteed service times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">55-Minute Emergency Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Aurora Heights</span>
                                <span>• Bayview Hill</span>
                                <span>• Aurora Village</span>
                                <span>• Petch</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Same Day Inspection Available</p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">85-Minute Standard Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Lakeshore</span>
                                <span>• Cedar Valley</span>
                                <span>• Rural Aurora</span>
                                <span>• Wells</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Next Day Inspection Available</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-lg border border-border">
                        <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">Postal Codes Covered</h3>
                        <p className="text-muted-foreground">L4G, L4S - Complete Aurora coverage</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">2026 Aurora Roofing Costs & Insurance Claims</h2>
                    
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
                                    <span className="font-medium">Roof Repair</span>
                                    <span className="text-[#FF9C45] font-bold">$2K-$8K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Eavestroughs</span>
                                    <span className="text-[#FF9C45] font-bold">$8K-$15K</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                Hail claims approved 97% with drone documentation.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-bold uppercase mb-6">Insurance Claims Made Simple</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Drone photos + thermal video proof</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Same-day adjuster meeting</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Maximum payout negotiation (97% success)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Direct insurance billing – $0 upfront</span>
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
                            "Aurora Heights", "Bayview Hill", "Aurora Village", "Petch",
                            "Lakeshore", "Cedar Valley", "Rural Aurora", "Wells", 
                            "Downtown Aurora", "Aurora Highlands", "Stonehaven", "Trinity Common"
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