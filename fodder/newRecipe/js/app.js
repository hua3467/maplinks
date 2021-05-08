const stepBtns = document.querySelectorAll(".btn-step");
const btnFinish = document.querySelector("#btnFinish");
const forms = document.querySelectorAll(".form");
// const inputUserImage = document.querySelector("#fileImage");
// const imagePreview = document.querySelector("#imagePreview");

const overviewInputs = document.querySelectorAll(".form-overview");


const timeRange = document.querySelector("#time");

const btnAddIngredient = document.querySelector("#btnAddIngredient");
const newIngredient = document.querySelector("#newIngredient");
const btnAddInstruction = document.querySelector("#btnAddStep");
const newInstruction = document.querySelector("#newInstruction");

let recipe = {
    id: Date.now(),
    time:0,
    ingredients: [],
    instruction: []
};

for (let i = 0; i < stepBtns.length; i++) {
    stepBtns[i].addEventListener("click", e => {
        if (stepBtns[i].id === "btnToInstructions") {
            if (validateInputGroup(overviewInputs)) {
                for (let j = 0; j < forms.length; j++) {
                    if (!forms[j].classList.contains("hide")) {
                        forms[j].classList.add("hide");
                    }
                }
                document.querySelector("#" + e.target.dataset.show).classList.remove("hide");
            };
        } else {
            for (let j = 0; j < forms.length; j++) {
                if (!forms[j].classList.contains("hide")) {
                    forms[j].classList.add("hide");
                }
            }
            document.querySelector("#" + e.target.dataset.show).classList.remove("hide");
        }


    });
}

btnFinish.addEventListener("click", e => {
    if (recipe.time === 0) {
        alert("Cooking time cannot be 0!");
    } else if (recipe.instruction.length < 1) {
        alert("Please add some instructions.");
    } else if (recipe.ingredients.length < 1) {
        alert("Please add ingredients.");
    } else {
        uploadData(recipe);
    }
    
});



btnAddIngredient.addEventListener("click", e => {
    if (validateSingle(newIngredient)) {
        document.querySelector("#ingredientList h4").classList.add("hide");
        recipe.ingredients.push(newIngredient.value);
        addListedItem("#ingredientList ul", newIngredient.value, "ingredients");
        newIngredient.value = "";
    }
});

btnAddInstruction.addEventListener("click", e => {
    if (validateSingle(newInstruction)) {
        document.querySelector("#instructionList h4").classList.add("hide");
        recipe.instruction.push(newInstruction.value);
        addListedItem("#instructionList ol", newInstruction.value, "instruction");
        newInstruction.value = "";
    }
});

timeRange.addEventListener("input", e => {
    if (e.target.value > 12) {
        document.querySelector("#timeDisplay").innerHTML = "> 12 Hours"
    } else {
        document.querySelector("#timeDisplay").innerHTML = e.target.value > 1 ? e.target.value  + " Hours" : e.target.value * 60 + " Minutes";
    }
});
timeRange.addEventListener("change", e => {
    recipe.time = e.target.value;
})

for ( item of overviewInputs ) {
    item.addEventListener("change", e => {
        recipe[e.target.name] = e.target.value;
    });
}

function addListedItem(selector, value, insertKey) {
    const container = document.querySelector(selector);
    container.append(buildDom({
        type: "li",
        children: [{
            type: "div",
            props: {
                className: "recipe-list-item d-flex justify-content-between",
            },
            children: [{
                type: "p",
                props: {
                    innerHTML: value
                }
            }, {
                type: "span",
                props: {
                    className: "btn-remove",
                    innerHTML: "remove"
                },
                events: {
                    click: e => {
                        for (let i = 0; i < recipe[insertKey].length; i++) {
                            if (recipe[insertKey][i] === e.target.previousSibling.innerHTML) {
                                recipe[insertKey].splice(i, 1);
                            }
                        }
                        e.target.parentNode.parentNode.remove();
                        if (recipe[insertKey].length === 0) {
                            if (insertKey === "instruction") {
                                document.querySelector("#instructionList h4").classList.remove("hide");
                            } else if (insertKey === "ingredients") {
                                document.querySelector("#ingredientList h4").classList.remove("hide");
                            }
                        }
                    }
                }
            }]
        }]

    }));
}