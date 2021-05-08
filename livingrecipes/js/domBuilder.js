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
                    }]
                }]
            }
        ]
    }));

}


function createRecipe(targetSelector, data){
    const container =  document.querySelector(targetSelector);
    console.log(data);
    container.append(recipeHeader(data));
    container.append(recipeContent(data));

}

