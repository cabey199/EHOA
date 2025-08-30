import { Mountain, QrCode, User, Calendar, Download, Share2 } from "lucide-react";

interface DigitalMemberCardProps {
  memberName: string;
  memberId: string;
  membershipType?: "basic" | "premium" | "volunteer" | "partner";
  profilePhoto?: string;
  joinDate?: string;
  showQRCode?: boolean;
  className?: string;
}

export default function DigitalMemberCard({
  memberName,
  memberId,
  membershipType = "basic",
  profilePhoto,
  joinDate,
  showQRCode = true,
  className = ""
}: DigitalMemberCardProps) {
  
  const membershipStyles = {
    basic: {
      gradient: "from-primary/20 to-ehoa-green-100",
      border: "border-primary/30",
      badge: "bg-primary text-primary-foreground",
      accent: "text-primary",
      name: "Basic Member"
    },
    premium: {
      gradient: "from-ehoa-sky-100 to-accent/20", 
      border: "border-accent/40",
      badge: "bg-accent text-white",
      accent: "text-accent",
      name: "Premium Supporter"
    },
    volunteer: {
      gradient: "from-ehoa-brown-100 to-orange-50",
      border: "border-ehoa-brown-300",
      badge: "bg-ehoa-brown-600 text-white",
      accent: "text-ehoa-brown-700",
      name: "Volunteer"
    },
    partner: {
      gradient: "from-purple-50 to-indigo-50",
      border: "border-purple-200",
      badge: "bg-purple-600 text-white", 
      accent: "text-purple-700",
      name: "Partner"
    }
  };

  const currentStyle = membershipStyles[membershipType];
  const currentDate = joinDate || new Date().toLocaleDateString();

  // QR Code placeholder pattern
  const qrPattern = Array.from({ length: 25 }, (_, i) => Math.random() > 0.4);

  const handleDownload = () => {
    // Placeholder for download functionality
    alert("Download functionality will be implemented with backend integration");
  };

  const handleShare = () => {
    // Placeholder for share functionality
    if (navigator.share) {
      navigator.share({
        title: `${memberName}'s EHOA Member Card`,
        text: `Check out my EHOA membership! Member ID: ${memberId}`,
        url: window.location.href
      });
    } else {
      alert("Share functionality will be implemented with backend integration");
    }
  };

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      {/* Digital Card */}
      <div className={`relative overflow-hidden shadow-xl rounded-2xl bg-gradient-to-br ${currentStyle.gradient} ${currentStyle.border} border-2`}>
        {/* Header with EHOA Logo */}
        <div className="bg-white/95 backdrop-blur-sm p-6 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mountain className={`h-8 w-8 ${currentStyle.accent}`} />
              <div>
                <span className="text-xl font-bold text-foreground">EHOA</span>
                <p className="text-xs text-muted-foreground">Ethiopian Hiking Organizers Association</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${currentStyle.badge}`}>
              {currentStyle.name.toUpperCase()}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt={memberName}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-white/80 border-4 border-white shadow-lg flex items-center justify-center">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
              )}
              {/* Active status indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground leading-tight">{memberName}</h3>
              <p className="text-sm text-muted-foreground">{currentStyle.name}</p>
              <div className="flex items-center space-x-1 mt-2">
                <Calendar className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Joined {currentDate}
                </span>
              </div>
            </div>
          </div>

          {/* Member ID */}
          <div className="bg-white/90 rounded-xl p-6 border border-white/50 shadow-sm">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2 font-medium">MEMBER ID</p>
              <p className={`text-2xl font-mono font-bold tracking-wider ${currentStyle.accent}`}>
                {memberId}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Valid until renewed
              </p>
            </div>
          </div>

          {/* QR Code Section */}
          {showQRCode && (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1 font-medium">DIGITAL VERIFICATION</p>
                <p className="text-sm font-medium text-foreground">
                  Scan for verification
                </p>
              </div>
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center border border-border/50 shadow-sm relative">
                {/* QR Code Placeholder */}
                <div className="w-16 h-16 grid grid-cols-5 gap-px">
                  {qrPattern.map((filled, i) => (
                    <div 
                      key={i} 
                      className={`rounded-[1px] ${filled ? 'bg-gray-800' : 'bg-white'}`} 
                    />
                  ))}
                </div>
                <QrCode className="absolute h-4 w-4 text-gray-600/50" />
              </div>
            </div>
          )}

          {/* Footer Status */}
          <div className="pt-4 border-t border-white/30">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Status:</span>
              <span className={`font-semibold ${currentStyle.accent} flex items-center`}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Active Member
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <Mountain className="w-full h-full text-current" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
          <Mountain className="w-full h-full text-current" />
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 text-center space-y-4">
        <p className="text-xs text-muted-foreground">
          Your digital member card - take a screenshot to save locally
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleDownload}
            className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Export membership type for use in other components
export type MembershipType = "basic" | "premium" | "volunteer" | "partner";
