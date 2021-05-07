const stepBtns = document.querySelectorAll(".btn-step");
const btnFinish = document.querySelector("#btnFinish");
const forms = document.querySelectorAll(".form");
const inputUserImage = document.querySelector("#fileImage");
const imagePreview = document.querySelector("#imagePreview");

const overviewInputs = document.querySelectorAll(".form-overview");

const btnAddIngredient = document.querySelector("#btnAddIngredient");
const newIngredient = document.querySelector("#newIngredient");
const btnAddStep = document.querySelector("#btnAddStep");
const newStep = document.querySelector("#newStep");

let recipe = {
    ingredients: [],
    instruction: []
};

for(let i = 0; i < stepBtns.length; i++) {
    stepBtns[i].addEventListener("click", e => {
        if (stepBtns[i].id === "btnToIngredients") {
            if (validateInputGroup(overviewInputs)) {
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
        addListedItem("#ingredientList ul", newIngredient.value, "ingredients");
        newIngredient.value = "";
    }
});

btnAddStep.addEventListener("click", e => {
    if (validateSingle(newStep)) {
        recipe.ingredients.push(newStep.value);
        addListedItem("#instructionList ul", newStep.value, "instruction");
        newStep.value = "";
    }
});

function addListedItem(selector, value, insertKey) {
    const container =  document.querySelector(selector);
    container.append(buildDom({
        type: "li",
        props: {
            className: "recipe-list-item d-flex justify-content-between",
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
                        for (let i = 0; i < recipe[insertKey].length; i++) {
                            if (recipe[insertKey][i] === e.target.previousSibling.innerHTML) {
                                recipe[insertKey].splice(i, 1);
                            }
                        }
                        e.target.parentNode.remove();
                    }
                }
            }
        ]
    }));
}