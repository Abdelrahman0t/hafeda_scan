import certificationsImage from "@/assets/certifications.jpg";
import { Award, Shield, Star, Verified } from "lucide-react";

const CertificationsSection = () => {
  const achievements = [
    {
      icon: Shield,
      title: "ISO-Certified Medical Imaging Facility",
      year: "2024",
      description: "International standards for quality and safety"
    },
    {
      icon: Award,
      title: "Recognized by National Radiology Association",
      year: "2023",
      description: "Excellence in diagnostic imaging services"
    },
    {
      icon: Star,
      title: "Awarded Excellence in Diagnostic Imaging",
      year: "2024",
      description: "Outstanding patient care and clinical outcomes"
    },
    {
      icon: Verified,
      title: "Accredited Teaching Hospital",
      year: "2022",
      description: "Approved for medical education and training"
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url(${certificationsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/90"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16 text-primary-foreground">
          <h2 className="display-md mb-6">Certifications & Achievements</h2>
          <p className="body-xl max-w-3xl mx-auto opacity-90">
            Recognized for excellence in medical imaging and commitment to the highest standards of patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center text-primary-foreground hover:bg-primary-foreground/15 transition-all duration-300">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <achievement.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <div className="text-sm font-medium text-accent mb-2">{achievement.year}</div>
              <h3 className="text-lg font-semibold mb-3 leading-tight">{achievement.title}</h3>
              <p className="text-sm opacity-90">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">Member of International Radiology Society</span>
            </div>
            <div className="w-px h-6 bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">JCI Hospital Accreditation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;