import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent">Hafeda Scan</h3>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Led by Professor Dr. Mohamed Mohamed Abdel-Galil Hafida, we provide 
              world-class diagnostic imaging services with cutting-edge technology 
              and compassionate patient care.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">(040) 22573333</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">info@hafedascan.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base">Midan Al-Bandar, El-Mahalla El-Kubra, Egypt, 31951</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-accent text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">About Dr. Hafida</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">Our Services</a></li>
              <li><a href="#team" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">Our Team</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">Contact Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-accent text-base sm:text-lg">Our Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><span className="text-primary-foreground/80 text-sm sm:text-base">Mammography</span></li>
              <li><span className="text-primary-foreground/80 text-sm sm:text-base">EMG & Nerve Studies</span></li>
              <li><span className="text-primary-foreground/80 text-sm sm:text-base">Digital Dental X-rays</span></li>
              <li><span className="text-primary-foreground/80 text-sm sm:text-base">CT Scans</span></li>
              <li><span className="text-primary-foreground/80 text-sm sm:text-base">MRI & Ultrasound</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 mt-8 sm:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-xs sm:text-sm text-center md:text-left">
              © 2024 Hafeda Scan. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover-scale">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover-scale">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover-scale">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover-scale">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
