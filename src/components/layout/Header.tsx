import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/logo.png";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  {
    name: "SERVICES",
    href: "/services",
    children: [
      { name: "FREE ROOF DRONE INSPECTION", href: "/services/inspection" },
      { name: "ROOF REPAIR", href: "/services/repair" },
      { name: "ROOF REPLACEMENT", href: "/services/replacement" },
      { name: "FASCIA REPAIR & REPLACEMENT", href: "/services/fascia" },
      { name: "GUTTERS REPAIR & REPLACEMENT", href: "/services/gutters" },
      { name: "SOFFIT REPAIR & REPLACEMENT", href: "/services/soffit" },
      { name: "ATTIC INSULATION", href: "/services/attic-insulation" },
      { name: "ALL INTERIOR RENOS", href: "/services/interior-renos" },
      { name: "ROOF INSTALLATION", href: "/services/installation" },
      { name: "RESIDENTIAL ROOFING", href: "/services/residential" },
      { name: "COMMERCIAL ROOFING", href: "/services/commercial" },
      { name: "ROOF COATING & RESTORATION", href: "/services/coating" },
    ],
  },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Paradise Roofer" className="h-16 w-auto object-contain" />
        </Link>



        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-foreground"
                    }`}
                >
                  {item.name}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </Link>

                <div className="absolute left-0 top-full pt-2 hidden group-hover:block min-w-[600px] z-50">
                  <div className="bg-background border border-border shadow-lg rounded-md overflow-hidden p-4 grid grid-cols-2 gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm font-bold text-foreground hover:text-foreground hover:bg-muted transition-colors rounded-sm uppercase tracking-wide"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${isActive(item.href)
                  ? "text-primary"
                  : "text-foreground hover:text-foreground"
                  }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact">
            <Button className="bg-black text-white hover:bg-black/90 uppercase text-sm font-bold tracking-wide px-6 py-2 h-auto group">
              FREE QUOTE
              <ChevronDown className="h-4 w-4 ml-1 -rotate-90" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="space-y-2">
                    <span className="block text-sm font-medium text-foreground/60 uppercase tracking-wide">
                      {item.name}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block pl-4 text-sm text-foreground/80 hover:text-foreground py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block text-sm font-medium uppercase tracking-wide py-2 ${isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-primary text-primary-foreground uppercase font-semibold">
                Free Quote
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
