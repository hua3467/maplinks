
const uploadImage = function (dbPath, imgStorePath, dataObj) {
    const imgFile = dataObj.image;

    console.log(dataObj);

    const dataID = dataObj.pid ? dataObj.pid : dataObj.uid;

    if (typeof imgFile !== "string") {

        return new Promise((resolve, reject) => {

            const fileName = dataID + imgFile.name.substring(imgFile.name.indexOf('.'));

            const uploadTask = storage.ref().child(imgStorePath + '/' + fileName).put(imgFile);

            uploadProgress.style = `width: 0%`;
            // uploadProgress.innerHTML = '0%';

            uploadTask.on('state_changed', snapshot => {

                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploadProgress.style = `width: ${progress}%`;
                // uploadProgress.innerHTML = progress + '%';
                progressContainer.classList.remove("hide");

            }, err => {
                console.log(err);
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then(url => {

                    db.ref(dbPath + "image").set(url);
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

const uploadeData = function (dbPath, imgStorePath, dataObj) {

    let clearedData = {
        ...dataObj
    };
    delete clearedData.image;

    db.ref(dbPath).update(clearedData);
    console.log(dataObj);

    if (dataObj.image === '') {
        showNotification("#notifBar", `Your information is saved.`);
    } else {
        uploadImage(dbPath, imgStorePath, dataObj);
    }

};

const deleteImage = function (imagePath, imageID) {

    const imageName = projects[imageID].image.substring(projects[imageID].image.indexOf(imageID), projects[imageID].image.indexOf("?alt"));

    console.log(imagePath + '/' + imageName);

    storage.ref().child(imagePath + '/' + imageName).delete().then(() => {
        console.log("Image deleted!");
    }).catch(error => {
        console.log(error);
    });
};

function loadUserInfo(id) {
    userProfile.uid = id;
    db.ref("alumninetwork/user/" + id).once("value").then(snapshot => {
        const data = snapshot.val();
        console.log(data);
        if (data) {
            userProfile = data;
            console.log(userProfile.uid);
            if (data.image) {
                userProfile.imageUrl = data.image;
            }
            
            userInfoItems.forEach(item => {
                if (data[item.name]) {
                    if (item.name !== "image") {
                        item.value = data[item.name];
                    } else {
                        imagePreview.style = `background: url(${data["image"]}) #eee; background-size: contain; background-position: center top; background-repeat: no-repeat`;
                        imagePreview.dataset.imageurl = data["image"];
                    }
                }

            });

            showNotification("#notifBar", 'Welcome back. Your informatin is loaded.');
            setTimeout(() => {
                notifBar.classList.add("hide");
            }, 5000);
        }

    });
}

const submitProfile = function (data) {
    if (isInputFilled(userRequiredInfo)) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        alert("Please complete the required information.");
        highlightForms(userRequiredInfo);
        return
    }    

    const location = userProfile.userAddress + " " + userProfile.userCity + " " + userProfile.userState + " " + userProfile.userCountry;

    geocode(location, (error, geoData) => {

        if (error) {
            console.log(error);
        }

        console.log(data);
        data['longtitude'] = geoData.center[0];
        data['latitude'] = geoData.center[1];
        data['location'] = geoData.place_name;

        uploadeData("alumninetwork/user/" + data.uid + '/', "sodaa-people-image", data);
        showNotification("#notifBar", 'Your information is saved.');
        isUserInfoSubmitted = true;

    });

    
};