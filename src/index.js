// console.log("Hello from JavaScript");
const buildMarker = require("./marker");
const mapboxgl = require("mapbox-gl");

// console.log('frank white wrote this')
mapboxgl.accessToken = 'pk.eyJ1Ijoid3JjczUwNSIsImEiOiJjamE5dHZpZ2YwYXpuMzNxcDdlcmgyZGluIn0.9q9rYXbhqCWkkQ4ZOsJTWw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker = buildMarker("activities", [-74.009151, 40.705086]);
console.log(marker)
// const marker2 = buildMarker("hotels", [-74.004151, 40.703086]);

marker.addTo(map);
// marker2.addTo(map);





