import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">Contact & Appointment</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to schedule your appointment? Get in touch with our team or book online for your convenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:items-start mb-8 sm:mb-12">
          {/* Contact Form */}
          <div className="section-card rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">Book Your Appointment</h3>
            
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input placeholder="Enter your full name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input placeholder="Enter your phone number" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <Input type="email" placeholder="Enter your email address" className="w-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mammography">Mammography</SelectItem>
                      <SelectItem value="emg">EMG & Nerve Studies</SelectItem>
                      <SelectItem value="dental">Dental X-rays</SelectItem>
                      <SelectItem value="ct">CT Scans</SelectItem>
                      <SelectItem value="ultrasound">Ultrasound</SelectItem>
                      <SelectItem value="mri">MRI Scans</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                  <Input type="date" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Additional Notes (Optional)</label>
                <Textarea placeholder="Any special requirements or comments..." rows={3} className="w-full resize-none" />
              </div>

              <Button variant="appointment" size="lg" className="w-full text-base py-3">
                Request Appointment
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="section-card rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">Contact Information</h3>
            
            <div className="space-y-11">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">(040) 22573333</p>
                  <p className="text-muted-foreground text-sm">Emergency: (040) 22573333</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm break-all">info@hafedascan.com</p>
                  <p className="text-muted-foreground text-sm break-all">appointments@hafedascan.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground text-sm">El-Mahalla El-Kubra, Egypt, 31951</p>
                  <p className="text-muted-foreground text-sm">Midan Al-Bandar – Next to First District Police Station</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                  <div className="text-muted-foreground space-y-0.5 text-sm">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Emergency Services Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map - Optimized Height */}
<div className="section-card rounded-xl p-6 sm:p-8">
  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
    Our Location
  </h3>
  <div className="h-64 sm:h-80 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6841.673793859614!2d31.170712731460572!3d30.975033492665258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7a4a639cd5e17%3A0x712608b6bf3db274!2z2YXYsdmD2LIg2YXYrdmF2K8g2K3ZgdmK2LbYqSDZhNmE2KfYtNi52Kk!5e0!3m2!1sar!2seg!4v1755386888395!5m2!1sar!2seg"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </div>
    </section>
  );
};

export default ContactSection;
