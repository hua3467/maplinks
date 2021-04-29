const greenLines = {
    'id': 'net-lines',
    'type': 'line',
    'source': 'lines',
    'layout': {
        'line-join': 'round',
        'line-cap': 'round'
    },
    'paint': {
        'line-color': '#006633',
        'line-width': 1,
        'line-opacity': 0.5,
        'line-dasharray': [2, 4]
    }
}

const greenCircles = {
    'id': 'people-end-points',
    'type': 'circle',
    'source': 'people-data',
    'paint': {
        'circle-radius': 10,
        'circle-opacity': 0.6,
        'circle-stroke-width': 2,
        'circle-color': ['get', 'color'] // get color from properties
    },
    'filter': ['==', '$type', 'Point']
}

const colors = {
    Strategic: "#ffcc00",
    Mystery: "#006633"
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

    geoFeature.properties.color = colors[data.genre];

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
                            <h4 class="card-title">${feature.properties.gameName}</h4>
                            <p class="card-text">${feature.properties.pitch}</p>
                            <p class="card-text">${feature.properties.memory}</p>
                        </div>
                        </li>`
    });
    container += `</ul></div></div>`
    return container;
}