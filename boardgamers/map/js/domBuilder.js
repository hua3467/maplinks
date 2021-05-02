function filterGenreBtn(item) {
    const btnElement = buildDom({
        type: "button",
        props: {
            className: "btn btn-outline-dark btn-sm",
            innerHTML: item
        },
        events: {
            click: e => { clickGenreBtn(item) }
        }
    });
    return btnElement;
} 

function clickGenreBtn(item) {
    console.log("click");
    removePoints();
    loadDataByFilter("genre", item, itemData => {
        if (itemData) {
            console.log(itemData);
            loadPoints(itemData, greenCircles);
            // addMarker(itemData);
            addListItem(".data-list", itemData);
        } else {
            console.log("No data found.");
        }
    });
}

function addListItem(targetSelector, dataSet) {
    const targetContainer = document.querySelector(targetSelector);
    targetContainer.innerHTML = "";
    for ( let key in dataSet ) {
        targetContainer.append(createCard(dataSet[key]));
    }

}

function createCard(data){
    const card = buildDom({
        type: "div",
        props: {
            className: "card row"
        }
    });

    card.append(buildDom({
        type: "img",
        props: {
            className: "card-img-top",
            src: data.image
        }
    }), buildDom({
        type: "div",
        props: {
            className: "card-body"
        },
        children: [
            {
                type: "p",
                props: {
                    className: "card-text card-genre btn btn-outline-dark btn-sm ",
                    innerHTML: `${data.genre}`
                }
            },{
                type: "h4",
                props: {
                    className: "card-title",
                    innerHTML: data.gameName
                }
            },{
                type: "p",
                props: {
                    className: "card-text text-sm card-location",
                    innerHTML: `${data.location}`
                }
            },{
                type: "p",
                props: {
                    className: "card-text excerpt",
                    innerHTML: `<span>${shortenText(data.pitch)}</span> <a href="#" class="btn-view-more">View More</a>`
                }
            }
        ]
    }));
    return card;
}
