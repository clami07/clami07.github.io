{src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoeoEnttJdgZIwP5CCJN0_qIoRO8IqefM&origin=place_id: ChIJ37Yst5pFRVMRiOpIlo-WmLs&sensor=true"

function initialize(){
    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom:8,
        mapTypeId: google.maps.MapType.place};
    var map = new google.maps.Map(document.getElementsByClassName('map'), mapOptions);
    }
};