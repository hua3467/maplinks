const formContainer = document.querySelector(".form-container");

questionIndex = 3

formContainer.append(
    buildDom({
        type: "label",
        props: {
            htmlFor: questions[questionIndex].name,
            innerHTML: questions[questionIndex].label
        }
    }),
    buildDom({
        type: questions[questionIndex].tag,
        props: {
            name: questions[questionIndex].name,
            type: questions[questionIndex].type
        }
    }));