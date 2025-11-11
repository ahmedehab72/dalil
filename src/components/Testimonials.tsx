import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Abdullah Al-Kharafi",
      position: "CEO, Al-Kharafi Group",
      company: "Al-Kharafi Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      content: "DALIL helped us find the perfect construction partner for our commercial project. The platform's verification process gave us confidence in our choice.",
      project: "Kuwait City Shopping Complex",
    },
    {
      id: 2,
      name: "Fatima Al-Sabah",
      position: "Project Manager",
      company: "Al-Sabah Properties",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      content: "Exceptional service and quality companies. The detailed profiles and reviews made our selection process much easier and more informed.",
      project: "Luxury Residential Villas",
    },
    {
      id: 3,
      name: "Omar Al-Rashid",
      position: "Development Director",
      company: "Kuwait Real Estate Co.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      content: "Outstanding platform with verified and reliable construction companies. Their comprehensive database saved us months of research.",
      project: "Industrial Complex Development",
    },
    {
      id: 4,
      name: "Noor Al-Mansouri",
      position: "Architect",
      company: "Modern Design Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      content: "As an architect, I appreciate the detailed portfolio and project information available for each company. It makes collaboration seamless.",
      project: "Contemporary Office Building",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our satisfied clients say about their experience with DALIL
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="bg-card rounded-xl sm:rounded-2xl shadow-soft p-4 sm:p-8 md:p-12 border border-border overflow-hidden">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 opacity-20">
                <Quote size={64} className="text-primary" />
              </div>

              {/* Testimonial Content */}
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="flex flex-col items-center text-center">
                      {/* Stars */}
                      <div className="flex justify-center mb-4 sm:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="fill-primary text-primary mx-0.5 sm:mx-1" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                        />
                        <div className="text-center">
                          <h4 className="text-base sm:text-lg font-bold text-foreground">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.position}</p>
                          <p className="text-xs sm:text-sm text-primary font-medium">{testimonial.company}</p>
                          <p className="text-xs text-muted-foreground mt-1">{testimonial.project}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? "bg-primary scale-110"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
