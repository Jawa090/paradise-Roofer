import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Shield, MapPin, Eye, FileText, Camera, CheckCircle2, AlertTriangle, CloudRain, Wind, Home, Zap, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import roofInspection from "@/assets/roof-inspection.jpg";

export default function RoofInspection() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Roof Inspection Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            FREE Roof Drone Inspection<br />
                            Toronto & GTA Homeowners
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Worried about your roof but hate the ladder risk? We fly a professional drone over your house for a complete roof check that finds leaks, bad shingles, and ice dam trouble before they cost you thousands.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    $200 service is 100% FREE. No obligation. No hard sell. We do this across Toronto, Mississauga Brampton, Milton, Oakville and everywhere in the GTA. It takes 15 minutes and you get a digital report the same day with pictures showing exactly what we found.
                                </p>
                                <p className="text-lg font-bold text-[#FF9C45]">
                                    Book your FREE drone check now, we only have room for 10 houses per week.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Book Free Inspection <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofInspection} alt="Drone Roof Analysis" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Camera className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">4K High-Res Imagery</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Zero Liability / Safe</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <FileText className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Instant PDF Report</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4">Why Drone Checks Beat Climbing Ladders Every Time</h3>
                        <p className="text-lg text-muted-foreground mb-4">
                            I've climbed more roofs than I can count, and ladders miss most problems. You can't safely walk steep pitches or see behind chimneys. No good photos means no proof for insurance. Plus Toronto rain cancels half the inspections anyway.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Drones fix all that. We get crystal clear 4K pictures of every shingle and flashing. The heat camera finds wet spots under shingles 2 years before your ceiling stains. 36x zoom lets us check ridge caps from 50 feet away – completely safe. Small fixes now save big money later. That's why we do this free.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Shield className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Choose our FREE Roof Drone Inspection</h2>
                            <p className="text-lg font-medium text-muted-foreground">Professional drone service you can trust:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Trained Commercial Drone Pilots",
                                icon: Users,
                                points: [
                                    "Legal requirement compliance",
                                    "Transport Canada certified",
                                    "Professional equipment only"
                                ]
                            },
                            {
                                title: "4.9 Stars from 400+ Reviews",
                                icon: Target,
                                points: [
                                    "Actual Toronto reviews",
                                    "Google, Yelp verified",
                                    "Real customer feedback"
                                ]
                            },
                            {
                                title: "BBB A+ Rating",
                                icon: Shield,
                                points: [
                                    "No complaints ever",
                                    "Better Business Bureau verified",
                                    "Trusted local business"
                                ]
                            },
                            {
                                title: "Most Generous Free Inspection",
                                icon: CheckCircle2,
                                points: [
                                    "Reports delivered same day always",
                                    "No hidden fees",
                                    "Complete GTA coverage"
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

            {/* 8 Problems We Catch */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Eye className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">8 Roof Problems We Catch First</h2>
                            <p className="text-lg font-medium text-muted-foreground">Issues that cost thousands if left undetected:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                title: "Bald Shingle Spots", 
                                desc: "Granule loss means 3-5 years left before leaks start.",
                                icon: CloudRain
                            },
                            { 
                                title: "No Ice Shield at Eaves", 
                                desc: "Winter flooding guaranteed without proper protection.",
                                icon: AlertTriangle
                            },
                            { 
                                title: "Cracked Valleys", 
                                desc: "Cause 40% of attic leaks but invisible from street.",
                                icon: Wind
                            },
                            { 
                                title: "Bad Chimney Flashing", 
                                desc: "Fails years before water shows inside house.",
                                icon: Home
                            },
                            { 
                                title: "Soft Wet Spots", 
                                desc: "Under shingles before they cave through ceiling.",
                                icon: Zap
                            },
                            { 
                                title: "Tree Branches Rubbing", 
                                desc: "Looks fine from ground but damages shingles.",
                                icon: Wind
                            },
                            { 
                                title: "Blocked Soffit Vents", 
                                desc: "Causing ice dams + early shingle death.",
                                icon: Home
                            },
                            { 
                                title: "Tiny Hail Dents", 
                                desc: "That cancel your insurance coverage.",
                                icon: AlertTriangle
                            }
                        ].map((service, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border hover:border-[#FF9C45] transition-colors">
                                <service.icon className="h-8 w-8 text-[#FF9C45] mb-3" />
                                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Process of FREE Roof Drone Inspection</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "First 5 minutes",
                                time: "Drone Flight",
                                desc: "Drone flies front, back, valleys, chimneys – 4K video of everything."
                            },
                            {
                                step: "02",
                                title: "Next 3 minutes",
                                time: "Heat Camera",
                                desc: "Heat camera finds secret leaks under shingles."
                            },
                            {
                                step: "03",
                                title: "Next 4 minutes",
                                time: "Zoom Inspection",
                                desc: "Zoom inspects every ridge cap and shingle edge."
                            },
                            {
                                step: "04",
                                title: "Last 3 minutes",
                                time: "Report Delivery",
                                desc: "We show you what we found + email your full report same day."
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

            {/* Comparison Table */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8 text-center">FREE Drone Check vs Regular $200 Inspection</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-border">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">What matters</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Our FREE Drone</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Paid Ladder Guy</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Cost</td>
                                    <td className="px-6 py-4 font-bold text-green-600">$0</td>
                                    <td className="px-6 py-4">$250-450</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Time</td>
                                    <td className="px-6 py-4 font-bold text-green-600">15 minutes</td>
                                    <td className="px-6 py-4">2-4 hours</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Safe</td>
                                    <td className="px-6 py-4 font-bold text-green-600">100%</td>
                                    <td className="px-6 py-4 text-red-600">Risky climbing</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Finds problems</td>
                                    <td className="px-6 py-4 font-bold text-green-600">95%</td>
                                    <td className="px-6 py-4 text-red-600">Misses 40%</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Personel availability of house owner</td>
                                    <td className="px-6 py-4 font-bold text-green-600">Nil</td>
                                    <td className="px-6 py-4 text-red-600">Must</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Coverage & FAQs */}
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl space-y-20">

                    {/* Coverage */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                Service Areas
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Toronto (All Districts)</span>
                                <span>• Mississauga & Brampton</span>
                                <span>• Vaughan & Richmond Hill</span>
                                <span>• Markham & Scarborough</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <Camera className="h-5 w-5 text-[#FF9C45]" />
                                Drone Fleet
                            </h3>
                            <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                                <span>• DJI Mavic 3 Enterprise (Thermal)</span>
                                <span>• DJI Mini 4 Pro (Tight Spaces)</span>
                                <span>• Licensed Advanced Pilot Certificate</span>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">FAQs</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "Why do you do this free?", a: "Honest answer: $200 marketing cost. When you see the pictures yourself, you know exactly what needs fixing. We only get paid when you choose us for repairs." },
                                { q: "How good are drones vs humans?", a: "95% better. Heat vision finds wet spots 2 years early. 4K zoom sees cracks we can't see walking roofs." },
                                { q: "Nothing wrong? Do I still get the report?", a: "Yes, 100% free. Full picture set + \"your roof is good\" certificate good for a year." },
                                { q: "Hard sell after?", a: "Nope. Pictures are yours forever. Call us back anytime for quotes." },
                                { q: "How soon can you come?", a: "This week normally. Leaks get us same/next day." },
                                { q: "Insurance likes drone pictures?", a: "Love them. Clear 4K proof beats vague notes every time." }
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
