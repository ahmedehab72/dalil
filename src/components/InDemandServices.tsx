// components/in-demand-services-accordion.tsx
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function InDemandServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Constructions",
      description: "New constructions have arrived on the scene, ready to shape the future of our built environment.",
      ctaText: "Explore Now →",
      ctaLink: "#",
      isExpanded: true
    },
    {
      title: "Architecture Design",
      subtitle: "Project Development",
      description: "",
      ctaText: "View more",
      ctaLink: "#",
      isExpanded: false
    },
    {
      title: "Our Design",
      subtitle: "design system",
      description: " lorem New constructions have arrived on the scene, ready to shape the future of our built environment. New constructions have arrived on the scene, ready to shape the future of our built environment. New constructions have arrived on the scene, ready to shape the future of our built environment. ",
      ctaText: "",
      ctaLink: "#",
      isExpanded: false
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-7xl w-full">
        {/* Main Title - Top */}
        <div className="mb-16  text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#404e7a] leading-tight mb-8 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 ">
            Our services to provide the solutions that improve the quality of our lives.
          </p>
        </div>

        {/* Divider Line */}

        {/* Accordion Items */}
        <div className="space-y-2">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`border-b border-[#404e7a]/20 pb-8 ${index === services.length - 1 ? 'border-b-0' : ''}`}
            >
              {/* Accordion Header - Always Visible */}
              <div 
                className="flex items-start justify-between cursor-pointer group"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#404e7a] mb-2">
                    {service.title}
                  </h2>
                  {service.subtitle && (
                    <h3 className="text-xl text-[#404e7a]/80 font-medium">
                      {service.subtitle}
                    </h3>
                  )}
                </div>
                
                {/* Expand/Collapse Icon */}
                <div className="ml-4 p-2 group-hover:bg-[#404e7a]/10 rounded-full transition-colors">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-[#404e7a]" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-[#404e7a]" />
                  )}
                </div>
              </div>

              {/* Accordion Content - Collapsible */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}
              >
                {service.description && (
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                )}
                
                {/* CTA Button/Link */}
                <div className="mt-4">
                  <a 
                    href={service.ctaLink}
                    className="inline-flex items-center text-[#404e7a] font-semibold text-lg group/cta hover:text-[#404e7a]/80 transition-colors"
                  >
                    {service.ctaText}
                    {service.ctaText.includes("Explore Now") && (
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/cta:translate-x-1" />
                    )}
                  </a>
                </div>
              </div>

              {/* Static CTA for collapsed state (always visible) */}
              {service.description && (
                <div className={`${openIndex === index ? 'hidden' : 'block'} mt-4`}>
                  <a 
                    href={service.ctaLink}
                    className="inline-flex items-center text-[#404e7a] font-semibold text-lg group/cta hover:text-[#404e7a]/80 transition-colors"
                  >
                    {service.ctaText}
                    {service.ctaText.includes("Explore Now") && (
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/cta:translate-x-1" />
                    )}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}