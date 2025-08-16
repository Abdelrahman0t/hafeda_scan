import doctorImage from "@/assets/doctor-portrait.jpg";
import { CheckCircle } from "lucide-react";

const AboutDoctor = () => {
  const credentials = [
    "Board-Certified in Diagnostic Radiology",
    "Fellowship in Advanced Imaging – European Radiology Society", 
    "Over 25 years of experience in clinical radiology and academic research"
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant max-w-md mx-auto lg:max-w-none">
              <img 
                src='/portfolio_image.jpg'
                alt="Prof. Dr. Mohamed Mohamed Abdel-Galil Hafida"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-full flex items-center justify-center shadow-glow">
              <span className="text-xl sm:text-2xl font-bold text-accent-foreground">25+</span>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 leading-tight">
                Meet Professor Dr. Mohamed Mohamed Abdel-Galil Hafida
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Professor Dr. Hafida is a highly respected specialist in diagnostic radiology 
                and medical imaging at Tanta University. With decades of experience, international 
                certifications, and recognition in the field of radiology, he has led advancements 
                in accurate diagnosis and patient care.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Credentials & Expertise</h3>
              <div className="space-y-2 sm:space-y-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base lg:text-lg text-foreground">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">10,000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Patients Treated</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Research Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;