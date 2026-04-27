import { Link as RouterLink } from "react-router-dom";
import { Link, ExternalLink } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaPinterest, FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import workersSilhouette from "@/assets/workers-silhouette.png";

const footerLinks = {
  pages: [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Roof Installation", href: "/services/installation" },
    { name: "Roof Repair", href: "/services/repair" },
    { name: "Roof Replacement", href: "/services/replacement" },
    { name: "Roof Inspections", href: "/services/inspection" },
    { name: "Roof Coating", href: "/services/coating" },
    { name: "Commercial Roofing", href: "/services/commercial" },
    { name: "Gutters & Eavestrough", href: "/services/gutters" },
    { name: "Attic Insulation", href: "/services/attic-insulation" },
  ],
  locations: [
    { name: "Brampton", href: "/locations/brampton" },
    { name: "Mississauga", href: "/locations/mississauga" },
    { name: "Milton", href: "/locations/milton" },
    { name: "Oakville", href: "/locations/oakville" },
    { name: "Etobicoke", href: "/locations/etobicoke" },
    { name: "Scarborough", href: "/locations/scarborough" },
    { name: "Vaughan", href: "/locations/vaughan" },
    { name: "Markham", href: "/locations/markham" },
    { name: "Richmond Hill", href: "/locations/richmond-hill" },
    { name: "Aurora", href: "/locations/aurora" },
    { name: "Burlington", href: "/locations/burlington" },
    { name: "Ajax", href: "/locations/ajax" },
  ],
};

const socialLinks = [
  { name: "LINKEDIN", icon: FaLinkedin, href: "https://www.linkedin.com/company/paradise-roofers/" },
  { name: "FACEBOOK", icon: FaFacebook, href: "https://www.facebook.com/paradiseroofers/" },
  { name: "TWITTER/X", icon: FaTwitter, href: "https://x.com/ParadisseRoofer" },
  { name: "YOUTUBE", icon: FaYoutube, href: "https://www.youtube.com/channel/UCVsy0Tk92uISc-LSw_z-8UQ" },
  { name: "INSTAGRAM", icon: FaInstagram, href: "https://www.instagram.com/paradiseroofers" },
  { name: "PINTEREST", icon: FaPinterest, href: "https://www.pinterest.com/paradiseroofers/" },
  { name: "TIKTOK", icon: FaTiktok, href: "https://www.tiktok.com/@paradiseroofers" },
];

export default function Footer() {
  return (
    <footer>

      {/* Worker Silhouettes - Light Background */}
      <div className="relative bg-background overflow-hidden">
        <img
          src={workersSilhouette}
          alt="Roofing workers silhouette"
          className="w-full h-auto max-h-64 object-contain object-bottom"
        />
      </div>

      {/* Main Footer - Dark Section */}
      <div className="bg-foreground text-background">
        <div className="container py-12">
          {/* Links Grid + Newsletter */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10 border-b border-background/20">
            {/* Pages */}
            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-primary mb-4">
                Pages
              </h4>
              <ul className="space-y-2">
                {footerLinks.pages.map((link) => (
                  <li key={link.name}>
                    <RouterLink
                      to={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-primary mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <RouterLink
                      to={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-primary mb-4">
                Locations
              </h4>
              <ul className="space-y-2">
                {footerLinks.locations.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <RouterLink
                      to={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </RouterLink>
                  </li>
                ))}
                <li>
                  <RouterLink
                    to="/locations"
                    className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    See More →
                  </RouterLink>
                </li>
              </ul>
            </div>

            {/* Newsletter + Social - spans 2 cols */}
            <div className="col-span-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-background/50 mb-4">
                Subscribe to the Newsletter
              </h4>
              <div className="flex gap-2 mb-6">
                <Input
                  type="email"
                  placeholder="sales@paradiseroofers.com"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-12"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold text-xs px-6 h-12 shrink-0">
                  Subscribe
                </Button>
              </div>

              {/* Social Links - 3x2 Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-background/10 hover:bg-background/20 transition-colors text-xs font-medium"
                  >
                    <social.icon className="h-4 w-4" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <div>
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-primary mb-2">
                Phone
              </h5>
              <p className="text-sm text-background/70">437-564-2790</p>
            </div>
            <div>
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-primary mb-2">
                Email
              </h5>
              <p className="text-sm text-primary">sales@paradiseroofers.com</p>
            </div>
            <div>
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-primary mb-2">
                Address
              </h5>
              <p className="text-sm text-background/70">
                73 Richmond ST.W Suit No. 6,
                Financial District,
                Toronto, ON. Canada
              </p>
            </div>
            <div>
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-primary mb-2">
                Opening Hours
              </h5>
              <p className="text-sm text-background/70">Mon to Sat:</p>
              <p className="text-sm text-background/70">9.00am - 8.30pm</p>
              <p className="text-sm text-background/50 mt-1">Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Giant Brand Name Watermark */}
        <div className="overflow-hidden py-4 flex justify-center">
          <h2 className="text-[12vw] font-black text-background/10 whitespace-nowrap select-none">
            PARADISE ROOFERS
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="container py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60">
              <div className="flex gap-6 uppercase font-bold tracking-widest text-[10px]">
                <RouterLink to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </RouterLink>
                <RouterLink to="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </RouterLink>
              </div>
              <p>© {new Date().getFullYear()} Paradise Roofers. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
