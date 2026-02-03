import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye, Wrench, Hammer, Snowflake, Wind, Zap, Building, TreePine, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import burlingtonImage from "@/assets/locations/Burlington.png";

export default function Burlington() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Burlington Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Burlington Roofers<br />
                            Lake Ontario Experts
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Searching for "roofing Burlington Ontario"? You're in the right place. We proudly serve Aldershot, Brant Hills, Headon Forest, Millcroft, Appleby, and all Burlington neighborhoods with complete roofing solutions. From ice dam emergencies that threaten basements to high wind repairs after lake-effect storms.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We've protected 2,800+ Burlington homes and businesses since 2005. Living in Burlington means dealing with Lake Ontario's brutal weather patterns. Free drone inspections included. 24+ years local experience. Consistent 4.9★ customer reviews.
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
                            <img src={burlingtonImage} alt="Burlington Roofing Services" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">2,800+ Homes Protected</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">4.9★ Customer Reviews</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">55-Min Response</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Aldershot's mature lakefront homes suffer massive ice dams from lake-effect moisture. Brant Hills bungalows lose shingles when 100km/h winds rip through after heavy snow. Headon Forest families discover attic mold from poor ventilation. We handle commercial flat roof leak fixes, skylight restoration for luxury homes, and complete roofing solutions.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Replacement Burlington – Full System Overhaul</h2>
                            <p className="text-lg font-medium text-muted-foreground">$28K-$55K | Complete in 2-4 days | Lifetime 40-year warranty</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            When your Burlington roof reaches end-of-life (usually 25-30 years), we perform a complete 3-layer tear-off required by Ontario Building Code. This reveals common hidden problems like rotten plywood decking, inadequate ice & water shield, and poorly nailed shingles from previous contractors.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            What you get: Owens Corning Duration Premium Architectural Shingles – Class 4 hail resistance, 130mph wind warranty, 40-year algae protection. R60 attic blown-in cellulose insulation – qualifies for $1,900 Burlington energy rebates. Real timelines: Aldershot bungalow (1,800sf) completed in 2.3 days. Headon Forest duplex finished in 4 days.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Drone Roof Inspection ($400 Professional Value)</h2>
                            <p className="text-lg font-medium text-muted-foreground">Industrial 4K thermal imaging reveals problems invisible to human eye</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our industrial 4K thermal imaging drones fly your roof and reveal problems invisible to the human eye: Hidden moisture trails behind deteriorating chimney mortar, ponding patterns on flat commercial roofs, skylight rubber seal failures (most common leak source), ice dam formation hot spots in poorly ventilated attics, squirrel/raccoon chew marks on vent pipes and soffits.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Critical advantage: Finds damage 6-12 months BEFORE you see ceiling stains or mold growth. Advanced thermal technology prevents costly emergency repairs.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Repair Burlington</h2>
                            <p className="text-lg font-medium text-muted-foreground">Save 65% vs full replacement | 25-year no-leak warranty</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Common Burlington Repairs</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Wind-lifted or missing shingles (most common after storms)</p>
                                <p>• Valley leaks from leaf/debris buildup</p>
                                <p>• Ridge cap separation from thermal expansion</p>
                                <p>• Raccoon/squirrel chew holes in soffits/vents</p>
                                <p>• North slope moss & algae treatment with zinc strips</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Precision Solutions</h3>
                            <p className="text-muted-foreground">
                                Most Burlington roofs don't need complete replacement. We specialize in precision repairs with 25-year no-leak warranties, saving homeowners 65% compared to full replacement costs.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough Installation Burlington</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lifetime seamless aluminum warranty | 98% debris prevention</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Burlington's heavy tree canopy means gutters clog monthly. Our systems include: 7-8" seamless aluminum gutters (poured on-site), heated downspout sections (activates below 2°C), Gutter Helmet leaf guards (catches 98% debris), laser-measured slope (1/4" per 10 feet minimum), commercial-grade stainless brackets every 14".
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Millcroft luxury homes prefer our copper half-round aesthetic gutters that match heritage properties perfectly. Lifetime warranty on seamless construction.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Flat Roof Repair Burlington</h2>
                            <p className="text-lg font-medium text-muted-foreground">TPO, EPDM, Modified Bitumen systems | 40-year prorated warranties</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Commercial Solutions</h3>
                            <p className="text-muted-foreground">
                                Appleby GO commercial strips and Headon Forest strip plazas suffer from ponding water, seam splits, and parapet wall leaks. We provide mechanically fastened 60-mil TPO (fastest install), fully adhered 90-mil EPDM rubber, Energy Star reflective coatings (cuts cooling 25%).
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Emergency Response</h3>
                            <p className="text-muted-foreground">
                                Same-day emergency leak patches for critical situations. 40-year prorated warranties on all commercial flat roof systems with advanced drainage solutions.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Emergency Roofing Burlington</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response across all Burlington neighborhoods</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            55-minute response: Aldershot, Brant Hills, Headon Forest, Millcroft. 85-minute response: Appleby, Tyandaga, Mountainside, Orchard. Heavy-duty 18-mil tarps (75mph wind rated), blue membrane systems + industrial sealants included FREE.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            During last Burlington hail storm: We protected 69 roofs from interior water damage within 24 hours with our rapid emergency response system.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Burlington Roof Emergency Warning Signs (Don't Delay)</h2>
                            <p className="text-lg font-medium text-muted-foreground">Call us immediately if you notice these critical indicators</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "Ceiling Water Stains", icon: AlertTriangle, desc: "Water stains or bubbling paint indicate active leaks requiring immediate attention" },
                            { title: "Missing/Curling Shingles", icon: Wind, desc: "Shingles missing or curling after wind storms expose underlayment to damage" },
                            { title: "Granules Filling Gutters", icon: Wrench, desc: "Granules filling gutters indicate advanced shingle wear and deterioration" },
                            { title: "Animals in Attic", icon: TreePine, desc: "Animals scratching/moving in attic at night indicate entry through roof damage" },
                            { title: "Ice Dams >3\" Thick", icon: Snowflake, desc: "Ice dams forming along roof eaves over 3 inches thick can cause structural damage" },
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Burlington Homeowners Trust Paradise Roofers Exclusively?</h2>
                            <p className="text-lg font-medium text-muted-foreground">24+ years exclusively serving Burlington roofs</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "24+ Years Burlington", icon: Award, desc: "Exclusively serving Burlington roofs with deep local knowledge" },
                            { title: "4.9★ Google Rating", icon: Star, desc: "600+ verified local reviews from satisfied Burlington customers" },
                            { title: "BBB A+ Perfect Record", icon: CheckCircle2, desc: "Perfect record with Better Business Bureau since 2005" },
                            { title: "Owens Corning Preferred", icon: Shield, desc: "Certified preferred contractor for premium roofing systems" },
                            { title: "97% Insurance Success", icon: Eye, desc: "97% insurance claim approval rate vs industry 60%" },
                            { title: "Zero Callbacks", icon: Home, desc: "Zero callbacks guaranteed first winter, $1,900 energy rebate processing included" }
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Burlington Neighborhood Response Matrix</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority response zones with guaranteed service times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">55-Minute Emergency Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Aldershot (L7L)</span>
                                <span>• Brant Hills (L7P)</span>
                                <span>• Headon Forest (L7M)</span>
                                <span>• Millcroft (L7N)</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Same Day Free Inspection</p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">85-Minute Standard Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Appleby (L7L, L7R)</span>
                                <span>• Tyandaga (L7L)</span>
                                <span>• Mountainside (L7P)</span>
                                <span>• Orchard</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Next Day Inspection</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">Accurate 2026 Burlington Roofing Investment Guide</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-bold uppercase mb-6">Project Costs & Warranties</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Bungalow (1,800sf)</span>
                                    <span className="text-[#FF9C45] font-bold">$28K-$38K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Two-Story (2,500sf)</span>
                                    <span className="text-[#FF9C45] font-bold">$38K-$55K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Flat Roof (1,000sf)</span>
                                    <span className="text-[#FF9C45] font-bold">$22K-$32K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Precision Roof Repair</span>
                                    <span className="text-[#FF9C45] font-bold">$2K-$8K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Complete Eavestroughs</span>
                                    <span className="text-[#FF9C45] font-bold">$8K-$15K</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                All projects include transferable warranties and insurance eligibility.
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-bold uppercase mb-6">Insurance Claims Success</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Professional drone documentation with thermal imaging</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Direct coordination with insurance adjusters</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Maximum payout negotiation and advocacy</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Direct billing - zero upfront costs for approved claims</span>
                                </div>
                                <div className="bg-[#F9F9F9] p-4 rounded-lg mt-4">
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Hail/wind insurance claims:</strong> 97% approved when backed by our professional drone documentation vs 60% industry average.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            "Aldershot", "Brant Hills", "Headon Forest", "Millcroft",
                            "Appleby", "Tyandaga", "Mountainside", "Orchard", 
                            "Downtown Burlington", "Freeman", "Roseland", "Palmer"
                        ].map((neighborhood, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg border border-border text-center">
                                <MapPin className="h-5 w-5 text-[#FF9C45] mx-auto mb-2" />
                                <span className="font-medium text-sm">{neighborhood}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#FF9C45] p-6 rounded-lg text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Book Your Free Burlington Roof Inspection Today</h3>
                        <p className="text-white mb-4">Only 12 inspection spots available this week – Lake Ontario winter storms don't wait!</p>
                        <Link to="/contact">
                            <button className="bg-white text-[#FF9C45] px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
                                Schedule Free Inspection
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <ContactForm />
        </Layout>
    );
}