/**
 * Created by Senk on 12/1/2016.
 */
(function (global) {
    "use strict";

    function onDeviceReady () {
        document.addEventListener("online", onOnline, false);
        document.addEventListener("resume", onResume, false);
        loadMapsApi();
    }

    function onOnline () {
        loadMapsApi();
    }

    function onResume () {
        loadMapsApi();
    }

    function loadMapsApi () {
        if((navigator.connection.type === Connection.NONE) || (typeof google !== "undefined")) {
            if(google.maps !== "undefined"){
                return;
            }
        }
        jQuery.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyA7MHIND_s0HsOmPRLtZUO924eNXpptjik&sensor=true&callback=onMapsApiLoaded');
    }

    global.onMapsApiLoaded = function () {
        // Maps API loaded and ready to be used.
        var map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: 55.380937, lng: 10.345290},
            zoom: 15,
            disableDefaultUI: true,
        });
        var marker = new google.maps.Marker({
            map: map,
            position: {lat: 55.380937, lng: 10.345290}
        });
    };

    document.addEventListener("deviceready", onDeviceReady, false);
})(window);