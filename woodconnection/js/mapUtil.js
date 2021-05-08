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

const colors = {
    Mystery: "#006633",
    Action: "#22aa00",
    Strategy: "#aa33ee",
    Puzzle: "#00ff88"
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

    geoFeature.properties.color = "#CE451C";

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
                            <h4 class="card-title">${feature.properties.jointName}</h4>
                            <hr>
                            <p class="card-text user-info"><i>by</i> ${feature.properties.name}, ${feature.properties.age} years old, lvl ${feature.properties.level}</p>
                            <p class="card-text user-info"><i>at</i> ${feature.properties.location}</p>
                            <hr>
                            <p class="card-text"><b>Use/Purpose: </b>${feature.properties.purpose ? feature.properties.purpose : "???"}</p>
                            <p class="card-text"><b>Wood Type: </b>${feature.properties.woodType ? feature.properties.woodType : "???"}</p>
                            <p class="card-text"><b>Tools Used: </b>${feature.properties.requiredTool ? feature.properties.requiredTool : "???"}</p>
                            <p class="card-text"><b>Cultural Origin: </b>${feature.properties.origin ? feature.properties.origin : "???"}</p>
                            <br>
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
                    <h5>${markerData.gameName}</h5>
                    <p>${markerData.genre}</p>
                    <p>${markerData.pitch}</p>
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