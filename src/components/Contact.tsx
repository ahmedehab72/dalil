import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top center+=100",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to list your construction company? We're here
            to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm">
                      Al-Kuwait Tower, Floor 15
                      <br />
                      Kuwait City, Block 3, Building 24
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">
                      +965 2245 6789
                      <br />
                      +965 9876 5432
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      info@DALIL.com
                      <br />
                      support@DALIL.com
                    </p>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Kuwait City Location</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className="bg-card rounded-xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Full Name *
                </label>
                <Input placeholder="Your full name" className="h-12" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Phone Number
                </label>
                <Input placeholder="+965 XXXX XXXX" className="h-12" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message *
                </label>
                <Textarea
                  placeholder="Tell us about your project or inquiry..."
                  className="min-h-32 resize-none"
                />
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90 text-primary-foreground">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
