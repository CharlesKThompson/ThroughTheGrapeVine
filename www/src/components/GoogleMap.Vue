<template>
    <div class="flex bg-1">
        <div class="col-sm-12">
            <h3>Search for Wine in Your Area</h3>
        </div>
        <input id="pac-input" class="controls" type="text" placeholder="Search for Wine Near You" value="Wine">
        <div class="google-map" :id="mapName"></div>
    </div>
</template>


<script>
    export default {
        name: 'google-map',
        props: ['name'],
        data: function () {
            return {
                mapName: this.name + "-map",
            }
        },
        mounted() {
            var map;

            map = new google.maps.Map(document.getElementById(this.mapName), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 15
            });

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    // infoWindow.setPosition(pos);
                    // infoWindow.setContent('Current Location');
                    // infoWindow.open(map);
                    map.setCenter(pos);
                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {

                handleLocationError(false, infoWindow, map.getCenter());
            }

            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            map.addListener('bounds_changed', function () {
                searchBox.setBounds(map.getBounds());
            });
            var markers = [];

            searchBox.addListener('places_changed', function () {
                var places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                }

                // Clear out the old markers.
                markers.forEach(function (marker) {
                    marker.setMap(null);
                });
                markers = [];

                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    if (!place.geometry || place.name == "Wine.Com" || markers.length == 12) {
                        return;
                    }
                    var icon = {
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };
                    // Create a marker for each place.
                    var marker = new google.maps.Marker({
                        map: map,
                        title: place.name,
                        position: place.geometry.location
                    })
                    markers.push(marker);

                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }

                    var infoWindow = new google.maps.InfoWindow();
                    var service = new google.maps.places.PlacesService(map);
                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                            place.formatted_address + '</div>');
                        infoWindow.open(map, this);
                    });
                });
                map.fitBounds(bounds);

            });


        }

    }
</script>


<style scoped>
    h3 {
        color: black;
        margin-top: 10px;
        font-weight: 700
    }

    .controls {
        margin-top: 10px;
        margin-bottom: 0px;
        width: 50%;
        height: 8%;
        font-size: 200%;
        font-weight: 500
    }

    .google-map {
        width: 50%;
        height: 50vh;
        margin: 10px;
        background: gray;
    }

    .flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .bg-1 {
        background-color: rgb(234, 218, 192);
        background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    }
</style>