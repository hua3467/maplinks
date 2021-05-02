const btnSubmit = document.querySelector("#btnSubmit");
const questionInputs = document.querySelectorAll(".form-container .form-control");

let woodJoint = {};

const allQuestions = document.querySelectorAll(".form-group");

for ( let i = 0; i < questionInputs.length; i++) {
    questionInputs[i].addEventListener("change", e => {
        if(e.target.name === "image") {
            woodJoint[e.target.name] = e.target.files[0];
            if (e.target.nextElementSibling && e.target.nextElementSibling.classList.contains("valid-feedback")) {
                e.target.nextElementSibling.style = "display: none;";
            }
        } else {
            woodJoint[e.target.name] = e.target.value;
            if (e.target.nextElementSibling && e.target.nextElementSibling.classList.contains("valid-feedback")) {
                e.target.nextElementSibling.style = "display: none;";
            }
            
        }
        
    });
}

btnSubmit.addEventListener("click", e => {

    if (validateInputGroup(questionInputs)) {
        woodJoint.gid = Date.now();
        console.log(woodJoint);
        uploadData(woodJoint);
    } 

});

