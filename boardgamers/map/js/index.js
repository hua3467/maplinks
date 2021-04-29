const loadPeopleList = function (peopleData) {

    const peopleList = document.querySelector(".list ul");
    peopleList.innerHTML = "";

    peopleData.forEach(data => {
        const property = data.properties;
        addListItem(".list ul", property);
    });
};

mapboxgl.accessToken =
    'pk.eyJ1IjoiYWF5YW5nIiwiYSI6ImNrY3RxeXp5OTBqdHEycXFscnV0czY4ajQifQ.jtVkyvY29tGsCZSQlELYDA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aayang/ckfhnnlks0b7v19l7oxweshja',
    center: [-96.790494, 46.875552],
    zoom: 10
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let coord = [Number(urlParams.get("log")), Number(urlParams.get("lat"))];

console.log(coord);


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
    } else {
        setTimeout(() => {
            map.zoomTo(3.7, {
                duration: 10000,
                offset: [0, -180]
            });
        }, 1000)
    }

    loadData((data) => {
        if (data) {
            console.log(data);
            loadPoints(data, greenCircles);
            addListItem(".data-list", data);
        } else {
            console.log("No data found.");
        }
        
    });

    // loadDataByFilter("genre", "Strategic", data => {
    //     if (data) {
    //         console.log(data);
    //         loadPoints(data, greenCircles);
    //         addListItem(".data-list", data);
    //     } else {
    //         console.log("No data found.");
    //     }
    // });

    listItemByKey("genre", data => {
        console.log(data);
    });
    
});


function loadPoints(data, pointConfig){
    let geoData = makeGeoData(data);

    map.addSource('people-data', {
        'type': 'geojson',
        'data': geoData
    });

    map.addLayer(pointConfig);
}



map.on('click', 'people-end-points', function (e) {

    if (document.querySelector(".splide")) {
        document.querySelector(".splide").remove();
    }

    var features = map.queryRenderedFeatures(e.point, {
        layers: ['people-end-points']
    });

    var feature = e.features[0];

    var popup = new mapboxgl.Popup({
            offset: [0, 0]
        })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(popup_HTML(features))
        .addTo(map);


    new Splide('.splide', {
        width: '100%',
        height: '380px',
        type: 'loop'
    }).mount();
});