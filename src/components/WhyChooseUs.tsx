import { Shield, Award, Clock, Users, CheckCircle, Star } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Cutting-edge radiology equipment",
      description: "Latest technology for precise diagnostics"
    },
    {
      icon: Award,
      title: "Highly qualified radiologists",
      description: "Board-certified experts with international experience"
    },
    {
      icon: Clock,
      title: "Fast and accurate results",
      description: "Quick turnaround time without compromising quality"
    },
    {
      icon: Users,
      title: "Trusted by thousands",
      description: "Over 10,000 satisfied patients every year"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive services",
      description: "Complete diagnostic solutions under one roof"
    },
    {
      icon: Star,
      title: "Excellence in care",
      description: "Recognized for outstanding patient outcomes"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The team was professional, and I received my results quickly. Highly recommended!",
      rating: 5
    },
    {
      name: "Dr. John D.",
      text: "Exceptional service with world-class expertise. The imaging quality is outstanding.",
      rating: 5
    },
    {
      name: "Ahmed K.",
      text: "Professor Hafida and his team provided excellent care. Very thorough and caring.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Why Choose Us Features */}
        <div className="text-center mb-16">
          <h2 className="display-md mb-6">Why Choose Our Center?</h2>
          <p className="body-xl max-w-3xl mx-auto opacity-90">
            Excellence in diagnostic radiology with cutting-edge technology and compassionate care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-300">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="display-sm mb-8 text-accent">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="text-right">
                <span className="font-semibold text-primary">– {testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;