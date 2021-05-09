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
    return `
        <div class="row">
            <div class="col">
                <div> 
                    <div class="text-right">
                        <p>recipeID: ${data.id}</p>
                    </div>
                    <div class="border-top border-bottom d-flex justify-content-between recipe-title">
                        <p><b>${data.recipeTitle}</b></p>
                        <p><i class="fas fa-stopwatch"></i> ${convertHr(data.time)} <i class="fas fa-bolt"></i> ${data.difficulty}</p>
                    </div>
                    <div>
                        <h4 class="section-title border-bottom">Ingredients</h4>
                        <ul class="ingredients">
                            ${toList(data.ingredients)}
                        </ul>
                    </div>
                </div>
        
            </div>
            <div class="col recipe-story">
                <div>
                    <p>Posted by ${data.userName}</p>
                </div>
                <div>
                    <h4 class="border-bottom">Story about this recipe</h4>
                    <p>${data.story}</p>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="instruction col">
                <h4 class="section-title border-bottom">Instruction</h4>
                <ol>
                ${toList(data.instruction)}
                </ol>
            </div>
        </div>
    `;
}

function toList(arr) {
    let ele = '';
    arr.forEach( item => {
        ele += `<li>${item}</li>`
    });
    return ele;
}

function listItems(data, elementType) {
    let htmlContent = "The user didn't provide this information.";
    if (data) {
        htmlContent = "";
        data.forEach( item => {
            if (item) {
                htmlContent += `<${elementType}>${item}</${elementType}>`;
            }
            
        });
    }
    
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