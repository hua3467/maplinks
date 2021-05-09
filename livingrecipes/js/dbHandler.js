// Write Data
const uploadProgress = document.querySelector(".progress-bar");
const successContainer = document.querySelector(".success-container");
const btnToMap = document.querySelector("#btnToMap");

function uploadImage(dataObj) {
    const imgFile = dataObj.image;

    console.log(dataObj);

    const dataID = dataObj.id;

    if (typeof imgFile !== "string") {

        return new Promise((resolve, reject) => {

            const fileName = dataID + "_" + dataObj.recipeName + imgFile.name.substring(imgFile.name.indexOf('.'));
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
                    successContainer.classList.remove("hide");
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

    const userAddress = `${dataObj.userCity},${dataObj.userState},${dataObj.userCountry}`

    geocode(userAddress, (error, {
        coordinates,
        location
    } = {}) => {

        if (error) {
            console.log(error);
        }
        clearedData["coordinates"] = coordinates;
        clearedData["location"] = location;
        db.ref(dbName + "/" + dataObj.id).update(clearedData);

        btnToMap.addEventListener("click", e => {
            e.preventDefault();
            window.open(`map.html?log=${coordinates[0]}\&lat=${coordinates[1]}`, "_self");
        });
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



// Read Data

function listItemByKey(term, callback) {
    loadData(data => {
        const items = [];
        data.forEach( item => {
            if (!items.includes(item[term])) {
                items.push(item[term]);
            }
        });
        callback(items);
    });
}

function loadData(callback){
    dbRef.once("value").then( snapshot => {
        callback(Object.values(snapshot.val()).sort( (a, b) => a.recipeName > b.recipeName ? -1 : 1));
    }, error => {
        console.log("ERROR: " + error.code);
    });
}

/**
 * For example, to search the item where item.genre="Strategic", use loadDataByFilter("genre", "Strategic", callback()); 
 * @param {String} key the key you want to search
 * @param {String} term the keyword you want to search
 * @param {callback} callback the callback function you want to run after getting the data
 */
function loadDataByFilter(key, term, callback) {
    dbRef.orderByChild(key).equalTo(term).on("value", snapshot => {
        callback(snapshot.val());
    });
}