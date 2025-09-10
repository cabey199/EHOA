import { Link, useLocation } from "react-router-dom";
import { Mountain, Menu, X, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
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
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded border-2 border-dashed border-primary/30 flex items-center justify-center">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4"
                  src="https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6114dece7f814518aacd2d20d3b9a4c4"
                  alt="EHOA Logo"
                  className="w-full object-cover object-center aspect-[1.09] min-h-[20px] min-w-[20px] overflow-hidden my-auto"
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
                  </Link>
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
                <Link
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
                </Link>
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
          <form
            action="https://ethiopianhiking2.org/api/form-handler.php"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleDonationSubmit}
            className="space-y-4 text-sm"
          >
            <input type="hidden" name="_subject" value="New Donation - EHOA" />
            <input type="hidden" name="formType" value="donation" />
            <p className="text-sm text-muted-foreground">
              Make a gift to the Ethiopian Hiking Organizers Association (EHOA)
              today and your support will help:
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>
                Build, maintain, and promote hiking trails across Ethiopia.
              </li>
              <li>
                Inspire and engage the next generation of hikers, volunteers,
                and environmental advocates.
              </li>
              <li>
                Provide training and leadership development for hiking and
                camping organizers.
              </li>
              <li>
                Raise awareness and educate communities on the benefits of
                hiking, camping, and environmental stewardship.
              </li>
            </ul>

            <div>
              <h3 className="font-semibold mb-2">Select an Amount</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["500", "1000", "5000", "10000"].map((amt) => (
                  <label
                    key={amt}
                    className="cursor-pointer border rounded-lg px-4 py-2 flex items-center justify-between"
                  >
                    <input
                      type="radio"
                      name="donationAmount"
                      value={amt}
                      className="mr-2"
                    />
                    <span>{parseInt(amt).toLocaleString()} Birr</span>
                  </label>
                ))}
                <div className="col-span-2 sm:col-span-3 flex items-center gap-2 border rounded-lg px-3 py-2">
                  <input
                    type="radio"
                    name="donationAmount"
                    value="other"
                    className="mr-1"
                  />
                  <label className="text-sm">Other Amount:</label>
                  <input
                    name="otherAmount"
                    type="number"
                    min="1"
                    className="flex-1 border border-border rounded px-2 py-1"
                    placeholder="Birr"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                I want to contribute this amount
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="flex items-center gap-2">
                  <input type="radio" name="contributionType" value="one_go" />{" "}
                  in one go
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contributionType"
                    value="installments"
                  />{" "}
                  in installments
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">My Gift is a Tribute</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="flex items-center gap-2">
                  <input type="radio" name="tribute" value="honor" /> In Honor
                  Of
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="tribute" value="memory" /> In Memory
                  Of
                </label>
              </div>
              <div className="mt-3">
                <label className="block text-sm mb-1">Honoree Name</label>
                <input
                  name="honoreeName"
                  type="text"
                  className="w-full border border-border rounded px-3 py-2"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Donor Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">First Name*</label>
                  <input
                    name="firstName"
                    required
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last Name*</label>
                  <input
                    name="lastName"
                    required
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email*</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone*</label>
                  <input
                    name="phone"
                    required
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <label className="mt-2 flex items-center gap-2 text-sm">
                <input type="checkbox" name="emailReceipts" /> Yes, send all
                receipts and communications by email
              </label>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Donor Address</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm mb-1">Street Address</label>
                  <input
                    name="street"
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">City</label>
                  <input
                    name="city"
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Region/Province</label>
                  <input
                    name="region"
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Country</label>
                  <input
                    name="country"
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Postal Code</label>
                  <input
                    name="postalCode"
                    className="w-full border border-border rounded px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
              >
                Donate Now
              </button>
            </div>
          </form>
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
                    <Link
                      to={item.href}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
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
