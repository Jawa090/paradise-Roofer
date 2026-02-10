import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Shield, Award, MapPin, Ruler, CloudRain, Droplets, ArrowDownToLine, Factory, Snowflake, AlertTriangle, Home, FileText, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import completedRoof from "@/assets/completed-roof.jpg";
import roofCoating from "@/assets/roof-coating.jpg"; // Placeholder
import roofingBanner from "@/assets/roofers-banner.jpg";

export default function GuttersRepair() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Gutter Repair & Replacement Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Gutter Repair & Replacement<br />
                            in Toronto & GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Leaking eavesdrops flooding your Toronto foundation? Clogged gutters causing ice dams and fascia rot? Our licensed gutter specialists provide complete eavestrough repair and replacement across Toronto, Mississauga, Brampton, Milton, Oakville and entire GTA with seamless aluminum gutters, leaf guard systems, proper fascia integration, and 24/7 emergency response.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Don't let failing gutters destroy your home's exterior, foundation, and landscaping. We serve all GTA with custom seamless fabrication, gutter cleaning, downspout replacement, heated gutter guards, and complete fascia/soffit/gutter packages that work together perfectly.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get a Gutter Quote <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofingBanner} alt="Seamless Gutter Installation" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Factory className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Made On-Site</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Leak-Free Guarantee</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Premium Alu-Rex Hangers</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Cheap vinyl gutters snap in winter. Sectional store-bought gutters drip at every seam. Our seamless aluminum system is extruded from a truck-mounted machine in one continuous piece for each side of your house. We use heavy-duty hidden hangers screwed directly into the fascia (not spikes that pull out), ensuring your eavestroughs stay put even under heavy ice loads.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signs You Need Upgrade */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <CloudRain className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Common Problems Why Toronto Gutters Fail</h2>
                            <p className="text-lg font-medium text-muted-foreground">Toronto’s unpredictable weather puts constant stress on gutter systems. Here are the most common issues homeowners face:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Leaves Clog 80% of Gutters Yearly",
                                icon: Droplets,
                                points: [
                                    "Leaves clog 80% of gutters yearly",
                                    "Toronto's trees drop heavy debris that blocks flow, rotting fascia, staining siding, and eroding foundations",
                                    "By November, most gutters overflow completely"
                                ]
                            },
                            {
                                title: "2. Ice Dams Form Every Winter",
                                icon: Snowflake,
                                points: [
                                    "Water freezes at night then melts daytime, creating solid blockages",
                                    "Icicles tear gutters down while water leaks under shingles into attics",
                                    "Ice dams form every winter in Toronto climate"
                                ]
                            },
                            {
                                title: "3. Seams Leak After 7-10 Years",
                                icon: AlertTriangle,
                                points: [
                                    "Toronto humidity rusts joints fast, silently rotting fascia",
                                    "Dripping rust stains siding",
                                    "Most repairs fix failed seams"
                                ]
                            },
                            {
                                title: "4. Gutters Sag When Poorly Sloped",
                                icon: Ruler,
                                points: [
                                    "No proper pitch means standing water, more rot, and landscaping damage",
                                    "Needs 1/4\" drop every 10 feet",
                                    "Poor slope causes multiple problems"
                                ]
                            },
                            {
                                title: "5. Downspouts Spray Foundations",
                                icon: ArrowDownToLine,
                                points: [
                                    "Rusted or missing extensions flood basements",
                                    "Erode soil around footings",
                                    "Proper aluminum solves this"
                                ]
                            },
                            {
                                title: "6. Rotten Fascia Causes Collapse",
                                icon: Home,
                                points: [
                                    "Weak boards can't hold water-filled gutters",
                                    "They pull off entirely, tearing siding",
                                    "Needs flashing + replacement"
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Complete Eavestrough Repair & Replacement Services</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Professional gutter solutions engineered for Toronto's extreme weather conditions.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                title: "Free Professional Gutter Inspection", 
                                desc: "Laser Technology Assessment: Slope verification, hidden seam leak detection, fascia rot analysis, downspout capacity verification, leaf guard compatibility evaluation. ($250 Value)",
                                icon: FileText
                            },
                            { 
                                title: "Precision Eavestrough Repair Services", 
                                desc: "Individual leak repair with butyl rubber seam resealing (20-year durability), section replacement, end cap rebuild, downspout reconnection, hanger reinforcement.",
                                icon: Wrench
                            },
                            { 
                                title: "24/7 Emergency Eavestrough Service", 
                                desc: "90-minute arrival Toronto core, 2-hour GTA. Temporary leak sealing, ice dam clearing, storm damage recovery, blue tarp protection.",
                                icon: AlertTriangle
                            },
                            { 
                                title: "Complete Seamless Gutter Replacement", 
                                desc: "Onsite custom fabrication with true 5\"/6\"/7\" seamless aluminum gutters, 20+ color options, hidden heavy-duty hangers, proper slope certification.",
                                icon: Factory
                            },
                            { 
                                title: "Advanced Leaf Guard Protection Systems", 
                                desc: "Micro-mesh screens (95% debris capture), reverse curve systems, heated gutter guards (-20°C rated), surface tension technology.",
                                icon: Shield
                            },
                            { 
                                title: "Professional Downspout & Drainage", 
                                desc: "Color-matched aluminum 3x4\" residential, 4x5\" commercial profiles, foundation protection with 6+ ft extensions, catch basins, buried systems.",
                                icon: ArrowDownToLine
                            },
                            { 
                                title: "Complete Fascia/Soffit/Gutter Integration", 
                                desc: "Rotten fascia replacement with PVC or aluminum, proper metal flashing, continuous soffit ventilation, seamless color harmony.",
                                icon: Home
                            },
                            { 
                                title: "Ice Dam Prevention Package", 
                                desc: "Complete exterior water management system designed specifically for Toronto winters and extreme weather conditions.",
                                icon: Snowflake
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

            {/* Materials Comparison Table */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8 text-center">Eavestrough Materials – Toronto Climate Tested</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-border">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Material</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Ice Dam Resistance</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Corrosion Proof</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Cost per Linear Ft</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Toronto Lifespan</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Leaf Guard Compatible</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Seamless Aluminum 5"</td>
                                    <td className="px-6 py-4">Excellent</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$8-$11</td>
                                    <td className="px-6 py-4">35-50 years</td>
                                    <td className="px-6 py-4 font-bold text-green-600">✅ All systems</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Seamless Aluminum 6"</td>
                                    <td className="px-6 py-4">Excellent</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$10-$14</td>
                                    <td className="px-6 py-4">35-50 years</td>
                                    <td className="px-6 py-4 font-bold text-green-600">✅ All systems</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Seamless Aluminum 7"</td>
                                    <td className="px-6 py-4">Superior</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$13-$18</td>
                                    <td className="px-6 py-4">40-55 years</td>
                                    <td className="px-6 py-4 font-bold text-green-600">✅ Commercial</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Copper Premium</td>
                                    <td className="px-6 py-4">Superior</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$25-$42</td>
                                    <td className="px-6 py-4">70+ years</td>
                                    <td className="px-6 py-4 font-bold text-green-600">✅ Yes</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Galvanized Steel</td>
                                    <td className="px-6 py-4">Poor</td>
                                    <td className="px-6 py-4">No</td>
                                    <td className="px-6 py-4">$6-$10</td>
                                    <td className="px-6 py-4">8-15 years</td>
                                    <td className="px-6 py-4 font-bold text-red-600">❌ Limited</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">Vinyl/Plastic</td>
                                    <td className="px-6 py-4">Poor</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$4-$8</td>
                                    <td className="px-6 py-4">10-18 years</td>
                                    <td className="px-6 py-4 font-bold text-red-600">❌ No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Decision Matrix */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8 text-center">Repair vs Replacement Decision Matrix</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-border">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Gutter Age</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Active Leaks</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Slope Problems</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Fascia Damage</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Annual Repair Cost</th>
                                    <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Best Solution</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">0-7 years</td>
                                    <td className="px-6 py-4">1-2</td>
                                    <td className="px-6 py-4">None</td>
                                    <td className="px-6 py-4">Surface</td>
                                    <td className="px-6 py-4">$150-$400</td>
                                    <td className="px-6 py-4 font-bold text-green-600 uppercase">Strategic Repair</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">7-12 years</td>
                                    <td className="px-6 py-4">3-6</td>
                                    <td className="px-6 py-4">Minor</td>
                                    <td className="px-6 py-4">Moderate rot</td>
                                    <td className="px-6 py-4">$600-$1,200</td>
                                    <td className="px-6 py-4 font-bold text-yellow-600 uppercase">Repair + Monitor</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">12-18 years</td>
                                    <td className="px-6 py-4">7+</td>
                                    <td className="px-6 py-4">Failed slope</td>
                                    <td className="px-6 py-4">Extensive rot</td>
                                    <td className="px-6 py-4">$1,800+</td>
                                    <td className="px-6 py-4 font-bold text-orange-600 uppercase">Full Replacement</td>
                                </tr>
                                <tr className="hover:bg-muted/20">
                                    <td className="px-6 py-4 font-medium">18+ years</td>
                                    <td className="px-6 py-4">Total failure</td>
                                    <td className="px-6 py-4">N/A</td>
                                    <td className="px-6 py-4">Complete rot</td>
                                    <td className="px-6 py-4">$2,500+</td>
                                    <td className="px-6 py-4 font-bold text-red-600 uppercase">Full Replacement</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Proven 4-Step Gutter Installation Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "FREE Laser Inspection & Assessment",
                                time: "Same-day service",
                                desc: "Laser level slope verification, seam leak pressure testing, fascia rot detection with moisture meter + visual analysis, downspout capacity test simulating Toronto thunderstorm conditions, digital engineering report with 3D diagrams."
                            },
                            {
                                step: "02",
                                title: "Custom Fabrication & Planning",
                                time: "(1 Hour)",
                                desc: "Onsite seamless machine fabricates perfect gutter profile matching your fascia. Three quality tiers presented: Economy repair, premium replacement, luxury system. Color matching lab with 20+ aluminum colors, insurance-ready documentation."
                            },
                            {
                                step: "03",
                                title: "Professional Installation",
                                time: "(Same Day - 1 Day)",
                                desc: "Hidden bracket system every 18-24 inches prevents sagging forever. No visible screw heads for clean architectural appearance. Precision end caps with compression fit, downspout alignment with laser perfect positioning."
                            },
                            {
                                step: "04",
                                title: "Performance Verification & Lifetime Warranty",
                                time: "Post-Work",
                                desc: "High-pressure hose testing with ALL seams verified leak-free. Slope re-certification with laser verification post-installation. Fascia flashing inspection prevents future water migration. Lifetime warranty activation with no rust-through guarantee."
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
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Real Toronto Gutter Repair Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Complete Exterior Restoration Project",
                                img: completedRoof,
                                problem: "Leaking seams, rotten fascia, undersized 4\" gutters causing foundation washout",
                                result: "6\" seamless aluminum + PVC fascia + micro-mesh leaf guards. Foundation saved, zero ice dams, property value increased 6%"
                            },
                            {
                                title: "Ice Dam Disaster Recovery",
                                img: roofCoating,
                                problem: "Frozen gutters caused $18K attic flood, icicles 4ft long",
                                result: "Heated gutter system + continuous soffit vents + R50 attic insulation. Zero ice dams next winter, 29% hydro bill reduction verified"
                            },
                            {
                                title: "Commercial Plaza Emergency",
                                img: roofingBanner,
                                problem: "18 downspouts crushed by fallen tree during storm",
                                result: "Underground leader system + commercial-grade leaf guards + 24-hour completion. Zero business interruption, insurance covered 100%"
                            },
                            {
                                title: "Heritage Home Luxury Upgrade",
                                img: completedRoof,
                                problem: "Original 1960s galvanized gutters rusted through completely",
                                result: "Custom copper half-round gutters + copper downspouts + period-perfect fascia. 75-year system, maintains heritage architectural integrity"
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
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl space-y-20">

                    {/* Coverage */}
                    <div>
                        <h2 className="text-3xl font-bold uppercase mb-8 text-center">Complete Toronto & GTA Eavestrough Coverage</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                    Toronto Neighborhood Service Areas
                                </h3>
                                <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                                    <span>• North York: Bayview Woods, Don Mills, Finch, Lawrence Manor, Newtonbrook</span>
                                    <span>• Scarborough: Agincourt, Woburn, Morningside, Highland Creek, Rouge Hill</span>
                                    <span>• Etobicoke: Humber Valley Village, Islington, Long Branch, Mimico, New Toronto</span>
                                    <span>• East York & Leaside: Leaside, Broadview North, Danforth Village, Woodbine Gardens</span>
                                    <span>• Old Toronto: Rosedale, Cabbagetown, The Annex, Yorkville, Church-Wellesley</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                    GTA Cities & Regions
                                </h3>
                                <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                                    <span>• Mississauga: Erin Mills, Clarkson, Lorne Park, Port Credit</span>
                                    <span>• Brampton: Heart Lake, Fletcher's Meadow, Mount Pleasant</span>
                                    <span>• Milton: Scott, Harrison, Timberlea, Victoria Street, Charles Street</span>
                                    <span>• Oakville: Bronte, Clearview, Glen Abbey</span>
                                    <span>• Vaughan: Maple, Woodbridge, Concord, Kleinburg</span>
                                    <span>• Markham: Unionville, Wismer, Centennial, Box Grove</span>
                                    <span>• Richmond Hill: Jefferson, Oak Ridges, Mill Pond</span>
                                    <span>• Ajax, Pickering, Whitby (Extended Coverage)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "How much does gutter repair cost in Toronto?", a: "$300-$3,500 typical range. Single seam: $300. Section replacement: $800-$1,200. Full system: $5K-$15K." },
                                { q: "Do you offer emergency eavestrough service?", a: "YES – 24/7 GTA response. Leaking gutters, ice dams, storm damage handled immediately." },
                                { q: "Seamless vs sectional gutters – Toronto recommendation?", a: "Seamless 100% better. 3x stronger seams, lifetime warranty, custom fit every home." },
                                { q: "Are leaf guards worth the investment?", a: "Absolutely. 95% debris reduction, 5-year warranty, saves $500+/year cleaning costs." },
                                { q: "How often should Toronto gutters be cleaned?", a: "Spring + Fall minimum. Leaf guard systems reduce to 1x/year maximum." },
                                { q: "Do failing gutters damage my foundation?", a: "Yes – severely. Overflow water erodes soil, causes cracks, basement flooding." },
                                { q: "What's causing ice dams in my gutters?", a: "Poor attic insulation + inadequate soffit ventilation. Complete exterior solution required." },
                                { q: "Do you integrate gutters with fascia/soffit repair?", a: "Complete packages available. Roof + fascia + soffit + gutters + insulation – one contractor." }
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
