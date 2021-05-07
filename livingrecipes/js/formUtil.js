function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.style = `background: url(${e.target.result}) #eee; background-size: contain; background-position: center top; background-repeat: no-repeat`;
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
                console.log("valide");
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

function validateList(listObj) {
    if(listObj.length < 1) {
        return false;
    }
    return true;
}


const notifBar = document.querySelector("#notifBar");

function showNotification(container, message) {
    const bar = document.querySelector(container);
    if (bar.classList.contains("hide")) {
        bar.classList.remove("hide");
        bar.innerHTML = '<p>' + message + '</p><i class="fas fa-times-circle"></i>';
    }
}

if (notifBar) {
    notifBar.addEventListener("click", e => {
        e.currentTarget.classList.add("hide");
    });
}

