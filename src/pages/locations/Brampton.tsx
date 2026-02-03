import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import bramptonImage from "@/assets/locations/Brampton.png";

export default function Brampton() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Brampton Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Roofing Services<br />
                            Brampton Ontario
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Brampton homeowners face unique roofing challenges from the city's rapid growth, clay-heavy soils, and extreme GTA weather patterns. Whether you live in Mount Pleasant, Fletcher's Meadow, Heart Lake, or near Bramalea City Centre, our roofing services Brampton protect your home from ice dams, wind damage, and foundation erosion common in Peel Region.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Paradise Roofers delivers complete roof replacement, gutter and eavestrough installation, fascia and soffit restoration, emergency leak repairs, free drone inspections, and attic insulation upgrades specifically engineered for Brampton's housing stock.
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

            {/* Hero Image & Badges */}
            <section className="pb-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="relative">
                        <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm">
                            <img src={bramptonImage} alt="Brampton Roofing Services" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">2,500+ GTA Roofs</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">4.9★ Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Free Drone Inspections</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            With 2,500+ GTA roofs completed and 4.9★ Google reviews, we understand Brampton building codes, Peel Region permitting, TRCA drainage requirements, and local suppliers like Home Hardware Brampton and RONA Fletcher's Meadow. Free drone roof inspections ($350 value) reveal problems invisible from ladders curling shingles in Snelgrove, fascia rot along Queen Street, ice dam risks in Springdale. 24/7 emergency service handles Brampton's sudden wind storms and ice dam emergencies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Complete Roof Replacement Services */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Complete Roof Replacement Services in Brampton</h2>
                            <p className="text-lg font-medium text-muted-foreground">Expert roof replacement for Brampton's unique challenges</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-muted/30 p-8 rounded-xl border border-border">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Brampton roofs fail faster due to freeze-thaw cycles and heavy clay soil settlement causing foundation shifts. Our roof replacement Brampton crews handle everything from 1970s bungalows in Bramalea North to modern semis in Credit Valley. Complete tear-off reveals rotten plywood decking (found in 68% of Brampton roofs over 20 years old), installs R50 attic insulation, proper ice/water shield (42" eaves coverage per Ontario code) and 6-nail shingle fastening for 160km/h winds.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                GAF Timberline HDZ architectural shingles dominate Brampton installations impact-resistant for hail, StainGuard moss protection for humid summers, 40-year warranty. Recent Mount Pleasant subdivision projects averaged 2.5-day installs with zero ice dams reported in the first winter. We coordinate Peel Region building permits, Brampton hydro disconnects, and TRCA lot grading compliance during every replacement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Roof Drone Inspection */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Eye className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Roof Drone Inspection Brampton</h2>
                            <p className="text-lg font-medium text-muted-foreground">Advanced 4K thermal imaging technology</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Steep Brampton roofs (common in Snelgrove, Madoc) make ladder inspections dangerous. Our free drone roof inspection Brampton uses 4K thermal imaging revealing hidden valley leaks, granule loss patterns, missing ice shields before interior damage occurs. 15-minute process, same-day digital report with 25+ timestamped photos.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                98% of Brampton drone inspections find problems costing $15K+ if ignored. Insurance companies accept drone photos proving wind/hail damage: 92% claims approved vs 60% ladder inspections. Mount Pleasant homeowners saved $18K each catching valley cracks early.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eavestrough Repair & Replacement Services */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Eavestrough Repair & Replacement Services Brampton</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Professional gutter solutions for Brampton's mature neighborhoods</p>

                    <div className="bg-muted/30 p-8 rounded-xl border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Brampton's mature oak trees clog standard gutters yearly, causing fascia rot and foundation washouts common in Madoc Drive neighborhoods. Our eavestrough repair Brampton starts with laser slope verification (1/4" per 10 feet minimum), seamless aluminum fabrication onsite (5"/6"/7" profiles), and leaf guard systems reducing cleaning 95%.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Heart Lake homeowners prefer our heated gutter packages preventing ice bridges during -15°C nights. 6" seamless aluminum with hidden hangers every 18 inches supports heavy wet leaves without sagging. We integrate proper fascia flashing during installs: 90% of Brampton gutter failures trace to missing metal flashing allowing water behind boards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Fascia Repair & Replacement Services */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Fascia Repair & Replacement Services Brampton</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Premium fascia solutions with 20-year warranty</p>

                    <div className="bg-white p-8 rounded-xl border border-border shadow-sm mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Fascia rot destroys Brampton homes where gutters sag and pull boards from house framing. Our fascia replacement Brampton uses 0.032 aluminum boards or maintenance-free PVC, color-matched to siding, with hidden brackets every 16 inches. Drone inspections reveal hidden rot above gutters invisible from ground: critical for two-story homes in Northwest Brampton.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Complete fascia/soffit/gutter packages solve cascading failures: rotten fascia causes gutter collapse and foundation erosion. 20-year non-rot warranty standard. Brampton-specific pricing accounts for higher fascia heights (9-10 feet common) and premium colors matching brick exteriors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Soffit Repair & Replacement Services */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Soffit Repair & Replacement Services Brampton</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Eliminate ice dams with proper ventilation</p>

                    <div className="bg-muted/30 p-8 rounded-xl border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Poor soffit ventilation causes 82% of Brampton ice dams. Clogged/painted vent strips trap attic heat melting roof snow, refreezing at eaves. Our soffit replacement Brampton installs continuous aluminum vent panels (50% net free area), proper rafter baffles, and R50 attic insulation eliminating ice dams permanently.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Fletcher's Meadow new builds benefit from our ventilated soffit + fascia packages preventing future problems. Thermal imaging confirms airflow during installs. Hydro savings average $1,200 year one verified by Enbridge statements from Credit Valley clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Attic Insulation Services */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Attic Insulation Services in Brampton</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">R50 upgrades with Enbridge rebates</p>

                    <div className="bg-white p-8 rounded-xl border border-border shadow-sm mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Brampton 1970s homes average R20 insulation wasting $1,800/year heating attic air. Our attic insulation Brampton upgrades to R50 cellulose (Enbridge rebate eligible), complete air sealing (85% air loss eliminated), proper hatch insulation. Payback 2.8 years through bill savings + $1,500 rebates.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Springdale bungalows report ice dams eliminated, upstairs/downstairs temperatures evened, summer AC savings 28%. We handle EcoHome rebate paperwork: 100% approval rate for Brampton homeowners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gutters Repair & Replacement */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Gutters Repair & Replacement in Brampton</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Foundation protection with seamless systems</p>

                    <div className="bg-muted/30 p-8 rounded-xl border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Brampton clay soils + poor drainage = foundation cracks when gutters overflow. Our gutter installation Brampton includes downspout extensions (6+ feet from foundation), splash blocks, underground leaders for premium properties. Seamless fabrication prevents leak-prone joints.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Bramalea North semis benefit from our leaf guard systems (95% debris reduction), heated sections for ice dam prevention. Lifetime seam warranty standard.
                        </p>
                    </div>
                </div>
            </section>

            {/* 24/7 Emergency Roofing Services */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">24/7 Emergency Roofing Services Brampton</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Rapid storm response across Brampton</p>

                    <div className="bg-white p-8 rounded-xl border border-border shadow-sm mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Brampton wind storms rip shingles, crush gutters, down trees onto roofs. Our emergency roofing Brampton arrives 90 minutes core areas, 2 hours GTA. Temporary tarping, blue tarp installation, temporary leak sealing prevents interior damage until permanent repairs.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Recent Heart Lake storm response: 47 roofs protected within 24 hours, $2.8M interior damage prevented. Direct insurance billing available.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Paradise Roofers */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Award className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Brampton Homeowners Choose Paradise Roofers?</h2>
                            <p className="text-lg font-medium text-muted-foreground">2,800+ Brampton roofs protected since 2005</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Local Brampton Crews",
                                icon: Users,
                                desc: "Live in Peel Region, understand clay soils and local building challenges unique to Brampton."
                            },
                            {
                                title: "4.9★ 450+ Google Reviews",
                                icon: Star,
                                desc: "Actual Brampton homeowners rating our work, not fake reviews from other cities."
                            },
                            {
                                title: "BBB A+ Accredited",
                                icon: Shield,
                                desc: "Zero complaints since 2005. Better Business Bureau's highest rating for customer service."
                            },
                            {
                                title: "GAF Master Elite Contractor",
                                icon: Award,
                                desc: "Top 3% North America. Only contractors meeting strict quality and training standards."
                            },
                            {
                                title: "Free Drone Inspections",
                                icon: Eye,
                                desc: "$350 value standard with every estimate. 4K thermal imaging finds hidden problems."
                            },
                            {
                                title: "TRCA/Region of Peel Compliant",
                                icon: CheckCircle2,
                                desc: "All permits handled. Full compliance with local drainage and building requirements."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-xl border border-border hover:border-[#FF9C45] transition-colors">
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

            {/* Brampton Roofing Coverage */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4 text-center">Brampton Roofing Coverage</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-center">Comprehensive service across all Brampton neighborhoods</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="h-6 w-6 text-[#FF9C45]" />
                                <h3 className="font-bold text-lg">Priority Response (90 minutes)</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Mount Pleasant</li>
                                <li>• Fletcher's Meadow</li>
                                <li>• Bramalea North</li>
                                <li>• Credit Valley</li>
                                <li>• Snelgrove</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="h-6 w-6 text-[#FF9C45]" />
                                <h3 className="font-bold text-lg">2-Hour Response</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Heart Lake</li>
                                <li>• Springdale</li>
                                <li>• Madoc</li>
                                <li>• Northwest Brampton</li>
                                <li>• Bramalea GO Area</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="h-6 w-6 text-[#FF9C45]" />
                                <h3 className="font-bold text-lg">Same-Week Service</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• All Brampton postal codes</li>
                                <li>• L6P-L6Z coverage</li>
                                <li>• 2,800+ roofs protected</li>
                                <li>• Since 2005</li>
                                <li>• Fully Peel Region compliant</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                Brampton Neighborhoods We Serve
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Downtown Brampton</span>
                                <span>• Bramalea</span>
                                <span>• Heart Lake</span>
                                <span>• Sandalwood</span>
                                <span>• Springdale</span>
                                <span>• Creditview</span>
                                <span>• Castlemore</span>
                                <span>• Churchville</span>
                                <span>• Mount Pleasant</span>
                                <span>• Fletcher's Meadow</span>
                                <span>• Credit Valley</span>
                                <span>• Snelgrove</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <Phone className="h-5 w-5 text-[#FF9C45]" />
                                Contact Our Brampton Team
                            </h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p><strong>Phone:</strong> (647) 555-0123</p>
                                <p><strong>Email:</strong> brampton@paradiseroofers.com</p>
                                <p><strong>Emergency:</strong> Available 24/7</p>
                                <p><strong>Free Estimates:</strong> Same day scheduling</p>
                                <p><strong>Coverage:</strong> All Brampton postal codes L6P-L6Z</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "Average roof replacement cost Brampton?", a: "$22K-$38K typical bungalow/semi. Includes tear-off, ice shield, R50 insulation, 40-year shingles." },
                            { q: "Brampton building permits required?", a: "Yes, we handle complete Peel Region permitting, inspections scheduled." },
                            { q: "Ice dams covered by insurance?", a: "No, considered maintenance. Proper soffit/insulation prevents permanent damage." },
                            { q: "How soon is emergency service in Brampton?", a: "90 minutes Mount Pleasant/Fletcher's, 2 hours balance of city." }
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
            </section>

            <ContactForm />
        </Layout>
    );
}