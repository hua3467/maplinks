function popupBoxBody(data){
    return `<div class="row popup-header">
                <div class="col-5 popup-img">
                    <img src=${data.image} alt=${data.gameName}>
                </div>
                <div class="col-7">
                    <h4>${data.gameName}</h4>
                    <p>${data.location}</p>
                </div>
            </div>
            <div class="row popup-body">
                <div class="col">
                    <p class="question">What is your most memorable experience playing this game?</p>
                    <p class="answer">${data.memory}</p>
                    <p class="question">What do you look forward to most in playing this game?</p>
                    <p class="answer">${data.forward}</p>
                    <p class="question">How is the game played? </p>
                    <p class="answer">${data.pitch}</p>
                    <p class="question">Is there a board game you would like to play, but haven’t had the chance yet?</p>
                    <p class="answer">${data.wanted}</p>
                </div>
            </div>`;
}