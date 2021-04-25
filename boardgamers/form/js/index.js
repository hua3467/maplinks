const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const questionInputs = document.querySelectorAll(".question-input");

let questionIndex = 0;
let game = {};

const allQuestions = document.querySelectorAll(".form-group");
allQuestions[0].classList.remove("hide");

for ( let i = 0; i < questionInputs.length; i++) {
    questionInputs[i].addEventListener("change", e => {
        game[e.target.name] = e.target.value;
    });
}

btnNext.addEventListener("click", e => {

    if (questionIndex >= allQuestions.length - 1) {
        
        if (!game.userCity || game.userCity.length < 1) {
            alert("city is required.");
        } else if (!game.userState || game.userState.length < 1) {
            alert("state is required.");
        } else if (!game.userCountry || game.userCountry.length < 1) {
            alert("country is required.");
        } else {
            game.gid = Date.now();
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