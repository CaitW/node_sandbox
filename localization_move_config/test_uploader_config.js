var config = {
  dataset_title: { display: "Title", tooltip: "Title of the study." },
  abstract: {
    display: "Description",
    tooltip:
      "Provide description (or abstract) for the dataset. This can include a brief summary of the reason for the study, hypotheses, methods, results, and/or a conclusion, and should provide enough information to help potential users of the data understand if it may be of interest to them."
  },
  permissions_section: {
    display: "Permissions",
    tooltip: "Set permissions for your dataset."
  },
  allow_visualization: {
    display: "Make publicly visible",
    tooltip: "Allow the public to see this dataset."
  },
  mol_modeling: {
    display: "Make available for MOL internal use in models",
    tooltip: "Allow the Map of Life team to use this dataset for modeling."
  },
  allow_download: {
    display: "Publish data",
    tooltip:
      "Data are made available to GBIF and other data partners and available for download, together with citation and license information."
  },
  set_release_date: { display: "Release date", tooltip: "" },
  no_release_date: {
    tooltip:
      "You do not need to set the release date, but if this is selected, an email reminder will be sent every 6 months to set a release date."
  },
  release_date: { display: "Release date", tooltip: "" },
  license: {
    display: "License",
    tooltip: "Choose the appropriate license for the dataset.",
    hint_text:
      '\n            Licenses:\n            <a href="https://creativecommons.org/publicdomain/mark/1.0/" target="_blank">CC0 - Public domain</a>,\n            <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC-BY</a>,\n            <a href="https://creativecommons.org/licenses/by-nc/2.0/" target="_blank">CC-BY-NC</a>\n        '
  },
  license_holder: {
    display: "License Holder",
    tooltip: "The person or organization who holds the license. "
  },
  project_url: {
    display: "Project URL",
    tooltip: "URL of the source, paper, or institution."
  },
  notes: {
    display: "Notes",
    tooltip:
      "Provide any additional notes that you would like to include about this dataset."
  },
  keywords: {
    display: "Keywords",
    tooltip: "List keywords associated with this study."
  },
  citation_formatted: {
    display: "Citation",
    tooltip: "Full citation of the source of the dataset, in APA style.",
    hint_text:
      "<strong>e.g.</strong>, Kitamura, S., Thong-Agree, S., Madsri, S., and Poonswad, P. (2010). Mammal diversity and conservation in a small isolated forest of southern Thailand. The Raffles Bulletin of Zoology, 58(1), 145-156."
  },
  author_display: {
    display: "Short Citation",
    tooltip: "Brief citation for this dataset.",
    hint_text:
      "\n            <strong>Single author:</strong> Jetz (2018) <br>\n            <strong>2 authors:</strong> Jetz & Guralnick (2018) <br>\n            <strong>More than 2 authors:</strong> Jetz et al. (2018)\n        "
  },
  doi: {
    display: "DOI",
    tooltip: "Digital Object Identifier (DOI) for the dataset or source."
  },
  isbn: {
    display: "ISBN",
    tooltip: "International Standard Book Number (ISBN) for a book."
  },
  class: {
    display: "Class",
    tooltip:
      "Scientific name of the taxonomic class surveyed (e.g., Amphibia, Reptilia, Mammalia, Insecta, Aves)."
  },
  specific_taxon_groups: {
    display: "Taxonomic Scope",
    tooltip:
      "Indicate if the entire class or only a subset of that class was studied. If the whole class is included, indicate mammals, reptiles, insects, etc. If only part of a class was inventoried, indicate this (e.g., small mammals, water birds, Rodentia, Nymphalidae). Scientific name or common name accepted."
  },
  quality_control: {
    display: "Quality Control",
    tooltip:
      "Describe the actions taken to control and assess the quality of data."
  },
  inv_date_start: {
    display: "Start Date",
    tooltip: "The date that data collection began for this dataset.",
    hint_text: "YYYY-MM-DD"
  },
  inv_date_end: {
    display: "End Date",
    tooltip: "The date that data collection ended for this dataset.",
    hint_text: "YYYY-MM-DD"
  },
  completeness_section: {
    display: "Completeness",
    tooltip:
      "Assess the representativeness of the species list for the study area and taxonomic scope. For example, were all of the amphibians in the study area recorded, or does the inventory only reflect half of the amphibians present? Completeness can be inferred from survey effort and methods and can be assessed using the length and timing of the study, spatial extent of sampling, inclusion of all habitats present in study area, expertise of individuals conducting the inventory, and/or species accumulation curves."
  },
  inv_completeness_lower: {
    display: "Lower Bound",
    tooltip:
      "Inferred completeness is captured in quartiles (i.e., 0, 25, 50, 75). Indicate the lower bound of completeness percentage for the study. For example, if you believe the inventory represents 25-50% of the species present in the area, indicate a value of 25 for the lower bound."
  },
  inv_completeness_upper: {
    display: "Upper Bound",
    tooltip:
      "Inferred completeness is captured in quartiles (i.e., 25, 50, 75, 100). Indicate the upper bound of completeness percentage for the study. For example, if you believe the inventory represents 25-50% of the species present in the area, indicate a value of 50 for the upper bound."
  },
  inv_completeness_rationale: {
    display: "Rationale used to determine completeness",
    tooltip:
      "Provide an explanation for your completeness score. Examples of high completeness: the surveyors used several different survey methods to inventory the target taxonomic group (i.e., Ungulates); the surveyors made great effort to survey each habitat type in the study area that a species from the target group would be found in; the authors utilized several resources such as museum specimens and primary literature to produce a complete inventory. Examples of low completeness: the study length was not appropriate for the size of the area; inappropriate or insufficient methods were used for the target group; the study area was difficult to traverse/hard to access."
  },
  inv_completeness_optout_reason: {
    display: "Reason for not prividing completeness info",
    tooltip: ""
  },
  inv_survey_days_total: {
    display: "Number of days",
    tooltip: "The total number of days spent surveying."
  },
  inv_survey_night_day: {
    display: "Study Diurnality",
    tooltip: "Time of day sampling was conducted (day, night, both)."
  },
  season: {
    display: "Season",
    tooltip:
      "Season(s) in which the study was conducted (e.g., spring, summer, winter, fall, wet, dry, breeding)."
  },
  inv_geospatial_scope: {
    display: "Spatial extent",
    tooltip:
      "Record the name of the study area (e.g., county, national park, reserve, island, mountain range) or a brief description of where the study was located. Examples include: Yosemite National Park, the Galapagos, Sierra Madre Mountains, sites with exposed limestone/sandstone substrates in western Madagascar, and a 5 km2 portion of deforested land in Los Tres Picachos Forest."
  },
  inv_geospatial_site_details: {
    display: "Site details",
    tooltip:
      "Record any habitat, climate, disturbance, or other details that describe the study site."
  },
  inv_geospatial_area_km2: {
    display: "Area (km2)",
    tooltip: "Study area in square kilometers.",
    hint_text:
      '\n            Author\'s reported total area covered by effort to inventory species in km<sup>2</sup> (always less than or equal to "spatial extent" term above)\n        '
  },
  inv_inventory_compilation_both: {
    display: "Inventory, complilation, or both",
    tooltip:
      "Select the method used to compile the inventory. Selecting 'inventory' indicates that the species data consist of observations made by the surveyors, 'compilation' means that the authors compiled a species list using other sources (e.g., historical evidence, other publications), while 'both' means that both methods were used."
  },
  inv_inventory_type: {
    display: "Type of Inventory",
    tooltip: "",
    hint_text:
      '\n            If \'inventory\' is selected above, select the type of inventory.\n            <br /> <b>Restricted Search</b> - Highly structured survey methods such as transects or plots.\n            <br /> <b>Open Search</b> - Less restrictive than restricted search. A particular search area is defined, but effort is presumed to be standardized across those areas; for example, ""We searched sites for a specific length of time proportional to the area.""\n            <br /> <b>Opportunistic Search</b> - A search such as that often performed in efforts such as eBird where a surveyor goes to an area and makes observations in an area that doesn\'t have a pre-defined shape and size, nor necessarily a clear effort measurement associated with it.\n            <br /> <b>Trap</b> - Stationary traps, camera traps, or nets were used.\n            <br /> <b>Adventitious</b> - Any survey data obtained from sources besides live sightings, such as scat, roadkill, specimens presented by hunters, or animals sold at markets.\n            <br /> <b>Incidental</b> - A casual search that happens with minimal effort such as reports of species observed while eating lunch or otherwise not actively looking. This may also refer to organisms which are outside the scope of the survey but which the authors specifically noted."\n            <br />\n        '
  },
  inv_compilation_type: {
    display: "Type of Compilation",
    tooltip: "",
    hint_text:
      "\n            Type of resources used to compile checklist.\n            <br /> <b> Expert knowledge </b> - park rangers or scientists are more reliable than villagers.\n            <br /> Unless the authors used a method to make sure the villagers knew the species in the area, i.e. vouchers or pictures, then we do not count villagers as expert knowledge.\n            <br /> <b> Primary literature </b> - information obtained from published sources\n            <br /> <b> Museum specimens </b> - museum records that were collected from the study area\n            <br />Other\n        "
  },
  inv_compilation_effort: { display: "Compilation Effort", tooltip: "" },
  inv_survey_protocol1: {
    display: "Survey Methods",
    tooltip:
      "Provide specific details about the survey methods, such as protocols followed, equipment used, number of transects or plots, etc."
  },
  geographic_scope: {
    display: "Geographic Coverage",
    tooltip:
      "Provide a description of the geographic coverage; for example, 'The study surveyed the high elevations of Santa Cruz, Isabela, and Fernandina Islands in the Galapagos, Ecuador.'"
  },
  sampling_description: {
    display: "Sampling Description",
    tooltip:
      "Describe the sampling procedures used in the research project. This should be similar to a description of sampling procedures found in the methods section of a journal article."
  }
};
