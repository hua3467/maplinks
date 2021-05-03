const formContainer = document.querySelector(".form-container");
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
function validateInputGroup(inputBoxes) {
    let result = true;
    let inputValidates = [];
    for (let item of inputBoxes) {
        inputValidates.push(validateSingle(item));
    }
    console.log(inputValidates);
    return !inputValidates.some( element => element === false);
}

/**
 * 
 * @param {Node} input the single input node that needs validate
 * @returns Boolean
 */
function validateSingle(input) {
    if (input.required === true) {
        if (input.value.length > 0) {
            if (input.nextElementSibling && input.nextElementSibling.classList.contains("valid-feedback")) {
                input.nextElementSibling.remove();
                console.log("invalide")
                
            }
            return true;
        } else {
            if (input.nextElementSibling && input.nextElementSibling.classList.contains("valid-feedback")) {
                input.nextElementSibling.remove();
            }
            insertNodeAfter(input, buildDom({
                type: "div",
                props: {
                    className: "valid-feedback",
                    innerHTML: "This is required",
                    style: "display: block"
                }
            }));
            return false;
        }

    } else {
        if (input.nextElementSibling && input.nextElementSibling.classList.contains("valid-feedback")) {
            input.nextElementSibling.remove();
            console.log("not required")
            
        }
        return true;
    }
}
