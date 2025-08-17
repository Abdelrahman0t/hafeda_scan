import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary via-accent to-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-accent-foreground mb-6">
            Your Health, Our Priority
          </h2>
          
          <p className="body-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait for symptoms to worsen. Early detection through advanced imaging 
            can make all the difference in your health outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="medical" size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-glow">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Scan Today
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (040) 2257997
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Same Day</div>
              <div className="text-accent-foreground/80">Results Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-accent-foreground/80">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Insurance</div>
              <div className="text-accent-foreground/80">Accepted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Free</div>
              <div className="text-accent-foreground/80">Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
