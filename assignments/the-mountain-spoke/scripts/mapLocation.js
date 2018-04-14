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
        zoom:8,
        center:{lat:37.1928, lng:-34.5516}
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }
