function addListItem(targetSelector, data) {
    const targetContainer = document.querySelector(targetSelector);
    targetContainer.append(buildDom({
        type: "li",
        props: {
            className: "ppl-card"
        },
        children: [
            {
                type: "div",
                props: {
                    className: "ppl-card-cover",
                    style: "background: url(${property['image-url']}) rgba(0,0,0,0.15); background-size: cover;background-repeat: no-repeat;background-position: center;"
                }
            },
            {
                type: "div",
                props: {
                    className: "ppl-card-title"
                },
                children: [{
                    type: "p",
                    props: {
                        className: "ppl-name",
                        innerHTML: data.title
                    }
                },{
                    type: "div",
                    props: {
                        className: "title-link"
                    },
                    children: [{
                        type: "p",
                        props: {
                            className: "ppl-title",
                            innerHTML: "Title"
                        }
                    }, {
                        type: "a",
                        props: {
                            href: parseURL(property.web),
                            target: "_blank",
                            innerHTML: "Website"
                        }
                    }]
                }]
            }
        ]
    }));

}

let popup_HTML = function (featureObj) {
    console.log(featureObj);
    let container =
        `<div class="splide"><div class="splide__track"><ul class="splide__list">`;
    featureObj.forEach(feature => {

        // TODO create a HTML slider to be added into popup.
        let cover = feature.properties['profileImage'] ?
            `<div class="cover" style="background: url(${feature.properties['profileImage']}) rgba(0,0,0,0.1); background-size: cover;background-repeat: no-repeat;background-position: center; gackground-blend-mode: multiply"></div>` :
            `<div class="cover" style="background: rgba(0,0,0,0.1);"></div>`;
        container += `<li class="splide__slide">
                        <div class="slide-header">
                            ${cover}
                            <div class="slide-header-title">
                                <h4>${feature.properties.fname} ${feature.properties.lname}</h4>
                                <a href="${parseURL(feature.properties.website)}" target="_blank">${feature.properties.company} <i class="fas fa-external-link-alt"></i></a> | ${feature.properties.userCity}, ${feature.properties.userState} 
                                </div>
                            </div>
                            
                            <div class="slide-body">
                            <p>${feature.properties.about}</p>
                        </div>
                        </li>`
    });
    container += `</ul></div></div>`
    return container;
}

function createPopup(targetSelector){

}