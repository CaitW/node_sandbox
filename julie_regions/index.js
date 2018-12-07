// library to convert from CSV to json
const csvtojson = require('csvtojson');
// library to convert from JSON to CSV
const jsontocsv = require('json2csv').Parser;
// library to write the output files
const fs = require('fs');

// starting files
let park_links_csv = './julie_regions/park_links.csv';
let state_links_csv = './julie_regions/state_links.csv';

/**
  * Function that takes the files through a series of steps to convert them
  * Starting with an input of CSV converted to raw JSON
  * 1. Sorts the raw JSON by region_id
  * 2. Rearranges things into a more CSV-like format
  * 3. Converts the csv-ified JSON and returns a CSV string
  */
function formatJson (json) {
    // sort by region first
    let sortedByRegion = {};

    for (let row of json) {
        let region_id = row.region_id;
        let field_guide = {
            url: row.url,
            id: row.id,
            title_en: row.title_en,
            title_es: row.title_es
        };
        if (typeof sortedByRegion[region_id] === 'undefined') {
            sortedByRegion[region_id] = {
                field_guides: [field_guide]
            };
        } else {
            sortedByRegion[region_id].field_guides.push(field_guide);
        }
    }

    // then put in proper format to be converted to CSV, with two fields
    let formatted_for_csv = [];

    for(let region_id in sortedByRegion) {
        let field_guides = sortedByRegion[region_id];
        let attributes =  JSON.stringify(field_guides);
        formatted_for_csv.push({
            region_id: region_id,
            attributes: attributes
        });
    }

    // actually convert to csv
    let parser = new jsontocsv({fields: ['region_id', 'attributes']});
    let csv = parser.parse(formatted_for_csv);
    return csv;
}

// reads the CSVs you sent me
csvtojson().fromFile(park_links_csv).then((jsonObj) => {
    // run formatJson() on the CSV to get a csv text
    let output = formatJson(jsonObj);
    // write csv text to a file
    fs.writeFile('./julie_regions/park_links_converted.csv', output, (err) => {
        if(err) console.log(err);
    });
});

// same, but for state links
csvtojson().fromFile(state_links_csv).then((jsonObj) => {
    let output = formatJson(jsonObj);
    fs.writeFile('./julie_regions/state_links_converted.csv', output, (err) => {
        if(err) console.log(err);
    });
});

