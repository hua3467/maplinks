
const mapStyles = {
    frank: "mapbox://styles/aayang/cko38a1bp00dx17qty93kzxla",
    monochrome: 'mapbox://styles/aayang/ckfhnnlks0b7v19l7oxweshja'
}

mapboxgl.accessToken =
    'pk.eyJ1IjoiYWF5YW5nIiwiYSI6ImNrY3RxeXp5OTBqdHEycXFscnV0czY4ajQifQ.jtVkyvY29tGsCZSQlELYDA';
var map = new mapboxgl.Map({
    container: 'map',
    style: mapStyles.frank,
    center: [-96.790494, 46.875552],
    zoom: 10
});

var pointLayer = "end-points";
var pointSource = "point-data";

const genreFilter = document.querySelector(".genre-group");

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
            // data.forEach(item => {
            //     addMarker(item);
            // })
            addListItem(".data-list", data);
        } else {
            console.log("No data found.");
        }
        
    });

    genreFilter.append(buildDom({
        type: "button",
        props: {
            className: "btn btn-outline-dark btn-sm",
            innerHTML: "All Genres"
        },
        events: {
            click: e => {
                removePoints();
                loadData((data) => {
                    if (data) {
                        loadPoints(data, greenCircles);
                        addListItem(".data-list", data);
                    } else {
                        console.log("No data found.");
                    }
                    
                });
            }
        }
    }));

    listItemByKey("genre", data => {
        data.forEach( item => {
            genreFilter.append(filterGenreBtn(item));
        });
    });
    
});


map.on('click', pointLayer, function (e) {

    if (document.querySelector(".splide")) {
        document.querySelector(".splide").remove();
    }

    console.log(e.target);

    var features = map.queryRenderedFeatures(e.point, {
        layers: [pointLayer]
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