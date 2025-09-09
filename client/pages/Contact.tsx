import { useState } from "react";
import Layout from "@/components/Layout";
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.append("_subject", "New Contact Message - EHOA");

    try {
      const response = await fetch(
        "https://ethiopianhiking.org/api/form-handler.php",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        window.location.href = "/thank-you";
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert(
        "There was an error submitting your message. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "ethhikingorganizersassociation@gmail.com",
      description: "Send us an email and we'll respond within 24 hours",
      action: "mailto:ethhikingorganizersassociation@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      details: "@Ethiopian_Hiking_Association",
      description: "Join our Telegram channel for instant updates and support",
      action: "https://t.me/Ethiopian_Hiking_Association",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+251986273038",
      description: "Call us during business hours for inquiries and support",
      action: "tel:+251986273038",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Gerji mariam, AW HAKIM building 4th floor",
      description: "Visit our office in Addis Ababa, Ethiopia",
      action: null,
    },
  ];

  const faqs = [
    {
      question: "How can I join a hiking group?",
      answer:
        "Use our Join & Support page to register your interest. We'll connect you with local hiking groups in your area based on your experience level and preferences.",
    },
    {
      question: "Can I organize my own hiking event?",
      answer:
        "Absolutely! EHOA supports both individuals and groups in organizing hiking events. Contact us for guidance on safety protocols, permits, and promotional support.",
    },
    {
      question: "Do you provide hiking equipment?",
      answer:
        "We can help connect you with trusted equipment suppliers and provide recommendations for gear based on your specific hiking plans and budget.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "Membership Fee Structure\nRegistration Fee (One-time): 5,000 birr\n(This fee is payable in installments of 1,000 birr per month for the first 5 months).\nStandard Monthly Contribution (Afterwards): 500 birr per month",
    },
    {
      question: "What safety measures do you have?",
      answer:
        "All our events follow strict safety protocols including trained guides, emergency communication systems, first aid kits, and weather monitoring.",
    },
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
              Have questions about EHOA, want to organize a hike, or need
              support? We're here to help connect you with Ethiopia's hiking
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the best way to reach us - we're committed to helping you
              connect with Ethiopia's hiking community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <method.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="font-semibold text-foreground mb-3">
                  {method.details}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {method.description}
                </p>
                {method.action && (
                  <button
                    onClick={() => {
                      if (
                        method.title === "Email" ||
                        method.title === "Emergency Line"
                      ) {
                        window.location.href = method.action;
                      } else {
                        window.open(method.action, "_blank");
                      }
                    }}
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-full"
                  >
                    {method.title === "Email"
                      ? "Send Email"
                      : method.title === "Telegram"
                        ? "Open Telegram"
                        : method.title === "Emergency Line"
                          ? "Call Now"
                          : "Contact"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll respond within 24-48
                      hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    action="https://ethiopianhiking.org/api/form-handler.php"
                    method="POST"
                    encType="multipart/form-data"
                    className="space-y-6"
                  >
                    <input type="hidden" name="formType" value="contact" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email *
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
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+251 912 345 678 (optional)"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy and will only use your information
                      to respond to your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* FAQ and Additional Info */}
            <div className="space-y-8">
              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-sm"
                    >
                      <h4 className="font-semibold text-foreground mb-3">
                        {faq.question}
                      </h4>
                      <p
                        className="text-muted-foreground"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday:
                    </span>
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
                <p className="text-xs text-muted-foreground mt-4">
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
