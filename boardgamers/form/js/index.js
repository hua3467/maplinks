const formContainer = document.querySelector(".form-container");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

let questionIndex = 0;
let game = {};

loadQuestions(questions);
const allQuestions = document.querySelectorAll(".question");
allQuestions[0].classList.remove("hide");

btnNext.addEventListener("click", e => {
    questionIndex++;
    if (questionIndex >= questions.length) {
        // TODO: submit form
    } else {
        btnPrev.disabled = false;
        switchQuestion(questionIndex, 1);
        if (questionIndex === questions.length - 1) {
            e.target.innerHTML = "Submit";
        }
    }
    
});

btnPrev.addEventListener("click", e => {
    questionIndex--;
    if (questionIndex < 0) {
        questionIndex = 0;
    } else {
        switchQuestion(questionIndex, -1);
        if (questionIndex === 0) {
            e.target.disabled = true;
        } else if (questionIndex === questions.length - 2) {
            btnNext.innerHTML = "Next";
        }
    }
});















/**
 * 
 * @param {Number} i the index of the next question.
 * @param {Number} order 1 for the next question, -1 for the previous question
 */
function switchQuestion(i, order) {
    if (order === 1) {
        allQuestions[i - 1].classList.add("hide");
    } else if (order === -1) {
        allQuestions[i + 1].classList.add("hide"); 
    }
    allQuestions[i].classList.remove("hide");
}

function loadQuestions(questionObj){

    for ( let i = 0; i < questionObj.length; i++) {
        formContainer.append(
            buildDom({
                type: "div",
                props: {
                    className: "question hide"
                },
                children: [{
                    type: "label",
                    props: {
                        htmlFor: questionObj[i].name,
                        innerHTML: (i + 1) + '. ' + questionObj[i].label
                    }
                }, {
                    type: questionObj[i].tag,
                    props: {
                        name: questionObj[i].name,
                        type: questionObj[i].type,
                        className: "full-width",
                        required: questionObj[i].name.required
                    },
                    events: {
                        change: e => {
                            game[questionObj[i].name] = e.target.value;
                            console.log(game);
                        }
                    }
                }]
            })
        );
    }
    
}
