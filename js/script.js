// JS to get current date

var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+ today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("currentDate").innerHTML = "Last update: " + dateTime;

