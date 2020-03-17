//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=51218e633c2563b0b383cc846f73c3f4&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById("temp").innerHTML = weatherInfo.main.temp;
    document.getElementById("speed").innerHTML = weatherInfo.wind.speed;


 }); //end of "then" fat arrow function



