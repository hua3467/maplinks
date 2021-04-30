const chart = document.querySelector("#chart");

const data = [{
    difficulty: 3,
    time: 12,
    recipe: "Recipe Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 2,
    time: 4.0,
    recipe: "Recipe Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 4,
    time: 6,
    recipe: "Recipe Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 5,
    time: 4.2,
    recipe: "Recipe Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 3.2,
    time: 2,
    recipe: "Recipe Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 4.5,
    time: 3.6,
    recipe: "Recipe Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 1,
    time: 7,
    recipe: "Recipe Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 3.7,
    time: 2.6,
    recipe: "Recipe Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
}];

const maxHeight = chart.clientHeight;
const maxWidth = chart.clientWidth;

SVG.on(document, 'DOMContentLoaded', () => {

    var draw = SVG().addTo(chart).size(maxWidth, maxHeight);

    var axle0 = draw.text("0").move(0, maxHeight - 16).font({fill: "black"});
    var axleY_max = draw.text("5").move(0, 0).font({fill: "black"}); 
    var axleX_max = draw.text("12h+").move(maxWidth - 48, maxHeight - 16).font({fill: "black"});
    var axleY = draw.line(16, 16, 16, maxHeight - 16);
    axleY.stroke({color: "black", width: 2});
    var  axleX = draw.line(16, maxHeight - 16, maxWidth - 16, maxHeight - 16);
    axleX.stroke({color: "black", width: 2});

    data.forEach(point => {
        var circle = draw.circle(20, 20).move(point.time * (maxWidth / 12) - 32, (5 - point.difficulty) * (maxHeight / 5)).attr({
            fill: "#ffcc00"
        });
        circle.click(() => {
            console.log("clicked");
        });
        circle.mouseover((e) => {
            console.log(`Prepare Time: ${point.time}h, Difficulty: ${point.difficulty}`);
        });

        var name = draw.text(point.recipe).move(point.time * (maxWidth / 12) - 32, (5 - point.difficulty) * (maxHeight / 5) - 20).attr({
            fill: "#aaaaaa"
        });
        
    });

});
