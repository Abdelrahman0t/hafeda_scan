import { Scan, Zap, Monitor, Activity, Heart, Brain } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Mammography (Breast Imaging)",
      description: "State-of-the-art mammography for early detection and accurate diagnosis of breast conditions.",
      image: "bg-gradient-to-br from-pink-100 to-rose-50",
    },
    {
      icon: Zap,
      title: "Electromyography & Nerve Studies",
      description: "Advanced neuro-diagnostic testing for muscles and nerve functions.",
      image: "bg-gradient-to-br from-blue-100 to-indigo-50",
    },
    {
      icon: Monitor,
      title: "Digital Dental X-rays",
      description: "High-resolution digital dental radiology for safe and precise imaging.",
      image: "bg-gradient-to-br from-green-100 to-emerald-50",
    },
    {
      icon: Scan,
      title: "CT Scans",
      description: "Advanced computed tomography for detailed cross-sectional imaging.",
      image: "bg-gradient-to-br from-purple-100 to-violet-50",
    },
    {
      icon: Activity,
      title: "Ultrasound Imaging",
      description: "Real-time imaging using high-frequency sound waves for various diagnostic purposes.",
      image: "bg-gradient-to-br from-amber-100 to-yellow-50",
    },
    {
      icon: Brain,
      title: "MRI Scans",
      description: "Magnetic resonance imaging for detailed soft tissue and brain imaging.",
      image: "bg-gradient-to-br from-cyan-100 to-teal-50",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            State-of-the-art diagnostic imaging services with the latest technology 
            and expert radiological interpretation for accurate diagnoses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="section-card rounded-xl p-6 sm:p-8 text-center hover-scale animate-fade-in group flex flex-col justify-between h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 ${service.image} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-card group-hover:shadow-glow transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                <span className="text-secondary font-semibold text-sm sm:text-base cursor-pointer hover:text-primary transition-colors">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
