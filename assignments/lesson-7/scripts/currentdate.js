
window.onload = init;

function init() {
    var currentdate = document.getElementById("currentdate");
    var now = new Date();
    currentdate.innerHTML = now; 
}