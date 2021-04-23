function addListItem(targetSelector, dataSet) {
    const targetContainer = document.querySelector(targetSelector);

    dataSet.forEach( data => {
        targetContainer.append(createCard(data));
    })
    

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
                type: "h4",
                props: {
                    className: "card-title",
                    innerHTML: data.gameName
                }
            },{
                type: "p",
                props: {
                    className: "card-text",
                    innerHTML: data.memory
                }
            },{
                type: "p",
                props: {
                    className: "card-text",
                    innerHTML: `${data.userCity} ${data.userState} ${data.userCountry}`
                }
            },{
                type: "p",
                props: {
                    className: "card-text",
                    innerHTML: `${data.genre}`
                }
            },{
                type: "p",
                props: {
                    className: "card-text",
                    innerHTML: `${data.forward}`
                }
            },{
                type: "p",
                props: {
                    className: "card-text",
                    innerHTML: `${data.pitch}`
                }
            }
        ]
    }));
    return card;
}
