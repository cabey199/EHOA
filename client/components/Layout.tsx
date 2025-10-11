import { Link as RouterLink, useLocation } from "react-router-dom";
import { Mountain, Menu, X, Facebook, Instagram, Send } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Link as RouterLink, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.endsWith("/") && location.pathname !== "/"
      ? location.pathname.slice(0, -1)
      : location.pathname;
    const canonicalHref = `https://ethiopianhiking.org${pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalHref || "https://ethiopianhiking.org/");
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Join & Support", href: "/join" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const handleDonationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("formType", "donation");
    try {
      const response = await fetch(
        "https://ethiopianhiking2.org/api/form-handler.php",
        {
          method: "POST",
          body: formData,
          mode: "cors",
        },
      );
      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("There was an error submitting your donation. Please try again.");
      }
    } catch (err) {
      alert("There was an error submitting your donation. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <RouterLink to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fa5107a1ca9c745f48757a290d0f7d78d?format=webp&width=64"
                alt="EHOA Logo"
                className="h-8 w-8 object-contain"
                loading="lazy"
              />
              <span className="text-xl font-bold text-foreground">EHOA</span>
            </RouterLink>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <RouterLink
                    key={item.name}
                    to={item.href}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.name}
                  </RouterLink>
                ))}
                <button
                  type="button"
                  onClick={() => setDonateOpen(true)}
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-colors"
                >
                  Donate
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <RouterLink
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </RouterLink>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setDonateOpen(true);
                }}
                className="block w-full text-left px-3 py-2 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </nav>

      <Dialog open={donateOpen} onOpenChange={setDonateOpen}>
        <DialogContent className="max-w-lg p-4 sm:p-5 max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg">
              Ethiopian Hiking Organizers Association (EHOA) Donation Form
            </DialogTitle>
          </DialogHeader>
          <div className="bg-white rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://tally.so/embed/wzVgr1?alignLeft=1&transparentBackground=1&dynamicHeight=1&hideTitle=1&hideFooter=1&accentColor=2D862D&fontFamily=Inter"
              data-tally-src="https://tally.so/embed/wzVgr1?alignLeft=1&transparentBackground=1&dynamicHeight=1&hideTitle=1&hideFooter=1&accentColor=2D862D&fontFamily=Inter"
              loading="lazy"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Donate"
              className="w-full border-0"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg font-bold text-foreground">EHOA</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Ethiopian Hiking Organizers Association - The first and only
                national association dedicated to hiking and camping in
                Ethiopia, established January 18, 2022 G.C.
              </p>
              <p className="text-primary text-sm font-medium italic">
                "Elevate Ethiopian Hiking Culture Together"
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <RouterLink
                      to={item.href}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Contact Info
              </h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Email: ethhikingorganizersassociation@gmail.com</p>
                <p>Phone: +251986273038</p>
                <p>Address: Gerji mariam, AW HAKIM building 4th floor</p>
                <p>Telegram: @Ethiopian_Hiking_Association</p>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="https://t.me/Ethiopian_Hiking_Association"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/108734781630147/posts/148515690985389/?sfnsn=mo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/ehoa_ethiopia?igshid=ZGUzMzM3NWJiOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Ethiopian Hiking Organizers Association. alright reserved.
            </p>
          </div>
        </div>
      </footer>
      <div className="py-4">
        <p className="text-center text-sm">
          <span className="text-blue-600">made and powered by </span>
          <a
            href="https://calebassefa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            cabey tech 🌐
          </a>
        </p>
      </div>
    </div>
  );
}
