/**
 * 
 * @param {JSON} node 
 * @returns 
 */
 const buildDom = (node) => {

    const ele = document.createElement(node.type);

    for ( key in node.props) {
        if (key.substring(0, 5) === "data_") {
            ele.dataset[key.substring(5)] = node.props[key]
        } else {
            ele[key] = node.props[key];
        }
    }

    if (node.events) {
        for ( key in node.events) {
            ele.addEventListener( key, node.events[key]);
        }
    }

    if (node.children) {
  
        node.children.forEach( child => {
            const childEle = buildDom(child);
            ele.append(childEle)
        });
    }

    return ele;
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
    console.log(file);
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

