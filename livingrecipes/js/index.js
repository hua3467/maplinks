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
    style: 'mapbox://styles/aayang/ckgcmzhy5460a19k6r5duxm6h',
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

// Create icon and popup for SODAA
// create the popup
var popup_sodaa = new mapboxgl.Popup({
    offset: 25
}).setHTML(
    `<iframe src="https://player.vimeo.com/video/458829008" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen class="sodaa-video"></iframe>
    <h5>NDSU School of Design, Architecture and Art</h5>
    <a href="https://www.ndsu.edu/sodaa/" target="_blank" style="color: black">Visit Website</a>`
);

// create DOM element for the marker of SODAA
// var el = document.createElement('div');
// el.id = 'RH_marker';

// create the marker for SODAA
// new mapboxgl.Marker(el)
//     .setLngLat([-96.790494, 46.875552])
//     .setOffset([0, 50])
//     .setPopup(popup_sodaa) // sets a popup on this marker
//     .addTo(map);


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

    loadGreenDots(testData);
});

// const data = db.ref("sodaa_alumni").once("value").then(snapshot => {

//     const data = snapshot.val();

//     let geoData = {
//         features: [],
//         type: "FeatureCollection"
//     }

//     for (id in data) {
//         const feature = {
//             geometry: {
//                 coordinates: [data[id].longtitude, data[id].latitude],
//                 type: "Point"
//             },
//             properties: {
//                 about: data[id].about,
//                 company: data[id].company,
//                 fname: data[id].fname,
//                 lname: data[id].lname,
//                 major: data[id].major,
//                 profileImage: data[id].profileImage,
//                 title: data[id].title,
//                 uid: id,
//                 userCity: data[id].userCity,
//                 userState: data[id].userState,
//                 userCountry: data[id].userCountry,
//                 website: data[id].website
//             },
//             type: "Feature"
//         };
//         geoData.features.push(feature);
//     }

//     lineLayer = {
//         type: "FeatureCollection",
//         features: []
//     };
//     geoData.features.forEach(feature => {

//         const newFeature = {
//             'type': 'Feature',
//             'properties': {},
//             'geometry': {
//                 'type': 'LineString',
//                 'coordinates': [
//                     [-96.790494, 46.875552],
//                     feature.geometry.coordinates
//                 ]
//             }
//         }
//         lineLayer.features.push(newFeature);
//     });


//     console.log("map loaded");

//     // map.addSource('lines', {
//     //     'type': 'geojson',
//     //     'data': lineLayer
//     // })；

//     // map.addLayer(greenLines)

//     map.addSource('people-data', {
//         'type': 'geojson',
//         'data': geoData
//     });

//     console.log(geoData);
//     map.addLayer(greenCircles);
// });

function loadGreenDots(data){
    let geoData = {
        features: [],
        type: "FeatureCollection"
    }

    for (id in data) {
            const feature = {
                geometry: {
                    coordinates: [data[id].longtitude, data[id].latitude],
                    type: "Point"
                },
                properties: {
                    about: data[id].about,
                    company: data[id].company,
                    fname: data[id].fname,
                    lname: data[id].lname,
                    major: data[id].major,
                    profileImage: data[id].profileImage,
                    title: data[id].title,
                    uid: id,
                    userCity: data[id].userCity,
                    userState: data[id].userState,
                    userCountry: data[id].userCountry,
                    website: data[id].website,
                    color: data[id].type === "one" ? "#ffcc00" : "#006633"
                },
                type: "Feature"
            };
            geoData.features.push(feature);
        
    }

    map.addSource('people-data', {
        'type': 'geojson',
        'data': geoData
    });

    console.log(geoData);
    map.addLayer(greenCircles);
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
        height: '360px',
        type: 'loop'
    }).mount();
});