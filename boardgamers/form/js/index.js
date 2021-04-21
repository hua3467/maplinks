const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

let questionIndex = 0;
let game = {};

const allQuestions = document.querySelectorAll(".form-group");
allQuestions[0].classList.remove("hide");

btnNext.addEventListener("click", e => {


        if (questionIndex >= allQuestions.length - 1) {
            
            if (!game.city || game.city.length < 1) {
                alert("city is required.");
            } else if (!game.state || game.state.length < 1) {
                alert("state is required.");
            } else if (!game.country || game.country.length < 1) {
                alert("country is required.");
            } else {
                
                uploadData(game);
            }
            questionIndex = allQuestions.length - 1;
            
        } else {

            if (validate(allQuestions[questionIndex].firstChild.nextSibling)) {
                questionIndex++;
                btnPrev.disabled = false;
                switchQuestion(questionIndex, 1);
                if (questionIndex === allQuestions.length - 1) {
                    e.target.innerHTML = "Submit";
                }
            } else {
                alert("this is required");
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