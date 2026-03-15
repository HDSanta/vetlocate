const gunLawsData = {
  Alabama: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://ago.alabama.gov"
  },
  Alaska: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.law.alaska.gov"
  },
  Arizona: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.azleg.gov"
  },
  Arkansas: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.dps.arkansas.gov"
  },
  California: {
    ccw: { status: "Permit Required", notes: "Shall-issue after Bruen decision but heavily restricted in many counties.", friendly: "red" },
    openCarry: { status: "Illegal", notes: "Open carry of handguns is banned in most areas.", friendly: "red" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in California.", friendly: "red" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://oag.ca.gov/firearms"
  },
  Colorado: {
    ccw: { status: "Permit Required", notes: "Shall-issue permit required for concealed carry.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal but some municipalities restrict it.", friendly: "yellow" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "15 Round Limit", notes: "Magazines over 15 rounds are banned.", friendly: "red" },
    link: "https://coag.gov"
  },
  Connecticut: {
    ccw: { status: "Permit Required", notes: "Permit required, may-issue in practice.", friendly: "red" },
    openCarry: { status: "Legal with Permit", notes: "Open carry allowed with valid carry permit.", friendly: "yellow" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in Connecticut.", friendly: "red" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://portal.ct.gov/DESPP/firearms"
  },
  Delaware: {
    ccw: { status: "Permit Required", notes: "Shall-issue permit required.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "17 Round Limit", notes: "Magazines over 17 rounds are banned.", friendly: "yellow" },
    link: "https://www.delaware.gov"
  },
  Florida: {
    ccw: { status: "Permitless", notes: "Permitless carry passed in 2023. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Illegal", notes: "Open carry is banned except in limited circumstances.", friendly: "red" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.fdacs.gov/Licensing/Concealed-Weapon-License"
  },
  Georgia: {
    ccw: { status: "Permitless", notes: "No permit required. Optional Weapons Carry License available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal with License", notes: "Open carry allowed with Weapons Carry License.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://dps.georgia.gov"
  },
  Hawaii: {
    ccw: { status: "Permit Required", notes: "Extremely restrictive, very few permits issued.", friendly: "red" },
    openCarry: { status: "Illegal", notes: "Open carry is effectively banned.", friendly: "red" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in Hawaii.", friendly: "red" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://www.hawaiipolice.com"
  },
  Idaho: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.isp.idaho.gov"
  },
  Illinois: {
    ccw: { status: "Permit Required", notes: "Shall-issue Firearm Owner ID and CCL required.", friendly: "yellow" },
    openCarry: { status: "Illegal", notes: "Open carry is banned in Illinois.", friendly: "red" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in Illinois.", friendly: "red" },
    magazineLimit: { status: "No Limit Statewide", notes: "No statewide limit but some municipalities restrict.", friendly: "yellow" },
    link: "https://www.ispfsb.com"
  },
  Indiana: {
    ccw: { status: "Permitless", notes: "No permit required as of 2022.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.in.gov/isp"
  },
  Iowa: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.dps.state.ia.us"
  },
  Kansas: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.ag.ks.gov"
  },
  Kentucky: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://kentucky.gov"
  },
  Louisiana: {
    ccw: { status: "Permitless", notes: "No permit required as of 2024. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.dps.louisiana.gov"
  },
  Maine: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.maine.gov/dps/msp"
  },
  Maryland: {
    ccw: { status: "Permit Required", notes: "Shall-issue after Bruen but heavily restricted.", friendly: "red" },
    openCarry: { status: "Illegal", notes: "Open carry is effectively banned.", friendly: "red" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in Maryland.", friendly: "red" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://mdsp.maryland.gov/firearms"
  },
  Massachusetts: {
    ccw: { status: "Permit Required", notes: "LTC required, may-issue in practice.", friendly: "red" },
    openCarry: { status: "Legal with LTC", notes: "Open carry allowed with License to Carry.", friendly: "yellow" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in Massachusetts.", friendly: "red" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://www.mass.gov/firearms"
  },
  Michigan: {
    ccw: { status: "Permit Required", notes: "CPL required for concealed carry.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.michigan.gov/msp/firearms"
  },
  Minnesota: {
    ccw: { status: "Permit Required", notes: "Shall-issue permit required.", friendly: "yellow" },
    openCarry: { status: "Legal with Permit", notes: "Open carry allowed with valid permit.", friendly: "yellow" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://dps.mn.gov/firearms"
  },
  Mississippi: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.dps.ms.gov"
  },
  Missouri: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://ago.mo.gov"
  },
  Montana: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://dojmt.gov"
  },
  Nebraska: {
    ccw: { status: "Permitless", notes: "No permit required as of 2023. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://nsp.nebraska.gov"
  },
  Nevada: {
    ccw: { status: "Permit Required", notes: "Shall-issue permit required.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.ag.nv.gov"
  },
  "New Hampshire": {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.nh.gov/safety/divisions/nhsp"
  },
  "New Jersey": {
    ccw: { status: "Permit Required", notes: "Shall-issue after Bruen but heavily restricted with sensitive places laws.", friendly: "red" },
    openCarry: { status: "Illegal", notes: "Open carry is effectively banned.", friendly: "red" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in New Jersey.", friendly: "red" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://www.njsp.org/firearms"
  },
  "New Mexico": {
    ccw: { status: "Permit Required", notes: "Shall-issue permit required.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.dps.nm.gov"
  },
  "New York": {
    ccw: { status: "Permit Required", notes: "Extremely restrictive. NYSRPA v Bruen struck down prior law but NY replaced with CCIA.", friendly: "red" },
    openCarry: { status: "Illegal", notes: "Open carry is banned in New York.", friendly: "red" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in New York.", friendly: "red" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://www.nysp.troopers.ny.gov/firearms"
  },
  "North Carolina": {
    ccw: { status: "Permit Required", notes: "Shall-issue permit required for concealed carry.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.ncdoj.gov/getting-a-handgun/concealed-carry"
  },
  "North Dakota": {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.ag.nd.gov"
  },
  Ohio: {
    ccw: { status: "Permitless", notes: "No permit required as of 2022. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.ohioattorneygeneral.gov/firearms"
  },
  Oklahoma: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.ok.gov/osbi/Handgun_Licensing"
  },
  Oregon: {
    ccw: { status: "Permit Required", notes: "Shall-issue permit required. Measure 114 passed but legally challenged.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal but some cities restrict it.", friendly: "yellow" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds banned under Measure 114.", friendly: "red" },
    link: "https://www.oregon.gov/osp/firearms"
  },
  Pennsylvania: {
    ccw: { status: "Permit Required", notes: "Shall-issue License to Carry Firearms required.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit except in Philadelphia.", friendly: "yellow" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.psp.pa.gov/firearms"
  },
  "Rhode Island": {
    ccw: { status: "Permit Required", notes: "May-issue, very restrictive in practice.", friendly: "red" },
    openCarry: { status: "Legal", notes: "Open carry is technically legal.", friendly: "yellow" },
    suppressors: { status: "Illegal", notes: "Suppressors are banned in Rhode Island.", friendly: "red" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://riag.ri.gov"
  },
  "South Carolina": {
    ccw: { status: "Permitless", notes: "Permitless carry passed in 2023. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal with or without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.sled.sc.gov/CWP.aspx"
  },
  "South Dakota": {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://dci.sd.gov"
  },
  Tennessee: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.tn.gov/safety/driver-services/handgun-carry-permit.html"
  },
  Texas: {
    ccw: { status: "Permitless", notes: "No permit required as of 2021. Optional LTC available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.dps.texas.gov/section/handgun-licensing"
  },
  Utah: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://bci.utah.gov/concealed-firearm"
  },
  Vermont: {
    ccw: { status: "Permitless", notes: "No permit required — Vermont has never required one.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds are banned.", friendly: "red" },
    link: "https://ago.vermont.gov"
  },
  Virginia: {
    ccw: { status: "Permit Required", notes: "Shall-issue permit required for concealed carry.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.vsp.virginia.gov/firearms"
  },
  Washington: {
    ccw: { status: "Permit Required", notes: "Shall-issue CPL required.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "10 Round Limit", notes: "Magazines over 10 rounds banned as of 2022.", friendly: "red" },
    link: "https://www.dol.wa.gov/business/firearms"
  },
  "West Virginia": {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.wvsp.gov"
  },
  Wisconsin: {
    ccw: { status: "Permit Required", notes: "Shall-issue CCW permit required.", friendly: "yellow" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://www.doj.state.wi.us/firearms"
  },
  Wyoming: {
    ccw: { status: "Permitless", notes: "No permit required. Optional permit available for reciprocity.", friendly: "green" },
    openCarry: { status: "Legal", notes: "Open carry is legal without a permit.", friendly: "green" },
    suppressors: { status: "Legal", notes: "Suppressors are legal with proper NFA registration.", friendly: "green" },
    magazineLimit: { status: "No Limit", notes: "No magazine capacity restrictions.", friendly: "green" },
    link: "https://wyomingdci.wyo.gov"
  }
};

export default gunLawsData;