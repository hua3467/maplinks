const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const questionInputs = document.querySelectorAll(".question-input");

let woodJoint = {};

const allQuestions = document.querySelectorAll(".form-group");

for ( let i = 0; i < questionInputs.length; i++) {
    questionInputs[i].addEventListener("change", e => {
        if(e.target.name === "image") {
            game[e.target.name] = e.target.files[0];
            e.target.nextElementSibling.style = "display: none;";
        } else {
            game[e.target.name] = e.target.value;
            e.target.nextElementSibling.style = "display: none;";
        }
        
    });
}

btnNext.addEventListener("click", e => {

    if (validate(woodJoint)) {
        woodJoint.gid = Date.now();
        console.log(woodJoint);
        uploadData(woodJoint);
    } 

});

