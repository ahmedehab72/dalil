import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchFilter from "@/components/SearchFilter";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";
import CompanyModal from "@/components/CompanyModal";
import CompanyListingsSection from "@/components/CompanyListingsSection";
import SearchFilterSection from "@/components/SearchFilterSection";
import BlogSection from "@/components/Blog";
import CallToActionSection from "@/components/CTA";

const Index = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchFilters, setSearchFilters] = useState({
    search: "",
    constructionType: "",
    location: "",
    companySize: "",
  });
  return (
    <div className="min-h-screen">
      {/* Gradient Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(234, 88, 12, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #fff 0%, #fefbf4 100%)
          `,
        }}
      />
      <Header />
      <Hero />
      {/* <SearchFilter /> */}
      <FeaturedCompanies setSelectedCompany={setSelectedCompany} />
      <SearchFilterSection
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
      />
      <CompanyListingsSection
        searchFilters={searchFilters}
        setSelectedCompany={setSelectedCompany}
      />{" "}
      <WhyChoose />
      <BlogSection />
      <Testimonials />
      <Contact />
      <CallToActionSection />
      <Footer />
      {/* Company Details Modal */}
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
};

export default Index;
