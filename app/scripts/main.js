var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.414543, lng: -99.1528233},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}
CollapsibleLists.apply();