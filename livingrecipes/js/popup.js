const navBar = document.querySelector(".nav-bar");
var popup = document.querySelector(".pop-up");
var popupBody = document.querySelector(".popup-body");
const btnClost = document.querySelector(".pop-up .close");
const btnHome = document.querySelector("#btnHome");
const btnLike = document.querySelector("#btnLike");
const btnAdd = document.querySelector("#btnAdd");
var btnBack = document.querySelector(".btn-back");

btnClost.addEventListener("click", e => {
    btnClost.parentNode.classList.add("hide");
});

btnLike.addEventListener("click", e => {
    loadData((data) => {
        if (btnBack) {
            btnBack.remove();
        }
        popupBody.innerHTML = "";
        popupBody.append(recipeList(data));
        popup.classList.remove("hide");
    });
})