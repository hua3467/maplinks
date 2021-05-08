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
        items.forEach(item => {
            createFilterTag("#tagList", "culture", item);
            removeAllPoints();
            loadDataByFilter("culture", item, data => {
                console.log(data);
            });
        });
    });
    listItemByKey("selection", items => {
        items.forEach(item => {
            createFilterTag("#tagList", "selection", item);
        });
    });
    listItemByKey("type", items => {
        items.forEach(item => {
            createFilterTag("#tagList", "type", item);
        });
    });
    listItemByKey("calories", items => {
        items.forEach(item => {
            createFilterTag("#tagList", "calories", item);
        });
    });


    function createPoint(point) {
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

    function createFilterTag(containerSelector, key, tagName) {
        const container = document.querySelector(containerSelector);
        container.append(buildDom({
            type: "button",
            props: {
                className: "btn btn-outline-dark btn-sm",
                innerHTML: tagName
            },
            events: {
                click: e => {
                    clickFilterTag(key, tagName)
                }
            }
        }));
    }

    function clickFilterTag(key, item) {
        loadDataByFilter(key, item, itemData => {
            if (itemData) {
                removeAllPoints();
                for ( let key in itemData) {
                    createPoint(itemData[key]);
                }
            } else {
                console.log("No data found.");
            }
        });
    }

    /**
     * This function will list all the items with same key after removing the duplications.
     * For example, to list all the genres in a dataset, use listItemByKey("genre", callback()).
     * @param {String} term The key of the category, such as "genre," "tag," "category."
     * @param {callback} callback the callback function you want to run after getting the data.
     */
    function listItemByKey(term, callback) {
        loadData(data => {
            const items = [];
            data.forEach(item => {
                if (!items.includes(item[term])) {
                    items.push(item[term]);
                }
            });
            callback(items);
        });
    }

    function loadData(callback) {
        dbRef.once("value").then(snapshot => {
            callback(Object.values(snapshot.val()).sort((a, b) => a.userID > b.userID ? -1 : 1));
        }, error => {
            console.log("ERROR: " + error.code);
        });
    }

    /**
     * For example, to search all the items where item.genre="Strategic", use loadDataByFilter("genre", "Strategic", callback()); 
     * @param {String} key the key you want to search
     * @param {String} term the keyword you want to search
     * @param {callback} callback the callback function you want to run after getting the data
     */
    function loadDataByFilter(key, term, callback) {
        dbRef.orderByChild(key).equalTo(term).on("value", snapshot => {
            callback(snapshot.val());
        });
    }

});