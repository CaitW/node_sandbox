const cheerio = require('cheerio');
const fs = require('fs');
// library to convert from JSON to CSV
const jsontocsv = require('json2csv').Parser;

const html = fs.readFileSync('./get_articles/assets/articles.html');

const $ = cheerio.load(html);

const paragraphs = $('p').toArray();

const json = [];

for (let paragraph of paragraphs) {
    let link = $(paragraph).find("a").attr("href");
    if(link) {
        json.push({
            link
        });
    }

}

let parser = new jsontocsv({fields: ['link']});
let csv = parser.parse(json);

fs.writeFileSync('./get_articles/output.csv', csv);