import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Clock, Eye, Wrench, Hammer, Snowflake, Zap, Building, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import vaughanImage from "@/assets/locations/Vaughan.png";

export default function Vaughan() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Vaughan Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Vaughan Roofers<br />
                            York Region Experts
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Hey Vaughan homeowners, imagine a bad winter storm hitting Concord's tree-lined streets, with big branches smashing your shingles. Or ice dams filling up along Maple bungalow roofs, making your attic drip. In Woodbridge, flat commercial roofs get water pooling. Kleinburg homes deal with skylight leaks, and raccoons from conservation areas chew into soffits.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Paradise Roofers has helped over 2,800 homes in York Region since 2005. We have 4.9★ ratings on Google and HomeStars from real customers in Vellore, Elder Mills, Patterson, and Thornhill. Our free drone checks (worth $400) spot leaks early, stopping $21K water damage claims.
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
                            <img src={vaughanImage} alt="Vaughan Roofing Services" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">2,800+ Homes Helped</span>
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
                        <p className="text-lg text-muted-foreground">
                            We use quality materials like Owens Corning shingles, lifetime seamless gutters, TPO flat roofs, chimney repairs, skylight fixes, R60 insulation, animal barriers, drone inspections, and insurance help. These problems hit every year here, but we're ready to help.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Replacement in Vaughan</h2>
                            <p className="text-lg font-medium text-muted-foreground">Quality solutions for all Vaughan home types</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We handle all Vaughan home types – Woodbridge bungalows, Maple two-stories, Concord offices, Kleinburg estates. Full tear-off shows common issues like wet wood or bad ice shields.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            New roofs get Owens Corning Duration shingles (hail-proof, 40-year warranty). We add chimney flashing, skylight seals, full ventilation, and R60 insulation for rebates. Jobs finish in 2-4 days. Customers save 29% on energy bills and boost home value by 13%.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Drone Inspections Vaughan</h2>
                            <p className="text-lg font-medium text-muted-foreground">$400 value spotting problems early</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our free drone checks (worth $400) spot leaks early, behind chimneys, on flat roofs, skylight gaps, or animal holes, stopping $21K water damage claims.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Advanced technology helps us find problems you can't see from the ground, preventing expensive repairs and insurance claims down the road.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Repairs in Vaughan</h2>
                            <p className="text-lg font-medium text-muted-foreground">Smart fixes with 25-year warranties</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Common Repair Issues</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Wind-lifted shingles</p>
                                <p>• Valley leaks</p>
                                <p>• Ridge problems</p>
                                <p>• Chimney gaps</p>
                                <p>• Animal damage</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Quality Solutions</h3>
                            <p className="text-muted-foreground">
                                We use strong sealants and flashing with 25-year warranties. Saved neighbors 67% vs full replacement. Moss treatments last 14 years on shady slopes.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough Installation in Vaughan</h2>
                            <p className="text-lg font-medium text-muted-foreground">Seamless systems for tree-heavy neighborhoods</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Vaughan's trees mean clogged gutters. We install seamless 7-8" aluminum with proper slope, heated downspouts, leaf guards, and strong brackets.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Works great for Kleinburg homes or Thornhill businesses. Lifetime warranty, 95% no more overflows.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Building className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Flat Roof Repair in Vaughan</h2>
                            <p className="text-lg font-medium text-muted-foreground">Commercial solutions for Woodbridge businesses</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Common Issues</h3>
                            <p className="text-muted-foreground">
                                Woodbridge businesses face ponding and seam splits. We fix it with TPO, EPDM, or coatings.
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Fast Solutions</h3>
                            <p className="text-muted-foreground">
                                Same-day patches near Vaughan Mills, 40-year warranties for lasting protection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Snowflake className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Skylight & Chimney Repairs in Vaughan</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lifetime no-leak guarantees</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            1970s skylights leak from cracked seals. We replace glass and flashing. Chimneys get new mortar and caps. Lifetime no-leak guarantee.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Professional installation ensures your skylights and chimneys stay watertight for decades to come.
                        </p>
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Emergency Roofing in Vaughan</h2>
                            <p className="text-lg font-medium text-muted-foreground">Fast storm response across York Region</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Storms hit hard. We arrive in 55 mins to Concord/Woodbridge/Maple, 85 mins everywhere else. Tarps, temporary seals, tree help. Protected 71 roofs in the last big hail.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            When severe weather strikes, our emergency response team is ready to protect your property from further damage.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <TreePine className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Wildlife & Mold Protection</h2>
                            <p className="text-lg font-medium text-muted-foreground">Conservation area animal barriers</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Blocking raccoons and squirrels with screens and guards – works 91% long-term. Mold cleanup after leaks uses safe methods.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Our wildlife exclusion systems keep animals out while allowing proper ventilation for your roof system.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Choose Paradise Roofers in Vaughan?</h2>
                            <p className="text-lg font-medium text-muted-foreground">24 years local experience and expertise</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "24 Years Experience", icon: Award, desc: "Local experience serving Vaughan since 2005, understanding York Region challenges" },
                            { title: "4.9★ Reviews", icon: Star, desc: "600+ verified reviews from satisfied customers across all Vaughan neighborhoods" },
                            { title: "BBB A+ Rating", icon: CheckCircle2, desc: "Perfect record with Better Business Bureau, trusted by homeowners" },
                            { title: "Owens Corning Certified", icon: Shield, desc: "Certified installer of premium Owens Corning roofing systems" },
                            { title: "Fast Response", icon: Clock, desc: "55-minute response to priority areas, 85-minute city-wide coverage" },
                            { title: "Quality Materials", icon: Home, desc: "Premium materials including Owens Corning shingles and lifetime gutters" }
                        ].map((item, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-lg border border-border">
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

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4">Our Vaughan Areas</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority response zones with guaranteed service times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">55-Minute Priority Service</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Concord</span>
                                <span>• Woodbridge</span>
                                <span>• Maple</span>
                                <span>• Vellore</span>
                                <span>• Kleinburg</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">85-Minute Standard Service</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Patterson</span>
                                <span>• Elder Mills</span>
                                <span>• Teston</span>
                                <span>• Thornhill</span>
                                <span>• Sonoma Heights</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">Vaughan Neighborhoods We Serve</h2>
                    
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            "Concord", "Woodbridge", "Maple", "Vellore",
                            "Kleinburg", "Patterson", "Elder Mills", "Teston", 
                            "Thornhill", "Sonoma Heights", "Carrville", "Islington"
                        ].map((neighborhood, i) => (
                            <div key={i} className="bg-muted/30 p-4 rounded-lg border border-border text-center">
                                <MapPin className="h-5 w-5 text-[#FF9C45] mx-auto mb-2" />
                                <span className="font-medium text-sm">{neighborhood}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#F9F9F9] p-8 rounded-lg border border-border">
                        <h3 className="text-2xl font-bold uppercase mb-6">Typical Costs & Success Rates</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Bungalow roof replacement?</h4>
                                    <p className="text-sm text-muted-foreground">$28K-$55K with Owens Corning Duration shingles, R60 insulation, and full warranty coverage.</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Hail claims success rate?</h4>
                                    <p className="text-sm text-muted-foreground">97% success rate with drone documentation and insurance advocacy support.</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Wildlife proofing effectiveness?</h4>
                                    <p className="text-sm text-muted-foreground">91% effective long-term with our comprehensive animal exclusion systems.</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Energy savings with new roof?</h4>
                                    <p className="text-sm text-muted-foreground">Average 29% reduction in energy bills with R60 insulation and proper ventilation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </Layout>
    );
}