const stepBtns = document.querySelectorAll(".btn-step");
const btnFinish = document.querySelector("#btnFinish");
const forms = document.querySelectorAll(".form");
const inputUserImage = document.querySelector("#fileImage");
const imagePreview = document.querySelector("#imagePreview");

for(let i = 0; i < stepBtns.length; i++) {
    stepBtns[i].addEventListener("click", e => {
        for(let i = 0; i < forms.length; i++) {
            if (!forms[i].classList.contains("hide")) {
                forms[i].classList.add("hide");
            }
        }
        document.querySelector("#" + e.target.dataset.show).classList.remove("hide");
    });
}

btnFinish.addEventListener("click", e => {
    window.open("map.html");
})

inputUserImage.addEventListener("change", e => {
    if (validateFileType(e.target.files[0]) && validateFileSize(e.target.files[0])) {
        readURL(e.target);
    } else {
        e.target.value = "";
    }
});