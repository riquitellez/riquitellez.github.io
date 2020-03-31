//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5585010&appid=51218e633c2563b0b383cc846f73c3f4&units=imperial"
const apiForecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5585010&appid=51218e633c2563b0b383cc846f73c3f4&units=imperial"
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'



//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById("temp").innerHTML = weatherInfo.main.temp;
    document.getElementById("high").innerHTML = weatherInfo.main.temp_max;
    document.getElementById("speed").innerHTML = weatherInfo.wind.speed;
    document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;
    

 }); //end of "then" fat arrow function

 
 //  5604473 City id for Preston
 
 fetch(apiForecastURL)
   .then((response) => response.json())
   .then((forecastinfo) => {
    console.log(forecastinfo);
      const mylist = forecastinfo['list'];
      const mydate = new Date();

      const y = mydate.getDay();

      let forecastday = y;

      const dayofweek = new Array(7);

       dayofweek[0] = "Sunday";
       dayofweek[1] = "Monday";
       dayofweek[2] = "Tuesday";
       dayofweek[3] = "Wednesday";
       dayofweek[4] = "Thursday";
       dayofweek[5] = "Friday";
       dayofweek[6] = "Saturday";

      for (i=0;i<mylist.length;i++) {

          var time = mylist[i].dt_txt;

          if (time.includes('18:00:00')) { 
            forecastday +=1; 
            if(forecastday === 7){
              forecastday = 0;} 

            let nameofday = document.createElement("span");
            nameofday.textContent = dayofweek[forecastday];

            let theTemp = document.createElement("p");
            theTemp.textContent = mylist[i].main.temp + "\xB0"+"F";

            console.log("TEMPERATURE>"+mylist[i].main.temp);

            let iconcode = mylist[i].weather[0].icon;
            let iconPath = "http://openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src=iconPath;

            let theDay = document.createElement("div");
            theDay.appendChild(nameofday);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);
 
            document.getElementById('fivedays').appendChild(theDay);

          }
 
      }
  });

  fetch(requestURL)
      .then((response) => {
          return response.json();
      })
      .then((jsonObject) => {
          console.table(jsonObject);
          const towns = jsonObject['towns'];
          for (var i=0; i<towns.length; i++){
              if(towns[i].name==="Fish Haven"){
                  const events = document.querySelector('div.events');
                  for(var j=0; j<towns[i].events.length; j++){
                      let event = document.createElement('p');
                      event.innerHTML = towns[i].events[j];
                      console.log(events);
                      events.appendChild(event);
                  }

              }
          }
      });