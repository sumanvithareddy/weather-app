const apiKey = "e0254a2332edbcdb92533a522c812c93";

async function getWeather(){

const city=document.getElementById("city").value;

if(city==""){
alert("Enter City Name");
return;
}

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response=await fetch(url);

const data=await response.json();

if(data.cod=="404"){
alert("City Not Found");
return;
}

document.getElementById("weather").style.display="block";

document.getElementById("cityName").innerHTML=data.name;

document.getElementById("temp").innerHTML=data.main.temp+" °C";

document.getElementById("condition").innerHTML=data.weather[0].main;

document.getElementById("humidity").innerHTML=data.main.humidity+" %";

document.getElementById("wind").innerHTML=data.wind.speed+" km/h";

document.getElementById("icon").src=
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

}
catch(error){

alert("Something went wrong!");

}

}
