import Layout from "@/components/Layout";
import DigitalMemberCard from "@/components/DigitalMemberCard";

export default function MemberCardShowcase() {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Digital Member Card Variations
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Examples of different membership types and their corresponding card designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Membership */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Basic Membership</h3>
              <DigitalMemberCard
                memberName="Alemayehu Tesfaye"
                memberId="EHOA-2024-0001"
                membershipType="basic"
                profilePhoto="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                joinDate="Jan 15, 2024"
                showQRCode={true}
              />
            </div>

            {/* Premium Membership */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Premium Support</h3>
              <DigitalMemberCard
                memberName="Hanan Mohammed"
                memberId="EHOA-2024-0002"
                membershipType="premium"
                profilePhoto="https://images.unsplash.com/photo-1494790108755-2616b612adf8?w=150&h=150&fit=crop&crop=face"
                joinDate="Feb 3, 2024"
                showQRCode={true}
              />
            </div>

            {/* Volunteer */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Volunteer</h3>
              <DigitalMemberCard
                memberName="Dawit Bekele"
                memberId="EHOA-2024-0003"
                membershipType="volunteer"
                profilePhoto="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                joinDate="Mar 10, 2024"
                showQRCode={true}
              />
            </div>

            {/* Partner */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Partnership</h3>
              <DigitalMemberCard
                memberName="Sarah Johnson"
                memberId="EHOA-2024-0004"
                membershipType="partner"
                profilePhoto="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                joinDate="Apr 5, 2024"
                showQRCode={true}
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-muted/30 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-3">Card Features</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Unique member ID with EHOA-YYYY-XXXX format</li>
                <li>• Profile photo placeholder with upload capability</li>
                <li>• QR code for digital verification</li>
                <li>• Membership type color coding</li>
                <li>• EHOA branding with mountain logos</li>
                <li>• Active status indicators</li>
                <li>• Download and share functionality</li>
                <li>• Responsive design for all devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
