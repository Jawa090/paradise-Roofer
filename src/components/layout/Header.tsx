import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Roof Installation", href: "/services/installation" },
      { name: "Roof Repair", href: "/services/repair" },
      { name: "Roof Replacement", href: "/services/replacement" },
      { name: "Roof Inspections", href: "/services/inspections" },
      { name: "Roof Coating", href: "/services/coating" },
      { name: "Commercial Roofing", href: "/services/commercial" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blogs", href: "/blogs" },
  { name: "Types", href: "/roofing-types" },
  { name: "Contact", href: "/contact" },
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
          <span className="font-heading text-2xl font-bold italic text-foreground tracking-tight">
            para<span className="text-primary">d</span>ise
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide">
                  {item.name}
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link
                        to={child.href}
                        className="text-foreground/80 hover:text-foreground"
                      >
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xs font-medium uppercase tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
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
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-xs font-semibold tracking-wide px-4 py-2 h-auto group">
              Free Quote
              <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
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
                    className={`block text-sm font-medium uppercase tracking-wide py-2 ${
                      isActive(item.href)
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
