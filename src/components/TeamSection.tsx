import { MapPin, Award, Clock } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Ahmed Mansour",
      title: "Senior Radiology Specialist",
      specialization: "MRI & CT Scans",
      experience: "15 years",
      bio: "Expert in MRI and CT scans with over 15 years of clinical experience in diagnostic imaging.",
      location: "Tanta University"
    },
    {
      name: "Dr. Fatima El-Sayed", 
      title: "Interventional Radiologist",
      specialization: "Ultrasound & Mammography",
      experience: "12 years",
      bio: "Specialized in breast imaging and interventional procedures with extensive training in Europe.",
      location: "Tanta University"
    },
    {
      name: "Dr. Omar Hassan",
      title: "Neuroradiology Consultant",
      specialization: "Brain & Spine Imaging",
      experience: "18 years",
      bio: "Leading expert in neuroimaging with fellowship training in advanced brain and spine imaging.",
      location: "Tanta University"
    },
    {
      name: "Dr. Nadia Kamal",
      title: "Pediatric Radiologist",
      specialization: "Children's Imaging",
      experience: "10 years",
      bio: "Dedicated to providing safe and accurate imaging for pediatric patients with specialized training.",
      location: "Tanta University"
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">A Distinguished Team of Radiology Experts</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Our team of board-certified radiologists brings together decades of experience 
            and specialized expertise in various imaging modalities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="section-card rounded-xl p-4 sm:p-6 text-center hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Placeholder Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-card">
                <span className="text-lg sm:text-2xl font-bold text-primary-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{member.name}</h3>
              <div className="text-secondary font-medium mb-1 text-sm sm:text-base">{member.title}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{member.specialization}</div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                {member.bio}
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{member.experience} experience</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <div className="text-center p-4 bg-background/50 rounded-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">25+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Years Combined Experience</div>
          </div>
          <div className="text-center p-4 bg-background/50 rounded-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Board Certified</div>
          </div>
          <div className="text-center p-4 bg-background/50 rounded-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">24/7</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Emergency Coverage</div>
          </div>
          <div className="text-center p-4 bg-background/50 rounded-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">98%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Patient Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;