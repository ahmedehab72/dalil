import React, { useState } from "react";
import SearchFilterSection from "./SearchFilterSection";
import CompanyListingsSection from "./CompanyListingsSection";
import CompanyModal from "./CompanyModal";

const OurCompanies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchFilters, setSearchFilters] = useState({
    search: "",
    constructionType: "",
    location: "",
    companySize: "",
  });
  return (
    <>
      <SearchFilterSection
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
      />
      <CompanyListingsSection
        searchFilters={searchFilters}
        setSelectedCompany={setSelectedCompany}
      />{" "}
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </>
  );
};

export default OurCompanies;
