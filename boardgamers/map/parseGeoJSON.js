const csvToJson = require('convert-csv-to-json');
const fs = require("fs");

const inputName = "network-nodes.csv";
const outputName = "alumni-data.json";


function toJSON(input, output) {
    csvToJson.fieldDelimiter(',') .getJsonFromCsv(inputName);
    csvToJson.formatValueByType().getJsonFromCsv(inputName);
    csvToJson.generateJsonFileFromCsv(inputName, outputName);
}

const alumniData = require('./alumni-data-0ld.json');
const geoJSON = {"type": "FeatureCollection", "features":[]};
const geoLine = { "features": [], "type": "FeatureCollection" };

alumniData.forEach( data => {
    const feature = {
        "type": "Feature",
        "properties": {
          "title": data.StartNode,
          "description": data.description,
          "category": data["company/alumni"],
          "state": data.State,
          "year": data.Year,
          "end-node": data.EndNode,
          "image-url": data.ImageLink,
          "web": data.weblink,
        },
        "geometry": {
          "coordinates": [data.longitude, data.latitude],
          "type": "Point"
        }
      }
    
    const line = {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [-96.7904944, 46.8755526],
            [data.longitude, data.latitude]
          ],
          "type": "LineString"
        }
      }

    geoJSON.features.push(feature);
    geoLine.features.push(line);
})

// fs.writeFile("alumni-data.geojson", JSON.stringify(geoJSON), err => {
//     if (err) {
//         throw err;
//     }
//     console.log("writting finished.");
// });

fs.writeFile("alumni-lines.geojson", JSON.stringify(geoLine), err => {
        if (err) {
            throw err;
        }
        console.log("writting finished.");
    });
