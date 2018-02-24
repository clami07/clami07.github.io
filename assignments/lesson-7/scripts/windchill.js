function inputData() {
    windSpeed = 5;
    avgTemperture = (90+66)/2;
    
    var storeValue = windChill(windSpeed, avgTemperture);
    
    document.getElementById('output').innerHTML = +storeValue+ "mph";
}

function windChill(windSpeed, avgTemperture){

var s = windSpeed;
var t = avgTemperture;

var windChillFactor = 35.74 + 0.6215 * avgTemperture - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * t * Math.pow(windSpeed, 0.16);
var digits = 2;
var multiplier = Math.pow(10, digits);
windChillFactor = Math.round (windChillFactor * multiplier) / multiplier;

return windChillFactor; 



}
       