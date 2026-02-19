import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Home, Shield, Wrench, AlertTriangle, Eye, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import miltonImage from "@/assets/locations/Milton.png";

export default function MiltonRoofing() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Milton Roofing Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Roofing Services in<br />Milton, Ontario
                        </h1>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Paradise Roofers proudly offers reliable roofing and renovation services in Milton, Ontario, delivering high-quality workmanship for residential and commercial properties. With years of hands-on experience, our team is committed to protecting, improving, and enhancing your property from the roof down.
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
                    <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm">
                        <img src={miltonImage} alt="Milton Roofing Services" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">🏠 Roofing Services</h2>
                            <p className="text-lg font-medium text-muted-foreground">We provide complete roofing solutions designed to withstand Ontario's weather conditions:</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {["Roof inspections & maintenance","Roof installation & replacement","Roof repairs & leak detection","Asphalt shingle roofing","Flat roofing systems","Emergency roof repairs","Eavestrough, soffit & fascia services"].map((service, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-border">
                                <div className="h-2 w-2 rounded-full bg-[#FF9C45] shrink-0" />
                                <span className="text-sm font-medium">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="space-y-16">
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Eye className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Roof inspections & maintenance Services in Milton</h3>
                                    <p className="text-muted-foreground">
                                        We offer free drone roof inspections to safely assess your roof's condition, identify damage, and spot potential issues early—no ladders, no disruption. Our Milton maintenance services help extend the life of your roof and prevent costly repairs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Home className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Roof installation & replacement In Milton</h3>
                                    <p className="text-muted-foreground">
                                        Professional roof installation and roof replacement services in Milton, Ontario, using high-quality materials for durable, weather-resistant results.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Wrench className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Roof repairs & leak detection in Milton</h3>
                                    <p className="text-muted-foreground">
                                        Professional roof repair and leak detection services in Milton, Ontario, preventing water damage and costly structural issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Shield className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Asphalt shingle roofing services in Milton</h3>
                                    <p className="text-muted-foreground">
                                        Expert asphalt shingle roofing services in Milton, Ontario, providing reliable protection, affordability, and long-term performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <AlertTriangle className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Emergency Roof Repairs in Milton</h3>
                                    <p className="text-muted-foreground">
                                        24/7 emergency roof repair services in Milton, offering fast, reliable response to storm damage, leaks, and urgent roofing problems to protect your home.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-3 shadow-[0_4px_0_0_rgba(180,83,9,1)]">
                                    <Hammer className="h-8 w-8 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Eaves trough, Soffit & Fascia Services in Milton</h3>
                                    <p className="text-muted-foreground">
                                        Professional eaves trough, soffit, and fascia services in Milton, Ontario, protecting your home from water damage while enhancing its exterior appearance and durability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-center">⭐ Why Choose Paradise Roofers?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {["Experienced & skilled professionals","High-quality materials and workmanship","Honest pricing and clear communication","Fully insured and safety-focused","Local Mississauga service you can trust"].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-border text-center">
                                <div className="h-3 w-3 rounded-full bg-[#FF9C45] mx-auto mb-4" />
                                <p className="font-medium text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-lg font-medium mt-8 text-muted-foreground">
                        Whether you need a minor roof repair, a full roof replacement, or professional renovation services, Paradise Roofers is your trusted partner in Milton and surrounding areas.
                    </p>
                </div>
            </section>
            <ContactForm />
        </Layout>
    );
}
