function inputData() {
    var highTemp = parseInt(document.getElementById("hight").innerHTML);
    var lowTemp = parseInt(document.getElementById("lowt").innerHTML);
var windSpeed = parseInt(document.getElementById("winds").innerHTML);
    
    avgTemperture = (highTemp+lowTemp)/2;
    
    var storeValue = windChill(windSpeed, avgTemperture);
    
    document.getElementById('output').innerHTML = +storeValue+ "mph";
}

function windChill(windSpeed, avgTemperture){

var s = windSpeed;
var t = avgTemperture;

var windChillFactor = 35.74 + 0.6215 * avgTemperture - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
var digits = 2;
var multiplier = Math.pow(10, digits);
windChillFactor = Math.round (windChillFactor * multiplier) / multiplier;

return windChillFactor; 



}
       