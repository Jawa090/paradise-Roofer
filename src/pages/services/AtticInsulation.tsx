import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Thermometer, DollarSign, Home, CheckCircle2, AlertTriangle, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import roofCoating from "@/assets/roof-coating.jpg";

export default function AtticInsulation() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Attic Insulation Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Attic Insulation<br />
                            Toronto & GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Sky-high hydro bills? Ice dams every winter? Hot upstairs, cold basement? Professional attic insulation upgrade R60 Toronto code cuts bills 25-40%. Blown-in cellulose, fiberglass, spray foam, we do all types with proper air sealing preventing ice dams permanently.
                                </p>
                                <p className="text-lg font-bold text-[#FF9C45]">
                                    FREE insulation audit ($450 value) measures current R-value, finds air leaks, calculates your savings. Serving Toronto, Mississauga, Brampton, Milton, Oakville and entire GTA region.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get Free Assessment <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofCoating} alt="Attic Insulation" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Thermometer className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">R60 Toronto Code</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <DollarSign className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">$5,000 EcoHome Rebates</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Snowflake className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Stops Ice Dams</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4">Why Toronto Attics Need R60 Insulation NOW</h3>
                        <p className="text-lg text-muted-foreground mb-4">
                            Toronto winters demand R60 attic insulation (Ontario Building Code). Most 1970s-90s homes have R20-R30 wasting $1,800/year heating attic air. Results:
                        </p>
                        <ul className="space-y-2 text-lg text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Ice dams destroying roofs ($15K damage average)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Hydro bills 35% too high (Enbridge average $4,200/year)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Uneven home temperatures (20°F attic-to-main floor difference)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Summer AC running constantly (hot attic radiates heat down)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Moisture/mold in attics (poor ventilation + air leaks)
                            </li>
                        </ul>
                        <p className="text-lg font-bold text-[#FF9C45] mt-4">
                            R30 → R60 upgrade pays back in 3.2 years through bill savings.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Toronto Attics Need R50 Insulation NOW */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <AlertTriangle className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Toronto Attics Need R60 Insulation NOW</h2>
                            <p className="text-lg font-medium text-muted-foreground">Toronto roofs face brutal conditions that shorten lifespans significantly</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "New Building Code",
                                icon: Home,
                                desc: "Toronto updated building code from R40 to R50 minimum. Homes built before 2020 don't meet current standards."
                            },
                            {
                                title: "Climate Change Impact",
                                icon: Snowflake,
                                desc: "More extreme temperature swings mean your heating/cooling systems work harder with inadequate insulation."
                            },
                            {
                                title: "Energy Cost Crisis",
                                icon: DollarSign,
                                desc: "Natural gas prices up 40% since 2019. Poor insulation means you're literally heating the outdoors."
                            },
                            {
                                title: "Ice Dam Epidemic",
                                icon: AlertTriangle,
                                desc: "Warm attics melt roof snow that refreezes at eaves, causing thousands in water damage annually."
                            },
                            {
                                title: "Resale Value Impact",
                                icon: CheckCircle2,
                                desc: "Energy-efficient homes sell 15% faster. R50 insulation is now expected by buyers and inspectors."
                            },
                            {
                                title: "Health & Comfort",
                                icon: Thermometer,
                                desc: "Uneven temperatures create drafts, humidity issues, and force HVAC systems to overwork."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-xl border border-border hover:border-[#FF9C45] transition-colors">
                                <item.icon className="h-8 w-8 text-[#FF9C45] mb-4" />
                                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Attic Insulation Types */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Attic Insulation Types</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Blown Cellulose and Blown Fiberglass - the two most effective insulation materials for Toronto's climate</p>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl border border-border shadow-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left p-6 font-bold">Feature</th>
                                    <th className="text-left p-6 font-bold text-[#FF9C45]">Blown-in Fiberglass</th>
                                    <th className="text-left p-6 font-bold text-[#FF9C45]">Blown-in Cellulose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">R-Value per inch</td>
                                    <td className="p-6">R3.8</td>
                                    <td className="p-6">R3.6</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">Depth for R60</td>
                                    <td className="p-6">20-21 inches</td>
                                    <td className="p-6">20-21 inches</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">Fire resistance</td>
                                    <td className="p-6">Non-combustible</td>
                                    <td className="p-6">Treated with fire retardant</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">Pest resistance</td>
                                    <td className="p-6">Rodents avoid fiberglass</td>
                                    <td className="p-6">Treated with boric acid (pest deterrent)</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">Settling over time</td>
                                    <td className="p-6">Minimal (2-3%)</td>
                                    <td className="p-6">Moderate (5-8%)</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">Moisture resistance</td>
                                    <td className="p-6">Excellent (doesn't absorb water)</td>
                                    <td className="p-6">Good (treated for moisture)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium">Best for</td>
                                    <td className="p-6">Clean attics, allergy concerns</td>
                                    <td className="p-6">Sound dampening, eco-friendly choice</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Toronto R-Value Upgrade Savings Calculator */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Toronto R-Value Upgrade Savings Calculator</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Annual energy savings based on typical 1,500 sq ft Toronto home</p>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl border border-border shadow-sm">
                            <thead>
                                <tr className="border-b border-border bg-[#F9F9F9]">
                                    <th className="text-left p-6 font-bold">Current R-Value</th>
                                    <th className="text-left p-6 font-bold">Upgrade to R50</th>
                                    <th className="text-left p-6 font-bold">Annual Gas Savings</th>
                                    <th className="text-left p-6 font-bold">Annual Electric Savings</th>
                                    <th className="text-left p-6 font-bold">Total Annual Savings</th>
                                    <th className="text-left p-6 font-bold">Payback Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">R12 (3 inches)</td>
                                    <td className="p-6">+R38 upgrade</td>
                                    <td className="p-6 text-green-600 font-bold">$680</td>
                                    <td className="p-6 text-green-600 font-bold">$420</td>
                                    <td className="p-6 text-green-600 font-bold">$1,100</td>
                                    <td className="p-6 font-bold">2.8 years</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">R20 (5 inches)</td>
                                    <td className="p-6">+R30 upgrade</td>
                                    <td className="p-6 text-green-600 font-bold">$520</td>
                                    <td className="p-6 text-green-600 font-bold">$310</td>
                                    <td className="p-6 text-green-600 font-bold">$830</td>
                                    <td className="p-6 font-bold">3.2 years</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-6 font-medium">R30 (8 inches)</td>
                                    <td className="p-6">+R20 upgrade</td>
                                    <td className="p-6 text-green-600 font-bold">$340</td>
                                    <td className="p-6 text-green-600 font-bold">$180</td>
                                    <td className="p-6 text-green-600 font-bold">$520</td>
                                    <td className="p-6 font-bold">4.1 years</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium">R40 (10 inches)</td>
                                    <td className="p-6">+R10 upgrade</td>
                                    <td className="p-6 text-green-600 font-bold">$180</td>
                                    <td className="p-6 text-green-600 font-bold">$90</td>
                                    <td className="p-6 text-green-600 font-bold">$270</td>
                                    <td className="p-6 font-bold">5.8 years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 bg-[#F9F9F9] p-6 rounded-xl border border-border">
                        <p className="text-sm text-muted-foreground">
                            <strong>Calculations based on:</strong> Natural gas at $1.20/m³, electricity at $0.17/kWh (Toronto Hydro 2024 rates), 
                            1,500 sq ft home, 2,200 heating degree days. Actual savings vary by home size, age, and usage patterns.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signs You Need Upgrade */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <AlertTriangle className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Signs of Poor Insulation</h2>
                            <p className="text-lg font-medium text-muted-foreground">Is your attic working against you? Look for these symptoms:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Ice Dams",
                                icon: Snowflake,
                                points: [
                                    "Thick ice at roof edges",
                                    "Icicles hanging from gutters",
                                    "Water leaking behind walls"
                                ]
                            },
                            {
                                title: "2. Uneven Rooms",
                                icon: Thermometer,
                                points: [
                                    "Upstairs is boiling in summer",
                                    "Freezing cold bedrooms in winter",
                                    "Furnace runs constantly"
                                ]
                            },
                            {
                                title: "3. High Energy Bills",
                                icon: DollarSign,
                                points: [
                                    "Steadily increasing heating costs",
                                    "AC working overtime",
                                    "Drafty ceilings"
                                ]
                            },
                            {
                                title: "4. Roof Snow Melt",
                                icon: Home,
                                points: [
                                    "Patterned snow melt on roof",
                                    "Bare shingles while neighbors represent snow",
                                    "Sign of heat escaping"
                                ]
                            },
                            {
                                title: "5. Mold in Attic",
                                icon: AlertTriangle,
                                points: [
                                    "Black spots on plywood deck",
                                    "Musty smell upstairs",
                                    "Condensation on nails"
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

            {/* Our Services Grid */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Complete Attic Services</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">We do more than just blow in fluff. We seal the envelope of your home.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Blown-in Insulation", desc: "Top-up with premium Owens Corning fiberglass or cellulose to achieve R60 thermal resistance." },
                            { title: "Baffle Installation", desc: "We install rafter baffles at every soffit vent to ensure fresh air intake is never blocked by insulation." },
                            { title: "Air Sealing", desc: "We find and foam-seal gaps around pot lights, plumbing stacks, and electrical wires preventing heat loss." },
                            { title: "Hatch Weatherstripping", desc: "We build a localized dam box around your access hatch and insulate the lid to stop drafts." },
                            { title: "Old Insulation Removal", desc: "Safe vacuum removal of old, animal-contaminated, or vermiculite insulation." },
                            { title: "Mold Remediation", desc: "Treatment of mold on attic sheathing caused by previous moisture issues." },
                            { title: "Bathroom Fan Venting", desc: "Replacing cheap flex hoses with insulated rigid ducting vented properly through the roof." },
                            { title: "Solar Fan Upgrade", desc: "Installation of solar-powered attic vents to actively pull heat out in summer." }
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

            {/* Process */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our R50 Upgrade Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Free Attic Assessment",
                                time: "30 Minutes",
                                desc: "We measure current R-value, check for air leaks, inspect ventilation, and calculate exact insulation needed for R50."
                            },
                            {
                                step: "02",
                                title: "Air Sealing & Prep",
                                time: "2-3 Hours",
                                desc: "Seal gaps around pot lights, pipes, wires. Install rafter baffles. Clear debris. Protect your home with drop cloths."
                            },
                            {
                                step: "03",
                                title: "Blown-in Insulation",
                                time: "1-2 Hours",
                                desc: "Truck-mounted blower delivers premium fiberglass or cellulose to precise R50 depth. Real-time monitoring ensures even coverage."
                            },
                            {
                                step: "04",
                                title: "Quality Check & Cleanup",
                                time: "30 Minutes",
                                desc: "Measure final depth with rulers. Vacuum access area. Install weatherstripped hatch cover. You feel the difference immediately."
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

            {/* Coverage & FAQs */}
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl space-y-20">

                    {/* Coverage */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                Coverage Areas
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Toronto (All Districts)</span>
                                <span>• Mississauga & Brampton</span>
                                <span>• Vaughan & Richmond Hill</span>
                                <span>• Markham & Scarborough</span>
                                <span>• Oakville & Burlington</span>
                                <span>• Ajax & Pickering</span>
                                <span>• Etobicoke & North York</span>
                                <span>• Newmarket & Aurora</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-[#FF9C45]" />
                                EcoHome Rebates Available
                            </h3>
                            <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                                <span>• Up to $5,000 for R50 upgrades</span>
                                <span>• We handle all rebate paperwork</span>
                                <span>• Pre-approval available</span>
                                <span>• Combines with utility rebates</span>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "How much does R50 insulation cost?", a: "Typical 1,500 sq ft attic costs $2,800-$3,500 for R50 upgrade. Price depends on current insulation level and access difficulty. EcoHome rebates reduce net cost significantly." },
                                { q: "Can you blow insulation over existing?", a: "Yes, as long as existing insulation isn't wet, moldy, or contaminated. We add the exact amount needed to reach R50 total." },
                                { q: "How long does installation take?", a: "Complete R50 upgrade takes 4-6 hours: 2-3 hours prep/air sealing, 1-2 hours blowing, 30 minutes cleanup. Most jobs done in one day." },
                                { q: "Will this stop ice dams completely?", a: "R50 insulation combined with proper air sealing eliminates 95% of ice dam problems. Remaining issues usually involve ventilation or roof design." },
                                { q: "Fiberglass or cellulose - which is better?", a: "Both reach R50 effectively. Fiberglass is cleaner, settles less. Cellulose is eco-friendly, better sound dampening. We install both based on your priorities." },
                                { q: "Do you guarantee the R-value?", a: "Yes. We measure depth with rulers and guarantee R50 performance. If settling occurs within 5 years, we top up free." },
                                { q: "How messy is the installation?", a: "Very clean process. Blower truck stays outside, hose runs through door/window. We use drop cloths and vacuum thoroughly before leaving." },
                                { q: "When will I see energy savings?", a: "Immediately. Most customers notice more even temperatures within 24 hours. Full energy savings show on next month's utility bill." }
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
