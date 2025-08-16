import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-radiology.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="hero-section relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            Welcome to
            <span className="block text-accent mt-2"> Hafeda Scan</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 animate-fade-in [animation-delay:0.2s]">
            Led by <strong>Prof. Dr. Mohamed Mohamed Abdel-Galil Hafida</strong>, 
            delivering excellence in medical imaging and diagnostics with cutting-edge technology 
            and decades of expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto animate-fade-in [animation-delay:0.4s]">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              Book Your Appointment
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary-foreground rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;