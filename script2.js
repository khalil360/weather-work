
const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let seachinputBox=document.getElementById('Sbox');
let weatherIcon= document.querySelector(".weather-icon");




seachinputBox.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        checkWeather(seachinputBox.value);
    }
})


async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status == 404) {
    document.querySelector (".error") .style.display = "block";
    document.querySelector(".weather").style.display = "none";
    }
   else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    
     if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
        document.body.style.backgroundImage='url(cloud.jpg)';
        }
        else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        document.body.style.backgroundImage='url(clear.jpg)';
        }
        else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
        document.body.style.backgroundImage='url(rain.jpg)';
        }
        else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        document.body.style.backgroundImage='url(dri.jpg)';
        }
        else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
        document.body.style.backgroundImage='url(mist.jpg)';
        }
    
    
        document.querySelector(".weather").style.display= "block";
        document.querySelector (".error") .style.display = "none";
    
    }

   }



