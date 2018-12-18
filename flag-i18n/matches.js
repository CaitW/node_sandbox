const config = {
  "../upload/src/app/components/metadata-sections/title-section/title-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 2,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:title:description:tooltip" [tooltip]="metadataService.metadata_descriptions.abstract.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:title:geographic-coverage:tooltip" [tooltip]="metadataService.metadata_descriptions.geographic_scope.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/temporal-coverage-section/temporal-coverage-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 3,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:temporal-coverage:number-of-days:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_survey_days_total.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:temporal-coverage:study-diurnality:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_survey_night_day.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:temporal-coverage:season:tooltip" [tooltip]="metadataService.metadata_descriptions.season.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/taxonomic-coverage-section/taxonomic-coverage-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 2,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:taxonomic-coverage:class:tooltip" [tooltip]="metadataService.metadata_descriptions.class.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:taxonomic-coverage:taxonomic-scope:tooltip" [tooltip]="metadataService.metadata_descriptions.specific_taxon_groups.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/survey-protocol-section/survey-protocol-section.component.html": {
    matches: ["metadataService.metadata_descriptions"],
    count: 1,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:survey-protocol:survey-methods:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_survey_protocol1.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/survey-dates-section/survey-dates-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 4,
    line: [
      '        <mol-help-info i18n-tooltip="@@metadata-sections:survey-dates:start-date:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_date_start.tooltip"> </mol-help-info>',
      '      <mat-hint i18n-innerHtml="@@metadata-sections:survey-dates:start-date:hint" [innerHtml]="metadataService.metadata_descriptions.inv_date_start.hint_text" i18n></mat-hint>',
      '        <mol-help-info i18n-tooltip="@@metadata-sections:survey-dates:end-date:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_date_end.tooltip"></mol-help-info>',
      '      <mat-hint [innerHtml]="metadataService.metadata_descriptions.inv_date_end.hint_text" i18n-innerHtml="@@metadata-sections:survey-dates:end-date:hint"></mat-hint>'
    ]
  },
  "../upload/src/app/components/metadata-sections/sampling-description-section/sampling-description-section.component.html": {
    matches: ["metadataService.metadata_descriptions"],
    count: 1,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:sampling:sampling-descriptions:tooltip" [tooltip]="metadataService.metadata_descriptions.sampling_description.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/release-policy-section/release-policy-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 2,
    line: [
      '          <mol-help-info i18n-tooltip="@@metadata-sections:release-policy:set-release-date:tooltip" [tooltip]="metadataService.metadata_descriptions.set_release_date.tooltip"></mol-help-info>',
      '          <mol-help-info i18n-tooltip="@@metadata-sections:release-policy:no-release-date:tooltip" [tooltip]="metadataService.metadata_descriptions.no_release_date.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/quality-control-section/quality-control-section.component.html": {
    matches: ["metadataService.metadata_descriptions"],
    count: 1,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:quality-control:quality-control-tooltip" [tooltip]="metadataService.metadata_descriptions.quality_control.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/permissions-section/permissions-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 4,
    line: [
      '        <mol-help-info i18n-tooltip="@@metdata-sections:permissions:tooltip" [tooltip]="metadataService.metadata_descriptions.permissions_section.tooltip"></mol-help-info>',
      '          <mol-help-info i18n-tooltip="@@metdata-sections:permissions:mol-models-tooltip" [tooltip]="metadataService.metadata_descriptions.mol_modeling.tooltip"></mol-help-info>',
      '          <mol-help-info i18n-tooltip [tooltip]="metadataService.metadata_descriptions.allow_visualization.tooltip"></mol-help-info>',
      '        <mol-help-info i18n-tooltip [tooltip]="metadataService.metadata_descriptions.allow_download.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/methods-section/methods-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 4,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:methods:inventories-compilations-both-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_inventory_compilation_both.tooltip"></mol-help-info>',
      '    <mat-hint i18n-innerHtml="@@metadata-sections:methods:type-of-inventory:hint" [innerHtml]="metadataService.metadata_descriptions.inv_inventory_type.hint_text"></mat-hint>',
      '    <mat-hint i18n-innerHtml="@@metadata-sections:methods:type-of-compilation:hint" [innerHtml]="metadataService.metadata_descriptions.inv_compilation_type.hint_text"></mat-hint>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:methods:survey-methods:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_survey_protocol1.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/license-section/license-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 3,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:license:license-tooltip" [tooltip]="metadataService.metadata_descriptions.license.tooltip"> </mol-help-info>',
      '    <mat-hint i18n-innerHtml="@@metadata-sections:license:license-hint" [innerHtml]="metadataService.metadata_descriptions.license.hint_text" i18n></mat-hint>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:license:license-holder-hint" [tooltip]="metadataService.metadata_descriptions.license_holder.tooltip"> </mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/geographic-coverage-inventory-section/geographic-coverage-inventory-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 4,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:geographic-coverage-inventory:spatial-extent-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_geospatial_scope.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:geographic-coverage-inventory:site-details-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_geospatial_site_details.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:geographic-coverage-inventory:area-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_geospatial_area_km2.tooltip"></mol-help-info>',
      '    <mat-hint [innerHtml]="metadataService.metadata_descriptions.inv_geospatial_area_km2.hint_text" i18n-innerHtml="@@metadata-sections:geographic-coverage-inventory:area-hint"></mat-hint>'
    ]
  },
  "../upload/src/app/components/metadata-sections/general-section/general-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 3,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:general:project-url-tooltip" [tooltip]="metadataService.metadata_descriptions.project_url.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:general:notes-tooltip" [tooltip]="metadataService.metadata_descriptions.notes.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:general:keywords-tooltip" [tooltip]="metadataService.metadata_descriptions.keywords.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/completeness-section/completeness-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 4,
    line: [
      '        <mol-help-info i18n-tooltip="@@metadata-sections:completeness:completeness-tooltip" [tooltip]="metadataService.metadata_descriptions.completeness_section.tooltip"></mol-help-info>',
      '        <mol-help-info i18n-tooltip="@@metadata-sections:completeness:lower-bound-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_completeness_lower.tooltip"></mol-help-info>',
      '        <mol-help-info i18n-tooltip="@@metadata-sections:completeness:upper-bound-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_completeness_upper.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:completeness:rationale-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_completeness_rationale.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/citation-section/citation-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 2,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:citation-section:doi-tooltip" [tooltip]="metadataService.metadata_descriptions.doi.tooltip"></mol-help-info>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:citation-section:isbn-tooltip" [tooltip]="metadataService.metadata_descriptions.isbn.tooltip"></mol-help-info>'
    ]
  },
  "../upload/src/app/components/metadata-sections/citation-required-section/citation-required-section.component.html": {
    matches: [
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions",
      "metadataService.metadata_descriptions"
    ],
    count: 4,
    line: [
      '      <mol-help-info i18n-tooltip="@@metadata-sections:citation-tooltip" [tooltip]="metadataService.metadata_descriptions.citation_formatted.tooltip"></mol-help-info>',
      '    <mat-hint [innerHtml]="metadataService.metadata_descriptions.citation_formatted.hint_text"></mat-hint>',
      '      <mol-help-info i18n-tooltip="@@metadata-sections:short-citation-tooltip" [tooltip]="metadataService.metadata_descriptions.author_display.tooltip"></mol-help-info>',
      '    <mat-hint i18n-innerHtml="@@metadata-sections:short-citation-hint" [innerHtml]="metadataService.metadata_descriptions.author_display.hint_text"> </mat-hint>'
    ]
  }
};

module.exports = {
  config: config
};
