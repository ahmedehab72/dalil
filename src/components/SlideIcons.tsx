import { useEffect, useRef } from "react";
import {
  Search,
  Building2,
  Hammer,
  HardHat,
  Wrench,
  Ruler,
  PaintBucket,
  Home,
  Building,
  Factory,
} from "lucide-react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const SliderIcons = () => {
  const iconsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
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
    <>
      <div className="mt-16 overflow-hidden">
        <div ref={iconsRef} className="flex gap-8 animate-slide-left">
          {[...icons, ...icons].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[100px] text-[#404e7a]"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                <item.Icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderIcons;
