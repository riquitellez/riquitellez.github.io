function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}

// JS to get current date
function getDateAndDay(){
var today = new Date();
var day = today.getDay();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+ today.getFullYear();

switch(day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    default:
        day = "Saturday"
        break;
}
        
return day + '' + date;
}
