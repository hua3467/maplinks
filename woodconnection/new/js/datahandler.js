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

    let clearedData = {
        ...dataObj
    };
    delete clearedData.image;

    const userAddress = `${dataObj.userCity},${dataObj.userState},${dataObj.userCountry}`;

    geocode(userAddress, (error, {
        coordinates,
        location
    } = {}) => {

        if (error) {
            console.log(error);
        }
        console.log(userAddress, coordinates, location);
        clearedData["coordinates"] = coordinates;
        clearedData["location"] = location;
        db.ref(dbName + "/" + dataObj.gid).update(clearedData);

    });
    

    if (dataObj.image) {
        if (dataObj.image === '') {
            showNotification("#notifBar", `Your information is saved.`);
        } else {
            uploadImage(dataObj);
        }
    } else {
        console.log("You did not add an image. The data is not saved.");
    }
    
};