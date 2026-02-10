import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye, Wrench, Hammer, Snowflake, Wind, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import etobicokeImage from "@/assets/locations/Etobicoke.png";

export default function Etobicoke() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Etobicoke Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Roofing Services in<br />
                            Etobicoke, Ontario
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Paradise Roofers proudly offers reliable roofing and renovation services in Etobicoke, Ontario, delivering high-quality workmanship for residential and commercial properties. With years of hands-on experience, our team is committed to protecting, improving, and enhancing your property from the roof down.
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
                            <img src={etobicokeImage} alt="Etobicoke Roofing Services" className="w-full h-full object-cover" />
                        </div>

                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">2,400+ Roofs Fixed</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">4.9★ Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">60-Min Response</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            We offer roof replacement, eavestrough repair, fascia/soffit fixes, emergency repairs, free drone inspections, and attic insulation – everything your Etobicoke home needs. We work with local suppliers like Home Depot Rexdale and Central Tech Hardware, understanding Toronto building codes and 24/7 emergency service reaches Humber Valley in 60 minutes.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Replacement Etobicoke</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lake Ontario wind-engineered roofing systems</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Etobicoke gets hammered by Lake Ontario winds averaging 20km/h stronger than central Toronto. Our roof replacement Etobicoke handles everything from 1960s bungalows in Eringate to townhouses in West Deane. Full tear-off uncovers rotten decking (67% of 25-year+ Etobicoke roofs), installs GAF Timberline HDZ (130mph wind rating), 42-inch ice shield, 6-nail fastening, R50 insulation meeting Toronto energy codes.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Princess-Rosethorn crews complete 2.4-day bungalow jobs, 2.8-day two-stories. No callbacks first winter guaranteed. We manage Toronto hydro disconnects, city inspections, chimney re-flashing around Etobicoke's older brick homes. Architectural ridge caps boost curb appeal 12%.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Roof Inspection Etobicoke</h2>
                            <p className="text-lg font-medium text-muted-foreground">4K thermal drones for steep two-story safety</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Etobicoke's steep two-stories make ladder work risky. Free roof inspection Etobicoke uses 4K thermal drones finding moisture under shingles, missing ice shields, chimney flashing failures, $14K+ problems if ignored.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            15 minutes, same-day report with 25+ photos. 95% find serious issues. Insurance prefers drone proof, 92% claims approved vs 60% ladder notes. West Mall homeowners saved $20K on average.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough Repair Etobicoke</h2>
                            <p className="text-lg font-medium text-muted-foreground">Seamless systems for heavy tree debris and lake storms</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">6" Seamless Aluminum Systems</h3>
                            <p className="text-muted-foreground">
                                Etobicoke's massive oaks and maples drop debris clogging gutters yearly. Islington mature homes suffer overflow rot staining brick exteriors. Eavestrough repair Etobicoke verifies laser slope (¼" per 10ft), fabricates 6" seamless aluminum onsite, installs leaf guards (95% debris capture), hidden hangers every 18".
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Heated Gutter Systems</h3>
                            <p className="text-muted-foreground">
                                Humber Valley lakefront properties get heated gutter sections preventing ice bridges. Lifetime seam warranty – 89% Etobicoke gutter failures come from poor installation we avoid completely.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Fascia & Soffit Fixes Etobicoke</h2>
                            <p className="text-lg font-medium text-muted-foreground">Toronto humidity resistant systems with 25-year guarantee</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Toronto humidity rots Etobicoke fascia in 5-7 years. Markland Woods homes show sagging gutters pulling boards off framing. Fascia replacement removes all rot (not surface patches), installs 0.032 aluminum, color-matched to brick, brackets every 16".
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Soffit work adds continuous ventilation preventing ice dams (80% Etobicoke cause), proper rafter baffles. Complete packages stop roof-to-foundation damage chains. 25-year guarantee.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Attic Insulation Etobicoke</h2>
                            <p className="text-lg font-medium text-muted-foreground">R50 upgrades with Toronto rebate eligibility</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">R50 Cellulose Installation</h3>
                            <p className="text-muted-foreground">
                                Etobicoke 1970s homes average R20 wasting $1,700/year. Attic insulation installs R50 cellulose, air-seals, hatch insulation. Payback 2.8 years + $1,500 Toronto rebates.
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Energy Savings Results</h3>
                            <p className="text-muted-foreground">
                                Eringate bungalows report no ice dams, even temps, 27% AC savings. 100% rebate approvals.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Emergency Roof Repair Etobicoke</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response for lake wind damage</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Lake winds to 130km/h shred Etobicoke shingles. Emergency roof repair Etobicoke hits Humber Valley 60 minutes, city-wide 90 minutes. Tarps, leak sealing, blue tarp systems protect interiors.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Recent Rexdale storm: 46 roofs saved, $2.6M damage prevented. Insurance billing included.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Does Etobicoke Call Paradise Roofers?</h2>
                            <p className="text-lg font-medium text-muted-foreground">Urban roofing expertise with lakefront specialization</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "Local Etobicoke Teams", icon: Users, desc: "Know lake wind patterns, tree canopy blocks 40% more sunlight, clay soils shift foundations" },
                            { title: "4.9★ Google Reviews", icon: Star, desc: "420+ reviews from real homeowners, BBB A+ 21 years – zero complaints" },
                            { title: "GAF Master Elite", icon: Award, desc: "Top 3% worldwide, Toronto permitting experts, downtown wind specialists" },
                            { title: "Free Drone Technology", icon: Eye, desc: "$350 value standard, average savings: $17K through early detection" },
                            { title: "Urban Specialists", icon: Home, desc: "High-rise condos, mature neighborhoods, lakefront estates – each needs different roofing" },
                            { title: "Lake Wind Experts", icon: Wind, desc: "130mph wind-rated systems, proper fastening for downtown wind buffeting" }
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Etobicoke Neighborhood Response Map</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority response zones with guaranteed service times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">60-Minute Priority Service</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Humber Valley</span>
                                <span>• Princess-Rosethorn</span>
                                <span>• Islington</span>
                                <span>• Markland Woods</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">90-Minute Standard Service</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Eringate</span>
                                <span>• Rexdale</span>
                                <span>• West Deane</span>
                                <span>• West Mall</span>
                                <span>• Humber Heights</span>
                                <span>• Mimico</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-border">
                        <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">Same-Day Inspection Coverage</h3>
                        <p className="text-muted-foreground mb-4">M9C-M9W postal codes - Toronto building compliant.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">Etobicoke Neighborhoods We Serve</h2>
                    
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            "Humber Valley", "Princess-Rosethorn", "Islington", "Markland Woods",
                            "Eringate", "Rexdale", "West Deane", "West Mall", 
                            "Humber Heights", "Mimico", "New Toronto", "Long Branch"
                        ].map((neighborhood, i) => (
                            <div key={i} className="bg-muted/30 p-4 rounded-lg border border-border text-center">
                                <MapPin className="h-5 w-5 text-[#FF9C45] mx-auto mb-2" />
                                <span className="font-medium text-sm">{neighborhood}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#F9F9F9] p-8 rounded-lg border border-border">
                        <h3 className="text-2xl font-bold uppercase mb-6">Frequently Asked Questions</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "How much do you charge for Roof Inspection?", a: "It's totally free of cost and through 4K Drone." },
                                { q: "How often should I inspect my roof?", a: "Twice a year—spring and fall are best. Or after major storms." },
                                { q: "What's the difference between inspection and maintenance?", a: "Inspections find issues. Maintenance fixes the little stuff on the spot." },
                                { q: "Can this extend my roof's life?", a: "Absolutely—routine care can add 5–10 years or more." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg border border-border">
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