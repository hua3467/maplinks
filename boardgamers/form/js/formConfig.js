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


const formContainer = document.querySelector(".form-container");
const questionInputs = document.querySelectorAll(".question-input");

for ( let i = 0; i < questionInputs.length; i++) {
    questionInputs[i].addEventListener("change", e => {
        game[e.target.name] = e.target.value;
    })
}


function validate(inputBox) {
    console.log(inputBox);
    if (inputBox.required === true) {
        if (inputBox.value.length > 0) {
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    } else {
        console.log("else");
        return true
    }


}


// loadQuestions(questions);


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