const screenshots = require("./screenshots.json");
const ids = require("./all_ids.json");
const fs = require("fs");
// library to convert from JSON to CSV
const jsontocsv = require('json2csv').Parser;
const findInFiles = require("find-in-files");

// for(let screenshot in screenshots) {
//     for(let id of screenshots[screenshot]) {
//         if(ids[id]) {
//             ids[id].push(screenshot);
//         }
//         // else {
//         //     ids[id] = [screenshot];
//         // }
//     }
// }

// let rows = [];
// let empties = [];
// let emptiesById = {};

// for(let id in ids) {
//     if (ids[id].length) {
//         rows.push(
//            {
//                id,
//                screenshots: ids[id].join(", ")
//            }
//         );
//     } else {
//         rows.push(
//             {
//                 id,
//                 screenshots: ""
//             }
//         );
//         empties.push(
//             {
//                 id,
//                 screenshots: ""
//             }
//         );
//         emptiesById[id] = [];
//     }
// }

// // actually convert to csv
// let parser = new jsontocsv({ fields: ['id', 'screenshots'] });
// let csv = parser.parse(rows);
// let emptycsv = parser.parse(empties);

// fs.writeFileSync('./i18n-match-ids/ids-matched-to-screenshots.csv', csv);
// fs.writeFileSync('./i18n-match-ids/empties.csv', emptycsv);
// fs.writeFileSync('./i18n-match-ids/empties.json', JSON.stringify(emptiesById, null, 2));
// fs.writeFileSync('./i18n-match-ids/empties.json', JSON.stringify(emptiesById, null, 2));

// let emptiesMatchedToComponents = {};
// let theKeys = Object.keys(emptiesById);

// function aRecursiveFunction (index, keys) {
//     let id = keys[index];
//     console.log(`looking for ${id}`);
//     console.log(`${index} complete of ${keys.length}`);

//     findInFiles.findSync(`@@${id}`, "../upload/src/app").then(results => {
//       emptiesMatchedToComponents[id] = Object.keys(results);
//       if(index < (keys.length - 1)) {
//           return aRecursiveFunction(index + 1, keys)
//       } else {
//           fs.writeFileSync("./i18n-match-ids/emptiesMatchedToComponents.json", JSON.stringify(emptiesMatchedToComponents, null, 2));
//           return;
//       }
//     });
// }

// aRecursiveFunction(0, theKeys);


const emptiesMatchedToComponents = require("./emptiesMatchedToComponents.json");

let rows = [];

for (let id in emptiesMatchedToComponents) {
    rows.push({
        id,
        components: emptiesMatchedToComponents[id].join(", ").replace(/\.\.\/upload\/src\/app\//g, "")
    });
}

let parser = new jsontocsv({ fields: ['id', 'components'] });
let csv = parser.parse(rows);

fs.writeFileSync('./i18n-match-ids/empties-matched-to-components.csv', csv);
