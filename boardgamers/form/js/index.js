const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const questionInputs = document.querySelectorAll(".question-input");

let questionIndex = 0;
let game = {};

const allQuestions = document.querySelectorAll(".form-group");
allQuestions[0].classList.remove("hide");

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

    if (questionIndex >= allQuestions.length - 1) {
        
        if (validate(allQuestions[questionIndex])) {
            game.gid = Date.now();
            console.log(game);
            uploadData(game);
        }
        questionIndex = allQuestions.length - 1;        
        
    } else {

        if (validate(allQuestions[questionIndex])) {
            questionIndex++;
            btnPrev.disabled = false;
            switchQuestion(questionIndex, 1);
            if (questionIndex === allQuestions.length - 1) {
                e.target.innerHTML = "Submit";
            }
        } 
        
    }

    console.log(questionIndex);
});

btnPrev.addEventListener("click", e => {
    questionIndex--;
    if (questionIndex < 0) {
        questionIndex = 0;
    } else {
        switchQuestion(questionIndex, -1);
        if (questionIndex === 0) {
            e.target.disabled = true;
        } else if (questionIndex === allQuestions.length - 2) {
            btnNext.innerHTML = "Next";
        }
    }
});