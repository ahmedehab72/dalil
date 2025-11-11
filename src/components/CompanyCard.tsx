import { MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CompanyCardProps {
  company: {
    id: number;
    name: string;
    type: string;
    services: string;
    location: string;
    rating: number;
    reviews: number;
    image: string;
  };
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch {
      return "";
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-card rounded-xl shadow-soft hover-lift overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={getImagePath(company.image)}
          alt={company.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary-start to-primary-end text-primary-foreground border-none">
          {company.type}
        </Badge>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{company.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="font-semibold text-foreground">{company.rating}</span>
          <span className="text-muted-foreground text-sm">({company.reviews})</span>
        </div>

        <p className="text-sm text-muted-foreground mb-3">{company.services}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{company.location}</span>
        </div>

        <Button className="w-full bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90 text-primary-foreground group">
          View Details
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default CompanyCard;
