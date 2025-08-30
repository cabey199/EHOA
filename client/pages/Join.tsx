import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Handshake, UserPlus, CheckCircle, Upload } from "lucide-react";
import DigitalMemberCard, { MembershipType } from "@/components/DigitalMemberCard";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function Join() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [memberId, setMemberId] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a unique member ID (placeholder - will be handled by backend later)
    const generateMemberId = () => {
      const year = new Date().getFullYear();
      const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      return `EHOA-${year}-${randomNum}`;
    };

    const newMemberId = generateMemberId();
    setMemberId(newMemberId);
    setIsSubmitted(true);

    // TODO: Backend integration - send form data to email/Telegram
    console.log("Form submitted:", formData);
    console.log("Generated Member ID:", newMemberId);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const supportOptions = [
    {
      icon: UserPlus,
      title: "Membership",
      description: "Become a full member of EHOA and join our hiking community",
      benefits: ["Access to all events", "Member directory", "Official EHOA gear", "Priority registration"]
    },
    {
      icon: Heart,
      title: "Support",
      description: "Support our mission through donations or sponsorship",
      benefits: ["Help fund events", "Support equipment purchases", "Sponsor hiking groups", "Conservation efforts"]
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Volunteer your time and skills to help organize events",
      benefits: ["Event planning", "Guide training", "Safety coordination", "Community outreach"]
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Partner with EHOA as an organization or business",
      benefits: ["Corporate partnerships", "Equipment sponsorship", "Event collaboration", "Brand visibility"]
    }
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Welcome to EHOA!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for joining the Ethiopian Hiking Organizers Association. We've received your application and will be in touch soon.
            </p>
            
            {/* Member ID Display */}
            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardHeader>
                <CardTitle className="text-center text-primary">Your Member ID</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Badge variant="secondary" className="text-lg px-6 py-2 bg-primary text-primary-foreground">
                    {memberId}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-4">
                    Please save this Member ID for your records. You'll receive a welcome email with more details soon.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>What's next?</strong><br />
                Our team will review your application and contact you via email or Telegram within 2-3 business days with next steps and welcome information.
              </p>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
                  setMemberId("");
                }}
                variant="outline"
              >
                Submit Another Application
              </Button>
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ways to Get Involved</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose how you'd like to support and be part of our hiking community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <option.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join EHOA Today</CardTitle>
              <p className="text-muted-foreground text-center">
                Fill out the form below and we'll get in touch with you soon
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    placeholder="+251 912 345 678"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Interest *</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="membership">Membership</SelectItem>
                      <SelectItem value="support">Support / Donation</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your interest in EHOA, hiking experience, or how you'd like to get involved..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by EHOA via email or Telegram. 
                  We respect your privacy and will not share your information with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
