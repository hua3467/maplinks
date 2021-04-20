const userInfoItems = document.querySelectorAll(".user-info-items");
const userName = document.querySelectorAll(".user-name");
const major = document.querySelector("#major");
const userRequiredInfo = document.querySelectorAll(".required-user-item");
const projectRequiredInfo = document.querySelectorAll(".required-project-item");
const projectEditor = document.querySelector("#projectEditor");


const projectInfoItems = document.querySelectorAll(".project-info-items")
const imagePreview = document.querySelector("#imagePreview");
const inputUserImage = document.querySelector("#fileImage");
const projectImage = document.querySelector("#projectImage");
const projectAttachmentTitle = document.querySelector("#attachmentTitle");
const btnAttach = document.querySelector("#btnAttach");

const uploadProgress = document.querySelector(".progress-bar");
const uploadOverlay = document.querySelector(".overlay-full");

const btnUploadSuccess = document.querySelector("#btnUploadSuccess");
const btnSubmit = document.querySelector("#btnSubmit");
const btnAddNew = document.querySelector("#btnAddNew");
const btnEditSave = document.querySelector("#btnEditSave");
const btnEditCancel = document.querySelector("#btnEditCancel");

const progressContainer = document.querySelector("#progressContainer");

const projectContainer = document.querySelector("#projectContainer");
let btnDeleteCard = document.querySelectorAll(".delete-btn");

let userID;
let isEditing = false;

let userProfile = {
    uid: 1001,
    image: "http://map.ndsusodaa.com/alumninetwork/images/img_placeholder.png"
};



userInfoItems.forEach(info => {
    info.addEventListener("change", e => {
        if (info.name === "image") {
            console.log(info);
            if (info.files[0]) {
                userProfile[info.name] = info.files[0];
            } else {
                userProfile.image = "http://map.ndsusodaa.com/alumninetwork/images/img_placeholder.png";
            }
        } else {
            userProfile[info.name] = info.value;
        }
        isUserInfoSubmitted = false;
        showNotification("#notifBar", 'Your changes have not saved yet.');
        btnSubmit.innerHTML = "Save my Information"
        uploadProgress.style = "width: 0%";
    });
});


btnSubmit.addEventListener('click', function (e) {
    console.log(userProfile);
    e.preventDefault();
    submitProfile(userProfile);
});

inputUserImage.addEventListener("change", e => {
    if (validateFileType(e.target.files[0]) && validateFileSize(e.target.files[0])) {
        readURL(e.target);
    } else {
        e.target.value = "";
    }
});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.style = `background: url(${e.target.result}) #eee; background-size: contain; background-position: center top; background-repeat: no-repeat`;
        }
        reader.readAsDataURL(input.files[0]);
    }
}