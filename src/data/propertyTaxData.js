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

,Ohio: {
    statewide: {
      benefit: "Ohio Disabled Veteran Property Tax Exemption",
      eligibility: "100% service-connected disabled veteran or surviving spouse. Must be Ohio resident and own primary residence.",
      exemptionAmount: "$50,000 of home market value exempt from property taxes",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains exemption",
      application: "Apply through your county auditor's office",
      link: "https://tax.ohio.gov/individual/resources/veterans-exemption",
      sourceName: "Ohio Department of Taxation",
      sourceType: "State Agency",
      lawReference: "Ohio Revised Code § 323.152",
      lastVerified: "2025-01"
    }
  },

  Michigan: {
    statewide: {
      benefit: "Michigan Disabled Veteran Property Tax Exemption",
      eligibility: "100% permanently and totally disabled veteran as determined by the VA. Must be Michigan resident.",
      exemptionAmount: "Full property tax exemption on primary residence",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse may retain exemption",
      application: "Apply through your local city or township assessor",
      link: "https://www.michigan.gov/taxes/property/exemptions/disabled-veterans-exemption",
      sourceName: "Michigan Department of Treasury",
      sourceType: "State Agency",
      lawReference: "MCL § 211.7b",
      lastVerified: "2025-01"
    }
  },

  Illinois: {
    statewide: {
      benefit: "Illinois Disabled Veteran Standard Homestead Exemption",
      eligibility: "Service-connected disability of 30% or more. 100% disabled veterans receive the maximum exemption.",
      exemptionAmount: "$2,500 reduction (30-49%), $5,000 reduction (50-69%), full exemption (70%+ or 100% P&T)",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — surviving spouse of 100% disabled veteran may retain exemption",
      application: "Apply through your county chief county assessment officer",
      link: "https://tax.illinois.gov/individuals/veterans.html",
      sourceName: "Illinois Department of Revenue",
      sourceType: "State Agency",
      lawReference: "35 ILCS 200/15-169",
      lastVerified: "2025-01"
    }
  },

  Missouri: {
    statewide: {
      benefit: "Missouri Disabled Veteran Property Tax Credit",
      eligibility: "100% service-connected disabled veteran or prisoner of war. Must be Missouri resident.",
      exemptionAmount: "Up to $1,100 property tax credit annually",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse qualifies",
      application: "File Form MO-PTC through the Missouri Department of Revenue",
      link: "https://dor.mo.gov/personal/ptc/",
      sourceName: "Missouri Department of Revenue",
      sourceType: "State Agency",
      lawReference: "RSMo § 135.010",
      lastVerified: "2025-01"
    }
  },

  Kansas: {
    statewide: {
      benefit: "Kansas Disabled Veteran Property Tax Exemption",
      eligibility: "100% service-connected permanently disabled veteran as rated by the VA. Must be Kansas resident.",
      exemptionAmount: "Full property tax exemption on primary residence for 100% P&T veterans",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains exemption",
      application: "Apply through your county appraiser's office",
      link: "https://www.ksrevenue.gov/pvd-disabledveterans.html",
      sourceName: "Kansas Department of Revenue",
      sourceType: "State Agency",
      lawReference: "Kansas Statute § 79-4521",
      lastVerified: "2025-01"
    }
  },

  Oklahoma: {
    statewide: {
      benefit: "Oklahoma Disabled Veteran Property Tax Exemption",
      eligibility: "100% service-connected disabled veteran as rated by the VA. Must be Oklahoma resident and own primary residence.",
      exemptionAmount: "Full property tax exemption on primary residence valued up to $200,000",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains exemption",
      application: "Apply through your county assessor's office",
      link: "https://www.ok.gov/tax/Individuals/Motor_Vehicle/Disabled_Veterans_Benefits/",
      sourceName: "Oklahoma Tax Commission",
      sourceType: "State Agency",
      lawReference: "Oklahoma Statute Title 68 § 2889",
      lastVerified: "2025-01"
    }
  }

