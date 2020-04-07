const requestURL = 'https://riquitellez.github.io/Final%20Project/json/activities.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const activities = jsonObject['features'];
        for (let i = 0; i < activities.length; i++) {
                let activitySection = document.createElement('section');
                let activityInformationDiv = document.createElement('div');
                let activityName = document.createElement('h3');
                let activityDescription = document.createElement('p');
                let activityVisitors = document.createElement('p');
                let imageDiv = document.createElement('div');           
                let img = document.createElement('img');

                activityName.textContent = activities[i].name;
                img.setAttribute('src', "imagenes/" + activities[i].photo);
                img.setAttribute('alt', activities[i].name);
                activityDescription.textContent = activities[i].description;
                activityVisitors.textContent = "Annual visitors: " + activities[i].visitors;



                activityInformationDiv.appendChild(activityName);
                activityInformationDiv.appendChild(activityDescription);                
                activityInformationDiv.appendChild(activityVisitors);   
                imageDiv.appendChild(img);             
                activitySection.appendChild(activityInformationDiv);
                activitySection.appendChild(imageDiv);

                document.querySelector('div.activities').appendChild(activitySection);
            }       
    });