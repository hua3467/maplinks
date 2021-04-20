const parseURL = function (url) {
    let pattern = /^((http|https|ftp):\/\/)/;
    if (!pattern.test(url)) {
        url = "https://" + url;
    }
    return url;
}