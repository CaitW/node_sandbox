
> sandbox@1.0.0 localization_move_config /home/cw789/Documents/repositories/node-sandbox
> npx babel ./localization_move_config/index.js --out-file ./localization_move_config/index-compiled.js && node ./localization_move_config/index-compiled.js

[ '../upload/src/app/services/dataset.service.ts': { matches: [ 'metadataService', 'metadataService' ],
    count: 2,
    line: 
     [ '  public updateMetadata(dataset_id, metadataService) {',
       '    return this.http.post(url, metadataService.toJson(), { withCredentials: true });' ] },
  '../upload/src/app/pages/range-map-metadata-page/range-map-metadata-page.component.html': { matches: [ 'metadataService' ],
    count: 1,
    line: 
     [ '    <mol-range-map-metadata-edit [metadataService]="rangeMapService.metadata"></mol-range-map-metadata-edit>' ] },
  '../upload/src/app/pages/points-update-page/points-update-page.component.ts': { matches: [ 'metadataService', 'metadataService' ],
    count: 2,
    line: 
     [ '    public metadataService: PointsMetadataService,',
       '        this.metadataService.fromOverview(this.dataset_id, this.overview);' ] },
  '../upload/src/app/pages/points-update-page/points-update-page.component.html': { matches: [ 'metadataService', 'metadataService' ],
    count: 2,
    line: 
     [ '        <mol-points-metadata-edit [metadataService]="metadataService"></mol-points-metadata-edit>' ] },
  '../upload/src/app/pages/inventory-save-page/inventory-save-page.component.ts': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 5,
    line: 
     [ '    public metadataService: InventoryMetadataService,',
       '    let validPointInventory = (this.metadataService.geometryType === \'coordinates\' && this.pointInventoryUploadService.isValid());',
       '    let validInventory = (this.metadataService.geometryType === \'shapefile\' && this.inventoryUploadService.isValid());',
       '    if(this.metadataService.geometryType === \'coordinates\' && validPointInventory) {',
       '    } else if (this.metadataService.geometryType === \'shapefile\' && validInventory) {' ] },
  '../upload/src/app/pages/dataset-detail-page/dataset-detail-page.component.ts': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 6,
    line: 
     [ '  metadataService: any;',
       '              this.metadataService = this.pointsService;',
       '              this.metadataService = this.inventoryService;',
       '              this.metadataService = this.rangeMapService;',
       '              this.metadataService = this.pointsService;',
       '          this.metadataService.fromOverview(this.dataset_id, this.overview);' ] },
  '../upload/src/app/pages/dataset-detail-page/dataset-detail-page.component.html': { matches: [ 'metadataService', 'metadataService', 'metadataService' ],
    count: 3,
    line: 
     [ '    <div class="alert alert-info private-alert" *ngIf="!metadataService.allow_visualization">',
       '        [metadataService]="metadataService">' ] },
  '../upload/src/app/components/range-map-metadata-edit/range-map-metadata-edit.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/range-map-metadata-edit/range-map-metadata-edit.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 18,
    line: 
     [ '  <mol-title-section [metadataService]="metadataService"></mol-title-section>',
       '  <mol-permissions-section [metadataService]="metadataService"></mol-permissions-section>',
       '  <mol-release-policy-section [metadataService]="metadataService"></mol-release-policy-section>',
       '  <mol-license-section [metadataService]="metadataService"></mol-license-section>',
       '  <mol-additional-info-section [metadataService]="metadataService"></mol-additional-info-section>',
       '  <mol-general-section [metadataService]="metadataService"></mol-general-section>',
       '  <mol-geographic-coverage-range-map-section [metadataService]="metadataService"></mol-geographic-coverage-range-map-section>',
       '  <mol-citation-section [metadataService]="metadataService"></mol-citation-section>',
       '  <mol-taxonomic-coverage-section [metadataService]="metadataService"></mol-taxonomic-coverage-section>' ] },
  '../upload/src/app/components/points-metadata-edit/points-metadata-edit.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/points-metadata-edit/points-metadata-edit.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 18,
    line: 
     [ '  <mol-title-section [metadataService]="metadataService"></mol-title-section>',
       '  <mol-permissions-section [metadataService]="metadataService"></mol-permissions-section>',
       '  <mol-release-policy-section [metadataService]="metadataService"></mol-release-policy-section>',
       '  <mol-license-section [metadataService]="metadataService"></mol-license-section>',
       '  <mol-citation-required-section [metadataService]="metadataService"></mol-citation-required-section>',
       '  <mol-general-section [metadataService]="metadataService"></mol-general-section>',
       '  <mol-citation-section [metadataService]="metadataService"></mol-citation-section>',
       '  <mol-quality-control-section [metadataService]="metadataService"></mol-quality-control-section>',
       '  <mol-sampling-description-section [metadataService]="metadataService"></mol-sampling-description-section>' ] },
  '../upload/src/app/components/permissions-modal/permissions-modal.component.html': { matches: [ 'metadataService', 'metadataService' ],
    count: 2,
    line: 
     [ '  <mol-permissions-section [metadataService]="data.metadataService"></mol-permissions-section>' ] },
  '../upload/src/app/components/metadata-sections/title-section/title-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/title-section/title-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 6,
    line: 
     [ '    <input matInput required [(ngModel)]="metadataService.dataset_title" />',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:title:description:tooltip" [tooltip]="metadataService.metadata_descriptions.abstract.tooltip"></mol-help-info>',
       '    <textarea matInput [(ngModel)]="metadataService.abstract"></textarea>',
       '  <mat-input-container *ngIf="metadataService.product_type == \'points\'">',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:title:geographic-coverage:tooltip" [tooltip]="metadataService.metadata_descriptions.geographic_scope.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.geographic_scope" />' ] },
  '../upload/src/app/components/metadata-sections/temporal-coverage-section/temporal-coverage-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/temporal-coverage-section/temporal-coverage-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 6,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:temporal-coverage:number-of-days:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_survey_days_total.tooltip"></mol-help-info>',
       '    <input matInput type="number" [(ngModel)]="metadataService.inv_survey_days_total" />',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:temporal-coverage:study-diurnality:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_survey_night_day.tooltip"></mol-help-info>',
       '    <mat-select class="diurnal-nocturnal" i18n-placeholder="@@metadata-sections:temporal-coverage:study-diurnality:placeholder" placeholder="Study diurnality" [(ngModel)]="metadataService.inv_survey_night_day">',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:temporal-coverage:season:tooltip" [tooltip]="metadataService.metadata_descriptions.season.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.season" />' ] },
  '../upload/src/app/components/metadata-sections/taxonomic-coverage-section/taxonomic-coverage-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/taxonomic-coverage-section/taxonomic-coverage-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 4,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:taxonomic-coverage:class:tooltip" [tooltip]="metadataService.metadata_descriptions.class.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.class" />',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:taxonomic-coverage:taxonomic-scope:tooltip" [tooltip]="metadataService.metadata_descriptions.specific_taxon_groups.tooltip"></mol-help-info>',
       '      [(ngModel)]="metadataService.specific_taxon_groups"' ] },
  '../upload/src/app/components/metadata-sections/survey-protocol-section/survey-protocol-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/survey-protocol-section/survey-protocol-section.component.html': { matches: [ 'metadataService', 'metadataService', 'metadataService' ],
    count: 3,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:survey-protocol:survey-methods:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_survey_protocol1.tooltip"></mol-help-info>',
       '    <textarea matInput [(ngModel)]="metadataService.inv_survey_protocol1"></textarea>',
       '    <textarea matInput [(ngModel)]="metadataService.inv_survey_protocol_detail1"></textarea>' ] },
  '../upload/src/app/components/metadata-sections/survey-dates-section/survey-dates-section.component.ts': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 9,
    line: 
     [ '  @Input() metadataService;',
       '    if (this.metadataService.inv_date_start) {',
       '      this.minEndDate = this.metadataService.inv_date_start;',
       '      this.metadataService.inv_date_start = new Date(this.metadataService.inv_date_start).toISOString();',
       '    if (this.metadataService.inv_date_end) {',
       '      this.maxStartDate = this.metadataService.inv_date_end;',
       '      this.metadataService.inv_date_end = new Date(this.metadataService.inv_date_end).toISOString();' ] },
  '../upload/src/app/components/metadata-sections/survey-dates-section/survey-dates-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 6,
    line: 
     [ '        <mol-help-info i18n-tooltip="@@metadata-sections:survey-dates:start-date:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_date_start.tooltip"> </mol-help-info>',
       '        [(ngModel)]="metadataService.inv_date_start"',
       '      <mat-hint i18n-innerHtml="@@metadata-sections:survey-dates:start-date:hint" [innerHtml]="metadataService.metadata_descriptions.inv_date_start.hint_text" i18n></mat-hint>',
       '        <mol-help-info i18n-tooltip="@@metadata-sections:survey-dates:end-date:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_date_end.tooltip"></mol-help-info>',
       '        [(ngModel)]="metadataService.inv_date_end"',
       '      <mat-hint [innerHtml]="metadataService.metadata_descriptions.inv_date_end.hint_text" i18n-innerHtml="@@metadata-sections:survey-dates:end-date:hint"></mat-hint>' ] },
  '../upload/src/app/components/metadata-sections/sampling-description-section/sampling-description-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/sampling-description-section/sampling-description-section.component.html': { matches: [ 'metadataService', 'metadataService' ],
    count: 2,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:sampling:sampling-descriptions:tooltip" [tooltip]="metadataService.metadata_descriptions.sampling_description.tooltip"></mol-help-info>',
       '    <textarea matInput [(ngModel)]="metadataService.sampling_description"></textarea>' ] },
  '../upload/src/app/components/metadata-sections/release-policy-section/release-policy-section.component.ts': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 6,
    line: 
     [ '  @Input() metadataService;',
       '    this.metadataService.release_date = (new Date(this.metadataService.release_date)).toISOString();',
       '    if (this.metadataService.release_policy === this.metadataService.no_release_date) {',
       '      this.metadataService.release_date = \'\';' ] },
  '../upload/src/app/components/metadata-sections/release-policy-section/release-policy-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 11,
    line: 
     [ '  <mat-radio-group [(ngModel)]="metadataService.release_policy" (change)="updateReleaseDate()">',
       '        [value]="metadataService.set_release_date">',
       '          <span i18n="@@metadata-sections:release-policy:set-release-date">{{metadataService.set_release_date}}</span>',
       '          <mol-help-info i18n-tooltip="@@metadata-sections:release-policy:set-release-date:tooltip" [tooltip]="metadataService.metadata_descriptions.set_release_date.tooltip"></mol-help-info>',
       '             [required]="metadataService.releaseDateRequired()"',
       '             [disabled]="!metadataService.releaseDateRequired()"',
       '             [(ngModel)]="metadataService.release_date">',
       '      <mat-datepicker-toggle matSuffix [for]="releaseDate" [disabled]="!metadataService.releaseDateRequired()"></mat-datepicker-toggle>',
       '        [value]="metadataService.no_release_date">',
       '          <span i18n="@@metadata-sections:release-policy:no-release-date">{{metadataService.no_release_date}}</span>',
       '          <mol-help-info i18n-tooltip="@@metadata-sections:release-policy:no-release-date:tooltip" [tooltip]="metadataService.metadata_descriptions.no_release_date.tooltip"></mol-help-info>' ] },
  '../upload/src/app/components/metadata-sections/quality-control-section/quality-control-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/quality-control-section/quality-control-section.component.html': { matches: [ 'metadataService', 'metadataService' ],
    count: 2,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:quality-control:quality-control-tooltip" [tooltip]="metadataService.metadata_descriptions.quality_control.tooltip"></mol-help-info>',
       '    <textarea matInput [(ngModel)]="metadataService.quality_control"></textarea>' ] },
  '../upload/src/app/components/metadata-sections/permissions-section/permissions-section.component.ts': { matches: [ 'metadataService', 'metadataService', 'metadataService' ],
    count: 3,
    line: 
     [ '  @Input() metadataService;',
       '      if(!this.metadataService.allow_visualization) {',
       '          this.metadataService.allow_download = false;' ] },
  '../upload/src/app/components/metadata-sections/permissions-section/permissions-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 12,
    line: 
     [ '        <mol-help-info i18n-tooltip="@@metdata-sections:permissions:tooltip" [tooltip]="metadataService.metadata_descriptions.permissions_section.tooltip"></mol-help-info>',
       '        <mat-checkbox [(ngModel)]="metadataService.mol_modeling">',
       '          <mol-help-info i18n-tooltip="@@metdata-sections:permissions:mol-models-tooltip" [tooltip]="metadataService.metadata_descriptions.mol_modeling.tooltip"></mol-help-info>',
       '          [(ngModel)]="metadataService.allow_visualization"',
       '          <mol-help-info i18n-tooltip [tooltip]="metadataService.metadata_descriptions.allow_visualization.tooltip"></mol-help-info>',
       '      <mat-checkbox [(ngModel)]="metadataService.allow_download" [disabled]="!metadataService.allow_visualization">',
       '        <mol-help-info i18n-tooltip [tooltip]="metadataService.metadata_descriptions.allow_download.tooltip"></mol-help-info>',
       '    <div class="alert alert-info" *ngIf="metadataService.allow_download" i18n="@@metdata-sections:permissions:alert-info">',
       '      <span *ngIf="metadataService.dataset_type === \'occurrence\'">',
       '      <span *ngIf="metadataService.dataset_type === \'inventory\'">',
       '      *ngIf="!metadataService.allow_visualization" i18n="@@metdata-sections:permissions:dataset-private-alert">' ] },
  '../upload/src/app/components/metadata-sections/methods-section/methods-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/methods-section/methods-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 15,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:methods:inventories-compilations-both-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_inventory_compilation_both.tooltip"></mol-help-info>',
       '    <mat-select class="mat-select-block" [(ngModel)]="metadataService.inv_inventory_compilation_both">',
       '      *ngIf="metadataService.inv_inventory_compilation_both == \'inventories\' || metadataService.inv_inventory_compilation_both == \'both\'">',
       '    <mat-select i18n-placeholder="@@metadata-sections:methods:type-of-inventory" placeholder="Type of inventory" [(ngModel)]="metadataService.inv_inventory_type" multiple>',
       '    <mat-hint i18n-innerHtml="@@metadata-sections:methods:type-of-inventory:hint" [innerHtml]="metadataService.metadata_descriptions.inv_inventory_type.hint_text"></mat-hint>',
       '      *ngIf="metadataService.inv_inventory_compilation_both == \'compilation\' || metadataService.inv_inventory_compilation_both == \'both\'">',
       '    <mat-select i18n-placeholder="@@metadata-sections:methods:type-of-compilation:placeholder" placeholder="Type of compilation" [(ngModel)]="metadataService.inv_compilation_type" multiple>',
       '    <mat-hint i18n-innerHtml="@@metadata-sections:methods:type-of-compilation:hint" [innerHtml]="metadataService.metadata_descriptions.inv_compilation_type.hint_text"></mat-hint>',
       '      *ngIf="metadataService.inv_inventory_compilation_both == \'compilation\' || metadataService.inv_inventory_compilation_both == \'both\'">',
       '    <mat-select i18n-placeholder="@@metadata-sections:methods:compilation-effort:placeholder" placeholder="Compilation effort" [(ngModel)]="metadataService.inv_compilation_effort">',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:methods:survey-methods:tooltip" [tooltip]="metadataService.metadata_descriptions.inv_survey_protocol1.tooltip"></mol-help-info>',
       '    <textarea matInput [(ngModel)]="metadataService.inv_survey_protocol1"></textarea>' ] },
  '../upload/src/app/components/metadata-sections/license-section/license-section.component.ts': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 5,
    line: 
     [ '  @Input() metadataService;',
       '    this.license_holder_required = this.holder_required.indexOf(this.metadataService.license) > -1;',
       '      this.metadataService.license_holder = \'\';',
       '      this.metadataService.license_holder = this.metadataService.userInfo.fullname;' ] },
  '../upload/src/app/components/metadata-sections/license-section/license-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 5,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:license:license-tooltip" [tooltip]="metadataService.metadata_descriptions.license.tooltip"> </mol-help-info>',
       '        [(ngModel)]="metadataService.license">',
       '    <mat-hint i18n-innerHtml="@@metadata-sections:license:license-hint" [innerHtml]="metadataService.metadata_descriptions.license.hint_text" i18n></mat-hint>',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:license:license-holder-hint" [tooltip]="metadataService.metadata_descriptions.license_holder.tooltip"> </mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.license_holder" required/>' ] },
  '../upload/src/app/components/metadata-sections/geographic-coverage-range-map-section/geographic-coverage-range-map-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/geographic-coverage-range-map-section/geographic-coverage-range-map-section.component.html': { matches: [ 'metadataService', 'metadataService', 'metadataService' ],
    count: 3,
    line: 
     [ '    <input matInput [(ngModel)]="metadataService.geometry_processing" />',
       '    <input matInput [(ngModel)]="metadataService.countries" />',
       '    <input matInput [(ngModel)]="metadataService.geographic_scope" />' ] },
  '../upload/src/app/components/metadata-sections/geographic-coverage-inventory-section/geographic-coverage-inventory-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/geographic-coverage-inventory-section/geographic-coverage-inventory-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 7,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:geographic-coverage-inventory:spatial-extent-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_geospatial_scope.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.inv_geospatial_scope" />',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:geographic-coverage-inventory:site-details-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_geospatial_site_details.tooltip"></mol-help-info>',
       '    <textarea matInput [(ngModel)]="metadataService.inv_geospatial_site_details"></textarea>',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:geographic-coverage-inventory:area-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_geospatial_area_km2.tooltip"></mol-help-info>',
       '    <input matInput type="number" [(ngModel)]="metadataService.inv_geospatial_area_km2" />',
       '    <mat-hint [innerHtml]="metadataService.metadata_descriptions.inv_geospatial_area_km2.hint_text" i18n-innerHtml="@@metadata-sections:geographic-coverage-inventory:area-hint"></mat-hint>' ] },
  '../upload/src/app/components/metadata-sections/general-section/general-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/general-section/general-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 6,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:general:project-url-tooltip" [tooltip]="metadataService.metadata_descriptions.project_url.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.project_url" />',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:general:notes-tooltip" [tooltip]="metadataService.metadata_descriptions.notes.tooltip"></mol-help-info>',
       '    <textarea matInput [(ngModel)]="metadataService.notes"></textarea>',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:general:keywords-tooltip" [tooltip]="metadataService.metadata_descriptions.keywords.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.keywords" />' ] },
  '../upload/src/app/components/metadata-sections/custom-section/custom-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/custom-section/custom-section.component.html': { matches: [ 'metadataService', 'metadataService', 'metadataService' ],
    count: 3,
    line: 
     [ '    <div class="custom-field" *ngFor="let customField of metadataService.custom_fields; let i = index" >',
       '        <button (click)="metadataService.removeCustomField(i)" i18n="@@delete">',
       '    <button mat-raised-button (click)="metadataService.addCustomField()">' ] },
  '../upload/src/app/components/metadata-sections/completeness-section/completeness-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/completeness-section/completeness-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 15,
    line: 
     [ '        <mol-help-info i18n-tooltip="@@metadata-sections:completeness:completeness-tooltip" [tooltip]="metadataService.metadata_descriptions.completeness_section.tooltip"></mol-help-info>',
       '      <label *ngIf="!metadataService.inv_completeness_optout">',
       '        <mol-help-info i18n-tooltip="@@metadata-sections:completeness:lower-bound-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_completeness_lower.tooltip"></mol-help-info>',
       '          *ngIf="!metadataService.inv_completeness_optout"',
       '          [(ngModel)]="metadataService.inv_completeness_lower"',
       '      <label *ngIf="!metadataService.inv_completeness_optout">',
       '        <mol-help-info i18n-tooltip="@@metadata-sections:completeness:upper-bound-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_completeness_upper.tooltip"></mol-help-info>',
       '          *ngIf="!metadataService.inv_completeness_optout"',
       '          [(ngModel)]="metadataService.inv_completeness_upper"',
       '  <mat-input-container *ngIf="!metadataService.inv_completeness_optout" [@toggleNgIf]>',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:completeness:rationale-tooltip" [tooltip]="metadataService.metadata_descriptions.inv_completeness_rationale.tooltip"></mol-help-info>',
       '      [(ngModel)]="metadataService.inv_completeness_rationale"',
       '    <mat-checkbox [(ngModel)]="metadataService.inv_completeness_optout">',
       '  <mat-input-container *ngIf="metadataService.inv_completeness_optout" [@toggleNgIf]>',
       '      [(ngModel)]="metadataService.inv_completeness_optout_reason" required>' ] },
  '../upload/src/app/components/metadata-sections/citation-section/citation-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/citation-section/citation-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 4,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:citation-section:doi-tooltip" [tooltip]="metadataService.metadata_descriptions.doi.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.doi" />',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:citation-section:isbn-tooltip" [tooltip]="metadataService.metadata_descriptions.isbn.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.isbn" />' ] },
  '../upload/src/app/components/metadata-sections/citation-required-section/citation-required-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/citation-required-section/citation-required-section.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 6,
    line: 
     [ '      <mol-help-info i18n-tooltip="@@metadata-sections:citation-tooltip" [tooltip]="metadataService.metadata_descriptions.citation_formatted.tooltip"></mol-help-info>',
       '    <textarea matInput [(ngModel)]="metadataService.citation_formatted"></textarea>',
       '    <mat-hint [innerHtml]="metadataService.metadata_descriptions.citation_formatted.hint_text"></mat-hint>',
       '      <mol-help-info i18n-tooltip="@@metadata-sections:short-citation-tooltip" [tooltip]="metadataService.metadata_descriptions.author_display.tooltip"></mol-help-info>',
       '    <input matInput [(ngModel)]="metadataService.author_display" />',
       '    <mat-hint i18n-innerHtml="@@metadata-sections:short-citation-hint" [innerHtml]="metadataService.metadata_descriptions.author_display.hint_text"> </mat-hint>' ] },
  '../upload/src/app/components/metadata-sections/additional-info-section/additional-info-section.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/metadata-sections/additional-info-section/additional-info-section.component.html': { matches: [ 'metadataService' ],
    count: 1,
    line: 
     [ '    <input matInput required [(ngModel)]="metadataService.endemic_info" />' ] },
  '../upload/src/app/components/inventory-metadata-edit/inventory-metadata-edit.component.ts': { matches: [ 'metadataService' ],
    count: 1,
    line: [ '  @Input() metadataService;' ] },
  '../upload/src/app/components/inventory-metadata-edit/inventory-metadata-edit.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 28,
    line: 
     [ '  <mol-title-section [metadataService]="metadataService"></mol-title-section>',
       '  <mol-permissions-section [metadataService]="metadataService"></mol-permissions-section>',
       '  <mol-release-policy-section [metadataService]="metadataService"></mol-release-policy-section>',
       '  <mol-license-section [metadataService]="metadataService"></mol-license-section>',
       '  <mol-survey-dates-section [metadataService]="metadataService"></mol-survey-dates-section>',
       '  <mol-completeness-section [metadataService]="metadataService"></mol-completeness-section>',
       '  <mol-citation-required-section [metadataService]="metadataService"></mol-citation-required-section>',
       '  <mol-general-section [metadataService]="metadataService"></mol-general-section>',
       '  <mol-citation-section [metadataService]="metadataService"></mol-citation-section>',
       '  <mol-temporal-coverage-section [metadataService]="metadataService"></mol-temporal-coverage-section>',
       '  <mol-taxonomic-coverage-section [metadataService]="metadataService"></mol-taxonomic-coverage-section>',
       '  <mol-geographic-coverage-inventory-section [metadataService]="metadataService"></mol-geographic-coverage-inventory-section>',
       '  <mol-methods-section [metadataService]="metadataService"></mol-methods-section>',
       '  <mol-quality-control-section [metadataService]="metadataService"></mol-quality-control-section>' ] },
  '../upload/src/app/components/files-form/files-form.component.html': { matches: [ 'metadataService', 'metadataService' ],
    count: 2,
    line: 
     [ '    <mol-inventory-metadata-edit *ngIf="datasetType === \'Inventory\' && uploadService" [metadataService]="uploadService.metadata"></mol-inventory-metadata-edit>',
       '    <mol-points-metadata-edit *ngIf="datasetType === \'Occurrence\' && uploadService" [metadataService]="uploadService.metadata"></mol-points-metadata-edit>' ] },
  '../upload/src/app/components/display-dataset-acl/display-dataset-acl.component.ts': { matches: [ 'metadataService', 'metadataService', 'metadataService' ],
    count: 3,
    line: 
     [ '  metadataService: any;',
       '  @Input() metadataService: any;',
       '      .updateMetadata(this.dataset_id, this.metadataService)' ] },
  '../upload/src/app/components/display-dataset-acl/display-dataset-acl.component.html': { matches: 
     [ 'metadataService',
       'metadataService',
       'metadataService',
       'metadataService' ],
    count: 4,
    line: 
     [ '    <mol-permissions-section [metadataService]="metadataService"></mol-permissions-section>',
       '    <mol-release-policy-section [metadataService]="metadataService"></mol-release-policy-section>' ] } ]
