import { useState } from "react";
import Layout from "@/components/Layout";
import DigitalMemberCard, { MembershipType } from "@/components/DigitalMemberCard";
import ImageUploadSlot from "@/components/ImageUploadSlot";
import { Users, Heart, Handshake, UserPlus, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: MembershipType;
  message: string;
  profilePhoto?: string;
}

export default function Join() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "basic",
    message: "",
    profilePhoto: undefined
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memberId, setMemberId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate a unique member ID (placeholder - will be handled by backend later)
    const generateMemberId = () => {
      const year = new Date().getFullYear();
      const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      return `EHOA-${year}-${randomNum}`;
    };

    // Simulate form submission
    setTimeout(() => {
      const newMemberId = generateMemberId();
      setMemberId(newMemberId);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // TODO: Backend integration - send form data to email/Telegram
      console.log("Form submitted:", formData);
      console.log("Generated Member ID:", newMemberId);
    }, 1500);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = () => {
    // Placeholder for file upload - will be implemented with backend
    const samplePhotos = [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1494790108755-2616b612adf8?w=150&h=150&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    ];
    const randomPhoto = samplePhotos[Math.floor(Math.random() * samplePhotos.length)];
    handleInputChange("profilePhoto", randomPhoto);
  };

  const supportOptions = [
    {
      icon: UserPlus,
      type: "basic" as MembershipType,
      title: "Basic Membership",
      description: "Join our hiking community and participate in events",
      benefits: ["Access to all events", "Community forum access", "Monthly newsletter", "Basic safety support"],
      price: "Free"
    },
    {
      icon: Heart,
      type: "premium" as MembershipType,
      title: "Premium Support",
      description: "Support our mission through donations and get exclusive benefits",
      benefits: ["All basic benefits", "Priority event registration", "Exclusive gear discounts", "Annual appreciation gift"],
      price: "$25/year"
    },
    {
      icon: Users,
      type: "volunteer" as MembershipType,
      title: "Volunteer",
      description: "Help organize events and support the hiking community",
      benefits: ["All basic benefits", "Volunteer training", "Leadership opportunities", "Recognition certificate"],
      price: "Free"
    },
    {
      icon: Handshake,
      type: "partner" as MembershipType,
      title: "Partnership",
      description: "Partner with EHOA as an organization or business",
      benefits: ["Brand visibility", "Event collaboration", "Networking opportunities", "Partnership certificate"],
      price: "Contact us"
    }
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to EHOA!
            </h1>
            <p className="text-muted-foreground mb-12 text-lg">
              Thank you for joining the Ethiopian Hiking Organizers Association. We've received your application and will be in touch soon.
            </p>
            
            {/* Digital Member ID Card */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Your Digital Member Card</h2>
              <DigitalMemberCard
                memberName={formData.name}
                memberId={memberId}
                membershipType={formData.interest}
                profilePhoto={formData.profilePhoto}
                showQRCode={true}
              />
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">What's Next?</h3>
              <div className="text-left space-y-3 text-muted-foreground">
                <p>✅ Your membership application has been received</p>
                <p>✅ You'll receive a welcome email within 24 hours</p>
                <p>✅ Our team will contact you via email or Telegram within 2-3 business days</p>
                <p>✅ You'll get access to our member portal and upcoming events</p>
              </div>
            </div>

            <div className="mt-8 space-x-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", interest: "basic", message: "", profilePhoto: undefined });
                  setMemberId("");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Submit Another Application
              </button>
              <button
                onClick={() => {
                  window.location.href = "/";
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join & Support EHOA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Become part of Ethiopia's largest hiking community and help us unite adventurers across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Membership</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select the membership type that best fits your goals and level of involvement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {supportOptions.map((option, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border-2 ${
                  formData.interest === option.type ? 'border-primary shadow-md' : 'border-transparent'
                }`}
                onClick={() => handleInputChange("interest", option.type)}
              >
                <div className="text-center">
                  <option.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  <div className="text-lg font-bold text-primary mb-4">{option.price}</div>
                  <ul className="text-left space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">Join EHOA Today</h2>
            <p className="text-muted-foreground text-center mb-8">
              Fill out the form below and we'll get in touch with you soon
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="+251 912 345 678"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Profile Photo (Optional)
                </label>
                <div className="max-w-xs mx-auto">
                  <ImageUploadSlot
                    onImageSelect={(imageUrl) => handleInputChange("profilePhoto", imageUrl)}
                    placeholder="Upload Profile Photo"
                    height="h-40"
                    initialImage={formData.profilePhoto}
                    isDragAndDrop={true}
                    className="border-border hover:border-primary/50"
                  />
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Upload a profile photo for your member card<br />
                    Backend integration coming soon
                  </p>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us more about your interest in EHOA, hiking experience, or how you'd like to get involved..."
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "Processing Application..." : "Submit Application"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by EHOA via email or Telegram. 
                We respect your privacy and will not share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
