
const mapStyles = {
    frank: "mapbox://styles/aayang/cko38a1bp00dx17qty93kzxla",
    monochrome: 'mapbox://styles/aayang/ckfhnnlks0b7v19l7oxweshja'
}

mapboxgl.accessToken =
    'pk.eyJ1IjoiYWF5YW5nIiwiYSI6ImNrY3RxeXp5OTBqdHEycXFscnV0czY4ajQifQ.jtVkyvY29tGsCZSQlELYDA';
var map = new mapboxgl.Map({
    container: 'map',
    style: mapStyles.frank,
    center: [-96.790494, 46.875552],
    zoom: 10
});

var pointLayer = "end-points";
var pointSource = "point-data";

const genreFilter = document.querySelector(".genre-group");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let coord = [Number(urlParams.get("log")), Number(urlParams.get("lat"))];

console.log(coord);

const videoPlayer = document.querySelector("#introVideo video");
const btnMap = document.querySelector("#btnMap");

videoPlayer.addEventListener("ended", () => {
    console.log("ended")
    //videoPlayer.parentNode.remove();
});

btnMap.addEventListener("click", () => {
    videoPlayer.parentNode.style = "top: -100vh";
    setTimeout(() => {
        videoPlayer.parentNode.remove();
    }, 1200);
});