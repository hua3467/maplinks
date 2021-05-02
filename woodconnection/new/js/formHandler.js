
const formContainer = document.querySelector(".form-container");
const notifBar = document.querySelector("#notifBar");
const uploadProgress = document.querySelector(".progress-bar");
const progressContainer = document.querySelector("#progressContainer");
const btnAddImg = document.querySelector("#btnAddImg");
const inputFile = document.querySelector("#inputFile");
const imagePreview = document.querySelector(".input-image-preview");


btnAddImg.addEventListener("click", e => {
    inputFile.click();
});

inputFile.addEventListener("change", e => {
    if (validateFileType(e.target.files[0]) && validateFileSize(e.target.files[0])) {
        readURL(imagePreview, e.target);
        btnAddImg.innerHTML = "Replace Image";;
    } else {
        e.target.value = "";
    }
});

function readURL(preview, input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            preview.style = `background: url(${e.target.result}) #eee; background-size: contain; background-position: center top; background-repeat: no-repeat`;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

/**
 * 
 * @param {Node} inputBoxes a form-group node that contains one or mutiple input, select, or textarea elements
 * @returns Boolean
 */
function validate(inputBoxes) {

    let result = true;
    for (let item of inputBoxes.children) {
 
        if (item.tagName == "INPUT" || item.tagName == "SELECT" || item.tagName == "TEXTAREA") {

            if (item.required === true) {

                if (item.value.length > 0) {
                    if (item.nextElementSibling.classList.contains("valid-feedback")) {
                        item.nextElementSibling.style = "display: none";
                    }
                    
                } else {
                    if (item.nextElementSibling.classList.contains("valid-feedback")) {
                        item.nextElementSibling.style = "display: block";
                    }
                    result = false;
                }

            } else {
                if (item.nextElementSibling.classList.contains("valid-feedback")) {
                    item.nextElementSibling.style = "display: none";
                }
            }

        }

    }

    return result;
    
}
