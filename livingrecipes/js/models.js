function recipeHeader(data) {
    return buildDom({
        type: "div",
        props: {
            className: "recipe-header"
        },
        children:[
            {
                type: "div",
                props: {
                    className: "row"
                },
                children: [
                    {
                        type: "h4",
                        props: {
                            className: "col-8",
                            innerHTML: data.recipeName
                        }
                    },{
                        type: "p",
                        props: {
                            className: "col-4",
                            innerHTML: "Level: " + data.level
                        }
                    }
                    
                ]
            },
            {
                type: "p",
                props: {
                    className: "text-small",
                    innerHTML: data.location
                }
            }
        ]
    })
}

function recipeContent(data) {
    return (
        buildDom({
            type: "div",
            props: {
                className: "card recipe-information"
            },
            children: [
                {
                    type: "img",
                    props: {
                        className: "card-img-top",
                        src: data.image
                    }
                },
                {
                    type: "div",
                    props: {
                        className: "card-body"
                    },
                    children: [
                        {
                            type: "h5",
                            props: {
                                className: "card-text section-title",
                                innerHTML: "STORY"
                            }
                        },
                        {
                            type: "p",
                            props: {
                                className: "card-text",
                                innerHTML: `<b>About this recipe</b><br>${data.description}`
                            }
                        },
                        {
                            type: "p",
                            props: {
                                className: "card-text",
                                innerHTML: `<b>Story</b><br>${data.story}`
                            }
                        },
                        {
                            type: "h5",
                            props: {
                                className: "card-text section-title",
                                innerHTML: "INGREDIENTS"
                            }
                        },
                        {
                            type: "ul",
                            props: {
                                className: "card-text list-text",
                                innerHTML: listItems(data.ingredients, "li")
                            }
                        },
                        {
                            type: "h5",
                            props: {
                                className: "card-text section-title",
                                innerHTML: "INSTRUCTIONS"
                            }
                        },
                        {
                            type: "ol",
                            props: {
                                className: "card-text list-text",
                                innerHTML: listItems(data.instruction, "li")
                            }
                        },
                    ]
                }
            ]
        })
    );
}

function listItems(data, elementType) {
    let htmlContent = "";
    data.forEach( item => {
        htmlContent += `<${elementType}>${item}</${elementType}>`;
    });
    return htmlContent;
}

function recipeList(data) {
    const btnBack = document.querySelector(".btn-back");
    if (btnBack) {
        btnBack.remove();
    }
    const ele = buildDom({
        type: "div",
        props: {
            className: "recipe-list-container"
        },
        children: [{
            type: "h5",
            props: {
                innerHTML: "RECIPES"
            }
        }]
    });

    data.forEach( item => {
        ele.append(buildDom({
            type: "div",
            props: {
                className: "card",
            }, 
            children: [
                {
                    type: "img",
                    props: {
                        className: "card-img-top",
                        src: item.image
                    }
                },
                {
                    type: "div",
                    props: {
                        className: "card-body"
                    },
                    children: [
                        
                        {
                            type: "p",
                            props: {
                                className: "card-text text-small",
                                innerHTML: item.recipeName
                            }
                        }

                    ]
                }
            ],
            events: {
                click: e => {
                    document.querySelector(".pop-up").prepend(btnReturn(data))
                    createRecipe(".popup-body", item);
                }
            }
        }))
    });

    return ele;
}

function btnReturn(data) {
    
    return buildDom({
        type: "p",
        props: {
            innerHTML: "Back",
            className: "btn-back"
        },
        events: {
            click: e => {
                // TODO: instead of recreate the list, hide/show the list to save data transaction
                popupBody.innerHTML = "";
                popupBody.append(recipeList(data));
            }
        }
    })
}