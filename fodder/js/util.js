const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWF5YW5nIiwiYSI6ImNrY3RxeXp5OTBqdHEycXFscnV0czY4ajQifQ.jtVkyvY29tGsCZSQlELYDA`;

    fetch(url)
    .then( response => response.json())
    .then(data => {
            callback(undefined, {
                coordinates: data.features[0].center,
                location: data.features[0].place_name
            });
    });

}

const parseURL = function(url) {
    let pattern = /^((http|https|ftp):\/\/)/;
    if(!pattern.test(url)) {
        url = "https://" + url;
    }
    return url;
}

let isInputFilled = function(form){
    const items = [...form]
    return items.some( input => input.value.length < 1);
}

const passwordValidate = function (password1, password2, callback) {
    if (password1 === password2) {
        callback();
    } else {
        alert("Password not match!");
    }
};

function validateFileType(file){
    if (file) {
        var fileName = file.name;
    console.log(fileName);
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="gif" || extFile=="svg"){
        return true;
    }else{
        alert("Accepted file extentions: jpg/jpeg, png, gif, and svg.");
        return false;
    } 
    }
      
}

function validateFileSize(file) {
    if (file) {
        if(file.size > 2097152){
            alert("File is too big! Biggest accepted file size is 2MB.");
            return false;
         }
         return true;
    }
    
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function closePopup(target){
    const box = document.querySelector(target).parentNode;
    parentNode.classList.add("hide");
}

function convertHr(hour) {
    return hour > 1 ? hour  + " Hours" : hour * 60 + " Minutes";
}