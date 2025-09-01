import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Calendar,
  MapPin,
  Heart,
  Shield,
  Award,
} from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function Index() {
  const [isDonationSubmitted, setIsDonationSubmitted] = useState(false);
  const [isSubmittingDonation, setIsSubmittingDonation] = useState(false);

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingDonation(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.append('_subject', 'New Donation Interest - EHOA');

    try {
      const response = await fetch('https://formspree.io/f/mjkeoebw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsDonationSubmitted(true);
        (e.target as HTMLFormElement).reset();
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsDonationSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting donation form:', error);
      alert('There was an error submitting your donation interest. Please try again or contact us directly.');
    } finally {
      setIsSubmittingDonation(false);
    }
  };
  const stats = [
    { icon: Users, label: "Hiking Organizer Groups", value: "15+" },
    { icon: Calendar, label: "Founded", value: "Jan 18, 2022" },
    { icon: MapPin, label: "Founding Members", value: "10" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Community",
      description:
        "Supporting and empowering local communities through tourism and charitable activities",
    },
    {
      icon: Shield,
      title: "Sustainability",
      description:
        "Commitment to preserving nature and promoting eco-friendly practices",
    },
    {
      icon: Award,
      title: "Adventure",
      description:
        "Encouraging exploration and discovery of Ethiopia's hidden gems",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
      alt: "Mountain hiking in Ethiopia",
      title: "Simien Mountains Trek",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
      alt: "Group camping under stars",
      title: "Camping Adventure",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      alt: "Mountain landscape in Ethiopia",
      title: "Bale Mountains",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1486022069284-348e03132178?w=600&h=400&fit=crop",
      alt: "Hiking trail through mountains",
      title: "Highland Trails",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=600&h=400&fit=crop",
      alt: "Sunrise over Ethiopian mountains",
      title: "Dawn Expeditions",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
      alt: "Hikers on mountain peak",
      title: "Summit Success",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Uniting Hiking Groups
            <span className="block text-accent">Across Ethiopia</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join Ethiopia's first and only national association dedicated to
            hiking and camping. Connect with 15+ hiking organizer groups and
            discover the breathtaking landscapes of our homeland.
          </p>
          <Link
            to="/join"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About EHOA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Ethiopian Hiking Organizers Association
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                The Ethiopian Hiking Organizers Association (EHOA) was
                officially established on January 18, 2022 G.C. by 10 pioneering
                founding members, representing a collective of 15 dedicated
                hiking organizer groups across Ethiopia. EHOA is the first and
                only national association dedicated to hiking and camping in
                Ethiopia.
              </p>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                We were formed to fill a significant gap in the Ethiopian
                tourism landscape, specifically focusing on hiking and camping
                activities. Our association brings together a vibrant community
                of outdoor enthusiasts and professionals committed to promoting
                the benefits and joys of hiking and camping throughout Ethiopia.
              </p>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop"
                alt="Ethiopian mountain landscape"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our activities are guided by principles of inclusivity,
              environmental stewardship, and community empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-center mb-6">
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Ethiopia's Natural Beauty
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover breathtaking landscapes, challenging trails, and
              unforgettable adventures with our hiking community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Your contribution helps us promote hiking and camping across
            Ethiopia. Please share your details, and we'll contact you to
            discuss how you can support our work.
          </p>

          {isDonationSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-800 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2">
                Thank you for your interest!
              </h3>
              <p>
                We've received your information and will be in touch soon to
                discuss donation opportunities.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleDonationSubmit}
              className="bg-white rounded-xl shadow-sm p-8 space-y-6 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="donorName"
                    className="block text-sm font-medium text-foreground mb-2 text-left"
                  >
                    Name *
                  </label>
                  <input
                    id="donorName"
                    type="text"
                    value={donationFormData.name}
                    onChange={(e) =>
                      handleDonationInputChange("name", e.target.value)
                    }
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="donorEmail"
                    className="block text-sm font-medium text-foreground mb-2 text-left"
                  >
                    Email *
                  </label>
                  <input
                    id="donorEmail"
                    type="email"
                    value={donationFormData.email}
                    onChange={(e) =>
                      handleDonationInputChange("email", e.target.value)
                    }
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="donorPhone"
                  className="block text-sm font-medium text-foreground mb-2 text-left"
                >
                  Phone Number
                </label>
                <input
                  id="donorPhone"
                  type="tel"
                  value={donationFormData.phone}
                  onChange={(e) =>
                    handleDonationInputChange("phone", e.target.value)
                  }
                  placeholder="+251 912 345 678 (optional)"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="donationMessage"
                  className="block text-sm font-medium text-foreground mb-2 text-left"
                >
                  Donation Interest (Optional)
                </label>
                <textarea
                  id="donationMessage"
                  value={donationFormData.message}
                  onChange={(e) =>
                    handleDonationInputChange("message", e.target.value)
                  }
                  placeholder="Tell us about your donation interest or how you'd like to support EHOA..."
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Express Donation Interest
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you're an individual, organization, or business, join our
            mission to promote hiking, trekking and camping culture in Ethiopia.
            Together, we can make Ethiopia a top destination for outdoor
            adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
