const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            console.table(jsonObject);
            if(towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs")
            {
                let touwnSection = document.createElement('section');
                let townInformationDiv = document.createElement('div');
                let townImageDiv = document.createElement('div');
                let townTitle = document.createElement('h3');
                let townMotto = document.createElement('h4');
                let townYearFounded = document.createElement('p');
                let townPopulation = document.createElement('p');
                let townRainfall = document.createElement('p');
                let imageDiv = document.createElement('div');           
                let img = document.createElement('img');

                townTitle.textContent = towns[i].name;
                townMotto.textContent = towns[i].motto;
                townYearFounded.textContent = "Year founded: " + towns[i].yearFounded;
                townPopulation.textContent = "Population: " + towns[i].currentPopulation;
                townRainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
                img.setAttribute('src', "images/" + towns[i].photo);
                img.setAttribute('alt', towns[i].name);


                townInformationDiv.appendChild(townTitle);
                townInformationDiv.appendChild(townMotto);
                townInformationDiv.appendChild(townYearFounded);
                townInformationDiv.appendChild(townPopulation);
                townInformationDiv.appendChild(townRainfall);
                imageDiv.appendChild(img);
                touwnSection.appendChild(townInformationDiv);
                touwnSection.appendChild(imageDiv);

                document.querySelector('div.towns').appendChild(touwnSection);
            }
        }
    });