import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, QrCode, User, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

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
  className
}: DigitalMemberCardProps) {
  
  const membershipStyles = {
    basic: {
      gradient: "from-primary/20 to-nature-green-100",
      border: "border-primary/30",
      badge: "bg-primary text-primary-foreground",
      accent: "text-primary"
    },
    premium: {
      gradient: "from-nature-sky-100 to-accent/20", 
      border: "border-accent/40",
      badge: "bg-accent text-white",
      accent: "text-accent"
    },
    volunteer: {
      gradient: "from-nature-brown-100 to-orange-50",
      border: "border-nature-brown-300",
      badge: "bg-nature-brown-600 text-white",
      accent: "text-nature-brown-700"
    },
    partner: {
      gradient: "from-purple-50 to-indigo-50",
      border: "border-purple-200",
      badge: "bg-purple-600 text-white", 
      accent: "text-purple-700"
    }
  };

  const currentStyle = membershipStyles[membershipType];
  const currentDate = joinDate || new Date().toLocaleDateString();

  return (
    <div className={cn("max-w-md mx-auto", className)}>
      {/* Digital Card */}
      <Card className={cn(
        "relative overflow-hidden shadow-lg",
        `bg-gradient-to-br ${currentStyle.gradient}`,
        currentStyle.border
      )}>
        {/* Header with EHOA Logo */}
        <div className="bg-white/95 backdrop-blur-sm p-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mountain className={cn("h-6 w-6", currentStyle.accent)} />
              <span className="font-bold text-foreground">EHOA</span>
            </div>
            <Badge variant="secondary" className={cn("text-xs", currentStyle.badge)}>
              {membershipType.toUpperCase()}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Ethiopian Hiking Organizers Association
          </p>
        </div>

        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt={memberName}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-white/80 border-4 border-white shadow-md flex items-center justify-center">
                    <User className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">{memberName}</h3>
                <p className="text-sm text-muted-foreground">EHOA Member</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    Joined {currentDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Member ID */}
            <div className="bg-white/80 rounded-lg p-4 border border-white/50">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Member ID</p>
                <p className={cn("text-2xl font-mono font-bold tracking-wider", currentStyle.accent)}>
                  {memberId}
                </p>
              </div>
            </div>

            {/* QR Code Section */}
            {showQRCode && (
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Digital Verification</p>
                  <p className="text-sm font-medium text-foreground">
                    Scan for verification
                  </p>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-border/50">
                  {/* QR Code Placeholder */}
                  <div className="w-12 h-12 bg-gray-800 rounded grid grid-cols-3 gap-px p-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "bg-white rounded-[1px]",
                          // Random pattern for QR code appearance
                          Math.random() > 0.3 ? "bg-gray-800" : "bg-white"
                        )} 
                      />
                    ))}
                  </div>
                  <QrCode className="absolute h-4 w-4 text-white" />
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="pt-4 border-t border-white/30">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Valid until renewed</span>
                <span className={cn("font-medium", currentStyle.accent)}>
                  Active Member
                </span>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Mountain className="w-full h-full text-current" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
          <Mountain className="w-full h-full text-current" />
        </div>
      </Card>

      {/* Card Actions */}
      <div className="mt-4 text-center space-y-2">
        <p className="text-xs text-muted-foreground">
          Take a screenshot to save your digital member card
        </p>
        <div className="flex justify-center space-x-2">
          <button className="text-xs text-primary hover:underline">
            Download Card
          </button>
          <span className="text-xs text-muted-foreground">•</span>
          <button className="text-xs text-primary hover:underline">
            Share Card
          </button>
        </div>
      </div>
    </div>
  );
}

// Export membership type for use in other components
export type MembershipType = "basic" | "premium" | "volunteer" | "partner";
