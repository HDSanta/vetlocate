const propertyTaxData = {
  Arizona: {
    statewide: {
      benefit: "Arizona Disabled Veteran Property Tax Exemption",
      eligibility: "Arizona resident with service-connected disability. Exemption amount increases with disability rating. 100% P&T veterans qualify for the maximum exemption.",
      exemptionAmount: "Up to $4,188 assessed value exemption; higher for 100% P&T veterans depending on income and property value",
      primaryResidence: "Yes",
      survivingSpouse: "Yes",
      application: "Apply through your county assessor's office",
      link: "https://azdor.gov/businesses-arizona/unclaimed-property/veteran-exemptions",
      sourceName: "Arizona Department of Revenue",
      sourceType: "State Agency",
      lawReference: "ARS § 42-11111",
      lastVerified: "2025-01"
    },
    Yavapai: {
      benefit: "Disabled Veteran Property Tax Exemption",
      eligibility: "Arizona resident with service-connected disability. Higher exemptions for 100% P&T.",
      exemptionAmount: "Up to full exemption depending on disability level and property value",
      primaryResidence: "Yes",
      survivingSpouse: "Yes",
      application: "Apply through Yavapai County Assessor",
      link: "https://www.yavapaiaz.gov/assessor",
      sourceName: "Yavapai County Assessor",
      sourceType: "County Agency",
      lawReference: "ARS § 42-11111",
      lastVerified: "2025-01"
    },
    Maricopa: {
      benefit: "Disabled Veteran Property Tax Exemption",
      eligibility: "Service-connected disability with Arizona residency",
      exemptionAmount: "Varies by disability percentage",
      primaryResidence: "Yes",
      survivingSpouse: "Yes",
      application: "Apply through Maricopa County Assessor",
      link: "https://mcassessor.maricopa.gov",
      sourceName: "Maricopa County Assessor",
      sourceType: "County Agency",
      lawReference: "ARS § 42-11111",
      lastVerified: "2025-01"
    }
  },

  Florida: {
    Escambia: {
      benefit: "Homestead + Disabled Veteran Exemption",
      eligibility: "100% service-connected disability",
      exemptionAmount: "Full property tax exemption",
      primaryResidence: "Yes",
      survivingSpouse: "Yes",
      application: "Apply through Escambia County Property Appraiser",
      link: "https://escpa.org",
      sourceName: "Escambia County Property Appraiser",
      sourceType: "County Agency",
      lawReference: "Florida Statute § 196.081",
      lastVerified: "2025-01"
    }
  }
  ,Texas: {
    statewide: {
      benefit: "Texas Disabled Veteran Homestead Exemption",
      eligibility: "Texas offers property tax exemptions for disabled veterans. The exemption amount depends on VA disability rating, with full exemption available for 100% service‑connected disabled veterans.",
      exemptionAmount: "Ranges from partial exemption to full exemption for 100% disabled veterans",
      primaryResidence: "Yes",
      survivingSpouse: "Yes, for surviving spouses of 100% disabled veterans under qualifying conditions",
      application: "Apply through the county appraisal district where the property is located",
      link: "https://comptroller.texas.gov/taxes/property-tax/exemptions/disabledvet-faq.php",
      sourceName: "Texas Comptroller of Public Accounts",
      sourceType: "State Agency",
      lawReference: "Texas Tax Code § 11.22",
      lastVerified: "2025-01"
    }
  }
,Nevada: {
    statewide: {
      benefit: "Nevada Disabled Veteran Property Tax Exemption",
      eligibility: "Nevada resident with service-connected disability rated 60% or higher. 100% P&T veterans receive the maximum exemption.",
      exemptionAmount: "$30,800 assessed value exemption (60–79%), $50,800 (80–99%), $90,800 (100% P&T)",
      primaryResidence: "Yes",
      survivingSpouse: "Yes",
      application: "Apply through your county assessor's office by June 15",
      link: "https://tax.nv.gov/Publications/Veteran_Exemptions/",
      sourceName: "Nevada Department of Taxation",
      sourceType: "State Agency",
      lawReference: "NRS 361.091",
      lastVerified: "2025-01"
    }
  },

  NorthCarolina: {
    statewide: {
      benefit: "North Carolina Disabled Veteran Homestead Exclusion",
      eligibility: "100% permanently and totally disabled veteran or rated individually unemployable (TDIU). Must be honorably discharged.",
      exemptionAmount: "First $45,000 of appraised home value excluded from taxation",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — surviving spouse may continue exemption if not remarried",
      application: "Apply through county tax assessor by June 1",
      link: "https://www.ncdor.gov/taxes-forms/property-tax/property-tax-exemptions-and-exclusions/disabled-veteran-homestead-exclusion",
      sourceName: "North Carolina Department of Revenue",
      sourceType: "State Agency",
      lawReference: "G.S. 105-277.1C",
      lastVerified: "2025-01"
    }
  },

  Virginia: {
    statewide: {
      benefit: "Virginia Disabled Veteran Real Property Tax Exemption",
      eligibility: "100% service-connected permanent and total disability rated by the VA. Must be Virginia resident.",
      exemptionAmount: "Full exemption on primary residence — one of the best in the country for 100% P&T",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — surviving spouse retains exemption as long as they remain in the home and do not remarry",
      application: "Apply through your local city or county commissioner of revenue",
      link: "https://www.tax.virginia.gov/search/cse?keys=disabled+veteran#gsc.tab=0&gsc.q=disabled%20veteran&gsc.sort=",
      sourceName: "Virginia Department of Taxation",
      sourceType: "State Agency",
      lawReference: "Virginia Code § 58.1-3219.5",
      lastVerified: "2025-01"
    }
  },

  Tennessee: {
    statewide: {
      benefit: "Tennessee Disabled Veteran Property Tax Relief",
      eligibility: "Veterans with 100% service-connected disability or receiving 100% compensation due to individual unemployability. Must be Tennessee resident.",
      exemptionAmount: "Up to $175,000 of home value exempt from property taxes",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse qualifies",
      application: "Apply through the Tennessee State Board of Equalization or county assessor",
      link: "https://www.tn.gov/search-results.html#q=disabled%20veteran",
      sourceName: "Tennessee Department of Veterans Services",
      sourceType: "State Agency",
      lawReference: "TCA § 67-5-704",
      lastVerified: "2025-01"
    }
  },

  Washington: {
    statewide: {
      benefit: "Washington State Property Tax Exemption for Disabled Veterans",
      eligibility: "100% service-connected disability or permanently and totally disabled. Must be Washington resident and own/occupy primary residence.",
      exemptionAmount: "Full exemption on primary residence for qualifying 100% P&T veterans",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse may continue exemption",
      application: "Apply through your county assessor's office",
      link: "https://dor.wa.gov/taxes-rates/property-tax/property-tax-exemption-seniors-people-retired-due-disability-and-veterans-disabilities",
      sourceName: "Washington State Department of Revenue",
      sourceType: "State Agency",
      lawReference: "RCW 84.36.379",
      lastVerified: "2025-01"
    }
  }

};

export default propertyTaxData;