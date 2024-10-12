const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker =  L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (position){


    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // marker.setLatLng([position.coords.latitude, position.coords.longitude]);
    // map.panTo([position.coords.latitude, position.coords.longitude]);

    marker.setLatLng([lat,lng]).update();
    map.setView([lat,lng], 4);

marker.bindPopup('<strong>My Guy/strong> <br> You just dey roam fr here oo');
});

// most if the code is part of the leaflet library