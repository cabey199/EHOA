import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Target, Heart } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2022",
      month: "January 18",
      title: "EHOA Founded",
      description: "10 passionate hiking enthusiasts come together to establish the Ethiopian Hiking Organizers Association"
    },
    {
      year: "2022",
      month: "March",
      title: "First Regional Meetup",
      description: "Successfully organized our first inter-group hiking event in the Simien Mountains"
    },
    {
      year: "2023", 
      month: "July",
      title: "10 Groups United",
      description: "Reached our initial goal of connecting 10 hiking organizer groups across Ethiopia"
    },
    {
      year: "2024",
      month: "Present",
      title: "15+ Groups Strong",
      description: "Now proudly representing over 15 hiking organizer groups from all regions of Ethiopia"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Unity",
      description: "Bringing together diverse hiking communities across Ethiopia under one vision"
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Promoting responsible hiking practices that preserve Ethiopia's natural beauty"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Maintaining high standards in organization, safety, and outdoor experiences"
    },
    {
      icon: Calendar,
      title: "Community",
      description: "Creating lasting bonds and shared memories through outdoor adventures"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About EHOA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our journey, mission, and the passionate community that makes Ethiopian hiking adventures possible.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Profile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To unite and support hiking organizer groups across Ethiopia, fostering collaboration, promoting sustainable outdoor practices, and creating memorable adventures that showcase the natural beauty of our homeland.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading association that connects all hiking communities in Ethiopia, making outdoor adventures accessible, safe, and environmentally responsible for current and future generations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our primary goal is to unite 15 hiking organizer groups across Ethiopia, providing them with resources, support, and a platform for collaboration and knowledge sharing.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop"
                alt="Ethiopian hiking community"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our organization and unite our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones in our mission to unite Ethiopia's hiking communities
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-accent font-medium">{milestone.month}</span>
                        <span className="text-muted-foreground">•</span>
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Founded by Passionate Adventurers
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              EHOA was established on January 18, 2022, by 10 dedicated founding members who shared a common vision of uniting Ethiopia's hiking communities. Their collective experience and passion for the outdoors laid the foundation for what has become a thriving network of adventurers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">10 Founding Members</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">January 18, 2022</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nature-brown-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="h-8 w-8 text-nature-brown-700" />
                </div>
                <p className="text-sm text-muted-foreground">Shared Vision</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nature-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-8 w-8 text-nature-green-700" />
                </div>
                <p className="text-sm text-muted-foreground">Love for Nature</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nature-sky-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-nature-sky-700" />
                </div>
                <p className="text-sm text-muted-foreground">Community Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
