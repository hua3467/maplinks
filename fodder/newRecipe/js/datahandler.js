const uploadProgress = document.querySelector(".progress-bar");
const successContainer = document.querySelector(".success-container");

const uploadImage = function (dataObj) {
    const imgFile = dataObj.image;

    console.log(dataObj);

    const dataID = dataObj.gid;

    if (typeof imgFile !== "string") {

        return new Promise((resolve, reject) => {

            const fileName = dataID + "_" + imgFile.name.substring(imgFile.name.indexOf('.'));
            const uploadTask = storage.ref().child(dbName + '/' + fileName).put(imgFile);

            uploadProgress.style = `width: 0%`;

            uploadTask.on('state_changed', snapshot => {

                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploadProgress.style = `width: ${progress}%`;
                // uploadProgress.innerHTML = progress + '%';
                progressContainer.classList.remove("hide");

            }, err => {

                console.log(err);

            }, () => {
                
                uploadTask.snapshot.ref.getDownloadURL().then(url => {

                    db.ref(dbName + '/' + dataID + "/image").set(url);
                    progressContainer.classList.add("hide");
                    dataObj.image = url;
                    console.log(dataObj);
                    showNotification("#notifBar", `Your information is saved.`);

                });
            });
        });

    } else {
        uploadProgress.style = "width: 100%";
        showNotification("#notifBar", `Your information is saved.`);
        
    }
};

function uploadData(dataObj) {
    db.ref(dbName + "/" + dataObj.id).update(dataObj).then(data => {
        progressContainer.classList.remove("hide");
        successContainer.classList.remove("hide");
    });
    showNotification("#notifBar", `Your information is saved.`);
};