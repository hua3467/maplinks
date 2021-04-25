const navBar = document.querySelector(".nav-bar");

const btnClost = document.querySelector(".pop-up .close");

btnClost.addEventListener("click", e => {
    btnClost.parentNode.classList.add("hide");
});

navBar.addEventListener("click", e => {
    btnClost.parentNode.classList.remove("hide");
})

createRecipe(".pop-up", testData[0]);
