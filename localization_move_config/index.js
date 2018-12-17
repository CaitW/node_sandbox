// metadataService.metadata_descriptions.+?(?=\")

const findInFiles = require('find-in-files');

const fs = require("fs");

const matches = require('./matches.js').config;

const uploaderConfig = require('./upload_config').config;

const fileList = Object.keys(matches);

const matchingRegex = /metadataService.metadata_descriptions.+?(?=\")/gi;

function processFile(file) {
    let contents = fs.readFileSync(file, 'utf8');

    // ['metadataService.metadata_descriptions.abstract.tooltip',
    //     'metadataService.metadata_descriptions.geographic_scope.tooltip']
    const configReferences = contents.match(matchingRegex);

    // for each reference of metadataService.metadataDescriptions
    for (let ref of configReferences) {
        // get the last two property names
        let part = ref.replace("metadataService.metadata_descriptions.", "").split(".");
        // figure out what that part needs to be replaced with
        let replaceWith = uploaderConfig[part[0]][part[1]].replace(/\"/g,"\'");
        // then replace that in the content, removing bracketed [tooltip]

        contents = contents.replace(`[tooltip]="` + ref, `tooltip="` + ref);
        contents = contents.replace(`[innerHtml]="` + ref, `innerHtml="` + ref);
        contents = contents.replace(ref, replaceWith);
    }

    fs.writeFileSync(file, contents);
}

for(let file of fileList) {
    processFile(file);
}



// fs.writeFile('./localization_move_config/file_list.json', JSON.stringify(fileList), (err) => {
//     if (err) console.log(err);
// });

// findInFiles.findSync("metadataService.metadata_descriptions", "../upload/src/app")
//     .then((results) => {
//         console.log(results);
//         // fs.writeFile('./localization_move_config/test.js', results, (err) => {
//         //     if (err) console.log(err);
//         // });
//     });