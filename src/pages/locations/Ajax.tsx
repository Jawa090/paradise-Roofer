import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Clock, Eye, Wrench, Hammer, Snowflake, Zap, Building } from "lucide-react";
import { Link } from "react-router-dom";
import ajaxImage from "@/assets/locations/Ajax.png";

export default function Ajax() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Ajax Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Ajax Roofing<br />
                            Services
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Searching "roofing Ajax Ontario"? We cover Ajax North, McLean, Southwood, Hermitage with complete solutions for ice dams, wind damage, flat roof leaks, skylight repairs. Free drone inspections. 24 years experience. 4.9★ reviews.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Ajax homeowners deal with Lake Ontario lake-effect snow that creates massive problems. Ajax North mature neighborhoods suffer ice dams from heavy moisture. McLean bungalows lose shingles in 100km/h winds. Southwood families find attic mold from poor ventilation. Hermitage commercial plazas battle flat roof ponding.
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
                            <img src={ajaxImage} alt="Ajax Roofing Services" className="w-full h-full object-cover" />
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
                        <h2 className="text-2xl font-bold uppercase mb-4">Why do Ajax Roofs Face Harsh Lake Ontario Winters?</h2>
                        <p className="text-lg text-muted-foreground">
                            Ajax homeowners deal with Lake Ontario lake-effect snow that creates massive problems. Ajax North mature neighborhoods suffer ice dams from heavy moisture. McLean bungalows lose shingles in 100km/h winds. Southwood families find attic mold from poor ventilation. Hermitage commercial plazas battle flat roof ponding.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Replacement Ajax – Complete System Upgrade</h2>
                            <p className="text-lg font-medium text-muted-foreground">3-layer tear-offs meeting Ontario Building Code</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            We do full 3-layer tear-offs (Ontario Building Code required) exposing common issues:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white p-4 rounded-lg border border-border">
                                <p className="text-sm text-muted-foreground">• Rotten plywood from chronic leaks</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-border">
                                <p className="text-sm text-muted-foreground">• Missing ice & water shield</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-border">
                                <p className="text-sm text-muted-foreground">• Poorly nailed shingles from past work</p>
                            </div>
                        </div>
                        
                        <h3 className="font-bold text-xl mb-4">Every Ajax replacement includes:</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Owens Corning Duration shingles (Class 4 hail resistance, 130mph wind)</p>
                                <p>• R60 attic insulation ($1,900 energy rebates)</p>
                                <p>• Chimney cricket flashing (stops ice backups)</p>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Skylight step flashing (leak prevention)</p>
                                <p>• Complete ridge ventilation (mold protection)</p>
                                <p>• Ajax North bungalow: Finished in 2.3 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Wrench className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Repair Ajax – Precision Fixes That Last</h2>
                            <p className="text-lg font-medium text-muted-foreground">Common Ajax repairs we handle daily</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Top Winter Issues</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Wind-lifted shingles (top winter issue)</p>
                                <p>• Valley leaks from leaves/debris</p>
                                <p>• Ridge cap failures from freeze-thaw</p>
                                <p>• Raccoon/squirrel damage to vents</p>
                                <p>• Moss treatment with 14-year zinc strips</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Quality Solutions</h3>
                            <p className="text-muted-foreground">
                                Professional repairs using premium materials with comprehensive warranties. Our precision approach saves Ajax homeowners thousands compared to unnecessary full replacements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Hammer className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough Installation Ajax – Total Debris Protection</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lifetime seamless aluminum | 98% leaf-free guarantee</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Ajax's heavy tree coverage clogs gutters fast. Our system includes:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">7-8" seamless aluminum gutters (site-poured)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Heated downspouts (activates below 2°C)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Gutter Helmet guards (98% debris capture)</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Laser slope measurement (1/4" per 10')</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Stainless brackets every 14" (450lb rating)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Hermitage luxury homes: copper half-round option</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Building className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Flat Roof Repair Ajax – Commercial Specialist</h2>
                            <p className="text-lg font-medium text-muted-foreground">TPO/EPDM systems | 40-year warranties</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Harwood commercial strip stores get same-day leak patches for:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Ponding water from poor slope</p>
                                <p>• TPO seam splits</p>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• EPDM shrinkage</p>
                                <p>• Parapet wall leaks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Zap className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Emergency Roofing Ajax</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response across all Ajax neighborhoods</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">Priority Response Times</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p><strong>55 mins:</strong> Ajax North, McLean, Southwood, Hermitage</p>
                                <p><strong>85 mins:</strong> Downtown Ajax, Carruthers, Lake Ridge</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">Emergency Protection</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• 18-mil heavy tarps (75mph wind rated)</p>
                                <p>• Blue membrane + industrial sealants FREE</p>
                                <p>• Last Ajax hail event: Protected 71 roofs</p>
                            </div>
                        </div>
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
                            <p className="text-lg font-medium text-muted-foreground">4K thermal technology reveals invisible problems</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Our 4K thermal drones reveal invisible problems. What we find every day in Ajax:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Chimney mortar moisture trails</p>
                                <p>• Flat roof ponding patterns</p>
                                <p>• Skylight seal deterioration</p>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Ice dam attic heat patterns</p>
                                <p>• Squirrel chew marks on pipes</p>
                                <p>• Detects damage 6-12 months BEFORE water stains appear inside</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">Ajax Neighborhood Response Times</h2>
                    
                    <div className="overflow-x-auto mb-12">
                        <table className="w-full bg-white border border-border rounded-lg">
                            <thead className="bg-[#F9F9F9]">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold">Neighborhood</th>
                                    <th className="px-6 py-4 text-left font-bold">Emergency</th>
                                    <th className="px-6 py-4 text-left font-bold">Inspection</th>
                                    <th className="px-6 py-4 text-left font-bold">Postal Code</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="px-6 py-4 font-medium">Ajax North</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">55 mins</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">Same Day</td>
                                    <td className="px-6 py-4 text-muted-foreground">L1T</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">McLean</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">55 mins</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">Same Day</td>
                                    <td className="px-6 py-4 text-muted-foreground">L1S</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Southwood</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">55 mins</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">Same Day</td>
                                    <td className="px-6 py-4 text-muted-foreground">L1S</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Hermitage</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">55 mins</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">Same Day</td>
                                    <td className="px-6 py-4 text-muted-foreground">L1Z</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Downtown Ajax</td>
                                    <td className="px-6 py-4 text-muted-foreground">85 mins</td>
                                    <td className="px-6 py-4 text-muted-foreground">Next Day</td>
                                    <td className="px-6 py-4 text-muted-foreground">L1T</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Carruthers</td>
                                    <td className="px-6 py-4 text-muted-foreground">85 mins</td>
                                    <td className="px-6 py-4 text-muted-foreground">Next Day</td>
                                    <td className="px-6 py-4 text-muted-foreground">L1S</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Lake Ridge</td>
                                    <td className="px-6 py-4 text-muted-foreground">85 mins</td>
                                    <td className="px-6 py-4 text-muted-foreground">Next Day</td>
                                    <td className="px-6 py-4 text-muted-foreground">L1Z</td>
                                </tr>
                            </tbody>
                        </table>
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Ajax Trusts Paradise Roofers?</h2>
                            <p className="text-lg font-medium text-muted-foreground">Proven track record and local expertise</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "24+ Years Ajax Experience", icon: Award, desc: "Local roofing experience serving Ajax since 2005, understanding Durham Region challenges" },
                            { title: "4.9★ Google Reviews", icon: Star, desc: "600+ local reviews from satisfied customers across all Ajax neighborhoods" },
                            { title: "BBB A+ Perfect Record", icon: CheckCircle2, desc: "Perfect record since 2005 with Better Business Bureau, zero complaints" },
                            { title: "Owens Corning Preferred", icon: Shield, desc: "Preferred contractor status with exclusive access to premium materials" },
                            { title: "97% Insurance Success", icon: Home, desc: "97% insurance claim success rate with comprehensive drone documentation" },
                            { title: "Zero Callbacks Guaranteed", icon: Clock, desc: "Zero callbacks first winter guaranteed with $1,900 energy rebate assistance" }
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
                    <h2 className="text-3xl font-bold uppercase mb-8">2026 Ajax Roofing Costs (Exact Pricing)</h2>
                    
                    <div className="overflow-x-auto mb-12">
                        <table className="w-full bg-white border border-border rounded-lg">
                            <thead className="bg-[#F9F9F9]">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold">Project Type</th>
                                    <th className="px-6 py-4 text-left font-bold">Price Range</th>
                                    <th className="px-6 py-4 text-left font-bold">Warranty</th>
                                    <th className="px-6 py-4 text-left font-bold">Insurance Eligible</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="px-6 py-4 font-medium">Bungalow (1,800sf)</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">$28K-$38K</td>
                                    <td className="px-6 py-4">40 years</td>
                                    <td className="px-6 py-4 text-green-600">✅ Hail/Wind</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Two-Story (2,500sf)</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">$38K-$55K</td>
                                    <td className="px-6 py-4">40 years</td>
                                    <td className="px-6 py-4 text-green-600">✅ Hail/Wind</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Flat Roof (1,000sf)</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">$22K-$32K</td>
                                    <td className="px-6 py-4">40 years</td>
                                    <td className="px-6 py-4 text-green-600">✅ Leaks/Ponding</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Roof Repairs</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">$2K-$8K</td>
                                    <td className="px-6 py-4">25 years</td>
                                    <td className="px-6 py-4 text-green-600">✅ Partial Claims</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium">Eavestroughs</td>
                                    <td className="px-6 py-4 text-[#FF9C45] font-bold">$8K-$15K</td>
                                    <td className="px-6 py-4">Lifetime</td>
                                    <td className="px-6 py-4 text-green-600">✅ Overflow</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-[#F9F9F9] p-6 rounded-lg border border-border text-center">
                        <p className="text-lg font-bold text-muted-foreground">
                            Hail/wind claims approved 97% with our drone proof.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-red-500 rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Snowflake className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Ajax Roof Danger Signs (Call Immediately)</h2>
                            <p className="text-lg font-medium text-muted-foreground">Act fast if you notice:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Ceiling Stains", desc: "Paint bubbles or water stains appearing on interior ceilings" },
                            { title: "Missing Shingles", desc: "Shingles blown off after wind storms or severe weather" },
                            { title: "Granule Loss", desc: "Granules accumulating in gutters indicating shingle wear" },
                            { title: "Animal Activity", desc: "Raccoons or squirrels accessing attic through roof damage" },
                            { title: "Ice Dams", desc: "Ice dams >3\" along eaves causing water backup" },
                            { title: "Emergency Needed", desc: "Any active leaks or structural damage requiring immediate attention" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-red-200 hover:border-red-400 transition-colors">
                                <h3 className="font-bold text-lg mb-2 text-red-600">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                            <p className="text-lg font-bold text-red-600 mb-4">
                                Don't wait - roof problems get worse fast in Ajax's harsh climate!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:+16475550123" className="bg-red-500 text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5" />
                                    Emergency: (647) 555-0123
                                </a>
                                <Link to="/contact">
                                    <button className="bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Free Inspection <ArrowRight className="h-4 w-4" strokeWidth={3} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </Layout>
    );
}