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
        'circle-color': ['get', 'color'] 
    },
    'filter': ['==', '$type', 'Point']
}

const yellowLines = {
    'id': 'net-lines',
    'type': 'line',
    'source': 'lines',
    'layout': {
        'line-join': 'round',
        'line-cap': 'round'
    },
    'paint': {
        'line-color': '#ffcc00',
        'line-width': 1,
        'line-opacity': 0.5,
        'line-dasharray': [2, 4]
    }
}

const yellowCircles = {
    'id': 'people-end-points',
    'type': 'circle',
    'source': 'people-data',
    'paint': {
        'circle-radius': 6,
        'circle-color': '#ffcc00',
        'circle-opacity': 0.4,
        'circle-stroke-color': '#ffcc00',
        'circle-stroke-width': 2,
    },
    'filter': ['==', '$type', 'Point']
}

/**
 * 
 * @param {Object} data 
 * @returns geolocation object
 */
function parseGeoData(data) {
    let geoObj = {};

    return geoObj;
};

function createPopup(selector, data) {
    const container = document.querySelector(selector);

    container.append(buildDom({
        type: "div",
        props: {
            style: popupStyle,
            className: "point-popup",
            innerHTML: data.name
        },
        events: {
            click: clickEvent
        }
    }));
}