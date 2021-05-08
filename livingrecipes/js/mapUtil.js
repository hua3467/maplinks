const greenCircles = {
    'id': 'end-points',
    'type': 'circle',
    'source': 'point-data',
    'paint': {
        'circle-radius': 10,
        'circle-opacity': 0.6,
        'circle-stroke-width': 2,
        'circle-color': ['get', 'color'] // get color from properties
    },
    'filter': ['==', '$type', 'Point']
}

/**
 * 
 * @param {Object} dataObj 
 * @returns 
 */
function makeGeoData(dataObj){

    let geoData = {
        features: [],
        type: "FeatureCollection"
    }

    for (key in dataObj) {
        geoData.features.push(makeGeoFeature(dataObj[key]));
    }

    return geoData;
}

/**
 * 
 * @param {Object} data 
 * @returns geolocation object
 */
function makeGeoFeature(data) {

    let geoFeature = {
        geometry: {
            coordinates: data.coordinates,
            type: "Point"
        },
        properties: data,
        type: "Feature"
    };

    geoFeature.properties.color = "#7B6C5E";

    return geoFeature;
};

function setPointColor(obj) {

}


function popup_HTML(featureObj) {
    console.log(featureObj);
    let container =
        `<div class="splide"><div class="splide__track"><ul class="splide__list">`;
    featureObj.forEach(feature => {

        // TODO create a HTML slider to be added into popup.
        let cover = feature.properties.image ?
            `<div class="cover card-img-top" style="background: url(${feature.properties.image}) rgba(0,0,0,0.1); background-size: cover;background-repeat: no-repeat;background-position: center; gackground-blend-mode: multiply"></div>` :
            `<div class="cover card-img-top" style="background: rgba(0,0,0,0.1);"></div>`;
        container += `<li class="splide__slide card">
                        ${cover}
                        <div class="card-body">
                            <h4 class="card-title">${feature.properties.recipeName}</h4>
                            <p class="card-text">${feature.properties.description}</p>
                            <p class="card-text">${feature.properties.story}</p>
                        </div>
                        </li>`
    });
    container += `</ul></div></div>`
    return container;
}

function addMarker(markerData, popupModel) {    

    let content =`<div class="row">
                    <div class="col-4"><img class="user-photo" src="${markerData.image}"/></div>
                    <div class="col-8">
                    <h5>${markerData.recipeName}</h5>
                    <p>${markerData.description}</p>
                    <p>${markerData.story}</p>
                    </div>
                 </div>`;


    // create the popup
    var popup = new mapboxgl.Popup({
        offset: 60
    }).setHTML(content);

    // create DOM element for the marker of User
    var el = document.createElement('div');
    el.className = 'marker';
    el.style = `background-image: url(${markerData.image})`

    // create the marker for User
    var marker = new mapboxgl.Marker(el)
        .setLngLat(markerData.coordinates)
        .setOffset([0, -60])
        .setPopup(popup)
        .addTo(map);
}