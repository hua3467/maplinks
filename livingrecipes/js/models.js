function recipeHeader(data) {
    return buildDom({
        type: "div",
        props: {
            className: "recipe-header row"
        },
        children:[
            {
                type: "div",
                props: {
                    className: "col-7"
                },
                children: [
                    {
                        type: "h4",
                        props: {
                            innerHTML: data.recipeName
                        }
                    },
                    {
                        type: "p",
                        props: {
                            className: "text-small",
                            innerHTML: data.location
                        }
                    }
                ]
            },
            {
                type: "p",
                props: {
                    className: "col-5",
                    innerHTML: "Difficulty: " + data.level
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
                className: "card"
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
