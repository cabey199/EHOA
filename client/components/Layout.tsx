import { Link, useLocation } from "react-router-dom";
import { Mountain, Menu, X, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded border-2 border-dashed border-primary/30 flex items-center justify-center">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488"
                  src="https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fc491e7dbf0bf40589ef14e0a4b8a6488"
                  alt="EHOA Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="text-xl font-bold text-foreground">EHOA</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
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
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary/10 rounded border border-dashed border-primary/30 flex items-center justify-center">
                  <span className="text-[8px] text-primary/60 font-medium">Logo</span>
                </div>
                <span className="text-lg font-bold text-foreground">EHOA</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Ethiopian Hiking Organizers Association - The first and only national association dedicated to hiking and camping in Ethiopia, established January 18, 2022 G.C.
              </p>
              <p className="text-primary text-sm font-medium italic">
                "Elevate Ethiopian Hiking Culture Together"
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Email: ethhikingorganizersassociation@gmail.com</p>
                <p>Phone: +251986273038</p>
                <p>Address: Gerji mariam, AW HAKIM building 4th floor</p>
                <p>Telegram: @Ethiopian_Hiking_Association</p>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground mb-3">Follow Us</h4>
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
              © 2024 Ethiopian Hiking Organizers Association. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
