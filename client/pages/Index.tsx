import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
      alt: "Mountain hiking in Ethiopia",
      title: "Simien Mountains Trek"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
      alt: "Group camping under stars",
      title: "Camping Adventure"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      alt: "Mountain landscape in Ethiopia",
      title: "Bale Mountains"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1486022069284-348e03132178?w=600&h=400&fit=crop",
      alt: "Hiking trail through mountains",
      title: "Highland Trails"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=600&h=400&fit=crop",
      alt: "Sunrise over Ethiopian mountains",
      title: "Dawn Expeditions"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
      alt: "Hikers on mountain peak",
      title: "Summit Success"
    }
  ];

  const stats = [
    { icon: Users, label: "Hiking Groups", value: "15+" },
    { icon: Calendar, label: "Years Active", value: "2+" },
    { icon: MapPin, label: "Regions Covered", value: "All Ethiopia" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Uniting Hiking Groups
            <span className="block text-accent">Across Ethiopia</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the Ethiopian Hiking Organizers Association and connect with passionate hiking communities throughout our beautiful country.
          </p>
          <Link to="/join">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About EHOA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                About Ethiopian Hiking Organizers Association
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Founded on January 18, 2022, by 10 passionate hiking enthusiasts, EHOA was born from a vision to unite the diverse hiking communities across Ethiopia. Our mission is to create a network that connects hiking organizers, promotes sustainable outdoor practices, and showcases the natural beauty of our homeland.
              </p>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Today, we proudly bring together over 15 hiking organizer groups from all regions of Ethiopia, fostering collaboration, sharing knowledge, and creating unforgettable outdoor experiences for thousands of adventurers.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop"
                alt="Ethiopian mountain landscape"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Ethiopia's Natural Beauty
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover breathtaking landscapes, challenging trails, and unforgettable adventures with our hiking community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Join our growing community of hiking enthusiasts and discover the wonders of Ethiopia's landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
