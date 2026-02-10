import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Shield, MapPin, PaintBucket, CheckCircle2, Home, Layers, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import roofInstallation from "@/assets/roof-installation.jpg";

export default function InteriorRenos() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Interior Renovation Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Complete Interior<br />
                            Renovations in Toronto & GTA
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Ready for dream home interior? Paradise Renovations delivers full interior renovations – kitchens, bathrooms, basements, flooring, painting, electrical, plumbing, Windows – one trusted team handles everything. Turn dated Toronto Homes into modern masterpieces.
                                </p>
                                <p className="text-lg font-bold text-[#FF9C45]">
                                    Free 3D design consultation ($750 value) shows your new space before hammer swings. Serving Toronto, Mississauga, Brampton, Milton, Oakville and entire GTA region. Turnkey service – permits, inspections, final clean up included.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto bg-[#FF9C45] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center justify-center gap-2">
                                        Get FREE 3D Design <ArrowRight className="h-4 w-4" strokeWidth={3} />
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
                            <img src={roofInstallation} alt="Interior Renovation" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Eye className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">FREE 3D Design</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Turnkey Service</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <CheckCircle2 className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">$150K Resale Boost</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <h3 className="text-2xl font-bold mb-4">When Toronto Homes Need Complete Interior Renovations?</h3>
                        <p className="text-lg text-muted-foreground mb-4">
                            Built 20 to 30 Years ago? Your house probably has:
                        </p>
                        <ul className="space-y-2 text-lg text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Dark oak cabinets, chipped laminate counters
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Pink/green 80s bathrooms needing full gut
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Patchwork flooring from multiple owners
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Insufficient bedrooms for growing family
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Basement begging for family room/theatre
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF9C45] shrink-0" />
                                Curb appeal killer: dated exterior/interior mismatch
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* When Toronto Homes Need Complete Interior Renovations */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">When Toronto Homes Need Complete Interior Renovations?</h2>
                            <p className="text-lg font-medium text-muted-foreground">Built 20 to 30 Years ago? Your house probably has:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Dark Oak Cabinets",
                                icon: PaintBucket,
                                desc: "Chipped laminate counters that scream 1980s. Kitchen feels closed off and dated."
                            },
                            {
                                title: "Pink/Green 70s Bathrooms",
                                icon: Layers,
                                desc: "Avocado fixtures needing full gut. Tiny vanities, no storage, poor lighting."
                            },
                            {
                                title: "Patchwork Flooring",
                                icon: CheckCircle2,
                                desc: "Multiple flooring types from different owners. No flow between rooms."
                            },
                            {
                                title: "Insufficient Bedrooms",
                                icon: Home,
                                desc: "Growing family needs more space. Basement conversion potential untapped."
                            },
                            {
                                title: "Wasted Basement",
                                icon: Eye,
                                desc: "Basement begging for family room/theatre. Huge potential for living space."
                            },
                            {
                                title: "Curb Appeal Killer",
                                icon: Shield,
                                desc: "Dated exterior/interior mismatch. Buyers notice inconsistent style immediately."
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

            {/* What Our Full Interior Renovation Services Include */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">What Our Full Interior Renovation Services Include?</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Complete renovation packages for every budget and vision</p>

                    <div className="space-y-12">
                        {/* Kitchen Renovation Packages */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <PaintBucket className="h-6 w-6 text-[#FF9C45]" />
                                Kitchen Renovation Packages
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Designer ($45K)",
                                        features: ["Quartz counters", "Soft-close cabinets", "Island", "Backsplash", "Appliances"]
                                    },
                                    {
                                        title: "Luxury ($75K)",
                                        features: ["Custom cabinetry", "Waterfall island", "Pro appliances", "Pot lights"]
                                    },
                                    {
                                        title: "Everything ($110K)",
                                        features: ["+ Family room open concept", "Flooring throughout", "Complete transformation"]
                                    }
                                ].map((pkg, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl border border-border">
                                        <h4 className="font-bold text-lg mb-4 text-[#FF9C45]">{pkg.title}</h4>
                                        <ul className="space-y-2">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-[#FF9C45] mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bathroom Transformations */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Layers className="h-6 w-6 text-[#FF9C45]" />
                                Bathroom Transformations
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Primary Suite ($28K)",
                                        features: ["Frameless glass shower", "Freestanding tub", "Heated floors"]
                                    },
                                    {
                                        title: "Powder Room ($18K)",
                                        features: ["Floating vanity", "Niche tiling", "Smart mirror"]
                                    },
                                    {
                                        title: "Full Gut ($42K)",
                                        features: ["Heated floors", "Body jets", "Custom cabinetry"]
                                    }
                                ].map((pkg, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl border border-border">
                                        <h4 className="font-bold text-lg mb-4 text-[#FF9C45]">{pkg.title}</h4>
                                        <ul className="space-y-2">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-[#FF9C45] mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Basement Finishing */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Home className="h-6 w-6 text-[#FF9C45]" />
                                Basement Finishing
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Family Rec Room ($35K)",
                                        features: ["Open concept", "Wet bar", "Theatre area"]
                                    },
                                    {
                                        title: "Legal Suite ($85K)",
                                        features: ["Separate entrance", "Full kitchen/bath", "Bedroom"]
                                    }
                                ].map((pkg, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl border border-border">
                                        <h4 className="font-bold text-lg mb-4 text-[#FF9C45]">{pkg.title}</h4>
                                        <ul className="space-y-2">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-[#FF9C45] mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Whole Home Packages */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Shield className="h-6 w-6 text-[#FF9C45]" />
                                Whole Home Packages
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Bungalow Blitz ($125K)",
                                        features: ["3 bed/2 bath", "+ kitchen", "+ flooring", "+ pot lights"]
                                    },
                                    {
                                        title: "Semi Transformation ($175K)",
                                        features: ["+ basement suite", "exterior refresh", "Complete makeover"]
                                    }
                                ].map((pkg, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl border border-border">
                                        <h4 className="font-bold text-lg mb-4 text-[#FF9C45]">{pkg.title}</h4>
                                        <ul className="space-y-2">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-[#FF9C45] mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interior Renovation Materials We Provide */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Interior Renovation Materials We Provide</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Premium materials for lasting beauty and performance</p>

                    <div className="space-y-12">
                        {/* Kitchens */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <PaintBucket className="h-6 w-6 text-[#FF9C45]" />
                                Kitchens
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        title: "Quartz Counters",
                                        desc: "(Caesarstone, Silestone) – 25-year warranty, heat/scratch proof"
                                    },
                                    {
                                        title: "Matte Black Fixtures",
                                        desc: "Industrial luxury look"
                                    },
                                    {
                                        title: "Shaker Cabinets",
                                        desc: "White/off-white – timeless resale appeal"
                                    },
                                    {
                                        title: "Large Format Porcelain",
                                        desc: "24x48\" minimal grout lines"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border">
                                        <h4 className="font-bold text-base mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bathrooms */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Layers className="h-6 w-6 text-[#FF9C45]" />
                                Bathrooms
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        title: "Matte Black Faucets",
                                        desc: "+ gold accents"
                                    },
                                    {
                                        title: "Large Format Porcelain",
                                        desc: "12x24\" floor/wall"
                                    },
                                    {
                                        title: "Frameless Glass",
                                        desc: "Enclosures – spa luxury"
                                    },
                                    {
                                        title: "LED Backlit Mirrors",
                                        desc: "Modern essential"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border">
                                        <h4 className="font-bold text-base mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Flooring */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-[#FF9C45]" />
                                Flooring
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Engineered Hardwood",
                                        desc: "5\" wide white oak – 50-year finish warranty"
                                    },
                                    {
                                        title: "Luxury Vinyl Plank",
                                        desc: "7\" wide – waterproof, pets/kids perfect"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border">
                                        <h4 className="font-bold text-base mb-2">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Our Complete Interior Renovation Process</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                step: "Week 1",
                                title: "FREE 3D Design Consultation",
                                desc: "Professional renderings show exact kitchen layout, bathroom design, flooring flow. Material samples presented. Fixed price contract no surprises."
                            },
                            {
                                step: "Week 2",
                                title: "Demolition & Prep",
                                desc: "Full gut to studs. Dumpsters offsite. Asbestos/safety testing. Rough plumbing/electrical relocated."
                            },
                            {
                                step: "Week 3-4",
                                title: "Core Installation",
                                desc: "Walls framed, insulation, vapour barrier, drywall mud/tape/sand. Kitchen cabinets hung, quartz templated. Bathroom rough-ins tested."
                            },
                            {
                                step: "Week 5",
                                title: "Finishing Touches",
                                desc: "Flooring installed, cabinets trimmed, countertops fabricated/installed. Painting, trim, hardware. Tiling showers/vanities complete."
                            },
                            {
                                step: "Week 6",
                                title: "Final Details & Walkthrough",
                                desc: "Pot lights/electrical final, plumbing tested, appliances hooked. Final cleaning throughout. Joint walkthrough, warranty paperwork."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm">
                                <div className="text-2xl font-black text-[#FF9C45] mb-3">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Toronto Neighborhood Interior Coverage */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Toronto Neighborhood Interior Coverage</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">500+ full renovations – bungalows flipped, semis transformed, heritage preserved.</p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <MapPin className="h-6 w-6 text-[#FF9C45]" />
                                Luxury Service Zones
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• North York</span>
                                <span>• Leaside</span>
                                <span>• Lawrence Park</span>
                                <span>• Mimico</span>
                                <span>• Clarkson</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Home className="h-6 w-6 text-[#FF9C45]" />
                                Premium GTA
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Mississauga</span>
                                <span>• Vaughan</span>
                                <span>• Markham</span>
                                <span>• Richmond Hill</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "How long complete renovation?", a: "Kitchen/bath: 4-6 weeks. Full home: 8-12 weeks. Fixed timelines guaranteed." },
                            { q: "Free design consultation included?", a: "Yes – 3D renderings + material selection ($750 value). See finished result before starting." },
                            { q: "Do you handle permits/inspections?", a: "Complete permitting service. City of Toronto inspectors scheduled. All trades licensed." },
                            { q: "Warranty on renovations?", a: "2 years full system, 10 years structural, 25 years cabinets/countertops. Tarion registered." },
                            { q: "Exterior work too?", a: "Complete packages – interior + roof + exterior = maximum resale value." }
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
            </section>

            <ContactForm />
        </Layout>
    );
}
