import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Hammer, Paintbrush, Wind, Home, Shield, Layers, Building } from "lucide-react";
import { Link } from "react-router-dom";
import bramptonImage from "@/assets/locations/Brampton.png";

export default function BramptonRenovation() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Brampton Renovation Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Renovation Services in<br />
                            Brampton, Ontario
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Paradise Roofers proudly offers reliable roofing and renovation services in Brampton, Ontario, delivering high-quality workmanship for residential and commercial properties. With years of hands-on experience, our team is committed to protecting, improving, and enhancing your property from the roof down.
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

            {/* Hero Image */}
            <section className="pb-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm">
                        <img src={bramptonImage} alt="Brampton Renovation Services" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Renovation Services Overview */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Hammer className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">🛠️ Renovation Services</h2>
                            <p className="text-lg font-medium text-muted-foreground">Our renovation services help modernize, repair, and add value to your home or business:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            "Kitchen and Bathroom renos",
                            "Windows repair and replacement",
                            "Attic Insulation",
                            "Drywall and Painting",
                            "Exterior renovations & upgrades",
                            "Structural repairs",
                            "Siding & exterior finishes",
                            "Property restoration projects"
                        ].map((service, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-border">
                                <div className="h-2 w-2 rounded-full bg-[#FF9C45] shrink-0" />
                                <span className="text-sm font-medium">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="space-y-16">
                        {/* Windows Repair & Replacement */}
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Home className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Windows Repair & Replacement in Brampton</h3>
                                    <p className="text-muted-foreground">
                                        Professional window repair and replacement services in Brampton, Ontario, improving energy efficiency, enhancing security, and giving your home a fresh, modern look.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Attic Insulation */}
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Layers className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Attic Insulation Services in Brampton</h3>
                                    <p className="text-muted-foreground">
                                        Professional attic insulation services in Brampton, Ontario, improving energy efficiency with R60 Level, reducing heating and cooling costs, and keeping your home comfortable year-round.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Drywall & Painting */}
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Paintbrush className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Drywall & Painting Services in Brampton</h3>
                                    <p className="text-muted-foreground">
                                        Expert drywall installation, repair, and professional painting services in Brampton, Ontario, enhancing your home's interior with smooth finishes, vibrant colors, and lasting quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Exterior Renovations & Upgrades */}
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Building className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Exterior Renovations & Upgrades in Brampton</h3>
                                    <p className="text-muted-foreground">
                                        Professional exterior renovation and upgrade services in Brampton, Ontario, enhancing your home's curb appeal, durability, and overall value with high-quality materials and expert craftsmanship.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Structural Repairs */}
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Shield className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Structural Repairs in Brampton</h3>
                                    <p className="text-muted-foreground">
                                        Expert structural repair services in Brampton, Ontario, ensuring the safety, stability, and longevity of your home or building with professional solutions and high-quality materials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Siding & Exterior Finishes */}
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Wind className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Siding & Exterior Finishes in Brampton</h3>
                                    <p className="text-muted-foreground">
                                        Professional siding installation, repair, and exterior finishing services in Brampton, Ontario, enhancing your home's curb appeal, durability, and protection against the elements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Property Restoration Projects */}
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Hammer className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Property Restoration Projects in Brampton</h3>
                                    <p className="text-muted-foreground">
                                        Comprehensive property restoration services in Brampton, Ontario, restoring homes and buildings after damage with expert craftsmanship, high-quality materials, and efficient project management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-center">⭐ Why Choose Paradise Roofers?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            "Experienced & skilled professionals",
                            "High-quality materials and workmanship",
                            "Honest pricing and clear communication",
                            "Fully insured and safety-focused",
                            "Local Mississauga service you can trust"
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-border text-center">
                                <div className="h-3 w-3 rounded-full bg-[#FF9C45] mx-auto mb-4" />
                                <p className="font-medium text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-lg font-medium mt-8 text-muted-foreground">
                        Whether you need a minor roof repair, a full roof replacement, or professional renovation services, Paradise Roofers is your trusted partner in Brampton and surrounding areas.
                    </p>
                </div>
            </section>

            <ContactForm />
        </Layout>
    );
}
