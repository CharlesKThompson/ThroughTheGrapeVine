<template>
        <div class="google-map" :id="mapName"></div>
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
            var map, infoWindow;
            map = new google.maps.Map(document.getElementById(this.mapName), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 13
            });
            infoWindow = new google.maps.InfoWindow;


            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Current Location');
                    infoWindow.open(map);
                    map.setCenter(pos);
                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {

                handleLocationError(false, infoWindow, map.getCenter());
            }

        }
    };
</script>


<style scoped>
    .google-map {
        width: 50%;
        height: 50vh;
        margin: 10px;
        background: gray;
    }
</style>