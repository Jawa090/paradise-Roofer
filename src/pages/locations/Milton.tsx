import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye, Wrench, Hammer, Snowflake, Wind, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import miltonImage from "@/assets/locations/Milton.png";

export default function Milton() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Milton Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Roofing Services in<br />
                            Milton, Ontario
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Paradise Roofers proudly offers reliable roofing and renovation services in Milton, Ontario, delivering high-quality workmanship for residential and commercial properties. With years of hands-on experience, our team is committed to protecting, improving, and enhancing your property from the roof down.
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
                            <img src={miltonImage} alt="Milton Roofing Services" className="w-full h-full object-cover" />
                        </div>

                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">1,900+ Roofs Installed</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Escarpment Specialists</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">75-Min Response</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Milton's Niagara Escarpment location creates unique roofing challenges: 120km/h wind gusts, 120cm annual snowfall, clay soil foundation shifts. Paradise Roofers Milton delivers escarpment-engineered roofing systems built to withstand these extreme conditions while protecting your investment.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Complete Roof Replacement Services in Milton</h2>
                            <p className="text-lg font-medium text-muted-foreground">Escarpment-engineered roofing systems built for 120km/h winds and extreme weather</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Milton roofs fail faster due to freeze-thaw cycles and heavy clay soil settlement causing foundation shifts. Our roof replacement Milton crews handle everything from 1970s bungalows in Bramalea North to modern semis in Credit Valley. Complete tear-off reveals rotten plywood decking (found in 68% of Milton roofs over 20 years old), installs R50 attic insulation, proper ice/water shield (42" eaves coverage per Ontario code) and 6-nail shingle fastening for 160km/h winds.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            GAF Timberline HDZ architectural shingles dominate Milton installations – impact-resistant for hail, StainGuard moss protection for humid summers, 40-year warranty. Recent Mount Pleasant subdivision projects averaged 2.5-day installs with zero ice dams reported in the first winter. We coordinate Peel Region building permits, Milton hydro disconnects, and TRCA lot grading compliance during every replacement.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Roof Drone Inspection Milton</h2>
                            <p className="text-lg font-medium text-muted-foreground">Steep Milton roofs made safe with 4K thermal imaging technology</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Steep Milton roofs (common in Snelgrove, Madoc) make ladder inspections dangerous. Our free drone roof inspection Milton uses 4K thermal imaging revealing hidden valley leaks, granule loss patterns, missing ice shields before interior damage occurs. 15-minute process, same-day digital report with 25+ timestamped photos.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            98% of Milton drone inspections find problems costing $15K+ if ignored. Insurance companies accept drone photos proving wind/hail damage: 92% claims approved vs 60% ladder inspections. Mount Pleasant homeowners saved $18K each catching valley cracks early.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Milton Eavestrough Systems</h2>
                            <p className="text-lg font-medium text-muted-foreground">Heavy-duty gutters engineered for escarpment rainfall and snowmelt</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">6" Commercial Grade Gutters</h3>
                            <p className="text-muted-foreground">
                                Milton's escarpment location creates extreme water volume during spring snowmelt and summer storms. Standard 5" gutters overflow, causing foundation damage. Our 6" commercial-grade aluminum systems handle 40% more water flow, preventing basement flooding common in clay soil areas like Scott and Britannia neighborhoods.
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Heated Gutter Guards</h3>
                            <p className="text-muted-foreground">
                                Milton's 120cm annual snowfall creates ice dam problems. Our heated gutter guard systems prevent ice buildup while blocking leaves from Credit Valley's mature trees. Self-regulating heat cables activate at 38°F, melting ice before dams form. 15-year warranty, 60% energy savings vs traditional heat tape.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Fascia & Soffit Milton</h2>
                            <p className="text-lg font-medium text-muted-foreground">Wind-resistant fascia systems for escarpment conditions</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Milton's 120km/h escarpment winds destroy standard fascia boards. Clay soil foundation shifts stress fascia connections, creating gaps where wind-driven rain penetrates. Our reinforced aluminum fascia systems use hidden fasteners and expansion joints handling foundation movement without failure.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Vented soffit systems crucial for Milton's humid summers prevent attic moisture buildup causing mold in R50 insulation. Continuous soffit ventilation paired with ridge vents creates proper airflow, extending shingle life 40% in Milton's challenging climate. Derry Green heritage homes require custom color matching – we stock 12 standard colors plus custom fabrication.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Milton Attic Insulation R50</h2>
                            <p className="text-lg font-medium text-muted-foreground">Escarpment-grade insulation for extreme temperature swings</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">R50 Blown-In Cellulose</h3>
                            <p className="text-muted-foreground">
                                Milton's escarpment location creates 30°C temperature swings between day/night. Standard R40 insulation fails, causing ice dams and $400+ monthly heating bills. Our R50 blown-in cellulose insulation reduces heating costs 35%, prevents ice dams, qualifies for $5,000 Canada Greener Homes rebates.
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Vapor Barrier Upgrade</h3>
                            <p className="text-muted-foreground">
                                Milton's clay soil creates high humidity affecting attic spaces. Damaged vapor barriers cause condensation, mold, and insulation failure. Our 6-mil polyethylene vapor barrier installation with sealed joints prevents moisture infiltration, extending insulation life 20+ years in Milton's humid climate.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">24/7 Emergency Roofing Milton</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response for storm damage and urgent repairs</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Milton's escarpment location faces sudden severe weather: microbursts, hail storms, ice storms causing immediate roof damage. Our 24/7 emergency response team reaches Milton locations within 75 minutes, providing temporary repairs preventing interior damage until permanent fixes completed.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Emergency services include: tarp installation, leak stopping, tree removal from roofs, ice dam removal, structural damage assessment. We coordinate directly with insurance adjusters, providing detailed damage reports and repair estimates. 95% of emergency calls resolved same-day, preventing secondary water damage.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Complete Milton Exterior Protection</h2>
                            <p className="text-lg font-medium text-muted-foreground">Integrated roofing, siding, and exterior systems</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Milton's escarpment winds and clay soil movement require integrated exterior protection. Roof, siding, windows, and foundation must work together preventing water infiltration and structural damage. Our complete exterior packages address all vulnerability points, providing comprehensive protection against Milton's challenging climate.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Services include: complete roof systems, vinyl/fiber cement siding, window capping, foundation waterproofing, deck/porch roofing. Single contractor coordination eliminates gaps between trades, ensures proper integration, provides unified warranty coverage. 300+ complete exterior renovations in Milton since 2008.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Milton Coverage Areas & Response Times</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority service zones with guaranteed response times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">75-Minute Priority Zones</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Harrison</span>
                                <span>• Brookville</span>
                                <span>• Derry Green</span>
                                <span>• Scott</span>
                                <span>• Willmott</span>
                                <span>• Thompson</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">90-Minute Standard Service</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Campbellville</span>
                                <span>• Britannia</span>
                                <span>• Tremaine</span>
                                <span>• Derry Road</span>
                                <span>• Milton Heights</span>
                                <span>• Beaty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">Milton Neighborhoods We Serve</h2>
                    
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            "Harrison", "Brookville", "Derry Green", "Scott",
                            "Willmott", "Thompson", "Campbellville", "Britannia", 
                            "Tremaine", "Derry Road", "Milton Heights", "Beaty"
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