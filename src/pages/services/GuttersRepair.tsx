import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { Check, Phone, ArrowRight, Shield, Award, Star, MapPin, Ruler, CloudRain, Droplets, ArrowDownToLine, CheckCircle2, Factory, Hammer } from "lucide-react";
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
                            <span className="text-sm font-bold uppercase tracking-wider">Water Management Systems</span>
                            <div className="h-4 w-4 bg-[#FF9C45]"></div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                            Seamless Eavestrough<br />
                            & Gutter Systems
                        </h1>

                        {/* Description & Buttons Row */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Water is your home's biggest enemy. If your gutters are leaking, sagging, or overflowing, your basement and foundation are at risk.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We manufacture seamless 5" and 6" aluminum gutters on-site, custom-fitted to your home. No joints means no leaks.
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
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Gutter Problems</h2>
                            <p className="text-lg font-medium text-muted-foreground">Don't ignore these warning signs of water mismanagement:</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Basement Flooding",
                                icon: Droplets,
                                points: [
                                    "Water pooling near foundation",
                                    "Cracks in basement walls",
                                    "Downspouts dumping too close"
                                ]
                            },
                            {
                                title: "2. Overflowing Water",
                                icon: ArrowDownToLine,
                                points: [
                                    "Waterfall effect during rain",
                                    "Clogged with leaves/debris",
                                    "Undersized 4-inch gutters"
                                ]
                            },
                            {
                                title: "3. Sagging & Detached",
                                icon: Ruler,
                                points: [
                                    "Pulling away from fascia",
                                    "Spikes coming loose",
                                    "Bent/warped metal"
                                ]
                            },
                            {
                                title: "4. Ice Dams",
                                icon: Droplets,
                                points: [
                                    "Gutters filled with solid ice",
                                    "Weight pulling gutters down",
                                    "Water backing up under roof"
                                ]
                            },
                            {
                                title: "5. Leaking Corners",
                                icon: Droplets,
                                points: [
                                    "Drips at mitered corners",
                                    "Staining on brickwork",
                                    "Erosion of landscaping below"
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
                    <h2 className="text-3xl font-bold uppercase mb-4">Our Gutter Solutions</h2>
                    <p className="text-muted-foreground mb-12 max-w-3xl">Engineered water management for the Canadian climate.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "5\" Residential Gutters", desc: "Standard size for most homes. Seamless aluminum in 30+ colours." },
                            { title: "6\" High-Flow Gutters", desc: "For large steep roofs or commercial buildings (40% more water capacity)." },
                            { title: "Alu-Rex Leaf Guards", desc: "Keep leaves and debris out forever. Continuous hanger system adds strength." },
                            { title: "Downspout Redirection", desc: "Strategic placement of large 3x3 downspouts to move water 6ft+ away from foundation." },
                            { title: "Gutter Cleaning", desc: "Professional seasonal cleaning and flushing of existing systems." },
                            { title: "Heating Cables", desc: "Installation of zig-zag heating cables to melt ice channels in winter." },
                            { title: "Soffit & Fascia", desc: "Complete roofline renovation often done alongside gutter replacement." },
                            { title: "Rain Barrels", desc: "Eco-friendly diverters to collect rainwater for your garden." }
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
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Seamless Installation Process</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Measurement & Colour",
                                time: "Consultation",
                                desc: "We measure your roofline and help you match colours to your brick or siding."
                            },
                            {
                                step: "02",
                                title: "On-Site Fabrication",
                                time: "Install Day",
                                desc: "Our truck arrives with the machine. We form the gutters to the exact length of your eaves."
                            },
                            {
                                step: "03",
                                title: "Hang & Level",
                                time: "Install Day",
                                desc: "We use a laser level to ensure proper slope for drainage. Hangers spaced every 18 inches."
                            },
                            {
                                step: "04",
                                title: "Downspout & Test",
                                time: "Completion",
                                desc: "Downspouts connected and secured. We flush the system to verify flow."
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

            {/* Case Studies */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold uppercase mb-12 text-center">Recent Installations</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Etobicoke Century Home",
                                img: completedRoof,
                                problem: "Overflowing gutters causing basement leak",
                                result: "Upgraded to 6-inch gutters with leaf guards. Basement dry."
                            },
                            {
                                title: "Vaughan New Build",
                                img: roofCoating,
                                problem: "Builder-grade gutters bent by ice",
                                result: "Heavy gauge aluminum with Alu-Rex T-Rex continuous hanger."
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

            {/* FAQ */}
            <section className="py-20 bg-[#F9F9F9] border-t border-border">
                <div className="container max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">Gutter FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { q: "Why seamless gutters?", a: "Every seam is a potential leak point. Seamless gutters are custom-made to have zero seams along the straight runs, eliminating 95% of leaks." },
                            { q: "Do I need 5 inch or 6 inch?", a: "5 inch is standard. 6 inch holds 40% more water and is recommended for large roofs, steep pitches, or metal roofs where water shoots off faster." },
                            { q: "Are leaf guards worth it?", a: "Yes, if you have trees. They prevent clogging and the dangerous chore of climbing a ladder to clean them twice a year." },
                            { q: "How long do aluminum gutters last?", a: "Aluminum gutters typically last 20+ years. Copper gutters can last 50+ years but cost significantly more." },
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
