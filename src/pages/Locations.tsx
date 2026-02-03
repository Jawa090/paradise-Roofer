import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, ArrowRight, MapPin, Shield, Award, Star, CheckCircle2, Home, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroRoofing from "@/assets/hero-roofing.jpg";

const locations = [
  { name: "Brampton", href: "/locations/brampton", description: "Trusted roofing services for Brampton's growing communities" },
  { name: "Mississauga", href: "/locations/mississauga", description: "Premier roofing contractors serving Mississauga and GTA" },
  { name: "Milton", href: "/locations/milton", description: "Professional roofing services for Milton's diverse neighborhoods" },
  { name: "Oakville", href: "/locations/oakville", description: "Premium roofing services for Oakville's distinguished properties" },
  { name: "Etobicoke", href: "/locations/etobicoke", description: "Expert roofing solutions for Etobicoke's urban communities" },
  { name: "Scarborough", href: "/locations/scarborough", description: "Reliable roofing services across all Scarborough districts" },
  { name: "Vaughan", href: "/locations/vaughan", description: "Luxury roofing services for Vaughan's prestigious communities" },
  { name: "Markham", href: "/locations/markham", description: "Quality roofing solutions for Markham's heritage and modern homes" },
  { name: "Richmond Hill", href: "/locations/richmond-hill", description: "Premium roofing services for Richmond Hill's luxury estates" },
  { name: "Aurora", href: "/locations/aurora", description: "Professional roofing services for Aurora's charming communities" },
  { name: "Burlington", href: "/locations/burlington", description: "Specialized lakefront roofing services for Burlington" },
  { name: "Ajax", href: "/locations/ajax", description: "Expert roofing services for Ajax's lakefront and suburban areas" },
];

export default function Locations() {
    return (
        <Layout>
            {/* Hero Text Section */}
            <section className="pt-20 pb-10 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-8">
                        {/* Label */}
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                            <span className="text-sm font-bold uppercase tracking-wider">Service Locations</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Paradise Roofers<br />
                            Service Areas
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Serving the Greater Toronto Area with professional roofing services. From downtown Toronto to surrounding municipalities, we bring quality workmanship to your neighborhood.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Licensed, insured, and locally trusted since 2008. Click on your city below to learn more about our services in your area.
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

            {/* Hero Image & Badges */}
            <section className="pb-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="relative">
                        <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm">
                            <img src={heroRoofing} alt="Paradise Roofers Service Areas" className="w-full h-full object-cover" />
                        </div>

                        {/* Badges Bar */}
                        <div className="bg-white border border-border shadow-sm py-6 px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Shield className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Award className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">25-Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Clock className="h-6 w-6 text-black fill-current" />
                                <span className="font-bold text-sm uppercase tracking-wide">24/7 Emergency</span>
                            </div>
                        </div>
                    </div>

                    {/* Intro Extension */}
                    <div className="mt-12 max-w-4xl">
                        <p className="text-lg text-muted-foreground">
                            Paradise Roofers proudly serves homeowners and businesses across the Greater Toronto Area. Our local teams understand the unique challenges of each community, from lakefront properties to urban developments, heritage homes to modern constructions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Areas Grid */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <MapPin className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Choose Your Location</h2>
                            <p className="text-lg font-medium text-muted-foreground">Click on your city to learn more about our local services</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {locations.map((location, i) => (
                            <Link key={i} to={location.href} className="group">
                                <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all group-hover:border-[#FF9C45] h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <MapPin className="h-6 w-6 text-[#FF9C45] group-hover:scale-110 transition-transform" />
                                        <h3 className="font-bold text-xl group-hover:text-[#FF9C45] transition-colors">{location.name}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{location.description}</p>
                                    <div className="flex items-center gap-2 text-[#FF9C45] font-medium text-sm group-hover:gap-3 transition-all">
                                        <span>Learn More</span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <div className="flex items-start gap-6 mb-12">
                        <div className="bg-[#FF9C45] rounded-xl p-4 shadow-[0_4px_0_0_rgba(180,83,9,1)] shrink-0">
                            <Home className="h-10 w-10 text-white" strokeWidth={4} />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Why Choose Paradise Roofers?</h2>
                            <p className="text-lg font-medium text-muted-foreground">Local expertise across the Greater Toronto Area</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Local Teams",
                                icon: Users,
                                desc: "Dedicated local teams in each service area who understand your community's unique needs and building requirements."
                            },
                            {
                                title: "Fast Response",
                                icon: Clock,
                                desc: "Emergency service within 2 hours anywhere in the GTA. Regular estimates scheduled within 24 hours."
                            },
                            {
                                title: "Quality Materials",
                                icon: Shield,
                                desc: "Premium roofing materials from trusted manufacturers, designed for Ontario's harsh climate conditions."
                            },
                            {
                                title: "Proven Track Record",
                                icon: Award,
                                desc: "5,000+ satisfied customers across the GTA. Excellent reputation built through quality work and service."
                            },
                            {
                                title: "Complete Service",
                                icon: CheckCircle2,
                                desc: "Full project management from permits to cleanup. We handle insurance claims and warranty service."
                            },
                            {
                                title: "Fair Pricing",
                                icon: Star,
                                desc: "Transparent, competitive pricing with detailed written estimates. No surprises, no hidden costs."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-muted/30 p-6 rounded-xl border border-border hover:border-[#FF9C45] transition-colors">
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

            {/* Our Services */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-4 text-center">Complete Roofing Services</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-center">Professional roofing solutions available in all service areas</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Roof Installation", desc: "New construction and replacement installations with premium materials and expert craftsmanship." },
                            { title: "Roof Repair", desc: "Storm damage, leak repairs, and maintenance to extend your roof's lifespan." },
                            { title: "Roof Replacement", desc: "Complete tear-off and replacement when repairs aren't enough." },
                            { title: "Emergency Services", desc: "24/7 emergency repairs for storm damage and urgent leaks." },
                            { title: "Roof Inspection", desc: "Comprehensive inspections for insurance, real estate, and maintenance." },
                            { title: "Gutters & Downspouts", desc: "Installation, repair, and cleaning of eavestrough systems." },
                            { title: "Attic Insulation", desc: "Energy-efficient insulation upgrades to R50 standards." },
                            { title: "Commercial Roofing", desc: "Flat roof systems, TPO, EPDM, and modified bitumen for businesses." }
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-border hover:border-[#FF9C45] transition-colors">
                                <CheckCircle2 className="h-8 w-8 text-[#FF9C45] mb-3" />
                                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-20 bg-background border-t border-border">
                <div className="container max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <Phone className="h-5 w-5 text-[#FF9C45]" />
                                Contact Paradise Roofers
                            </h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p><strong>Phone:</strong> (647) 555-0123</p>
                                <p><strong>Email:</strong> info@paradiseroofers.com</p>
                                <p><strong>Emergency:</strong> Available 24/7</p>
                                <p><strong>Free Estimates:</strong> Same day scheduling</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-[#FF9C45]" />
                                Service Coverage
                            </h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Greater Toronto Area (GTA)</p>
                                <p>• York Region</p>
                                <p>• Peel Region</p>
                                <p>• Halton Region</p>
                                <p>• Durham Region</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
        </Layout>
    );
}