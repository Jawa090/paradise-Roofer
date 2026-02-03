import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye, Wrench, Hammer, Snowflake, Wind, Zap, Building, TreePine, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import scarboroughImage from "@/assets/locations/Scarborough.png";

export default function Scarborough() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Scarborough Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Scarborough Roofers<br />
                            Rouge Valley Experts
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Imagine waking up to water dripping through your Guildwood ceiling after a brutal Rouge Valley wind storm, or discovering black mold in your Woburn attic because neglected flat roof ponding finally broke through. Scarborough homeowners live with these harsh realities every winter.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Paradise Roofers stands as Scarborough's most trusted roofing authority, having meticulously protected over 3,200 local properties since 2005. Our impeccable 4.9★ rating reflects genuine testimonials from residents who've endured hail-pocked roofs in Malvern and ice dam disasters flooding Birch Cliff basements.
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
                            <img src={scarboroughImage} alt="Scarborough Roofing Services" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">3,200+ Properties Protected</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">4.9★ Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">65-Min Response</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            We don't merely patch problems: we engineer complete exterior protection systems incorporating premium GAF Timberline architectural shingles, seamless lifetime warranted eavestrough systems, industrial-grade flat roof membranes, precision chimney flashings, skylight restoration, thermal drone inspections, R50 attic insulation, and wildlife exclusion technology.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Complete Roof Replacement Scarborough</h2>
                            <p className="text-lg font-medium text-muted-foreground">Architectural diversity demands roofing artistry beyond standard capabilities</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Scarborough's architectural diversity demands roofing artistry beyond standard contractor capabilities. Our roof replacement Scarborough artistry transforms charming West Hill bungalows, dense Birch Cliff 12-plex rental towers, Golden Mile commercial storefronts, and Guildwood executive estates through a meticulous seven-stage process. We begin with a complete three-layer tear-off mandated by Toronto Building Code, exposing the ugly truth in 72% of properties: chronically wet plywood decking, improperly installed ice barriers, overdriven nails popping through shingles, and critter-chewed ventilation baffles.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            The transformation installs GAF Timberline HDZ RS architectural shingles engineered with UL 2218 Class 4 hail resistance, StainGuard PLUS™ Algae Protection lasting 40 years, 140 MPH wind warranties, and impact-resistant granules perfect for Scarborough's volatile weather. Guildwood estate replacements complete in 2.3 days with zero callbacks first winter. Homeowners celebrate 31% average hydro bill reductions and 14% property value appreciation.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Proprietary Drone Inspection Technology</h2>
                            <p className="text-lg font-medium text-muted-foreground">Military-grade 4K thermal imaging exposing invisible damage</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our proprietary drone inspection technology valued at $450 per scan deploys military-grade 4K thermal imaging to expose invisible moisture signatures behind deteriorated chimney flashing, chronic ponding patterns on multi-unit flat roofs, skylight curb separation, granule depletion revealing premature shingle failure, and raccoon pathway breaches long before water stains appear on your ceilings.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            This forensic approach has prevented $22,000+ average insurance claims for Scarborough clients, transforming potential catastrophes into manageable maintenance.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Precision Roof Repair Scarborough</h2>
                            <p className="text-lg font-medium text-muted-foreground">Microscopic damage assessments targeting common failures</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Common Failure Analysis</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Wind-stripped shingles (38% service calls)</p>
                                <p>• Debris-clogged valley leaks (29%)</p>
                                <p>• Ridge cap thermal separation (19%)</p>
                                <p>• Chimney flashing corrosion (10%)</p>
                                <p>• Squirrel ventilation breaches (4%)</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Permanent Solutions</h3>
                            <p className="text-muted-foreground">
                                Using infrared leak detection and moisture probe technology, we execute permanent repairs employing military-grade butyl sealants, 20-gauge copper flashing, synthetic reinforced underlayment, and galvanized 1.5" roofing nails backed by 25-year warranties.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough & Gutter Systems Scarborough</h2>
                            <p className="text-lg font-medium text-muted-foreground">Engineering marvels for 47% tree canopy debris</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Scarborough's expansive 47% tree canopy generates 3 tons of seasonal debris per acre, overwhelming standard gutters and triggering fascia rot cascades compromising structural integrity. Our eavestrough repair Scarborough engineering marvels feature 6"/7"/8" seamless aluminum fabrication poured onsite via computer-controlled extrusion, laser-verified 1/4:10 slope ratios, electrically traced heated downspouts activating at 2°C preventing ice bridges.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Gutter Helmet PerfectFit micro-mesh guards capturing 98.2% airborne debris, and Type 316 marine-grade stainless hangers spaced 14" supporting 400lb snow loads. Lifetime seam-transferable warranties cover every installation, with 94% of clients reporting complete overflow elimination.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Commercial Flat Roof Mastery Scarborough</h2>
                            <p className="text-lg font-medium text-muted-foreground">Golden Mile commercial corridor expertise</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Common Commercial Issues</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Parapet wall leaks</p>
                                <p>• TPO seam splits</p>
                                <p>• EPDM shrinkage</p>
                                <p>• Gravel ballast displacement</p>
                                <p>• Expansion joint failures</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Professional Solutions</h3>
                            <p className="text-muted-foreground">
                                Hot-air welded 60-mil TPO membranes, fully adhered 90-mil EPDM rubber, torch-applied SBS modified bitumen, spray polyurethane foam for irregular geometries, custom aluminum crickets, and Energy Star cool roof coatings slashing cooling costs 27%.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">24/7 Emergency Roofing Scarborough</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response for Rouge Valley storms</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            When 110km/h lake-effect gales shred shingles or Rouge Valley hardwoods collapse across roofs, emergency roofing Scarborough activates our 65-minute Guildwood response, 90-minute city-wide deployment. 18-mil reinforced tarps withstand 75mph winds, blue membrane systems block 99% UV degradation, industrial leak sealants bridge temporary gaps.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            2025 Highland Creek microburst: 64 roofs secured within 18 hours, $3.7 million interior damage averted.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <TreePine className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Scarborough Wildlife Fortress Systems</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rouge Valley ecology protection matrix</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Rouge Valley ecology attracts raccoons, squirrels, woodpeckers, starlings transforming roofs into battlegrounds. Our wildlife exclusion matrix deploys 24-gauge galvanized chimney shrouds, ridge vent stainless armor, soffit baffle cascades, eavestrough debris deflectors, roof edge critter guards, velcro-accessible inspection ports. 88% elimination of repeat invasions.
                        </p>
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Paradise Roofers' Scarborough Supremacy</h2>
                            <p className="text-lg font-medium text-muted-foreground">23 years ravine wind mastery and expertise</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "23 Years Experience", icon: Award, desc: "Ravine wind mastery, 4.9★ 580+ verified reviews, BBB A+ impeccable record" },
                            { title: "Elite Certifications", icon: Star, desc: "GAF Master Elite/Flat Specialist, Toronto Master Builders, Interlock Metal Roofing Certified" },
                            { title: "Specialized Expertise", icon: Eye, desc: "Wildlife Exclusion Guild, Mold Remediation Council, forensic drone documentation" },
                            { title: "Insurance Advocacy", icon: CheckCircle2, desc: "96% claim maximization vs industry 61%, direct insurer billing, scope negotiation" },
                            { title: "Comprehensive Systems", icon: Home, desc: "Complete exterior ecosystems: driveways, siding, railings, retaining walls, windows" },
                            { title: "Proven Results", icon: Users, desc: "98.4% client referral generation exceeding HomeStars benchmarks" }
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Scarborough Precision Response Grid</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority response zones with guaranteed service times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">65-Minute Critical Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Guildwood</span>
                                <span>• Woburn</span>
                                <span>• Highland Creek</span>
                                <span>• Birch Cliff</span>
                                <span>• West Hill</span>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">90-Minute Priority Service</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Agincourt</span>
                                <span>• Malvern</span>
                                <span>• Morningside</span>
                                <span>• Centennial</span>
                                <span>• Rouge Hill</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-lg border border-border">
                        <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">Comprehensive Coverage</h3>
                        <p className="text-muted-foreground mb-4">M1B-M1W postal codes comprehensive coverage</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">Scarborough Neighborhoods We Serve</h2>
                    
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            "Guildwood", "Woburn", "Highland Creek", "Birch Cliff",
                            "West Hill", "Agincourt", "Malvern", "Morningside", 
                            "Centennial", "Rouge Hill", "Golden Mile", "Clairlea"
                        ].map((neighborhood, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg border border-border text-center">
                                <MapPin className="h-5 w-5 text-[#FF9C45] mx-auto mb-2" />
                                <span className="font-medium text-sm">{neighborhood}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border">
                        <h3 className="text-2xl font-bold uppercase mb-6">Essential Scarborough Roofing Intelligence</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Bungalow replacement costs?</h4>
                                    <p className="text-sm text-muted-foreground">$27K-$52K premium installations with GAF Timberline HDZ, R50 insulation, wildlife exclusion.</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Multi-family TPO systems?</h4>
                                    <p className="text-sm text-muted-foreground">35-year FM-certified commercial grade systems with ponding solutions and HVAC integration.</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Hail claims success rate?</h4>
                                    <p className="text-sm text-muted-foreground">96% drone-documented success vs industry 61%. Forensic thermal imaging provides insurance proof.</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Toronto Green Rebates available?</h4>
                                    <p className="text-sm text-muted-foreground">$1,800 instant qualification for R50 insulation upgrades and energy-efficient installations.</p>
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