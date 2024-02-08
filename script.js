var map = L.map('map').setView([37.3382, -121.8863], 9.5);

  // load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'

}).addTo(map);

var locations = [
    {name: "Camden Community Center", address: "3369 Union Ave., San Jose", hours: "Friday 1 p.m.- 9 p.m.", lat: 37.2636385, lng: -121.9359549},
    {name: "Mayfair Community Center", address: "2039 Kammerer Ave., San Jose", hours: "Friday 1 p.m.-9 p.m.", lat: 37.351518, lng: -121.8463913},
    {name: "Roosevelt Community Center", address: "901 E. Santa Clara St., San Jose", hours: "Friday 1 p.m.-9 p.m.", lat: 37.3453202, lng: -121.8742676},
    {name: "Santa Clara Senior Center", address: "1303 Fremont Street, Santa Clara", hours: "Friday 12:30 p.m.-3 p.m.", lat: 37.3508037, lng: -121.9525489},
    {name: "Campbell Community Center", address: "1 West Campbell Ave.", hours: "Friday and Saturday, noon-8 p.m.", lat: 37.2882132, lng: -121.9546496},
    {name: "Centennial Recreation Center", address: "171 W. Edmundson Ave., Morgan Hill", hours: "Friday 5 a.m.-9:30 p.m.; Saturday 6:30 a.m.-5 p.m. Sunday", lat: 37.1134726, lng: -121.6486836},
    {name: "Mountain View Community Center", address: "201 S. Regnstorff Ave., Mountain View", hours: "Friday 8:30 a.m.-10 p.m.", lat: 37.4008638, lng: -122.1003685},
    {name: "Robert K. Schatz Police Services Fire Administration Building Lobby", address: "1000 Villa Street, Mountain View", hours: "Friday 8 a.m.-5 p.m.", lat: 37.3947264, lng: -122.0835865}
];

locations.forEach(function(location) {
    var marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup("<b>" + location.name + "</b><br>" + location.address + "<br>Hours: " + location.hours);
});

var geojsonURL1 = "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::low-income-or-disadvantaged-communities-designated-by-california.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D";


var geojsonURL2 = "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::california-counties.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D";


fetch(geojsonURL1)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: "#ff7800", 
                    fillColor: "#fffc00", 
                    fillOpacity: 0.5, 
                    weight: 2 
                };
            }
        }).addTo(map);
    })
    .catch(function(error) {
        console.error('Error loading the GeoJSON data: ', error);
    });


fetch(geojsonURL2)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: "#0000ff", 
                    fillColor: "#0000ff", 
                    fillOpacity: 0.3, 
                    weight: 1 // 
                };
            }
        }).addTo(map);
    })
    .catch(function(error) {
        console.error('Error loading the second GeoJSON data: ', error);
    });