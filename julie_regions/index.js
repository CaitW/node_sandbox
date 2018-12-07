// library to convert from CSV to json
const csvtojson = require('csvtojson');
// library to convert from JSON to CSV
const jsontocsv = require('json2csv').Parser;
// library to write the output files
const fs = require('fs');

// starting files
let management_plans_csv = './julie_regions/management_plans.csv';

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
        let management_plan = {
            url: row.url,
            plan_year: row.plan_year,
            title_en: row.title_en,
            title_es: row.title_es
        };
        if (typeof sortedByRegion[region_id] === 'undefined') {
            sortedByRegion[region_id] = {
                management_plan: [management_plan]
            };
        } else {
            sortedByRegion[region_id].management_plan.push(management_plan);
        }
    }

    // then put in proper format to be converted to CSV, with two fields
    let formatted_for_csv = [];

    for(let region_id in sortedByRegion) {
        let management_plans = sortedByRegion[region_id];
        let attributes =  JSON.stringify(management_plans);
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
csvtojson().fromFile(management_plans_csv).then((jsonObj) => {
    // run formatJson() on the CSV to get a csv text
    let output = formatJson(jsonObj);
    // write csv text to a file
    fs.writeFile('./julie_regions/management_plans_converted.csv', output, (err) => {
        if(err) console.log(err);
    });
});