,"NewYork": {
    statewide: {
      benefit: "New York Eligible Funds and Cold War Veterans Exemption",
      eligibility: "Veterans with service-connected disability. 100% disabled veterans qualify for maximum exemption. Must be New York resident.",
      exemptionAmount: "Varies by municipality; up to full exemption for 100% disabled veterans in participating counties",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains exemption",
      application: "Apply through your local assessor's office by March 1",
      link: "https://www.tax.ny.gov/pit/property/exemption/vetexempt.htm",
      sourceName: "New York State Department of Taxation and Finance",
      sourceType: "State Agency",
      lawReference: "NY Real Property Tax Law § 458-a",
      lastVerified: "2025-01"
    }
  },

  "NewJersey": {
    statewide: {
      benefit: "New Jersey Disabled Veteran Property Tax Exemption",
      eligibility: "100% permanently and totally disabled veteran as rated by the VA. Must be New Jersey resident and own primary residence.",
      exemptionAmount: "Full property tax exemption on primary residence",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains full exemption",
      application: "Apply through your local municipal tax assessor",
      link: "https://www.nj.gov/treasury/taxation/lpt/lpt-disabledvet.shtml",
      sourceName: "New Jersey Division of Taxation",
      sourceType: "State Agency",
      lawReference: "NJ Statute § 54:4-3.30",
      lastVerified: "2025-01"
    }
  },

  Pennsylvania: {
    statewide: {
      benefit: "Pennsylvania Disabled Veteran Real Estate Tax Exemption",
      eligibility: "100% permanently and totally disabled veteran as rated by the VA. Must be Pennsylvania resident.",
      exemptionAmount: "Full property tax exemption on primary residence",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains exemption",
      application: "Apply through your county Board of Assessment Appeals",
      link: "https://www.pa.gov/en/agencies/revenue/resources/tax-types-and-information/personal-income-tax/tax-relief-for-veterans.html",
      sourceName: "Pennsylvania Department of Revenue",
      sourceType: "State Agency",
      lawReference: "51 Pa. C.S. § 8902",
      lastVerified: "2025-01"
    }
  },

  Maryland: {
    statewide: {
      benefit: "Maryland Disabled Veteran Property Tax Exemption",
      eligibility: "100% service-connected permanently disabled veteran as rated by the VA. Must be Maryland resident.",
      exemptionAmount: "Full property tax exemption on primary residence",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains exemption",
      application: "Apply through your local county or city assessment office",
      link: "https://dat.maryland.gov/realproperty/Pages/Maryland-Disabled-Veterans-Exemption.aspx",
      sourceName: "Maryland Department of Assessments and Taxation",
      sourceType: "State Agency",
      lawReference: "Maryland Tax-Property Code § 7-208",
      lastVerified: "2025-01"
    }
  },

  Georgia: {
    statewide: {
      benefit: "Georgia Disabled Veteran Homestead Exemption",
      eligibility: "Veteran with 100% service-connected disability or receiving 100% compensation due to individual unemployability. Must be Georgia resident.",
      exemptionAmount: "Full property tax exemption on primary residence for 100% disabled veterans",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains exemption",
      application: "Apply through your county tax commissioner or tax assessor",
      link: "https://veterans.georgia.gov/services/state-benefits/property-tax-exemption",
      sourceName: "Georgia Department of Veterans Service",
      sourceType: "State Agency",
      lawReference: "Georgia Code § 48-5-48",
      lastVerified: "2025-01"
    }
  },

  "SouthCarolina": {
    statewide: {
      benefit: "South Carolina Disabled Veteran Property Tax Exemption",
      eligibility: "100% service-connected permanently and totally disabled veteran as rated by the VA. Must be South Carolina resident.",
      exemptionAmount: "Full property tax exemption on primary residence",
      primaryResidence: "Yes",
      survivingSpouse: "Yes — unremarried surviving spouse retains exemption",
      application: "Apply through your county auditor's office",
      link: "https://www.sc.gov/residents/military-veterans/veteran-benefits/property-tax-exemption",
      sourceName: "South Carolina Department of Revenue",
      sourceType: "State Agency",
      lawReference: "SC Code § 12-37-220",
      lastVerified: "2025-01"
    }
  }

};

export default propertyTaxData;
