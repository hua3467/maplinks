const chart = document.querySelector("#chart");

const data = [{
    difficulty: 3,
    time: 0.5,
    recipeTitle: "Salmon with Lemon Cream Sauce",
    ingredients: ["3 Tbsp lemon juice", 
                    "1/4 cup chicken broth, fish stock, clam juice, white wine, or water", 
                    "2/3 cup heavy cream", 
                    "1 tablespoon extra virgin olive oil", "Freshly ground black pepper", 
                    "1 1/2 pounds salmon fillets",
                    "Parsley for garnish"],
    process: [
        "Pour the lemon juice, broth and cream into a small pot and bring to a simmer. Immediately lower the heat to low, cover the pot and simmer gently for 10 minutes. Add salt and pepper to taste. The last minute or two, uncover the pot and increase the heat to high to reduce the sauce a bit.",
        "While the sauce is cooking, rinse the salmon in cold water and check for any stray scales (if skin-on). Use needle nose pliers to remove any pin bones. Pat the fish dry with paper towels.",
        "Add the oil to a sauté pan large enough to fit the fillets in one layer. Heat the pan on high and let the pan heat up for 90 seconds.",
        "Place the salmon fillets on plates and pour lemon cream sauce over them and sprinkle with chopped parsley to serve. If you've crisped up the skin, serve the fillets skin-side up so they stay crispy. Otherwise serve the fillets skin-side down."
    ],
    story: "We used skin-on salmon for this recipe, but you can use skinless fillets if you want. The skin tastes great when it is fried and crispy (salmon bacon!). When buying skin-on fish, make certain the fish has been scaled. Ask your fishmonger to do this at the store. Make sure you use \"heavy\" whipping cream for the sauce or it will curdle."
},{
    difficulty: 2,
    time: 4.0,
    recipeTitle: "recipeTitle Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: "" 
},{
    difficulty: 4,
    time: 6,
    recipeTitle: "6 hour food",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 5,
    time: 6,
    recipeTitle: "5 Difficulty",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 3.2,
    time: 2,
    recipeTitle: "recipeTitle Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 4.5,
    time: 3.6,
    recipeTitle: "recipeTitle Name",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 1,
    time: 5.6,
    recipeTitle: "5.6 Hour Recipe",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
},{
    difficulty: 3,
    time: 0.4,
    recipeTitle: "0 Recipe",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
}];

const maxHeight = chart.clientHeight - 80;
const maxWidth = chart.clientWidth - 80;

SVG.on(document, 'DOMContentLoaded', () => {

    var draw = SVG().addTo(chart).size(maxWidth, maxHeight);

    var axle0 = draw.text("0").move(-12, maxHeight).font({fill: "black"});
    var axleY_max = draw.text("5").move(-12, 0).font({fill: "black"}); 
    var axleX_max = draw.text("6h+").move(maxWidth, maxHeight).font({fill: "black"});
    var axleY = draw.line(0, 0, 0, maxHeight);
    axleY.stroke({color: "black", width: 2});
    var  axleX = draw.line(0, maxHeight, maxWidth, maxHeight);
    axleX.stroke({color: "black", width: 2});

    data.forEach(point => {
        var circle = draw.circle(20, 20).move(point.time * (maxWidth / 6) - 10, (5 - point.difficulty) * (maxHeight / 5) -10).attr({
            fill: "#ffcc00"
        }).addClass("recipe-point");
        circle.click(() => {
            console.log("clicked");
        });
        circle.mouseover((e) => {
            console.log(`Prepare Time: ${point.time}h, Difficulty: ${point.difficulty}`);
        });

        var name = draw.text(point.recipeTitle).move(point.time * (maxWidth / 6) - 60, (5 - point.difficulty) * (maxHeight / 5) - 30).attr({
            fill: "#aaaaaa", display: "none"
        }).addClass("recipe-name");
        
    });

});
