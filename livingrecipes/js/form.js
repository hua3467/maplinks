const stepBtns = document.querySelectorAll(".btn-step");
const btnFinish = document.querySelector("#btnFinish");
const forms = document.querySelectorAll(".form");
const inputUserImage = document.querySelector("#fileImage");
const imagePreview = document.querySelector("#imagePreview");

const btnAddIngredient = document.querySelector("#btnAddIngredient");
const newIngredient = document.querySelector("#newIngredient");
const ingredientContainer = document.querySelector("#ingredientList container");

let recipe = {ingredients:[]};

for(let i = 0; i < stepBtns.length; i++) {
    stepBtns[i].addEventListener("click", e => {
        if (stepBtns[i].id === "btnToIngredients") {
            if (validateInputGroup(document.querySelectorAll(".form-overview"))) {
                for(let j = 0; j < forms.length; j++) {
                    if (!forms[j].classList.contains("hide")) {
                        forms[j].classList.add("hide");
                    }
                }
                document.querySelector("#" + e.target.dataset.show).classList.remove("hide");
            };
        } else if (stepBtns[i].id === "btnToInstructions") {
            if (validateList(recipe.ingredients)) {
                for(let j = 0; j < forms.length; j++) {
                    if (!forms[j].classList.contains("hide")) {
                        forms[j].classList.add("hide");
                    }
                }
                document.querySelector("#" + e.target.dataset.show).classList.remove("hide");
            };
        } else {
            for(let j = 0; j < forms.length; j++) {
                if (!forms[j].classList.contains("hide")) {
                    forms[j].classList.add("hide");
                }
            }
            document.querySelector("#" + e.target.dataset.show).classList.remove("hide");
        }
        
        
    });
}

btnFinish.addEventListener("click", e => {
    window.open("map.html");
});

inputUserImage.addEventListener("change", e => {
    if (validateFileType(e.target.files[0]) && validateFileSize(e.target.files[0])) {
        readURL(e.target);
    } else {
        e.target.value = "";
    }
});

btnAddIngredient.addEventListener("click", e => {
    if (validateSingle(newIngredient)) {
        recipe.ingredients.push(newIngredient.value);
        addIngredient("#ingredientList ul", newIngredient.value);
        newIngredient.value = "";
    }
});

function addIngredient(selector, value) {
    const container =  document.querySelector(selector);
    container.append(buildDom({
        type: "li",
        props: {
            className: "ingredient-item d-flex justify-content-between",
        },
        children: [
            {
                type: "p",
                props: {
                    innerHTML: value
                }
            },{
                type: "span",
                props: {
                    innerHTML: "remove"
                },
                events: {
                    click: e => {
                        for (let i = 0; i < recipe.ingredients.length; i++) {
                            if (recipe.ingredients[i] === e.target.previousSibling.innerHTML) {
                                recipe.ingredients.splice(i, 1);
                            }
                        }
                        e.target.parentNode.remove();
                    }
                }
            }
        ]
    }));
}