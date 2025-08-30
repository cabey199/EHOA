import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, MapPin, Clock, CheckCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Backend integration - send to email/Telegram
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "info@ehoa.org",
      description: "Send us an email and we'll respond within 24 hours",
      action: "mailto:info@ehoa.org"
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      details: "@EHOAOfficial",
      description: "Join our Telegram channel for instant updates and support",
      action: "https://t.me/EHOAOfficial"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Addis Ababa, Ethiopia",
      description: "We serve hiking groups across all regions of Ethiopia",
      action: null
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24-48 hours",
      description: "We typically respond to all inquiries within 2 business days",
      action: null
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact EHOA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about EHOA, want to organize a hike, or need support? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the best way to reach us - we're committed to helping you connect with Ethiopia's hiking community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">{method.details}</p>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  {method.action && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(method.action, '_blank')}
                      className="w-full"
                    >
                      {method.title === "Email" ? "Send Email" : "Open Telegram"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll respond within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+251 912 345 678 (optional)"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                          placeholder="Tell us how we can help you..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy and will only use your information to respond to your inquiry.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How can I join a hiking group?</h4>
                    <p className="text-muted-foreground text-sm">
                      Use our Join & Support page to register your interest. We'll connect you with local hiking groups in your area.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Can I organize my own hiking event?</h4>
                    <p className="text-muted-foreground text-sm">
                      Absolutely! EHOA supports both individuals and groups in organizing hiking events. Contact us for guidance and support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Do you provide hiking equipment?</h4>
                    <p className="text-muted-foreground text-sm">
                      We can help connect you with equipment suppliers and may have recommendations for gear based on your hiking plans.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Is there a membership fee?</h4>
                    <p className="text-muted-foreground text-sm">
                      Basic membership is free. We also offer premium memberships with additional benefits. Contact us for details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Emergency Contact</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  For hiking emergencies or urgent safety concerns:
                </p>
                <p className="font-semibold text-foreground">Emergency Hotline: +251 911 123 456</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Available 24/7 for emergencies only
                </p>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Office Hours</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Response times may be longer on weekends and holidays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
