import { useState } from "react";
import Layout from "@/components/Layout";
import DigitalMemberCard, {
  MembershipType,
} from "@/components/DigitalMemberCard";
import {
  Users,
  Heart,
  Handshake,
  UserPlus,
  CheckCircle,
  User,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  participantType: string;
  message: string;
  profilePhoto?: string;
}

export default function Join() {
  const [joinFormData, setJoinFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    participantType: "individual",
    message: "",
    profilePhoto: undefined,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memberId, setMemberId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate a unique member ID
    const generateMemberId = () => {
      const year = new Date().getFullYear();
      const randomNum = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0");
      return `EHOA-${year}-${randomNum}`;
    };

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.append("_subject", "New EHOA Membership Application");

    // Store form data for card display
    const formObject = Object.fromEntries(formData.entries());
    setJoinFormData((prev) => ({
      ...prev,
      name: formObject.name as string,
      email: formObject.email as string,
      phone: formObject.phone as string,
      participantType: formObject.participantType as string,
      message: formObject.message as string,
    }));

    try {
      const response = await fetch(
        "https://ethiopianhiking.org/api/form-handler.php",
        {
          method: "POST",
          body: formData,
          mode: "cors",
        },
      );

      if (response.ok) {
        const newMemberId = generateMemberId();
        setMemberId(newMemberId);
        setIsSubmitted(true);
        window.location.href = "/thank-you";
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting join form:", error);
      alert(
        "There was an error submitting your application. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setJoinFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = () => {
    // Placeholder for file upload - will be implemented with backend
    const samplePhotos = [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1494790108755-2616b612adf8?w=150&h=150&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    ];
    const randomPhoto =
      samplePhotos[Math.floor(Math.random() * samplePhotos.length)];
    handleInputChange("profilePhoto", randomPhoto);
  };

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
              Thank you for joining our mission to promote hiking, trekking and
              camping culture in Ethiopia! We've received your application and
              will be in touch soon.
            </p>

            {/* Digital Member ID Card */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Your Digital Member Card
              </h2>
              <DigitalMemberCard
                memberName={joinFormData.name}
                memberId={memberId}
                membershipType="basic"
                profilePhoto={joinFormData.profilePhoto}
                showQRCode={true}
              />
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What's Next?
              </h3>
              <div className="text-left space-y-3 text-muted-foreground">
                <p>✅ Your membership application has been received</p>
                <p>✅ You'll receive a welcome email within 24 hours</p>
                <p>
                  ✅ Our team will contact you via email or Telegram within 2-3
                  business days
                </p>
                <p>
                  ✅ You'll learn about upcoming events and ways to contribute
                  to our mission
                </p>
                <p>
                  ✅ You'll be connected with Ethiopia's hiking and camping
                  community
                </p>
              </div>
            </div>

            <div className="mt-8 space-x-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setJoinFormData({
                    name: "",
                    email: "",
                    phone: "",
                    participantType: "individual",
                    message: "",
                    profilePhoto: undefined,
                  });
                  setMemberId("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Submit Another Application
              </button>
              <button
                onClick={() => {
                  window.location.href = "/";
                  setTimeout(
                    () => window.scrollTo({ top: 0, behavior: "smooth" }),
                    100,
                  );
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
              Join EHOA's Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our mission to promote hiking, trekking and camping culture
              in Ethiopia! Whether you're an individual, an organization, or a
              business, there are many ways to get involved.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From participating in our events to supporting our projects,
              together we can make Ethiopia a top destination for outdoor
              adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-center">
                <UserPlus className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  As an Individual
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join our hiking and camping events, participate in trail
                  development projects, and connect with like-minded outdoor
                  enthusiasts across Ethiopia.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  As an Organization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Partner with us to organize group events, support
                  community-based tourism initiatives, and contribute to
                  sustainable hiking practices.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-center">
                <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  As a Business
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Support our mission through sponsorships, equipment
                  partnerships, or by providing services that enhance the hiking
                  experience in Ethiopia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              Become a Member
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Join our mission to make Ethiopia a top destination for outdoor
              adventure. Fill out the form below and we'll get in touch with you
              soon.
            </p>

            <form
              onSubmit={handleSubmit}
              action="https://ethiopianhiking.org/api/form-handler.php"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              <input type="hidden" name="formType" value="join" />
              <input type="hidden" name="generate_id" value="1" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+251 912 345 678"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="participantType"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Joining as *
                </label>
                <select
                  id="participantType"
                  name="participantType"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="individual">Individual</option>
                  <option value="organization">Organization</option>
                  <option value="business">Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Profile Photo (Optional)
                </label>
                <div className="max-w-xs mx-auto">
                  <div className="h-40 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <User className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Profile Photo Area
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Add via Design Mode
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Add your profile photo using Builder.io's design interface
                  </p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your interest in EHOA, hiking experience, and how you'd like to contribute to our mission..."
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting
                  ? "Processing Application..."
                  : "Submit Application"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by EHOA via
                email or Telegram. We respect your privacy and will not share
                your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Member Benefits of Joining EHOA
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 text-center">
            Joining the Ethiopian Hiking Organizers Association (EHOA) connects
            you with a national network of hiking and camping leaders, offers
            exclusive opportunities, and strengthens your role in shaping the
            future of outdoor tourism in Ethiopia.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                1. Networking & Collaboration
              </h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Be part of the first and only national hiking & camping
                  association in Ethiopia.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Connect with experienced organizers, guides, and outdoor
                  enthusiasts across the country.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Access opportunities for partnerships, co-organized trips, and
                  cross-promotion.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                2. Training & Capacity Building
              </h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Priority access to workshops and skill-development programs
                  for guides, organizers, and volunteers.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Discounts on training certifications in safety, first aid,
                  eco-tourism, and sustainable travel.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Mentorship from pioneering association members and industry
                  experts.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                3. Visibility & Promotion
              </h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Get listed on EHOA’s official platforms (website, social
                  media, promotional campaigns).
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Opportunity to showcase your trips and activities during
                  Ethiopian Hiking Day and other national events.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Media and PR exposure through the association’s press
                  releases, exhibitions, and campaigns.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                4. Advocacy & Representation
              </h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Have your voice represented at national tourism discussions
                  and policymaking forums.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Benefit from EHOA’s partnerships with tourism boards, NGOs,
                  and sponsors.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Collective advocacy for infrastructure development and
                  recognition of hiking/camping as a vital tourism sector.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                5. Trail Development & Access
              </h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Exclusive involvement in new trail development projects and
                  hiking route discoveries.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Early access to updated information on established and
                  upcoming hiking destinations.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Support for organizing eco-friendly and community-based
                  tourism initiatives.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                6. Community Impact
              </h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Engage in community-based tourism projects that benefit local
                  communities.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Participate in charity and environmental stewardship programs
                  (tree planting, clean-up hikes, etc.).
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Strengthen sustainable tourism practices that protect
                  Ethiopia’s natural heritage.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                7. Discounts & Special Offers
              </h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Reduced fees for association-organized events, exhibitions,
                  and training programs.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Partner discounts on gear, logistics, and outdoor services
                  (subject to collaborations).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                8. Recognition & Growth
              </h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Official membership certificate recognizing you as part of
                  Ethiopia’s leading hiking association.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Eligibility to compete for annual awards recognizing
                  excellence in hiking and camping organization.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  Opportunities to lead or participate in national and
                  international hiking events.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Membership Fee Structure
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-1">
                  5,000 birr
                </div>
                <p className="text-muted-foreground">
                  Registration Fee (one-time)
                </p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-1">
                  1,000 birr
                </div>
                <p className="text-muted-foreground">
                  Monthly Contribution (first 5 months)
                </p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-1">
                  500 birr
                </div>
                <p className="text-muted-foreground">
                  Standard Monthly Contribution (afterwards)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
