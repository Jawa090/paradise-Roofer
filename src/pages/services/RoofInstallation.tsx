import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Building2, Home, Hammer, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import roofInstallation from "@/assets/Home_page/ProfessionalRoofInstallationinTorontoTheGTA.webp";
import completedRoof from "@/assets/completed-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import roofInspection from "@/assets/roof-inspection.jpg";
import roofCoating from "@/assets/roof-coating.jpg";

export default function RoofInstallation() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Roof Installation</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Professional Roof Installation<br />
                            in Toronto & The GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Looking for expert roof installation in Toronto and the GTA? We specialize in complete new roof installations for residential homes and commercial properties across Mississauga, Brampton, Milton, Oakville and the entire GTA, Toronto.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our licensed roofing contractors handle everything from asphalt shingles to premium metal roofing systems, all built to withstand harsh Canadian winters, ice dams, heavy snow loads, and summer storms.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get a Free Quote <ArrowRight className="h-4 w-4" strokeWidth={3} />
                                    </button>
                                </Link>
                                <a href="tel:+1452456789" className="w-full sm:w-auto bg-muted text-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-muted/80 transition-colors flex items-center justify-center gap-4">
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
                            <img src={roofInstallation} alt="Roofers working" className="w-full h-full object-cover object-[center_80%]" />
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
                            With a legacy of diverse projects serving Toronto homeowners and businesses, we offer FREE roof drone inspections, transparent pricing, 1–3-day installations, and lifetime warranties on materials. Whether you need shingle roof installation, metal roofing for snow country, or flat roof systems for commercial buildings, our process guarantees zero mess, maximum durability, and energy savings through proper attic ventilation and insulation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Included & Approach Section */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="grid lg:grid-cols-1 gap-16">

                        {/* What's Included / Why Choose Us */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-[#4ADE80] rounded-xl p-4 shadow-[0_4px_0_0_rgba(21,128,61,1)] shrink-0">
                                    <Check className="h-10 w-10 text-white" strokeWidth={4} />
                                </div>
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Toronto Homeowners Choose Us for Roof Installation?</h2>
                                    <p className="text-lg font-medium text-muted-foreground">We stand out from other GTA roofing companies because we treat every roof like it's our own family home in entire GTA, Toronto. Here's what makes our roof installation services different:</p>
                                </div>
                            </div>

                            <ul className="grid md:grid-cols-2 gap-y-6 gap-x-8 pl-[88px]">
                                {[
                                    { title: "Free Roof Drone Inspection", desc: "Advanced drone technology reveals shingle wear, ice dam risks, and hidden damage invisible from ground level" },
                                    { title: "Complete Roof Replacement Packages", desc: "Old roof removal, new installation, fascia repair, soffit upgrades, and seamless gutters included." },
                                    { title: "Professional Installation Team", desc: "Top listed roofers of GTA with specialized training in ice & water shield applications" },
                                    { title: "10-Year Workmanship Warranty", desc: "Plus, manufacturer lifetime warranties on premium shingles" },
                                    { title: "Licensed & Insured Toronto Roofers", desc: "Fully compliant with Toronto Building Code and Ontario regulations" },
                                    { title: "Zero Mess Guarantee", desc: "Magnetic booties, dumpster service, and final yard clean up after every job" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <div className="h-2 w-2 bg-black rounded-full" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-lg block mb-1">{item.title}</span>
                                            <span className="text-muted-foreground">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Approach */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-[#4ADE80] rounded-xl p-4 shadow-[0_4px_0_0_rgba(21,128,61,1)] shrink-0">
                                    <Check className="h-10 w-10 text-white" strokeWidth={4} />
                                </div>
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Weather Ready</h2>
                                    <p className="text-lg font-medium text-muted-foreground">Most importantly, we understand Toronto weather.</p>
                                </div>
                            </div>

                            <div className="pl-[88px]">
                                <p className="text-lg text-muted-foreground">
                                    Our roofs feature proper ice barriers, snow-shedding designs, and wind-resistant fastening systems built specifically for the GTA climate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12">Comprehensive Roof Installation Services We Offer</h2>
                    <p className="mb-12 text-muted-foreground">Our roof installation process goes far beyond simply laying new shingles. We provide complete exterior protection packages tailored for Toronto and GTA properties:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "1. Free Roof Drone Inspection",
                                    desc: "Every project starts with our complimentary drone inspection service. We capture 4K aerial footage of your entire roof surface, chimney flashing, skylights, vents, and valleys. This technology spots issues like cracked shingles, granule loss, soft spots, and ice dam formation risks before we even climb ladders. You'll receive a detailed digital report with photos, repair recommendations, and accurate square footage measurements for precise quoting."
                                },
                                {
                                    title: "2. Roof Repair Before Replacement",
                                    desc: "Not every roof needs full replacement. Our experts assess if strategic repairs can extend your roof's life 5-10 years. Common Toronto roof repairs include: Leak detection and sealant application around penetrations, Shingle replacement in wind-damaged areas, Ridge vent and soffit ventilation improvements, Temporary ice dam mitigation for emergency situations"
                                },
                                {
                                    title: "3. Complete Roof Replacement",
                                    desc: "For roofs over 15 years old or showing multiple failure signs (curling shingles, valley cracks, interior leaks), full replacement delivers best value. We handle complete tear-off to the deck, ice & water shield installation, synthetic underlayment, and premium shingle application with proper nailing patterns for 160 km/h wind resistance."
                                },
                                {
                                    title: "4. Fascia Repair & Replacement",
                                    desc: "Rotten fascia boards compromise gutter performance and allow pest entry. We replace damaged fascia with pressure-treated wood or durable PVC boards, properly flashed to prevent future rot common in humid Toronto summers."
                                },
                                {
                                    title: "5. Soffit Repair & Replacement",
                                    desc: "Continuous soffit ventilation prevents attic moisture build up and ice dams. We install aluminium or vinyl soffits with built-in vents providing 50% net free area for proper attic breathing."
                                },
                                {
                                    title: "6. Gutters Repair & Replacement",
                                    desc: "Seamless aluminium gutters in 5\" or 6\" profiles with leaf guards. Properly sloped systems handle Toronto's heavy spring melt and summer downpours without overflow."
                                },
                                {
                                    title: "7. Attic Insulation Services",
                                    desc: "Insufficient insulation causes ice dams and high hydro bills. We install R50 blown-in cellulose or fiberglass, properly baffling intake vents to maintain airflow while maximizing energy efficiency."
                                },
                                {
                                    title: "8. All Interior Renovations",
                                    desc: "Roof leaks damages, ceilings, walls, and insulation. Our team handles complete interior restoration including drywall replacement, tape and mud, premium painting, and vapor barrier repairs so your home looks better than before the leak."
                                }
                            ].map((service, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border hover:border-[#FF9C45] transition-colors">
                                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Residential Options */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">Residential Roof Installation Options for GTA Toronto Homes</h2>

                    <div className="grid grid-cols-1 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-6">
                                <Home className="h-8 w-8 text-[#FF9C45] shrink-0 mt-1" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl mb-2">Asphalt Shingles</h3>
                                    <p className="text-xs font-bold uppercase text-muted-foreground mb-3">Perfect for: Single-family homes, semis, townhouses</p>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>• Durability: 50 years American architectural shingles, 15-25 years 3-tab</p>
                                        <p>• Toronto Advantages: Impact-resistant for hail, algae-resistant for humid summers, thousands of color options</p>
                                        <p>• Best Brands: GAF Timberline HDZ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commercial */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="bg-muted p-8 rounded-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">Commercial Roof Installation Across GTA</h2>
                        <p className="mb-6 text-muted-foreground">
                            Business owners from entire GTA industrial parks to Vaughan retail plazas trust us for:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4 mb-6">
                            {[
                                "TPO Single-Ply Membranes: 20–30-year warranties, energy-efficient white finish",
                                "EPDM Rubber Roofing: Ballasted or fully adhered, 30–50-years lifespan",
                                "Modified Bitumen: Multi-layer torch-down systems for high-traffic roofs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-muted-foreground">
                            We coordinate with property managers for minimal business disruption and provide detailed warranty documentation for corporate ownership groups.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Proven 4-Step Roof Installation Process</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                step: "01",
                                title: "FREE Drone Inspection & Assessment",
                                time: "(Day 1)",
                                desc: "A licensed technician arrives with a drone, moisture meter, and thermal camera. We document: Shingle condition and granule loss patterns, Ice dam risk areas and attic ventilation issues, Chimney flashing, step flashing, and valley integrity, Interior ceiling stains indicating leak locations. You'll receive a PDF report with photos, square footage calculations, and repair vs. replacement recommendations within 24 hours."
                            },
                            {
                                step: "02",
                                title: "Custom Quote & Material Selection",
                                time: "(Same Day)",
                                desc: "No pushy sales. We present three options: Budget-friendly: 3-tab shingles, Best value: Architectural shingles, Premium: Luxury laminated shingles. Insurance claim assistance available."
                            },
                            {
                                step: "03",
                                title: "Professional Installation",
                                time: "(Days 2-4)",
                                desc: "6-man licensed crew arrives with: Dumpster + magnet sweepers for zero nail clean up, Custom roof brackets preventing gutter damage, Valley pans, ice & water shield, synthetic underlayment, Proper starter strip and ridge cap installation. Daily progress photos sent via text/email so you see exactly what's happening."
                            },
                            {
                                step: "04",
                                title: "Final Walkthrough & Warranty Activation",
                                time: "",
                                desc: "Joint inspection confirming: No popped nails or loose shingles, Perfect ridge cap and flashing alignment, Gutter flow test and fascia alignment, Attic ventilation verification. Warranty package includes manufacturer lifetime limited warranty, our 20-year workmanship warranty, and seasonal maintenance checklist."
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

            {/* Service Coverage & Projects */}
            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl space-y-20">

                    {/* Coverage */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Extensive Toronto & GTA Service Coverage</h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <h3 className="font-bold text-lg mb-4">Mississauga</h3>
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p>• Erin Mills</p>
                                    <p>• Clarkson</p>
                                    <p>• Lorne Park</p>
                                    <p>• Port Credit</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-4">Brampton</h3>
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p>• Heart Lake</p>
                                    <p>• Fletcher's Meadow</p>
                                    <p>• Mount Pleasant</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-4">Milton</h3>
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p>• Scott</p>
                                    <p>• Harrison</p>
                                    <p>• Timberlea</p>
                                    <p>• Victoria Street</p>
                                    <p>• Charles Street</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-4">Oakville</h3>
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p>• Bronte</p>
                                    <p>• Clearview</p>
                                    <p>• Glen Abbey</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-4">Vaughan</h3>
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p>• Maple</p>
                                    <p>• Woodbridge</p>
                                    <p>• Concord</p>
                                    <p>• Kleinburg</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-4">Markham & Richmond Hill</h3>
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p>• Unionville</p>
                                    <p>• Wismer</p>
                                    <p>• Centennial</p>
                                    <p>• Box Grove</p>
                                    <p>• Jefferson</p>
                                    <p>• Oak Ridges</p>
                                    <p>• Mill Pond</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Old Coverage Section - Remove */}
                    <div className="hidden">
                        <div className="grid md:grid-cols-2 gap-12">
                        </div>
                    </div>

                    {/* Projects */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Real Projects</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Etobicoke Bungalow", desc: "2,100 sq.ft. architectural shingle + fascia/soffit", img: completedRoof },
                                { title: "North York Semi", desc: "1,800 sq.ft. standing seam metal with snow guards", img: metalRoof },
                                { title: "Mississauga Condo", desc: "3,500 sq.ft. TPO membrane flat roof replacement", img: roofCoating },
                            ].map((project, i) => (
                                <div key={i} className="group rounded-xl overflow-hidden border border-border">
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                        <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-4 bg-muted/20">
                                        <h4 className="font-bold mb-1">{project.title}</h4>
                                        <p className="text-xs text-muted-foreground">{project.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-4xl">
                    <h2 className="headline-lg text-2xl md:text-3xl mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Do you offer free roof inspections in Toronto?", a: "YES, Free drone inspections valued at $200 for all Toronto/GTA properties regardless of condition." },
                            { q: "How long does professional roof installation take?", a: "Asphalt shingles: 1-2 days." },
                            { q: "What Toronto building code requirements do you follow?", a: "Full compliance including ice barrier (36\" from eaves), high wind nailing (160km/h), proper flashing at all penetrations." },
                            { q: "Do you handle insurance storm damage claims?", a: "Complete claim assistance from drone documentation through contractor selection approval." },
                            { q: "Can you repair interior water damage too?", a: "Yes, full interior renovations including drywall, ceilings, painting, insulation replacement." }
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
