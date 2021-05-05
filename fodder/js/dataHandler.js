
/**
 * This function will list all the items with same key after removing the duplications.
 * For example, to list all the genres in a dataset, use listItemByKey("genre", callback()).
 * @param {String} term The key of the category, such as "genre," "tag," "category."
 * @param {callback} callback the callback function you want to run after getting the data.
 */
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
    callback(testData);
    // dbRef.once("value").then( snapshot => {
    //     callback(Object.values(snapshot.val()).sort( (a, b) => a.userID > b.userID ? -1 : 1));
    // }, error => {
    //     console.log("ERROR: " + error.code);
    // });
}

/**
 * For example, to search all the items where item.genre="Strategic", use loadDataByFilter("genre", "Strategic", callback()); 
 * @param {String} key the key you want to search
 * @param {String} term the keyword you want to search
 * @param {callback} callback the callback function you want to run after getting the data
 */
function loadDataByFilter(key, term, callback) {
    let result = [];
    testData.forEach( data => {
        if (data[key] === term) {
            result.push(data);
        }
    });
    callback(result);
    // dbRef.orderByChild(key).equalTo(term).on("value", snapshot => {
    //     callback(snapshot.val());
    // });
}
