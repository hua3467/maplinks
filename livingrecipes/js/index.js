const mapStyles = {
    frank: "mapbox://styles/aayang/cko38a1bp00dx17qty93kzxla",
    monochrome: 'mapbox://styles/aayang/ckfhnnlks0b7v19l7oxweshja'
}

var pointLayer = "end-points";
var pointSource = "point-data";

mapboxgl.accessToken =
    'pk.eyJ1IjoiYWF5YW5nIiwiYSI6ImNrY3RxeXp5OTBqdHEycXFscnV0czY4ajQifQ.jtVkyvY29tGsCZSQlELYDA';
var map = new mapboxgl.Map({
    container: 'map',
    style: mapStyles.monochrome,
    center: [-96.790494, 46.875552],
    zoom: 10
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let coord = [Number(urlParams.get("log")), Number(urlParams.get("lat"))];

console.log(coord);

// Add geolocate control to the map.
// map.addControl(
//     new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//     })
// );
// map.addControl(new mapboxgl.FullscreenControl());




map.on('load', () => {

    if (queryString) {
        setTimeout(() => {
            map.flyTo({
                center: coord,
                zoom: 8,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
                easing: function (t) {
                    return t;
                },
                // this animation is considered essential with respect to prefers-reduced-motion
                essential: true
            });
        }, 500)
    } 

    loadData((data) => {
        if (data) {
            console.log(data);
            loadPoints(data, greenCircles);
            // data.forEach(item => {
            //     addMarker(item);
            // })
            //addListItem(".pop-up", data);
        } else {
            console.log("No data found.");
        }
        
    });
});



map.on('click', pointLayer, function (e) {

    var features = map.queryRenderedFeatures(e.point, {
        layers: [pointLayer]
    });

    var feature = e.features[0];
    
    features[0].properties.ingredients = toStrArray(features[0].properties.ingredients);
    features[0].properties.instruction = toStrArray(features[0].properties.instruction);
    features[0].properties.coordinates = toNumArray(features[0].properties.coordinates);
    createRecipe(".pop-up", features[0].properties);

});



function loadPoints(data, pointConfig){
    let geoData = makeGeoData(data);

    map.addSource(pointSource, {
        'type': 'geojson',
        'data': geoData
    });

    map.addLayer(pointConfig);
}

function removePoints() {
    if (map.getLayer(pointLayer)) {
        map.removeLayer(pointLayer);
    }
    if (map.getSource(pointSource)) {
        map.removeSource(pointSource);
    }
}

function toStrArray(str) {
    let newStr = str.replace("[\"", '');
    newStr = newStr.replace("\"]", '');
    newStr = newStr.split("\",\"");
    return newStr;
}

function toNumArray(str) {
    let newArr = str.replace("[", '');
    newArr = newArr.replace("]", '');
    newArr = newArr.split(",");
    newArr = newArr.map( value => Number(value));
    return newArr;
}