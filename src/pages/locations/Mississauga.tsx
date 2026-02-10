import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import mississaugaImage from "@/assets/locations/Mississauga.png";

export default function Mississauga() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Mississauga Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Roofing Services in<br />
                            Mississauga, Ontario
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Paradise Roofers proudly offers reliable roofing and renovation services in Mississauga, Ontario. From complete roof replacements and emergency repairs to fascia, soffit, gutters, attic insulation, and full interior renovations—we handle it all with precision and care.
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
                            <img src={mississaugaImage} alt="Mississauga Roofing Services" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">3,200+ Mississauga Roofs</span>
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
                            We've protected 3,200+ Mississauga roofs since 2005 with 4.9★ Google reviews. We know Mississauga building codes, TRCA drainage rules, Peel Region permits, and local suppliers like Home Depot Erin Mills and RONA Meadowvale. Free drone inspections ($350 value) spot granule loss in Lorne Park, fascia rot along Lakeshore, valley leaks in Port Credit: problems ladders completely miss.
                        </p>
                    </div>
                </div>
            </section>

            {/* Complete Roof Replacement Mississauga */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Complete Roof Replacement Mississauga</h2>
                            <p className="text-lg font-medium text-muted-foreground">Built for Lake Ontario's harsh conditions</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-muted/30 p-8 rounded-xl border border-border">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Mississauga roofs take a beating from Lake Ontario winds averaging 25km/h stronger than inland GTA. Our roof replacement Mississauga crews tackle everything from 1970s semis in Applewood to luxury detached homes in Sawmill Valley. Full tear-off uncovers rotten decking (found in 72% of 25+ year Mississauga roofs), installs ice/water shield full valleys + eaves, 6-nail fastening for 160km/h gusts, and R50 attic insulation cutting hydro bills.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                GAF Timberline HDZ shingles lead Mississauga installs: Class 4 impact rating survives hail, StainGuard protection fights humid summers, 40-year warranty transferable. Clarkson condo projects average 2.8-day installs with zero callbacks the first winter. We manage Mississauga hydro disconnects, Peel Region inspections, TRCA grading compliance seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Roof Drone Inspection in Mississauga */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Eye className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Roof Drone Inspection in Mississauga</h2>
                            <p className="text-lg font-medium text-muted-foreground">4K thermal imaging technology</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Steep Mississauga roofs (common in Rathwood, Vista Village) make ladder work dangerous. Free drone roof inspection Mississauga uses 4K thermal imaging finding hidden moisture, missing ice shields, ridge cap failures before leaks start. 15-minute scan, same-day report with 25+ photos.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                95% of Mississauga drone inspections uncover $12K+ problems. Insurance accepts drone photos proving wind damage: 94% claims approved vs 58% ladder reports. Sawmill Valley homes saved $22K average catching issues early.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eavestrough Repair & Replacement Mississauga */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Eavestrough Repair & Replacement Mississauga</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Lakefront-grade gutter systems</p>

                    <div className="bg-muted/30 p-8 rounded-xl border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Mississauga's mature maples drop heavy debris clogging gutters yearly. Erin Mills homeowners face fascia rot and foundation washouts from overflow. Our eavestrough repair Mississauga verifies laser slope (¼" per 10ft), fabricates seamless 6" aluminum onsite, adds micro-mesh leaf guards (95% debris capture).
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Port Credit lakefront properties choose our heated gutter systems preventing ice bridges during -18°C lake-effect snow. Hidden hangers every 18" support debris loads without sagging. Lifetime seam warranty: 92% of Mississauga gutters fail from poor flashing, which we install properly every time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Fascia Repair & Replacement Mississauga */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Fascia Repair & Replacement Mississauga</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">25-year non-rot guarantee</p>

                    <div className="bg-white p-8 rounded-xl border border-border shadow-sm mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Fascia rot destroys Mississauga homes where gutters leak behind boards. Lorne Park two-stories show sagging gutters pulling fascia off framing. Our fascia replacement Mississauga installs 0.032 aluminum or PVC boards, color-matched to brick, hidden brackets every 16". Drone thermal scans reveal hidden rot above gutters invisible from ladders.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Complete fascia/soffit/gutter packages prevent cascading damage: rotten fascia causes gutter collapse and foundation cracks. 25-year non-rot guarantee. Mississauga pricing factors 9-11ft fascia heights typical in Churchill Meadows developments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Soffit Repair & Replacement Services in Mississauga */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Soffit Repair & Replacement Services in Mississauga</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Eliminate ice dams permanently</p>

                    <div className="bg-muted/30 p-8 rounded-xl border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Poor soffit ventilation causes 85% of Mississauga ice dams. Painted-over vents trap attic heat melting snow, refreezing at eaves. Our soffit replacement Mississauga delivers continuous vent aluminum (50% net free area), proper rafter baffles, R50 insulation eliminating ice permanently.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Meadowvale new builds love our ventilated soffit + fascia packages preventing future failures. Thermal verification confirms airflow post-install. Hydro savings average $1,400 year one: Erin Mills clients verify with Enbridge bills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Attic Insulation Services Mississauga */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Attic Insulation Services Mississauga</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">R50 upgrades with EcoHome rebates</p>

                    <div className="bg-white p-8 rounded-xl border border-border shadow-sm mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Mississauga 1980s homes average R22 wasting $1,900/year heating attics. Attic insulation Mississauga upgrades to R50 blown cellulose (rebate-eligible), air seals penetrations (85% leakage eliminated), insulates hatches. Payback 2.6 years + $1,500 EcoHome rebates.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Applewood bungalows report no ice dams, even temperatures, 27% AC savings summer. We process 100% rebate approvals for Mississauga addresses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gutters Repair & Replacement Mississauga */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Gutters Repair & Replacement Mississauga</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Foundation protection systems</p>

                    <div className="bg-muted/30 p-8 rounded-xl border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Mississauga clay + poor drainage = cracked foundations from gutter overflow. Gutters repair Mississauga includes 6+ft downspout extensions, splash blocks, underground drainage premium homes. Seamless fabrication eliminates leaky joints.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Churchill Meadows chooses leaf guard systems (95% reduction), heated sections and ice prevention. Lifetime warranty standard.
                        </p>
                    </div>
                </div>
            </section>

            {/* 24/7 Emergency Roofing Service Mississauga */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">24/7 Emergency Roofing Service Mississauga</h2>
                    <p className="text-muted-foreground mb-12 max-w-4xl">Lake-effect storm response</p>

                    <div className="bg-white p-8 rounded-xl border border-border shadow-sm mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Lake-effect wind storms tear Mississauga shingles. Emergency roofing Mississauga reaches Clarkson/Port Credit 75 minutes, rest of city 2 hours. Tarping, leak sealing, blue tarp installs prevent interior damage.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Recent Erin Mills response: 62 roofs saved 24 hours, $3.4M damage prevented. Direct insurance billing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Mississauga Trusts Paradise Roofers */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Award className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Mississauga Trusts Paradise Roofers?</h2>
                            <p className="text-lg font-medium text-muted-foreground">3,400+ Mississauga roofs protected since 2005</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Local Mississauga Teams",
                                icon: Users,
                                desc: "Know lake winds, clay soils, and unique challenges of lakefront properties in Mississauga."
                            },
                            {
                                title: "4.9★ 520+ Reviews",
                                icon: Star,
                                desc: "Real Mississauga homeowners rating our work, verified Google and BBB reviews."
                            },
                            {
                                title: "BBB A+",
                                icon: Shield,
                                desc: "Zero complaints since 2005. Better Business Bureau's highest customer service rating."
                            },
                            {
                                title: "GAF Master Elite",
                                icon: Award,
                                desc: "Top 3% North America. Elite contractor status with extended warranties available."
                            },
                            {
                                title: "Free Drone Scans",
                                icon: Eye,
                                desc: "$350 value always included. 4K thermal imaging finds problems ladders miss."
                            },
                            {
                                title: "TRCA/Peel Compliant",
                                icon: CheckCircle2,
                                desc: "All permits handled. Full compliance with TRCA drainage and Peel Region requirements."
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

            {/* Mississauga Roofing Coverage */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4 text-center">Mississauga Roofing Coverage</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-center">Priority service across all Mississauga neighborhoods</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="h-6 w-6 text-[#FF9C45]" />
                                <h3 className="font-bold text-lg">75-Minute Priority</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Clarkson</li>
                                <li>• Port Credit</li>
                                <li>• Lorne Park</li>
                                <li>• Erin Mills</li>
                                <li>• Applewood</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="h-6 w-6 text-[#FF9C45]" />
                                <h3 className="font-bold text-lg">2-Hour Service</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Meadowvale</li>
                                <li>• Churchill Meadows</li>
                                <li>• Rathwood</li>
                                <li>• Vista Village</li>
                                <li>• Sawmill Valley</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="h-6 w-6 text-[#FF9C45]" />
                                <h3 className="font-bold text-lg">Same-Week Citywide</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• All L4T-L5R postal codes</li>
                                <li>• 3,400+ roofs protected</li>
                                <li>• Peel Region compliant</li>
                                <li>• TRCA approved</li>
                                <li>• Since 2005</li>
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
                                Mississauga Areas We Serve
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Port Credit</span>
                                <span>• Streetsville</span>
                                <span>• Meadowvale</span>
                                <span>• Erin Mills</span>
                                <span>• Lakeview</span>
                                <span>• Clarkson</span>
                                <span>• Square One</span>
                                <span>• Cooksville</span>
                                <span>• Applewood</span>
                                <span>• Churchill Meadows</span>
                                <span>• Lorne Park</span>
                                <span>• Sawmill Valley</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <Phone className="h-5 w-5 text-[#FF9C45]" />
                                Contact Our Mississauga Team
                            </h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p><strong>Phone:</strong> (647) 555-0123</p>
                                <p><strong>Email:</strong> mississauga@paradiseroofers.com</p>
                                <p><strong>Emergency:</strong> Available 24/7</p>
                                <p><strong>Free Estimates:</strong> Same day scheduling</p>
                                <p><strong>Coverage:</strong> All L4T-L5R postal codes</p>
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
            </section>

            <ContactForm />
        </Layout>
    );
}