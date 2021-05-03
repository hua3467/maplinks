let isUserInfoSubmitted = true;
const notifBar = document.querySelector("#notifBar");

const showNotification = function (container, message) {
    const bar = document.querySelector(container);
    if (bar.classList.contains("hide")) {
        bar.classList.remove("hide");
        bar.innerHTML = '<p>' + message + '</p><i class="fas fa-times-circle"></i>';
    }
}

if (notifBar) {
    notifBar.addEventListener("click", e => {
        e.currentTarget.classList.add("hide");
    });
}

window.addEventListener('beforeunload', e => {
    if (!isUserInfoSubmitted) {
        e.preventDefault();
        e.returnValue = "Your information is not submitted. Are you sure you want to leave?";
    }
});

const highlightForms = function (items) {
    items.forEach(item => {
        console.log(item.value);
        if (item.value < 1) {
            item.classList.add("red-border");
        }
    });
};