import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Bar */}
        <div className="hidden lg:flex justify-between items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(040) 22571111</span>
              <span className="lg:inline xl:hidden">Call Us</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="hidden xl:inline">info@hafedascan.com</span>
              <span className="lg:inline xl:hidden">Email</span>
            </div>
          </div>
          <div className="text-muted-foreground text-xs xl:text-sm">
            <span className="hidden xl:inline">Mon-Fri: 8AM-8PM | Sat: 9AM-5PM</span>
            <span className="lg:inline xl:hidden">Mon-Sat Open</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <img src="/dr_logo.png" alt="" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary">Hafeda Scan</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Advanced Diagnostic Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="default" size="sm" className="hidden sm:flex text-xs sm:text-sm px-3 sm:px-4">
              <span className="hidden md:inline">Book Appointment</span>
              <span className="md:hidden">Book</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            {/* Mobile Contact Info */}
            <div className="mb-6 pb-4 border-b border-border space-y-3 sm:hidden">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(040) 2257997</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@hafedascan.com</span>
              </div>
            </div>

            <nav className="space-y-3 sm:space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 sm:py-3 text-foreground hover:text-primary transition-colors font-medium text-base sm:text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="default" className="w-full text-base py-3">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
