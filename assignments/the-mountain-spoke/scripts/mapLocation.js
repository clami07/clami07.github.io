/*src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoeoEnttJdgZIwP5CCJN0_qIoRO8IqefM&q=Bozeman,MT"*/

/*
    var mapOptions = {
        center: new google.maps.LatLng(45.672490, -111.090685),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.place
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
 */
 

function initMap(){
    var mapOptions = {
        center:{lat:45.672490, lng:-111.090685}
        zoom:8,
        mapTypeId: google.maps.MapType.place};
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }
