const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoid3JjczUwNSIsImEiOiJjamE5dHZpZ2YwYXpuMzNxcDdlcmgyZGluIn0.9q9rYXbhqCWkkQ4ZOsJTWw';

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat([coords[0], coords[1]]); // [-87.6354, 41.8885] for Chicago
};

module.exports = buildMarker;
