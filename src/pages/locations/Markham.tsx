import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock, Eye, Wrench, Hammer, Snowflake, Wind, Zap, Building, TreePine, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import markhamImage from "@/assets/locations/Markham.png";

export default function Markham() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Markham Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Markham Roofers<br />
                            Heritage & Modern Experts
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Searching for "roofing Markham"? We've got you covered. Markham's brutal winters hit Unionville, Wismer, Thornhill, Milliken hard with ice dams, wind damage, flat roof leaks, and skylight failures. Free drone inspections. 24 years experience. 4.9★ reviews.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    2,800+ Markham families trust us since 2005. Unionville's historic homes get ice dams. Thornhill two-stories lose shingles in wind. Markham Village bungalows battle attic mold. Milliken commercial strips fight flat roof ponding. Wismer Commons sees hail damage.
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
                            <img src={markhamImage} alt="Markham Roofing Services" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">2,800+ Families Trust Us</span>
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
                            Our Markham roofing services include roof replacement, roof repair, eavestrough installation, flat roof repair, emergency roofing, and free drone inspections. We understand why Markham roofs fail every winter and provide solutions that last.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Replacement Markham</h2>
                            <p className="text-lg font-medium text-muted-foreground">$28K-$55K | 2-4 days | 40-year warranty</p>
                        </div>
                    </div>

                    <div className="bg-muted/30 p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Full tear-off (3 layers max, code compliant), Owens Corning Duration shingles (hail-resistant), R60 attic insulation ($1,900 rebates available), chimney flashing + skylight seals included.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Unionville bungalow: 2.3 days, Thornhill duplex: 4 days total. Zero callbacks first winter guaranteed with our comprehensive installation process.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Free Drone Roof Inspection ($400 Value)</h2>
                            <p className="text-lg font-medium text-muted-foreground">4K thermal drone finds problems before ceiling stains appear</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our 4K thermal drone finds: Hidden chimney leaks, flat roof ponding, skylight seal gaps, ice dam formation spots, animal entry points. Spots problems BEFORE ceiling stains appear.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Advanced thermal imaging technology reveals moisture and structural issues invisible to ground-level inspections, preventing costly emergency repairs.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Roof Repair Markham</h2>
                            <p className="text-lg font-medium text-muted-foreground">Save 65% vs replacement | 25-year warranty</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Common Repair Issues</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Missing shingles (wind damage)</p>
                                <p>• Valley leaks + ridge cap fixes</p>
                                <p>• Squirrel/raccoon holes</p>
                                <p>• Moss removal (north slopes)</p>
                                <p>• Ice dam damage repair</p>
                            </div>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Quality Solutions</h3>
                            <p className="text-muted-foreground">
                                Professional repairs using premium materials with 25-year warranties. Our repair solutions save homeowners 65% compared to full replacement costs while providing long-lasting protection.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Eavestrough Installation Markham</h2>
                            <p className="text-lg font-medium text-muted-foreground">Lifetime seamless aluminum | 98% leaf-free</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Perfect for Markham's tree-heavy Unionville neighborhoods. Our seamless aluminum eavestrough systems with advanced leaf guard technology ensure 98% debris-free performance.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Lifetime warranty on seamless construction, professional installation with proper slope calculations, and comprehensive leaf protection systems.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Flat Roof Repair Markham</h2>
                            <p className="text-lg font-medium text-muted-foreground">TPO/EPDM systems | 40-year warranty</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Commercial Solutions</h3>
                            <p className="text-muted-foreground">
                                Markham industrial parks get same-day leak patches near Highway 7. Professional TPO and EPDM membrane systems designed for commercial applications.
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4">Long-Term Protection</h3>
                            <p className="text-muted-foreground">
                                40-year warranty systems with advanced drainage solutions, preventing ponding and extending roof life significantly beyond standard installations.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Emergency Roofing Markham</h2>
                            <p className="text-lg font-medium text-muted-foreground">Rapid response across all Markham neighborhoods</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-border mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            55 mins: Unionville, Thornhill, Markham Village, Wismer. 85 mins: Milliken, Greensborough, Cornell. Tarps + temporary seals included.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                            Last Markham hail storm: Saved 68 roofs from water damage with our rapid emergency response and professional temporary protection systems.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <AlertTriangle className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Markham Roof Warning Signs (Act Fast)</h2>
                            <p className="text-lg font-medium text-muted-foreground">Call immediately if you see these signs</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "Ceiling Water Stains", icon: AlertTriangle, desc: "Brown or yellow stains on ceilings indicate active leaks requiring immediate attention" },
                            { title: "Missing Shingles", icon: Wind, desc: "Shingles missing after storms expose underlayment to weather damage" },
                            { title: "Granules in Gutters", icon: Wrench, desc: "Excessive granule loss indicates shingle deterioration and potential failure" },
                            { title: "Animals in Attic", icon: TreePine, desc: "Scratching sounds indicate wildlife entry through damaged roof areas" },
                            { title: "Ice Dams", icon: Snowflake, desc: "Ice buildup along eaves can cause significant water damage" },
                            { title: "Sagging Roof Lines", icon: Home, desc: "Visible sagging indicates structural issues requiring immediate inspection" }
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
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Shield className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Markham Chooses Paradise Roofers?</h2>
                            <p className="text-lg font-medium text-muted-foreground">24+ years serving Markham with proven results</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: "24+ Years Experience", icon: Award, desc: "Serving Markham since 2005 with deep local knowledge and expertise" },
                            { title: "4.9★ Google Reviews", icon: Star, desc: "600+ verified reviews from satisfied Markham customers" },
                            { title: "BBB A+ Perfect Record", icon: CheckCircle2, desc: "Perfect record with Better Business Bureau over 24 years" },
                            { title: "Owens Corning Preferred", icon: Shield, desc: "Certified preferred contractor for premium Owens Corning systems" },
                            { title: "97% Insurance Success", icon: Eye, desc: "97% insurance claim success rate with drone documentation" },
                            { title: "Zero Callbacks", icon: Home, desc: "Zero callbacks first winter guarantee on all installations" }
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Markham Neighborhood Response Times</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Priority response zones with guaranteed service times</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">55-Minute Emergency Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Unionville</span>
                                <span>• Thornhill</span>
                                <span>• Markham Village</span>
                                <span>• Wismer</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Same Day Inspection Available</p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <h3 className="font-bold text-xl mb-4 text-[#FF9C45]">85-Minute Standard Response</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <span>• Milliken</span>
                                <span>• Cornell</span>
                                <span>• Greensborough</span>
                                <span>• Cachet</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Next Day Inspection Available</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-8">2026 Markham Roofing Costs & Insurance Claims</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-bold uppercase mb-6">Project Costs</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Bungalow Roof</span>
                                    <span className="text-[#FF9C45] font-bold">$28K-$38K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Two-Story Home</span>
                                    <span className="text-[#FF9C45] font-bold">$38K-$55K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Flat Roof (1,000sf)</span>
                                    <span className="text-[#FF9C45] font-bold">$22K-$32K</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Roof Repair</span>
                                    <span className="text-[#FF9C45] font-bold">$2K-$8K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Eavestroughs</span>
                                    <span className="text-[#FF9C45] font-bold">$8K-$15K</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-bold uppercase mb-6">Easy Insurance Claims</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Drone photos/videos document damage</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Meet your adjuster on-site</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Maximize your payout (97% success)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[#FF9C45]" />
                                    <span className="text-sm">Direct bill insurance – you pay nothing upfront</span>
                                </div>
                                <div className="bg-[#F9F9F9] p-4 rounded-lg mt-4">
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Industry average:</strong> 60% approval<br />
                                        <strong>Paradise Roofers:</strong> 97% approval
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Unionville", "Thornhill", "Markham Village", "Wismer",
                            "Milliken", "Cornell", "Greensborough", "Cachet", 
                            "Berczy Village", "Angus Glen", "Thornlea", "Rouge River Estates"
                        ].map((neighborhood, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg border border-border text-center">
                                <MapPin className="h-5 w-5 text-[#FF9C45] mx-auto mb-2" />
                                <span className="font-medium text-sm">{neighborhood}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactForm />
        </Layout>
    );
}