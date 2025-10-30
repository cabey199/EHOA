import Layout from "@/components/Layout";
import { Users, Calendar, Target, Heart, MapPin, Award, Phone, ExternalLink } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2022",
      month: "January 18",
      title: "EHOA Founded",
      description:
        "10 passionate hiking enthusiasts come together to establish the Ethiopian Hiking Organizers Association",
    },
    {
      year: "2022",
      month: "March",
      title: "First Regional Meetup",
      description:
        "Successfully organized our first inter-group hiking event in the Simien Mountains",
    },
    {
      year: "2022",
      month: "September",
      title: "5 Groups United",
      description:
        "Reached our first milestone of connecting 5 hiking organizer groups",
    },
    {
      year: "2023",
      month: "July",
      title: "10 Groups Strong",
      description:
        "Achieved our initial goal of connecting 10 hiking organizer groups across Ethiopia",
    },
    {
      year: "2024",
      month: "Present",
      title: "15+ Groups United",
      description:
        "Now proudly representing over 15 hiking organizer groups from all regions of Ethiopia",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Sustainability",
      description:
        "Commitment to preserving nature and promoting eco-friendly practices",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Supporting and empowering local communities through tourism",
    },
    {
      icon: Target,
      title: "Adventure",
      description:
        "Encouraging exploration and discovery of Ethiopia's hidden gems",
    },
    {
      icon: Award,
      title: "Inclusivity",
      description:
        "Ensuring hiking and camping activities are accessible to all",
    },
  ];

  const objectives = [
    "Promoting Hiking and Camping Activities: Raising awareness and encouraging more people to participate",
    "Discovering New Travel Destinations: Identifying and promoting new hiking destinations across Ethiopia",
    "Developing New Hiking Trails: Creating and maintaining safe and enjoyable hiking trails",
    "Enhancing Existing Destinations: Improving and promoting already popular hiking spots",
    "Promoting Community-Based Tourism: Supporting sustainable tourism that benefits local communities",
    "Supporting Local Communities and Charity Work: Engaging in charitable activities that uplift local communities",
  ];

  const programs = [
    {
      title: "Skill Acquisition Workshops",
      description: "Training programs for local guides and hiking enthusiasts",
    },
    {
      title: "Internships",
      description:
        "Opportunities for young professionals to gain experience in the tourism and outdoor adventure sector",
    },
    {
      title: "Hiking Trails Development",
      description:
        "Initiatives focused on developing new and enhancing existing trails",
    },
    {
      title: "Community-Based Tourism Projects",
      description:
        "Collaborations with local communities to create sustainable tourism models",
    },
  ];

  const leadership = [
    {
      position: "President",
      name: "Misiker Kebede",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fab41264dad654ab49b02f94470ea46be",
    },
    {
      position: "Vice President",
      name: "Temesgen Adugna",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F112e85a39d9c4d7cb35dd64de2816291",
    },
    {
      position: "PR Manager",
      name: "Mikiyas Tetemke",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F0064152389dd408eb9d474bb65948e87",
    },
    {
      position: "Finance Manager",
      name: "Thomas Girma",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F3deaf258c7f34c949e0321bce073e1b1",
    },
    {
      position: "Secretary General",
      name: "Mera Enku",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F83ff1002e7ad4419872054a557da295e",
    },
  ];

  const achievements = [
    { number: "15+", label: "Hiking Organizer Groups" },
    { number: "10", label: "Founding Members" },
    { number: "2+ Years", label: "Years Active" },
    { number: "All Ethiopia", label: "Regions Covered" },
  ];

  const partners = [
    {
      name: "Guzo Adwa Hiking Events",
      phone: "+251942545470",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F0482021342654e94ac73827d31403751?format=webp&width=800",
    },
    { name: "Gara Hiking", phone: "+251946366918" },
    { name: "Addis Hiking", phone: "+251970116424" },
    {
      name: "Aye Hiking",
      phone: "+251926665078",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F452b9f716cd94b64b735c95db273346a?format=webp&width=800",
    },
    {
      name: "Gojo Hiking",
      phone: "+251912878684",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fa4cba8be57ef4ca6aa5f2b7db2797b60?format=webp&width=800",
    },
    { name: "Alem Tour and Events", phone: "+251941432513" },
    {
      name: "Ethio Hiking Community",
      phone: "+251913857494",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fd78f7e83b68c41659918a965a2e3794e?format=webp&width=800",
    },
    {
      name: "Campinn Hiking Tour and Events",
      phone: "+251968676677",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F8095e808dd5c46368292c5664db165f6?format=webp&width=800",
    },
    { name: "Visit Kembata", phone: "+251934784404" },
    {
      name: "Hasat Hiking",
      phone: "+251943194836",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fbafd0ae3fd71481084ef5e55a1f34878?format=webp&width=800",
    },
    {
      name: "Royal hiking",
      phone: "+251911680168",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fbbed1868038d4ea7a0b32d13ef0e6308?format=webp&width=800",
    },
    {
      name: "RiseUp Hiking",
      phone: "+251911784230",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F0d326c58a696433a8871db06905ee679?format=webp&width=800",
    },
    { name: "Seleme Hiking", phone: "+251974095116" },
    { name: "Savana Hiking", phone: "+251904149468" },
    { name: "DIGO hiking", phone: "+251919910104" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-ehoa-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About EHOA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our journey, mission, and the passionate community
              that makes Ethiopian hiking adventures possible.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Target className="h-6 w-6 text-primary mr-3" />
                    Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To promote, develop, and sustain hiking and camping
                    activities in Ethiopia by discovering new trails, enhancing
                    existing ones, and supporting local communities through
                    tourism and charity work.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Heart className="h-6 w-6 text-accent mr-3" />
                    Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To position Ethiopia as a leading hiking and camping
                    destination in Africa, recognized for its breathtaking
                    landscapes, well-developed trails, and community-focused
                    tourism.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <MapPin className="h-6 w-6 text-ehoa-brown-600 mr-3" />
                    Ethos
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We believe in sustainable tourism that respects and uplifts
                    the communities and natural environments we interact with.
                    Our activities are guided by principles of inclusivity,
                    environmental stewardship, and community empowerment.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop"
                alt="Ethiopian hiking community"
                className="rounded-xl shadow-xl w-full h-[600px] object-cover"
              />
              <div
                className="absolute inset-0 rounded-xl bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F6d7d5159335f460a988d1c4bae9510d1')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-muted-foreground text-lg">
              Numbers that reflect our growing impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our organization and unite our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Objectives
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The key goals that drive our mission to promote hiking and camping
              in Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {objectives.map((objective, index) => {
              const [title, description] = objective.split(": ");
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs and Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programs & Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our initiatives focused on developing Ethiopia's hiking and
              tourism potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The dedicated team leading EHOA's mission to promote hiking and
              camping in Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <div className="mx-auto mb-4 flex flex-col">
                  <img
                    loading="lazy"
                    src={leader.image}
                    alt="Leadership member"
                    className="w-full object-cover object-center overflow-hidden"
                    style={{ aspectRatio: 1.42, margin: "20px auto 0" }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {leader.name}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {leader.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones in our mission to unite Ethiopia's hiking
              communities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-primary-foreground font-bold text-sm">
                        {milestone.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="ml-8 flex-grow">
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                            {milestone.month}
                          </span>
                          <h3 className="text-xl font-semibold text-foreground">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Founded by Passionate Adventurers
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                EHOA was established on{" "}
                <strong className="text-foreground">
                  January 18, 2022 G.C.
                </strong>
                , by 10 pioneering founding members representing a collective of
                15 dedicated hiking organizer groups. As the first and only
                national association dedicated to hiking and camping in
                Ethiopia, we were formed to fill a significant gap in the
                Ethiopian tourism landscape, specifically focusing on hiking and
                camping activities.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    10 Founding Members
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-10 w-10 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    January 18, 2022
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-ehoa-brown-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-10 w-10 text-ehoa-brown-700" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Shared Vision
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-ehoa-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-10 w-10 text-ehoa-green-700" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Love for Nature
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-ehoa-sky-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-10 w-10 text-ehoa-sky-700" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Partner Organizations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A network of 15+ dedicated hiking groups united to promote adventure
              and exploration across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-100/50 hover:border-emerald-300/50"
              >
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <div className="w-full h-24 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mb-4 border border-emerald-200 overflow-hidden">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-full w-full object-contain p-2"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-emerald-600 text-xs font-semibold">Logo</div>
                      </div>
                    )}
                  </div>

                  {/* Organization Name */}
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex-grow">
                    {partner.name}
                  </h3>

                  {/* Contact Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-emerald-100">
                    <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <a
                      href={`tel:${partner.phone}`}
                      className="text-emerald-700 hover:text-emerald-900 font-medium text-sm"
                    >
                      {partner.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border-l-4 border-emerald-600">
            <p className="text-muted-foreground text-center">
              <strong className="text-foreground">Note:</strong> To connect with any of our partner
              organizations, reach out directly via the contact numbers provided.
              Together, we're building a strong community of hiking enthusiasts
              dedicated to exploring Ethiopia's natural beauty.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
