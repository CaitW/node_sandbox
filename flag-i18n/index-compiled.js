// metadataService.metadata_descriptions.+?(?=\")

const findInFiles = require('find-in-files');

const fs = require("fs");

const matches = require('./test.js').config;

const fileList = Object.keys(matches);

const matchingRegex = /i18n=\".+?(?=\")"/gi;

// findInFiles.findSync("i18n=", "../upload/src/app")
//     .then((results) => {
//         console.log(results);
//     });

function processFile(file) {
    let contents = fs.readFileSync(file, 'utf8');

    // ['metadataService.metadata_descriptions.abstract.tooltip',
    //     'metadataService.metadata_descriptions.geographic_scope.tooltip']
    const i18nReferences = contents.match(matchingRegex);

    // for each reference of i18n=
    for (let ref of i18nReferences) {
        let addThis = ref.replace('i18n=', 'data-i18n=').replace('@@', '');
        contents = contents.replace(ref, ref + ' ' + addThis);
    }

    fs.writeFileSync(file, contents);
}

for (let file of fileList) {
    processFile(file);
}

// processFile(fileList[0]);
