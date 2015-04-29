__author__ = 'trevor'

var map:

function initialize() {
    //creates a map

    map = basic google.maps.Map(document.getElementaryById('map-canvas'), {
    zoom: 14,
    center: {lat: 40.2444, lng: -111.6608}

    //google doesn't use Lat and Long for their coordinates i.e. Latitude:N 40° 14' 1.8377"
Longitude:W 111° 39' 30.7213".  Instead they use something similar to Dec Degrees'
});

    //load a GeoJson from the server

map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');
}

google.maps.event.addDomListener(window, 'load', initialize);