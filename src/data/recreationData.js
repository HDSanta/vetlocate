const recreationData = {
  Alabama: {
    statePark: { benefit: "Free day-use access for 100% P&T veterans. Discounted camping rates for all disabled veterans.", eligibility: "100% P&T: Free day use. Any rating: Discounted fees.", friendly: "green", link: "https://www.alapark.com" },
    fishing: { benefit: "Free freshwater and saltwater fishing license for 100% service-connected disabled veterans.", eligibility: "100% service-connected disability", friendly: "green", link: "https://www.outdooralabama.com" },
    hunting: { benefit: "Free hunting license for 100% service-connected disabled veterans.", eligibility: "100% service-connected disability", friendly: "green", link: "https://www.outdooralabama.com" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced license fees.",
    lastVerified: "2024-2025"
  },
  Alaska: {
    statePark: { benefit: "Free day-use parking at state parks for disabled veterans with valid placard.", eligibility: "Any VA disability rating with disabled placard", friendly: "green", link: "https://dnr.alaska.gov/parks" },
    fishing: { benefit: "Residents with 50%+ disability rating may qualify for discounted sport fishing license.", eligibility: "50%+ service-connected disability, Alaska resident", friendly: "yellow", link: "https://www.adfg.alaska.gov" },
    hunting: { benefit: "Residents with 50%+ disability rating may qualify for discounted hunting license.", eligibility: "50%+ service-connected disability, Alaska resident", friendly: "yellow", link: "https://www.adfg.alaska.gov" },
    notes: "Active duty stationed in Alaska qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Arizona: {
    statePark: { benefit: "Free day-use entry to all Arizona state parks for 100% P&T veterans.", eligibility: "100% P&T disabled veteran", friendly: "green", link: "https://azstateparks.com" },
    fishing: { benefit: "Free combination hunting and fishing license for 100% service-connected disabled Arizona residents.", eligibility: "100% service-connected disability, Arizona resident", friendly: "green", link: "https://www.azgfd.com" },
    hunting: { benefit: "Free combination hunting and fishing license for 100% service-connected disabled Arizona residents.", eligibility: "100% service-connected disability, Arizona resident", friendly: "green", link: "https://www.azgfd.com" },
    notes: "Active duty, Guard, and Reserves stationed in Arizona qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Arkansas: {
    statePark: { benefit: "Free day-use access to Arkansas state parks for disabled veterans.", eligibility: "Any VA disability rating", friendly: "green", link: "https://www.arkansasstateparks.com" },
    fishing: { benefit: "Free fishing license for Arkansas residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Arkansas resident", friendly: "green", link: "https://www.agfc.com" },
    hunting: { benefit: "Free hunting license for Arkansas residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Arkansas resident", friendly: "green", link: "https://www.agfc.com" },
    notes: "Active duty members qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  California: {
    statePark: { benefit: "Disabled veteran discount of 50% on camping fees. Free day use with disabled placard.", eligibility: "Any VA disability rating with disabled placard", friendly: "yellow", link: "https://www.parks.ca.gov" },
    fishing: { benefit: "Free sport fishing license for 100% disabled veterans who are California residents.", eligibility: "100% service-connected disability, California resident", friendly: "green", link: "https://wildlife.ca.gov" },
    hunting: { benefit: "Free hunting license for 100% disabled veterans who are California residents.", eligibility: "100% service-connected disability, California resident", friendly: "green", link: "https://wildlife.ca.gov" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced license fees.",
    lastVerified: "2024-2025"
  },
  Colorado: {
    statePark: { benefit: "Free annual state parks pass for Colorado residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Colorado resident", friendly: "green", link: "https://cpw.state.co.us" },
    fishing: { benefit: "Free fishing license for Colorado residents with 60%+ service-connected disability.", eligibility: "60%+ service-connected disability, Colorado resident", friendly: "green", link: "https://cpw.state.co.us" },
    hunting: { benefit: "Free hunting license for Colorado residents with 60%+ service-connected disability.", eligibility: "60%+ service-connected disability, Colorado resident", friendly: "green", link: "https://cpw.state.co.us" },
    notes: "Active duty, Guard, and Reserves stationed in Colorado qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Connecticut: {
    statePark: { benefit: "Free admission to Connecticut state parks for veterans with disability rating.", eligibility: "Any VA disability rating", friendly: "green", link: "https://portal.ct.gov/DEEP/State-Parks" },
    fishing: { benefit: "Free fishing license for Connecticut residents who are 100% disabled veterans.", eligibility: "100% service-connected disability, Connecticut resident", friendly: "green", link: "https://portal.ct.gov/DEEP/Fishing" },
    hunting: { benefit: "Free hunting license for Connecticut residents who are 100% disabled veterans.", eligibility: "100% service-connected disability, Connecticut resident", friendly: "green", link: "https://portal.ct.gov/DEEP/Hunting" },
    notes: "Active duty members stationed in Connecticut qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Delaware: {
    statePark: { benefit: "Free day-use access to Delaware state parks for disabled veterans.", eligibility: "Any VA disability rating", friendly: "green", link: "https://www.destateparks.com" },
    fishing: { benefit: "Free fishing license for Delaware residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Delaware resident", friendly: "green", link: "https://www.dnrec.delaware.gov" },
    hunting: { benefit: "Free hunting license for Delaware residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Delaware resident", friendly: "green", link: "https://www.dnrec.delaware.gov" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Florida: {
    statePark: { benefit: "Free annual entrance pass to Florida state parks for Florida residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Florida resident", friendly: "green", link: "https://www.floridastateparks.org" },
    fishing: { benefit: "Free freshwater and saltwater fishing license for Florida residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Florida resident", friendly: "green", link: "https://myfwc.com" },
    hunting: { benefit: "Free hunting license for Florida residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Florida resident", friendly: "green", link: "https://myfwc.com" },
    notes: "Active duty, Guard, and Reserves stationed in Florida qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Georgia: {
    statePark: { benefit: "Free annual ParkPass for Georgia residents who are 100% disabled veterans.", eligibility: "100% service-connected disability, Georgia resident", friendly: "green", link: "https://gastateparks.org" },
    fishing: { benefit: "Free fishing license for Georgia residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Georgia resident", friendly: "green", link: "https://georgiawildlife.com" },
    hunting: { benefit: "Free hunting license for Georgia residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Georgia resident", friendly: "green", link: "https://georgiawildlife.com" },
    notes: "Active duty members qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Hawaii: {
    statePark: { benefit: "Discounted fees at Hawaii state parks for disabled veterans.", eligibility: "Any VA disability rating", friendly: "yellow", link: "https://dlnr.hawaii.gov/dsp" },
    fishing: { benefit: "Reduced freshwater fishing license fees for disabled veterans.", eligibility: "Any VA disability rating, Hawaii resident", friendly: "yellow", link: "https://dlnr.hawaii.gov/dar" },
    hunting: { benefit: "Reduced hunting license fees for disabled veterans.", eligibility: "Any VA disability rating, Hawaii resident", friendly: "yellow", link: "https://dlnr.hawaii.gov/dofaw" },
    notes: "Active duty stationed in Hawaii qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Idaho: {
    statePark: { benefit: "Free day-use access and discounted camping for Idaho residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Idaho resident", friendly: "green", link: "https://parksandrecreation.idaho.gov" },
    fishing: { benefit: "Free fishing license for Idaho residents with 40%+ service-connected disability.", eligibility: "40%+ service-connected disability, Idaho resident", friendly: "green", link: "https://idfg.idaho.gov" },
    hunting: { benefit: "Free hunting license for Idaho residents with 40%+ service-connected disability.", eligibility: "40%+ service-connected disability, Idaho resident", friendly: "green", link: "https://idfg.idaho.gov" },
    notes: "Active duty, Guard, and Reserves stationed in Idaho qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Illinois: {
    statePark: { benefit: "Free access to Illinois state parks and recreation areas for all Illinois veterans.", eligibility: "Any veteran with honorable discharge, Illinois resident", friendly: "green", link: "https://www2.illinois.gov/dnr/Parks" },
    fishing: { benefit: "Free fishing license for Illinois residents who are 100% disabled veterans.", eligibility: "100% service-connected disability, Illinois resident", friendly: "green", link: "https://www2.illinois.gov/dnr/fishing" },
    hunting: { benefit: "Free hunting license for Illinois residents who are 100% disabled veterans.", eligibility: "100% service-connected disability, Illinois resident", friendly: "green", link: "https://www2.illinois.gov/dnr/hunting" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Indiana: {
    statePark: { benefit: "Free annual Indiana state park entrance for residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Indiana resident", friendly: "green", link: "https://www.in.gov/dnr/state-parks" },
    fishing: { benefit: "Free fishing license for Indiana residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Indiana resident", friendly: "green", link: "https://www.in.gov/dnr/fish-and-wildlife" },
    hunting: { benefit: "Free hunting license for Indiana residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Indiana resident", friendly: "green", link: "https://www.in.gov/dnr/fish-and-wildlife" },
    notes: "Active duty members qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Iowa: {
    statePark: { benefit: "Free camping and day-use access to Iowa state parks for 100% disabled veterans.", eligibility: "100% service-connected disability, Iowa resident", friendly: "green", link: "https://www.iowadnr.gov/Places-to-Go/State-Parks" },
    fishing: { benefit: "Free fishing license for Iowa residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Iowa resident", friendly: "green", link: "https://www.iowadnr.gov/Fishing" },
    hunting: { benefit: "Free hunting license for Iowa residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Iowa resident", friendly: "green", link: "https://www.iowadnr.gov/Hunting" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Kansas: {
    statePark: { benefit: "Free annual state park vehicle permit for Kansas residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Kansas resident", friendly: "green", link: "https://ksoutdoors.com/State-Parks" },
    fishing: { benefit: "Free fishing license for Kansas residents with 30%+ service-connected disability.", eligibility: "30%+ service-connected disability, Kansas resident", friendly: "green", link: "https://ksoutdoors.com/Fishing" },
    hunting: { benefit: "Free hunting license for Kansas residents with 30%+ service-connected disability.", eligibility: "30%+ service-connected disability, Kansas resident", friendly: "green", link: "https://ksoutdoors.com/Hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Kansas qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Kentucky: {
    statePark: { benefit: "Free camping and lodging discounts at Kentucky state parks for disabled veterans.", eligibility: "Any VA disability rating", friendly: "green", link: "https://parks.ky.gov" },
    fishing: { benefit: "Free fishing license for Kentucky residents with 50%+ service-connected disability.", eligibility: "50%+ service-connected disability, Kentucky resident", friendly: "green", link: "https://fw.ky.gov" },
    hunting: { benefit: "Free hunting license for Kentucky residents with 50%+ service-connected disability.", eligibility: "50%+ service-connected disability, Kentucky resident", friendly: "green", link: "https://fw.ky.gov" },
    notes: "Active duty members qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Louisiana: {
    statePark: { benefit: "Free day-use access and discounted camping at Louisiana state parks for disabled veterans.", eligibility: "Any VA disability rating, Louisiana resident", friendly: "green", link: "https://www.lastateparks.com" },
    fishing: { benefit: "Free fishing license for Louisiana residents with 50%+ service-connected disability.", eligibility: "50%+ service-connected disability, Louisiana resident", friendly: "green", link: "https://www.wlf.louisiana.gov" },
    hunting: { benefit: "Free hunting license for Louisiana residents with 50%+ service-connected disability.", eligibility: "50%+ service-connected disability, Louisiana resident", friendly: "green", link: "https://www.wlf.louisiana.gov" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Maine: {
    statePark: { benefit: "Free day-use access to Maine state parks for veterans with disability rating.", eligibility: "Any VA disability rating, Maine resident", friendly: "green", link: "https://www.maine.gov/dacf/parks" },
    fishing: { benefit: "Free fishing license for Maine residents who are 100% disabled veterans.", eligibility: "100% service-connected disability, Maine resident", friendly: "green", link: "https://www.maine.gov/ifw/fishing" },
    hunting: { benefit: "Free hunting license for Maine residents who are 100% disabled veterans.", eligibility: "100% service-connected disability, Maine resident", friendly: "green", link: "https://www.maine.gov/ifw/hunting" },
    notes: "Active duty stationed in Maine qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Maryland: {
    statePark: { benefit: "Free day-use access to Maryland state parks for disabled veterans with ID.", eligibility: "Any VA disability rating", friendly: "green", link: "https://dnr.maryland.gov/publiclands" },
    fishing: { benefit: "Free fishing license for Maryland residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Maryland resident", friendly: "green", link: "https://dnr.maryland.gov/fisheries" },
    hunting: { benefit: "Free hunting license for Maryland residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Maryland resident", friendly: "green", link: "https://dnr.maryland.gov/wildlife" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Massachusetts: {
    statePark: { benefit: "Free access to Massachusetts state parks for veterans with disability rating.", eligibility: "Any VA disability rating, Massachusetts resident", friendly: "green", link: "https://www.mass.gov/orgs/department-of-conservation-and-recreation" },
    fishing: { benefit: "Free fishing license for Massachusetts residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Massachusetts resident", friendly: "green", link: "https://www.mass.gov/fishing" },
    hunting: { benefit: "Free hunting license for Massachusetts residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Massachusetts resident", friendly: "green", link: "https://www.mass.gov/hunting" },
    notes: "Active duty members qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Michigan: {
    statePark: { benefit: "Free Recreation Passport for Michigan residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Michigan resident", friendly: "green", link: "https://www.michigan.gov/dnr/places/state-parks" },
    fishing: { benefit: "Free fishing license for Michigan residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Michigan resident", friendly: "green", link: "https://www.michigan.gov/dnr/things-to-do/fishing" },
    hunting: { benefit: "Free hunting license for Michigan residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Michigan resident", friendly: "green", link: "https://www.michigan.gov/dnr/things-to-do/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Michigan qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Minnesota: {
    statePark: { benefit: "Free state park vehicle permit for Minnesota residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Minnesota resident", friendly: "green", link: "https://www.dnr.state.mn.us/state_parks" },
    fishing: { benefit: "Free fishing license for Minnesota residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Minnesota resident", friendly: "green", link: "https://www.dnr.state.mn.us/fishing" },
    hunting: { benefit: "Free hunting license for Minnesota residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Minnesota resident", friendly: "green", link: "https://www.dnr.state.mn.us/hunting" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Mississippi: {
    statePark: { benefit: "Free day-use access to Mississippi state parks for disabled veterans.", eligibility: "Any VA disability rating, Mississippi resident", friendly: "green", link: "https://www.mdwfp.com/parks-destinations" },
    fishing: { benefit: "Free fishing license for Mississippi residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Mississippi resident", friendly: "green", link: "https://www.mdwfp.com/fishing" },
    hunting: { benefit: "Free hunting license for Mississippi residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Mississippi resident", friendly: "green", link: "https://www.mdwfp.com/hunting" },
    notes: "Active duty members qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Missouri: {
    statePark: { benefit: "Free access to Missouri state parks for all visitors — no fee required for anyone.", eligibility: "All visitors including veterans", friendly: "green", link: "https://mostateparks.com" },
    fishing: { benefit: "Free fishing license for Missouri residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Missouri resident", friendly: "green", link: "https://mdc.mo.gov/fishing" },
    hunting: { benefit: "Free hunting license for Missouri residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Missouri resident", friendly: "green", link: "https://mdc.mo.gov/hunting" },
    notes: "Missouri state parks are free for everyone — a great benefit for all veterans.",
    lastVerified: "2024-2025"
  },
  Montana: {
    statePark: { benefit: "Free day-use access to Montana state parks for disabled veterans.", eligibility: "Any VA disability rating, Montana resident", friendly: "green", link: "https://stateparks.mt.gov" },
    fishing: { benefit: "Free fishing license for Montana residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Montana resident", friendly: "green", link: "https://fwp.mt.gov/fishing" },
    hunting: { benefit: "Free hunting license for Montana residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Montana resident", friendly: "green", link: "https://fwp.mt.gov/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Montana qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Nebraska: {
    statePark: { benefit: "Free annual state park permit for Nebraska residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Nebraska resident", friendly: "green", link: "https://outdoornebraska.gov/parks" },
    fishing: { benefit: "Free fishing permit for Nebraska residents with 50%+ service-connected disability.", eligibility: "50%+ service-connected disability, Nebraska resident", friendly: "green", link: "https://outdoornebraska.gov/fishing" },
    hunting: { benefit: "Free hunting permit for Nebraska residents with 50%+ service-connected disability.", eligibility: "50%+ service-connected disability, Nebraska resident", friendly: "green", link: "https://outdoornebraska.gov/hunting" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Nevada: {
    statePark: { benefit: "Free day-use access to Nevada state parks for disabled veterans.", eligibility: "Any VA disability rating, Nevada resident", friendly: "green", link: "https://parks.nv.gov" },
    fishing: { benefit: "Free fishing license for Nevada residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Nevada resident", friendly: "green", link: "https://www.ndow.org/fishing" },
    hunting: { benefit: "Free hunting license for Nevada residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Nevada resident", friendly: "green", link: "https://www.ndow.org/hunting" },
    notes: "Active duty stationed in Nevada qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  "New Hampshire": {
    statePark: { benefit: "Free day-use access to New Hampshire state parks for disabled veterans.", eligibility: "Any VA disability rating, New Hampshire resident", friendly: "green", link: "https://www.nhstateparks.org" },
    fishing: { benefit: "Free fishing license for New Hampshire residents with 100% service-connected disability.", eligibility: "100% service-connected disability, New Hampshire resident", friendly: "green", link: "https://www.wildlife.nh.gov/fishing" },
    hunting: { benefit: "Free hunting license for New Hampshire residents with 100% service-connected disability.", eligibility: "100% service-connected disability, New Hampshire resident", friendly: "green", link: "https://www.wildlife.nh.gov/hunting" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  "New Jersey": {
    statePark: { benefit: "Free annual pass to New Jersey state parks for disabled veterans.", eligibility: "Any VA disability rating, New Jersey resident", friendly: "green", link: "https://www.nj.gov/dep/parksandforests" },
    fishing: { benefit: "Free fishing license for New Jersey residents with 100% service-connected disability.", eligibility: "100% service-connected disability, New Jersey resident", friendly: "green", link: "https://www.nj.gov/dep/fgw/fishing.htm" },
    hunting: { benefit: "Free hunting license for New Jersey residents with 100% service-connected disability.", eligibility: "100% service-connected disability, New Jersey resident", friendly: "green", link: "https://www.nj.gov/dep/fgw/hunting.htm" },
    notes: "Active duty members stationed in New Jersey qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  "New Mexico": {
    statePark: { benefit: "Free annual day-use pass to New Mexico state parks for 100% disabled veterans.", eligibility: "100% service-connected disability, New Mexico resident", friendly: "green", link: "https://www.emnrd.nm.gov/SPD" },
    fishing: { benefit: "Free fishing license for New Mexico residents with 100% service-connected disability.", eligibility: "100% service-connected disability, New Mexico resident", friendly: "green", link: "https://www.wildlife.state.nm.us/fishing" },
    hunting: { benefit: "Free hunting license for New Mexico residents with 100% service-connected disability.", eligibility: "100% service-connected disability, New Mexico resident", friendly: "green", link: "https://www.wildlife.state.nm.us/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in New Mexico qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  "New York": {
    statePark: { benefit: "Free access to New York state parks for veterans with disability rating.", eligibility: "Any VA disability rating, New York resident", friendly: "green", link: "https://parks.ny.gov" },
    fishing: { benefit: "Free fishing license for New York residents with 40%+ service-connected disability.", eligibility: "40%+ service-connected disability, New York resident", friendly: "green", link: "https://www.dec.ny.gov/outdoor/7749.html" },
    hunting: { benefit: "Free hunting license for New York residents with 40%+ service-connected disability.", eligibility: "40%+ service-connected disability, New York resident", friendly: "green", link: "https://www.dec.ny.gov/outdoor/7749.html" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  "North Carolina": {
    statePark: { benefit: "Free access to North Carolina state parks for 100% disabled veterans.", eligibility: "100% service-connected disability, North Carolina resident", friendly: "green", link: "https://www.ncparks.gov" },
    fishing: { benefit: "Free fishing license for North Carolina residents with 100% service-connected disability.", eligibility: "100% service-connected disability, North Carolina resident", friendly: "green", link: "https://www.ncwildlife.org/fishing" },
    hunting: { benefit: "Free hunting license for North Carolina residents with 100% service-connected disability.", eligibility: "100% service-connected disability, North Carolina resident", friendly: "green", link: "https://www.ncwildlife.org/hunting" },
    notes: "Active duty members stationed in NC qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  "North Dakota": {
    statePark: { benefit: "Free annual state park entry for North Dakota residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, North Dakota resident", friendly: "green", link: "https://www.parkrec.nd.gov" },
    fishing: { benefit: "Free fishing license for North Dakota residents with 100% service-connected disability.", eligibility: "100% service-connected disability, North Dakota resident", friendly: "green", link: "https://gf.nd.gov/fishing" },
    hunting: { benefit: "Free hunting license for North Dakota residents with 100% service-connected disability.", eligibility: "100% service-connected disability, North Dakota resident", friendly: "green", link: "https://gf.nd.gov/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in North Dakota qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Ohio: {
    statePark: { benefit: "Free access to Ohio state parks for all visitors — no entry fee required.", eligibility: "All visitors including veterans", friendly: "green", link: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/state-parks" },
    fishing: { benefit: "Free fishing license for Ohio residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Ohio resident", friendly: "green", link: "https://ohiodnr.gov/go-and-do/plan-a-visit/fishing" },
    hunting: { benefit: "Free hunting license for Ohio residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Ohio resident", friendly: "green", link: "https://ohiodnr.gov/go-and-do/plan-a-visit/hunting" },
    notes: "Ohio state parks are free for everyone.",
    lastVerified: "2024-2025"
  },
  Oklahoma: {
    statePark: { benefit: "Free access to Oklahoma state parks for disabled veterans.", eligibility: "Any VA disability rating, Oklahoma resident", friendly: "green", link: "https://www.travelok.com/state-parks" },
    fishing: { benefit: "Free fishing license for Oklahoma residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Oklahoma resident", friendly: "green", link: "https://www.wildlifedepartment.com/fishing" },
    hunting: { benefit: "Free hunting license for Oklahoma residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Oklahoma resident", friendly: "green", link: "https://www.wildlifedepartment.com/hunting" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Oregon: {
    statePark: { benefit: "Free day-use access to Oregon state parks for disabled veterans with placard.", eligibility: "Any VA disability rating with disabled placard", friendly: "green", link: "https://stateparks.oregon.gov" },
    fishing: { benefit: "Free fishing license for Oregon residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Oregon resident", friendly: "green", link: "https://myodfw.com/fishing" },
    hunting: { benefit: "Free hunting license for Oregon residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Oregon resident", friendly: "green", link: "https://myodfw.com/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Oregon qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Pennsylvania: {
    statePark: { benefit: "Free access to Pennsylvania state parks for all visitors — no entry fee.", eligibility: "All visitors including veterans", friendly: "green", link: "https://www.dcnr.pa.gov/StateParks" },
    fishing: { benefit: "Free fishing license for Pennsylvania residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Pennsylvania resident", friendly: "green", link: "https://www.fishandboat.com/fishing" },
    hunting: { benefit: "Free hunting license for Pennsylvania residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Pennsylvania resident", friendly: "green", link: "https://www.pgc.pa.gov/hunting" },
    notes: "Pennsylvania state parks are free for everyone.",
    lastVerified: "2024-2025"
  },
  "Rhode Island": {
    statePark: { benefit: "Free access to Rhode Island state parks for disabled veterans.", eligibility: "Any VA disability rating, Rhode Island resident", friendly: "green", link: "https://riparks.com" },
    fishing: { benefit: "Free fishing license for Rhode Island residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Rhode Island resident", friendly: "green", link: "https://dem.ri.gov/fishing" },
    hunting: { benefit: "Free hunting license for Rhode Island residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Rhode Island resident", friendly: "green", link: "https://dem.ri.gov/hunting" },
    notes: "Active duty members qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  "South Carolina": {
    statePark: { benefit: "Free annual pass to South Carolina state parks for 100% disabled veterans.", eligibility: "100% service-connected disability, South Carolina resident", friendly: "green", link: "https://southcarolinaparks.com" },
    fishing: { benefit: "Free fishing license for South Carolina residents with 100% service-connected disability.", eligibility: "100% service-connected disability, South Carolina resident", friendly: "green", link: "https://www.dnr.sc.gov/fishing.html" },
    hunting: { benefit: "Free hunting license for South Carolina residents with 100% service-connected disability.", eligibility: "100% service-connected disability, South Carolina resident", friendly: "green", link: "https://www.dnr.sc.gov/hunting.html" },
    notes: "Active duty, Guard, and Reserves stationed in SC qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  "South Dakota": {
    statePark: { benefit: "Free annual state park pass for South Dakota residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, South Dakota resident", friendly: "green", link: "https://gfp.sd.gov/state-parks" },
    fishing: { benefit: "Free fishing license for South Dakota residents with 100% service-connected disability.", eligibility: "100% service-connected disability, South Dakota resident", friendly: "green", link: "https://gfp.sd.gov/fishing" },
    hunting: { benefit: "Free hunting license for South Dakota residents with 100% service-connected disability.", eligibility: "100% service-connected disability, South Dakota resident", friendly: "green", link: "https://gfp.sd.gov/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in South Dakota qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Tennessee: {
    statePark: { benefit: "Free day-use access to Tennessee state parks for all visitors.", eligibility: "All visitors including veterans", friendly: "green", link: "https://tnstateparks.com" },
    fishing: { benefit: "Free fishing license for Tennessee residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Tennessee resident", friendly: "green", link: "https://www.tn.gov/twra/fishing.html" },
    hunting: { benefit: "Free hunting license for Tennessee residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Tennessee resident", friendly: "green", link: "https://www.tn.gov/twra/hunting.html" },
    notes: "Tennessee state parks are free for everyone.",
    lastVerified: "2024-2025"
  },
  Texas: {
    statePark: { benefit: "Free Texas State Parks Pass for Texas residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Texas resident", friendly: "green", link: "https://tpwd.texas.gov/state-parks" },
    fishing: { benefit: "Free fishing license for Texas residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Texas resident", friendly: "green", link: "https://tpwd.texas.gov/fishing" },
    hunting: { benefit: "Free hunting license for Texas residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Texas resident", friendly: "green", link: "https://tpwd.texas.gov/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Texas qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Utah: {
    statePark: { benefit: "Free annual state park pass for Utah residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Utah resident", friendly: "green", link: "https://stateparks.utah.gov" },
    fishing: { benefit: "Free fishing license for Utah residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Utah resident", friendly: "green", link: "https://wildlife.utah.gov/fishing" },
    hunting: { benefit: "Free hunting license for Utah residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Utah resident", friendly: "green", link: "https://wildlife.utah.gov/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Utah qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Vermont: {
    statePark: { benefit: "Free access to Vermont state parks for disabled veterans.", eligibility: "Any VA disability rating, Vermont resident", friendly: "green", link: "https://vtstateparks.com" },
    fishing: { benefit: "Free fishing license for Vermont residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Vermont resident", friendly: "green", link: "https://vtfishandwildlife.com/fishing" },
    hunting: { benefit: "Free hunting license for Vermont residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Vermont resident", friendly: "green", link: "https://vtfishandwildlife.com/hunting" },
    notes: "Active duty members qualify for resident license rates.",
    lastVerified: "2024-2025"
  },
  Virginia: {
    statePark: { benefit: "Free day-use access to Virginia state parks for 100% disabled veterans.", eligibility: "100% service-connected disability, Virginia resident", friendly: "green", link: "https://www.dcr.virginia.gov/state-parks" },
    fishing: { benefit: "Free fishing license for Virginia residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Virginia resident", friendly: "green", link: "https://dwr.virginia.gov/fishing" },
    hunting: { benefit: "Free hunting license for Virginia residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Virginia resident", friendly: "green", link: "https://dwr.virginia.gov/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Virginia qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Washington: {
    statePark: { benefit: "Free annual Discover Pass for Washington residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Washington resident", friendly: "green", link: "https://parks.wa.gov" },
    fishing: { benefit: "Free fishing license for Washington residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Washington resident", friendly: "green", link: "https://wdfw.wa.gov/fishing" },
    hunting: { benefit: "Free hunting license for Washington residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Washington resident", friendly: "green", link: "https://wdfw.wa.gov/hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Washington qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  "West Virginia": {
    statePark: { benefit: "Free access to West Virginia state parks for disabled veterans.", eligibility: "Any VA disability rating, West Virginia resident", friendly: "green", link: "https://wvstateparks.com" },
    fishing: { benefit: "Free fishing license for West Virginia residents with 100% service-connected disability.", eligibility: "100% service-connected disability, West Virginia resident", friendly: "green", link: "https://wvdnr.gov/fishing" },
    hunting: { benefit: "Free hunting license for West Virginia residents with 100% service-connected disability.", eligibility: "100% service-connected disability, West Virginia resident", friendly: "green", link: "https://wvdnr.gov/hunting" },
    notes: "Active duty, Guard, and Reserves may qualify for reduced fees.",
    lastVerified: "2024-2025"
  },
  Wisconsin: {
    statePark: { benefit: "Free annual state park vehicle sticker for Wisconsin residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Wisconsin resident", friendly: "green", link: "https://dnr.wisconsin.gov/topic/StateParks" },
    fishing: { benefit: "Free fishing license for Wisconsin residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Wisconsin resident", friendly: "green", link: "https://dnr.wisconsin.gov/topic/Fishing" },
    hunting: { benefit: "Free hunting license for Wisconsin residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Wisconsin resident", friendly: "green", link: "https://dnr.wisconsin.gov/topic/Hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Wisconsin qualify for resident rates.",
    lastVerified: "2024-2025"
  },
  Wyoming: {
    statePark: { benefit: "Free annual state park pass for Wyoming residents with 100% P&T disability.", eligibility: "100% P&T disabled veteran, Wyoming resident", friendly: "green", link: "https://wyoparks.wyo.gov" },
    fishing: { benefit: "Free fishing license for Wyoming residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Wyoming resident", friendly: "green", link: "https://wgfd.wyo.gov/Fishing" },
    hunting: { benefit: "Free hunting license for Wyoming residents with 100% service-connected disability.", eligibility: "100% service-connected disability, Wyoming resident", friendly: "green", link: "https://wgfd.wyo.gov/Hunting" },
    notes: "Active duty, Guard, and Reserves stationed in Wyoming qualify for resident rates.",
    lastVerified: "2024-2025"
  }
};

export default recreationData;