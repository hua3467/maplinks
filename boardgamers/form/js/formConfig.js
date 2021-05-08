const formContainer = document.querySelector(".form-container");
const btnArrowRight = document.querySelector(".splide__arrow--next");
const btnArrowLeft = document.querySelector(".splide__arrow--prev");
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

function showNotification (selector, message) {
    const bar = document.querySelector(selector);
    bar.classList.remove("hide");
    bar.innerHTML = '<p>' + message + '</p><i class="fas fa-times-circle"></i>';
}



// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Followings are Deleted
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------


const questions = [
    {
        label: "What is your favorite board game?",
        name: "gameName",
        tag: "input",
        type: "text",
        required: true
    },
    {
        label: "What is your most memorable experience playing this game?",
        name: "memory",
        tag: "textarea",
        type: "",
        required: true
    },
    {
        label: "What do you look forward to most in playing this game?",
        name: "forward",
        tag: "textarea",
        type: "",
        required: false
    },
    {
        label: "Give a short elevator pitch of how this game is played. OR Describe how the game is played in 10 words or less.",
        name: "pitch",
        tag: "textarea",
        type: "",
        required: false
    },
    {
        label: "Share a picture of the game.",
        name: "picture",
        tag: "input",
        type: "file",
        required: false
    },
    {
        label: "What genres of board games do you usually play?",
        name: "genres",
        tag: "input",
        type: "",
        required: false
    },
    {
        label: "Is there a board game you would like to play, but haven’t had the chance yet?",
        name: "wanted",
        tag: "input",
        type: "",
        required: false
    },
    {
        label: "What's your name?",
        name: "userName",
        tag: "input",
        type: "",
        required: false
    },
    {
        label: "What is your location? ",
        name: "location",
        tag: "div",
        type: "",
        required: false
    }
];

const states = `<option value=" ">Outside US</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                <option value=" ">Outside US</option>`;


// loadQuestions(questions);


/**
 * 
 * @param {Number} i the index of the next question.
 * @param {Number} order 1 for the next question, -1 for the previous question
 */
 function switchQuestion(i, order) {
    if (order === 1) {
        allQuestions[i - 1].classList.add("hide");
        btnArrowRight.click();
    } else if (order === -1) {
        allQuestions[i + 1].classList.add("hide"); 
        btnArrowLeft.click();
    }
    allQuestions[i].classList.remove("hide");
}

function loadQuestions(questionObj){

    
    for ( let i = 0; i < questionObj.length; i++) {

        if (questionObj[i].tag === "input" || questionObj[i].tag === "textarea") {

            formContainer.append(
                buildDom({
                    type: "form",
                    props: {
                        className: "question hide form-group"
                    },
                    children: [{
                        type: "label",
                        props: {
                            className: "text-lg",
                            htmlFor: questionObj[i].name,
                            innerHTML: (i + 1) + '. ' + questionObj[i].label
                        }
                    }, {
                        type: questionObj[i].tag,
                        props: {
                            name: questionObj[i].name,
                            type: questionObj[i].type,
                            className: "question-input full-width form-control-lg",
                            required: questionObj[i].required
                        },
                        events: {
                            change: e => {
                                game[questionObj[i].name] = e.target.value;
                                console.log(game);
                            }
                        }
                    }, {
                        type: "div",
                        props: {
                            className: "valid-feedback",
                            innerHTML: "This is required."
                        }
                    }]
                })
            );

        } else if (questionObj[i].name === "location") {

            formContainer.append(buildDom({
                type: "form",
                props: {
                    className: "question hide",
                    novalidate: true
                },
                children: [{
                    type: "label",
                    props: {
                        className: "text-lg",
                        innerHTML: `${i + 1}. What is your location?`
                    }
                },{
                    type: "div",
                    props: {
                        className: "question form-group",
                    },
                    children: [{
                        type: "label",
                        props: {
                            htmlFor: "city",
                            innerHTML: "City",
                            className: "text-sm"
                        }
                    }, {
                        type: "input",
                        props: {
                            name: "city",
                            className: "question-input full-width form-control-lg",
                            type: "text",
                            required: true
                        },
                        events: {
                            change: e => {
                                game[e.target.name] = e.target.value;
                                console.log(game);
                            }
                        }
                    }, {
                        type: "div",
                        props: {
                            className: "valid-feedback",
                            innerHTML: "Please enter your city"
                        }
                    }]
                },{
                    type: "div",
                    props: {
                        className: "question form-group",
                    },
                    children: [{
                        type: "label",
                        props: {
                            htmlFor: "state",
                            innerHTML: "State",
                            className: "text-sm"
                        }
                    }, {
                        type: "select",
                        props: {
                            name: "state",
                            className: "question-input full-width form-control-lg",
                            innerHTML: states,
                            required: true
                        },
                        events: {
                            change: e => {
                                game[e.target.name] = e.target.value;
                                console.log(game);
                            }
                        }
                    }, {
                        type: "div",
                        props: {
                            className: "valid-feedback",
                            innerHTML: "Please enter your city"
                        }
                    }]
                },{
                    type: "div",
                    props: {
                        className: "question form-group",
                    },
                    children: [{
                        type: "label",
                        props: {
                            htmlFor: "country",
                            innerHTML: "Country",
                            className: "text-sm"
                        }
                    }, {
                        type: "input",
                        props: {
                            name: "country",
                            className: "question-input full-width form-control-lg",
                            type: "text",
                            required: true
                        },
                        events: {
                            change: e => {
                                game[e.target.name] = e.target.value;
                                console.log(game);
                            }
                        }
                    }, {
                        type: "div",
                        props: {
                            className: "valid-feedback",
                            innerHTML: "Please enter your city"
                        }
                    }]
                }]
            }));
        }
        
    }
    
}