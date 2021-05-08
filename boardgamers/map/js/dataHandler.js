
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
        callback(Object.values(snapshot.val()).sort( (a, b) => a.gameName < b.gameName ? -1 : 1));
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