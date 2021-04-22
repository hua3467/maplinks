const dbDir = "boardgamers";

const uploadImage = function (dataObj) {
    const imgFile = dataObj.image;

    console.log(dataObj);

    const dataID = dataObj.pid ? dataObj.pid : dataObj.uid;

    if (typeof imgFile !== "string") {

        return new Promise((resolve, reject) => {

            const fileName = dataID + imgFile.name.substring(imgFile.name.indexOf('.'));
            const uploadTask = storage.ref().child(dbDir + '/' + fileName).put(imgFile);

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

                    db.ref(dbDir + "image").set(url);
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

    let clearedData = {
        ...dataObj
    };
    delete clearedData.image;

    db.ref(dbDir).update(clearedData);
    console.log(dataObj);

    if (dataObj.image === '') {
        showNotification("#notifBar", `Your information is saved.`);
    } else {
        uploadImage(dataObj);
    }

};