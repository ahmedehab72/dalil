import { Shield, Users, Award, TrendingUp } from "lucide-react";
import { stats } from "@/data/companies";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".feature-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Verified Companies",
      description: "All listed companies are verified with official documents and real projects.",
    },
    {
      icon: Users,
      title: "Quality Assurance",
      description: "We ensure the highest quality standards in all our listed construction companies.",
    },
    {
      icon: Award,
      title: "Real Client Reviews",
      description: "Reviews and ratings from real customers who have hired these services.",
    },
    {
      icon: TrendingUp,
      title: "Complete Company Profiles",
      description: "Browse detailed profiles, projects, services, and contact information.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-[#404e7a]">Daleel?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are Daleel's most trusted platform for connecting clients with verified construction
            companies. Our mission is to simplify your search for finding reliable construction partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-card rounded-xl p-6 shadow-soft hover-lift text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#404e7a] from-primary-start to-primary-end flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[#404e7a] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-lg py-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#404e7a] mb-2">
                {stat.value}
              </div>
              <div className="text-[#404e7a]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
