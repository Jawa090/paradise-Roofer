import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, Home, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import miltonImage from "@/assets/locations/Milton.png";

export default function MiltonSimple() {
    return (
        <Layout>
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Milton Services</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Professional Services in<br />
                            Milton, Ontario
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
                        <img src={miltonImage} alt="Milton Services" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] group-hover:shadow-[0_6px_0_0_rgba(180,83,9,1)] transition-all">
                                    <Home className="h-10 w-10 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Roofing Services in Milton, Ontario</h3>
                                    <p className="text-muted-foreground">
                                        Complete roofing solutions for residential and commercial properties in Milton. From inspections to installations, repairs to replacements.
                                    </p>
                                </div>
                            </div>
                            
                            <ul className="space-y-3 mb-6 ml-2">
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Roof Inspections & Maintenance</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Roof Installation & Replacement</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Roof Repairs & Leak Detection</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Emergency Roof Repairs</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Eavestrough, Soffit & Fascia Services</span>
                                </li>
                            </ul>

                            <Link to="/locations/milton/roofing">
                                <button className="bg-[#FF9C45] text-black px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center gap-2">
                                    View Roofing Services <ArrowRight className="h-4 w-4" strokeWidth={3} />
                                </button>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] group-hover:shadow-[0_6px_0_0_rgba(180,83,9,1)] transition-all">
                                    <Hammer className="h-10 w-10 text-white" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Renovation Services in Milton, Ontario</h3>
                                    <p className="text-muted-foreground">
                                        Professional renovation services to modernize and enhance your Milton property. Quality workmanship for every project.
                                    </p>
                                </div>
                            </div>
                            
                            <ul className="space-y-3 mb-6 ml-2">
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Kitchen & Bathroom Renovations</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Windows Repair & Replacement</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Attic Insulation Services</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Drywall & Painting</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="h-2 w-2 rounded-full bg-[#FF9C45]" />
                                    <span>Exterior Renovations & Siding</span>
                                </li>
                            </ul>

                            <Link to="/locations/milton/renovation">
                                <button className="bg-[#FF9C45] text-black px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#ff8a22] transition-colors flex items-center gap-2">
                                    View Renovation Services <ArrowRight className="h-4 w-4" strokeWidth={3} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12 text-center">FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "How much you charge for Roof Inspection?", a: "It's totally free of cost and through 4K Drone." },
                            { q: "How often should I inspect my roof?", a: "Twice a year—spring and fall are best. Or after major storms." },
                            { q: "What's the difference between inspection and maintenance?", a: "Inspections find issues. Maintenance fixes the little stuff on the spot." },
                            { q: "Can this extend my roof's life?", a: "Absolutely—routine care can add 5–10 years or more." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm">
                                <h4 className="font-bold text-lg mb-3 flex items-start gap-2">
                                    <span className="text-[#FF9C45]">Q.</span> {faq.q}
                                </h4>
                                <p className="text-muted-foreground pl-6">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactForm />
        </Layout>
    );
}
