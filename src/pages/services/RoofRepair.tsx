import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Droplets, Wind, Snowflake, AlertTriangle, Home, Ruler, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import roofRepair from "@/assets/Home_page/RoofRepairServices.webp";
import completedRoof from "@/assets/completed-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import roofCoating from "@/assets/roof-coating.jpg";
import roofingBanner from "@/assets/roofers-banner.jpg";

export default function RoofRepair() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Roof Repair Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Roof Repair Services<br />
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Roof leaking during Toronto's next winter storm? Missing shingles after high winds? Ice dams melting into your attic?
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our licensed Toronto roof repair specialists fix all roof problems fast with FREE drone inspections, same-day emergency service, and complete insurance claim assistance across Toronto, Mississauga, Vaughan, and the entire GTA.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get a Free Quote <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofRepair} alt="Roof Inspection" className="w-full h-full object-cover object-[center_20%]" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">20+ years of experience</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Certified Contractor</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Star className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Voted best roofers in GTA</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Don't let small roof issues become expensive emergencies. Our 20+ years of experience fixing GTA roofs means we solve roof leaks, shingle damage, fascia rot, ice dams, and storm damage permanently the first time. From single shingle replacement to complete soffit/gutter/fascia restoration, we handle every Toronto roof repair with zero mess and 5-year workmanship warranties.
                        </p>
                    </div>
                </div>
            </section>

            {/* Common Problems Section */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <AlertTriangle className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Common Toronto Roof Problems</h2>
                            <p className="text-lg font-medium text-muted-foreground">Toronto's extreme weather creates unique roof challenges. Here's what we fix daily:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Roof Leaks & Water Intrusion",
                                icon: Droplets,
                                points: [
                                    "Interior: Ceiling stains, bubbling paint",
                                    "Exterior: Cracked valley shingles, flashing failure",
                                    "Common: Freeze-thaw seal cracks"
                                ]
                            },
                            {
                                title: "2. Wind & Storm Damage",
                                icon: Wind,
                                points: [
                                    "Missing shingles from 100+ km/h winds",
                                    "Hail damage & granule loss",
                                    "Punctures from falling branches"
                                ]
                            },
                            {
                                title: "3. Ice Dam Formation",
                                icon: Snowflake,
                                points: [
                                    "Melting snow refreezing at eaves",
                                    "Backs up under shingles causing floods",
                                    "Fix: Ice/water shield & soffit vents"
                                ]
                            },
                            {
                                title: "4. Fascia & Soffit Rot",
                                icon: Home,
                                points: [
                                    "Humid Toronto summers rot wood fascia",
                                    "Soffit failure traps moisture",
                                    "Fix: Aluminum fascia + continuous vents"
                                ]
                            },
                            {
                                title: "5. Gutter System Failures",
                                icon: AlertTriangle,
                                points: [
                                    "Disconnected downspouts",
                                    "Overflow from clogs or bad slope",
                                    "Fix: Seamless gutters + leaf guards"
                                ]
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <item.icon className="h-6 w-6 text-[#FF9C45]" />
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {item.points.map((pt, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Services Grid */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Complete Roof Repair Services – GTA & Toronto</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">We don't just patch roofs. We provide complete exterior restoration protecting your Toronto home from top to bottom:</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                title: "Free Roof Drone Inspection", 
                                desc: "What Our Drones Find: Shingle granule loss patterns indicating UV damage, Soft spots signaling deck rot, Tree branch overhang risks, Ice dam formation zones, Flashing deterioration around chimneys/vents/skylights. What You Receive: 4K video tour, detailed PDF report, repair cost breakdown, insurance-ready documentation – all FREE" 
                            },
                            { title: "Precision Leak Detection", desc: "Thermal imaging and moisture meters identify water migration and pinpoint entry points for permanent repair." },
                            { title: "Shingle Repair & Replacement", desc: "Wind damage fix with color-matched materials, granule loss repair, and ridge cap replacement." },
                            { title: "24/7 Emergency Service", desc: "Active leak response (2-hr arrival), tarping, storm damage board-up, and insurance documentation." },
                            { title: "Fascia Repair", desc: "Rotten wood replacement with pressure-treated or PVC boards, custom flashing to prevent future rot." },
                            { title: "Professional Soffit Repair", desc: "Continuous soffit vents installation (50% net free area) to solve attic moisture problems." },
                            { title: "Gutter System Upgrade", desc: "Seamless aluminum gutters (5\" or 6\"), leaf guard systems, and proper slope certification." },
                            { title: "Interior Renovation", desc: "Drywall replacement, ceiling repair, insulation restoration, and premium painting for leak damage." }
                        ].map((service, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border hover:border-[#FF9C45] transition-colors">
                                <CheckCircle2 className="h-8 w-8 text-[#FF9C45] mb-3" />
                                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Decision Matrix */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8 text-center">Roof Repair vs. Replacement Decision Matrix</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-border">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Roof Age</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Damage %</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Annual Repairs</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Best Solution</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Cost Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">0-8 yrs</td>
                                    <td className="px-6 py-4">&lt;10%</td>
                                    <td className="px-6 py-4">$0-$500</td>
                                    <td className="px-6 py-4 font-bold text-green-600 uppercase">Targeted Repair</td>
                                    <td className="px-6 py-4">$1,500 - $5,000</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">8-12 yrs</td>
                                    <td className="px-6 py-4">10-25%</td>
                                    <td className="px-6 py-4">$500-$1,500</td>
                                    <td className="px-6 py-4 font-bold text-yellow-600 uppercase">Strategic Repair</td>
                                    <td className="px-6 py-4">$4,000 - $12,000</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">12-18 yrs</td>
                                    <td className="px-6 py-4">25-50%</td>
                                    <td className="px-6 py-4">$1,500+</td>
                                    <td className="px-6 py-4 font-bold text-orange-600 uppercase">Repair + Monitor</td>
                                    <td className="px-6 py-4">$8,000 - $18,000</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">18+ yrs</td>
                                    <td className="px-6 py-4">50%+</td>
                                    <td className="px-6 py-4">$2,000+</td>
                                    <td className="px-6 py-4 font-bold text-red-600 uppercase">Full Replacement</td>
                                    <td className="px-6 py-4">$20,000+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Proven 4-Step Repair Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Emergency Assessment & Drone",
                                time: "(2 Hours)",
                                desc: "Fully equipped truck with drone apprival. 4K footage, moisture detection. Tarping for active leaks immediately."
                            },
                            {
                                step: "02",
                                title: "Transparent Repair Proposal",
                                time: "(1 Hour)",
                                desc: "Digital quote with itemized costs. 3 Options: Economy, Better, Premium materials. Financing & Insurance ready."
                            },
                            {
                                step: "03",
                                title: "Precision Repair Execution",
                                time: "(Same Day - 2 Days)",
                                desc: "Specialized 2-4 man crews. Roof brackets, harnesses, magnetic booties. Progress photos sent via text."
                            },
                            {
                                step: "04",
                                title: "Quality Inspection & Warranty",
                                time: "Post-Work",
                                desc: "Walkthrough verify every repair. Water hose test. 5-year workmanship + material warranty activation."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="text-5xl font-black text-[#FF9C45]/20 font-mono">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <span className="text-sm font-bold text-[#FF9C45] uppercase tracking-wider mb-2 block">{item.time}</span>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Real Toronto Repair Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Leaside Century Home Skylight",
                                img: roofCoating,
                                problem: "Leaking skylight caused 200 sq.ft. ceiling collapse",
                                result: "Complete rebuild, copper flashing, 0 callbacks."
                            },
                            {
                                title: "Scarborough Ice Dam Nightmare",
                                img: roofingBanner,
                                problem: "8\" ice dam, attic flooding, $15K damage",
                                result: "Zero ice dams next winter, 28% hydro savings."
                            },
                            {
                                title: "Etobicoke 120km/h Wind Storm",
                                img: completedRoof,
                                problem: "200+ shingles blown off after gust front",
                                result: "Color-matched GAF replacement, insurance approved."
                            },
                            {
                                title: "North York Fascia/Soffit Rot",
                                img: metalRoof,
                                problem: "Complete rot causing foundation washout",
                                result: "Like-new exterior, proper drainage restored."
                            }
                        ].map((story, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 h-48 md:h-auto bg-muted">
                                    <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                    <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                                    <div className="space-y-1 text-sm">
                                        <p><span className="font-bold text-red-600">Problem:</span> {story.problem}</p>
                                        <p><span className="font-bold text-green-600">Result:</span> {story.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage & FAQs */}
            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl space-y-20">

                    {/* Coverage */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                Toronto Neighborhoods
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• North York (Bayview, Don Mills)</span>
                                <span>• Scarborough (Agincourt, Woburn)</span>
                                <span>• Etobicoke (Kingsway, Mimico)</span>
                                <span>• East York (Leaside, Danforth)</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                GTA Cities
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Mississauga (Erin Mills, Port Credit)</span>
                                <span>• Vaughan (Woodbridge, Maple)</span>
                                <span>• Markham (Unionville, Wismer)</span>
                                <span>• Richmond Hill & Oakville 24/7</span>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "Do you offer free roof inspections in Toronto?", a: "YES, Free drone inspections valued at $200 for all Toronto/GTA properties regardless of condition." },
                                { q: "How long does professional roof installation take?", a: "Asphalt shingles: 1-2 days." },
                                { q: "What Toronto building code requirements do you follow?", a: "Full compliance including ice barrier (36\" from eaves), high wind nailing (160km/h), proper flashing at all penetrations." },
                                { q: "Do you handle insurance storm damage claims?", a: "Yes, Paradise Roofers assist insurance cases under storm care program" },
                                { q: "Can you repair interior water damage too?", a: "Yes, full interior renovations including drywall, ceilings, painting, insulation replacement." },
                                { q: "How much does roof repair cost in Toronto 2026?", a: "$500-$15,000 typical range. Single shingle: $300. Leak repair: $800-$3,500. Fascia/Soffit: $8K-$15K." },
                                { q: "Do you offer emergency roof repair in Toronto?", a: "YES – 24/7 service. 2-hour response for active leaks. Tarping and temporary sealing included." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border">
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
