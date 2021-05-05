const chart = document.querySelector("#chart");

const caloryLevel = ["Low Calories", "Medium Calories", "High Calories"];

const maxHeight = chart.clientHeight - 80;
const maxWidth = chart.clientWidth - 80;
let maxTime = 7;
let maxDifficulty = 5;

SVG.on(document, 'DOMContentLoaded', () => {

    var draw = SVG().addTo(chart).size(maxWidth, maxHeight);

    createSpace();

    loadData(data => {
        data.forEach(point => {
            createPoint(point);
        });
    }); 

    listItemByKey("culture", items => {
        items.forEach( item => {
            createFilterTag("#tagList", item);
        });
    });
    listItemByKey("selection", items => {
        items.forEach( item => {
            createFilterTag("#tagList", item);
        });
    });
    listItemByKey("type", items => {
        items.forEach( item => {
            createFilterTag("#tagList", item);
        });
    });
    listItemByKey("calories", items => {
        items.forEach( item => {
            createFilterTag("#tagList", item);
        });
    });



    function createPoint(point){
        var circle = draw.circle(20, 20).move(point.time * (maxWidth / maxTime) - 10, (5 - point.difficulty) * (maxHeight / maxDifficulty) - 10).attr({
            fill: "#ffcc00"
        }).addClass("recipe-point");
        circle.click(() => {
            console.log("clicked");
        });
        circle.mouseover((e) => {
            console.log(`Prepare Time: ${point.time}h, Difficulty: ${point.difficulty}`);
        });
    
        var name = draw.text(point.recipeTitle).move(point.time * (maxWidth / maxTime) - 60, (5 - point.difficulty) * (maxHeight / maxDifficulty) - 30).attr({
            fill: "#aaaaaa",
            display: "none"
        }).addClass("recipe-name");
    }

    function removeAllPoints() {
        document.querySelector("#chart svg").innerHTML = "";
        createSpace();
    }

    function createSpace() {
        var axle0 = draw.text("0").move(-12, maxHeight).font({
            fill: "black"
        });
        var axleY_max = draw.text(maxDifficulty.toString()).move(-12, 0).font({
            fill: "black"
        });
        var axleX_max = draw.text(maxTime + "h+").move(maxWidth, maxHeight).font({
            fill: "black"
        });
        var axleY = draw.line(0, 0, 0, maxHeight);
        axleY.stroke({
            color: "black",
            width: 2
        });
        var axleX = draw.line(0, maxHeight, maxWidth, maxHeight);
        axleX.stroke({
            color: "black",
            width: 2
        });
    }

});

