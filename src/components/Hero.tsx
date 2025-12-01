import { useRef } from "react";
import {
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/heroImage2.jpg";
import { useNavigate } from "react-router-dom";
import SliderIcons from "./sliderIcons";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #00000050, #00000050), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={heroRef}
          className="max-w-4xl mx-auto text-center text-primary-foreground"
        >
          <h1 className=" mb-4 ">
            <span className="block text-4xl font-bold mt-mb-6 text-[#404e7a]">Find Best</span>
             <span className="text-5xl md:text-6xl font-bold"> Construction Companies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-20  text-primary-foreground/70">
            The largest online directory to find, compare, and contact
            construction, contracting, and interior design companies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search text-black for construction companies, services, or projects..."
                className="pl-10 h-12 bg-card border-none shadow-strong text-black"
              />
            </div>
            <Button
              onClick={() => navigate("/companies")}
              size="lg"
              className="h-12 bg-card text-[#404e7a] hover:bg-card/90 shadow-strong"
            >
              Discover Companies
            </Button>
          </div>

        </div>
          <SliderIcons />
      </div>
    </section>
  );
};

export default Hero;
