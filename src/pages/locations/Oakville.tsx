import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye, Wrench, Hammer, Snowflake, Wind, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import oakvilleImage from "@/assets/locations/Oakville.png";

export default function Oakville() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Oakville Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Oakville Roofers<br />
                            Lake Ontario Experts
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Oakville homeowners know their roofs face some of the toughest conditions in the GTA. Those brutal Lake Ontario winds blasting Bronte waterfront homes, heavy ice dams crushing Glen Abbey eaves, and clay soil foundation shifts stressing Iona Station roofs demand roofing expertise most companies just don't have.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We've protected 2,800+ Oakville roofs since 2005 earning 4.9★ Google reviews from real homeowners in West Oak Trails, River Oaks, Clearview, and Bronte. Our free drone roof inspections ($350 value) spot problems before they escalate.
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
                            <img src={oakvilleImage} alt="Oakville Roofing Services" className="w-full h-full object-cover" />
                        </div>

                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">2,800+ Roofs Protected</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">4.9★ Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">70-Min Response</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Paradise Roofers delivers roofing Oakville solutions built specifically for your neighborhood – whether that's complete roof replacement, seamless eavestrough systems, fascia and soffit restoration, emergency leak repairs, free drone inspections, or R50 attic insulation upgrades. We understand Oakville building permits, Conservation Halton regulations, Bronte Creek wind patterns, and work with local suppliers.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Replacement Oakville</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lake-effect weather engineered roofing systems</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Oakville's lake-effect weather accelerates roof failure 25% faster than inland GTA. Our roof replacement Oakville crews handle everything from 1960s bungalows in College Park to luxury estates in Ford. Complete tear-off reveals rotten decking (68% of 25-year+ Oakville roofs), installed GAF Timberline HDZ with 140mph wind rating, full ice/water shield coverage, 6-nail fastening pattern, R50 attic insulation meeting Halton energy codes.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Glen Abbey subdivisions see 2.6-day bungalow replacements, 3-day two-story installs. Zero ice dams guaranteed the first winter. We coordinate Oakville hydro disconnects, Peel Region inspections, Conservation Halton grading compliance. Architectural starter strips, color-matched ridge caps boost resale values 10-15%.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Roof Inspection Oakville | Drone Technology</h2>
                            <p className="text-lg font-medium text-muted-foreground">4K thermal drone scans revealing hidden damage</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Steep Oakville lakefront roofs make ladder inspections risky. Free roof inspection Oakville uses 4K thermal drone scans revealing trapped moisture, missing ice shields, ridge separation, tree rubbing damage costing $16K+ if ignored.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            15-minute process, same-day digital report with 25+ timestamped photos. 95% uncover serious issues. Insurance companies prefer drone proof – 94% claim approval vs 57% ladder reports. Clearview homeowners saved $23K average catching problems early.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough Repair Oakville</h2>
                            <p className="text-lg font-medium text-muted-foreground">Seamless systems engineered for oak tree debris and lake storms</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">6" Seamless Aluminum Systems</h3>
                            <p className="text-muted-foreground">
                                Oakville's massive oak trees drop debris clogging gutters yearly, causing fascia rot and foundation washouts in River Oaks mature neighborhoods. Eavestrough repair Oakville starts with laser slope verification (¼" per 10 feet), onsite 6" seamless aluminum fabrication, micro-mesh leaf guards (95% debris capture), hidden hangers every 18 inches.
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Heated Gutter Packages</h3>
                            <p className="text-muted-foreground">
                                Bronte lakefront homes demand our heated gutter packages preventing ice bridges during -20°C lake-effect cold. Lifetime seam warranty standard. 92% of Oakville gutter failures trace to poor flashing, we install properly every time.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Fascia & Soffit Restoration Oakville</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lake humidity resistant systems with 25-year guarantee</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Lake humidity rots Oakville fascia boards in 6-8 years. West Deane two-stories show classic sagging gutters pulling boards off framing, brown streaks down brick siding. Fascia replacement Oakville removes all rotten wood, installs 0.032 aluminum or maintenance-free PVC, perfect color-matching to stone exteriors, hidden brackets every 16 inches.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Soffit restoration adds continuous ventilation (50% net free area), proper rafter baffles, thermal airflow verification. Complete exterior packages prevent cascading failures permanently. 25-year non-rot guarantee.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Snowflake className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Attic Insulation Oakville | R50 Upgrade Cuts Bills 30%</h2>
                            <p className="text-lg font-medium text-muted-foreground">Energy-efficient upgrades with rebate eligibility</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">R50 Blown Cellulose Installation</h3>
                            <p className="text-muted-foreground">
                                Oakville 1980s homes average R21 wasting $2,000/year heating attic air. Attic insulation Oakville installs R50 blown cellulose (rebate-eligible), air-seals penetrations, insulates hatch doors. Payback 2.5 years + $1,600 Halton rebates.
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Energy Savings Results</h3>
                            <p className="text-muted-foreground">
                                Appleby Lodge bungalows report no more ice dams, consistent temperatures, 29% summer AC savings. 100% rebate approvals through the Save on Energy program.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Emergency Roofing Oakville</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response for lake-effect storm damage</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Lake-effect wind gusts to 150km/h shred Oakville shingles overnight. Emergency roofing Oakville reaches Bronte/Clarkson 70 minutes, city-wide 90 minutes. Heavy-duty tarps, temporary leak sealing, blue tarp systems protect until permanent repairs.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Recent West Oak Trails storm: 51 roofs saved first 24 hours, $2.9M interior damage prevented. Direct insurance billing standard.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Shield className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Paradise Roofers Excels in Oakville?</h2>
                            <p className="text-lg font-medium text-muted-foreground">Local expertise with premium property experience</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "Local Oakville Crews", icon: Users, desc: "Know lake wind patterns neighborhood-by-neighborhood, understand premium property expectations" },
                            { title: "4.9★ Google Reviews", icon: Star, desc: "480+ reviews from actual Oakville residents, BBB A+ perfect record 21 years" },
                            { title: "GAF Master Elite", icon: Award, desc: "Top 3% worldwide, complete permitting for Oakville, Halton, Conservation compliance" },
                            { title: "Free Drone Technology", icon: Eye, desc: "$350 value standard, early detection saves $18K average vs emergency fixes" },
                            { title: "Lake-Effect Specialists", icon: Wind, desc: "Understand Conservation Halton stormwater rules, rapid Bronte development pressures" },
                            { title: "Premium Materials", icon: Shield, desc: "140mph wind-rated shingles, proper fastening exceeds code requirements" }
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Our Oakville Roofing Services Coverage</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority response zones with guaranteed service times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">70-Minute Priority Service</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Bronte</span>
                                <span>• Clarkson</span>
                                <span>• West Oak Trails</span>
                                <span>• Glen Abbey</span>
                                <span>• River Oaks</span>
                                <span>• Old Oakville</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">90-Minute Standard Service</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Clearview</span>
                                <span>• Iona Station</span>
                                <span>• Wedgewood</span>
                                <span>• Morrison</span>
                                <span>• Appleby</span>
                                <span>• College Park</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-border">
                        <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">Same-Day Inspection Coverage</h3>
                        <p className="text-muted-foreground mb-4">L6H-L6M postal codes - Fully Halton Region licensed, Oakville fire compliant.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">Oakville Neighborhoods We Serve</h2>
                    
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            "Bronte", "Clarkson", "West Oak Trails", "Glen Abbey",
                            "River Oaks", "Old Oakville", "Clearview", "Iona Station", 
                            "Wedgewood", "Morrison", "Appleby", "College Park"
                        ].map((neighborhood, i) => (
                            <div key={i} className="bg-muted/30 p-4 rounded-lg border border-border text-center">
                                <MapPin className="h-5 w-5 text-[#FF9C45] mx-auto mb-2" />
                                <span className="font-medium text-sm">{neighborhood}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#F9F9F9] p-8 rounded-lg border border-border">
                        <h3 className="text-2xl font-bold uppercase mb-6">Frequently Asked Questions - Oakville Roofing</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Roof replacement costs Oakville?</h4>
                                    <p className="text-sm text-muted-foreground">$25K-$45K bungalow/semi average. Includes tear-off, ice shield, R50 insulation, lake wind-rated shingles.</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Oakville permits required?</h4>
                                    <p className="text-sm text-muted-foreground">Complete Halton Region service – inspections scheduled, lakefront compliance verified.</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Lake winds worse for roofs?</h4>
                                    <p className="text-sm text-muted-foreground">40% higher damage rates. Wind-resistant shingles, proper fastening exceeds code requirements.</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Emergency response Oakville?</h4>
                                    <p className="text-sm text-muted-foreground">70 minutes Bronte/Clarkson, 90 minutes balance of town.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
        </Layout>
    );
}