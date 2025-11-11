import { useEffect, useRef } from "react";
import { Search, Building2, Hammer, HardHat, Wrench, Ruler, PaintBucket, Home, Building, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gsap from "gsap";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const iconsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const icons = [
    { Icon: Building2, label: "Buildings" },
    { Icon: Hammer, label: "Construction" },
    { Icon: HardHat, label: "Safety" },
    { Icon: Wrench, label: "Tools" },
    { Icon: Ruler, label: "Planning" },
    { Icon: PaintBucket, label: "Finishing" },
    { Icon: Home, label: "Residential" },
    { Icon: Building, label: "Commercial" },
    { Icon: Factory, label: "Industrial" },
  ];

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 111, 15, 0.85), rgba(255, 140, 50, 0.75)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Best <span className="block mt-2">Construction Companies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Your complete guide to construction companies in Kuwait. Connect with trusted builders, contractors, and
            consultation professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for construction companies, services, or projects..."
                className="pl-10 h-12 bg-card border-none shadow-strong"
              />
            </div>
            <Button size="lg" className="h-12 bg-card text-primary hover:bg-card/90 shadow-strong">
              Discover Companies
            </Button>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <div ref={iconsRef} className="flex gap-8 animate-slide-left">
            {[...icons, ...icons].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 min-w-[100px] text-primary-foreground/80"
              >
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                  <item.Icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
