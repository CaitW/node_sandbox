// metadataService.metadata_descriptions.+?(?=\")

const findInFiles = require('find-in-files');

const fs = require("fs");

const matches = require('./matches.js').config;

const fileList = Object.keys(matches);

const matchingRegex1 = /i18n=\".+?(?=\")"/gi;
const matchingRegex2 = /i18n-tooltip=\".+?(?=\")"/gi;
const matchingRegex3 = /i18n-innerHtml=\".+?(?=\")"/gi;
const matchingRegex4 = /i18n-title=\".+?(?=\")"/gi;
const matchingRegex5 = /i18n-placeholder=\".+?(?=\")"/gi;
const matchingRegex6 = /i18n-label=\".+?(?=\")"/gi;

// findInFiles.findSync("i18n", "../upload/src/app")
//     .then((results) => {
//         console.log(results);
//     });

function processFile(file) {
    let contents = fs.readFileSync(file, 'utf8');

    // ['metadataService.metadata_descriptions.abstract.tooltip',
    //     'metadataService.metadata_descriptions.geographic_scope.tooltip']
    let matches1 = contents.match(matchingRegex1);
    let matches2 = contents.match(matchingRegex2);
    let matches3 = contents.match(matchingRegex3);
    let matches4 = contents.match(matchingRegex4);
    let matches5 = contents.match(matchingRegex5);
    let matches6 = contents.match(matchingRegex6);

    let i18nReferences = [];

    if (matches1) {
        i18nReferences = [...i18nReferences, ...matches1];
    }
    if (matches2) {
        i18nReferences = [...i18nReferences, ...matches2];
    }
    if (matches3) {
        i18nReferences = [...i18nReferences, ...matches3];
    }
    if (matches4) {
        i18nReferences = [...i18nReferences, ...matches4];
    }
    if (matches5) {
        i18nReferences = [...i18nReferences, ...matches5];
    }
    if (matches6) {
        i18nReferences = [...i18nReferences, ...matches6];
    }

    console.log(i18nReferences);

    // for each reference of i18n=
    for (let ref of i18nReferences) {
        let addThis = ref.replace('i18n=', 'data-i18n=').replace('i18n-tooltip=', 'data-i18n=').replace('i18n-innerHtml=', 'data-i18n=').replace('i18n-title=', 'data-i18n=').replace('i18n-label=', 'data-i18n=').replace('i18n-placeholder=', 'data-i18n=').replace('@@', '');
        contents = contents.replace(ref, ref + ' ' + addThis);
    }

    fs.writeFileSync(file, contents);
}

for (let file of fileList) {
    processFile(file);
}

// processFile(fileList[0]);
