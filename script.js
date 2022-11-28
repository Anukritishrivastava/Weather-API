function fetchWeather (city){
    let apikey = "32b5ff4c23527855bb8c4e6d97b6250d"
         fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        +city 
        + "&units=metric&appid=" 
        + apikey
        ).then((response) => { if(!response.ok){throw Error(response.statusText)}  return response.json()})
            .then((data) => { console.log(data); displayWeather(data)})
    }
    function displayWeather(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = "Weather in" + " " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/hr";
}
function search(){
    fetchWeather(document.querySelector(".search-bar").value);
}
document.querySelector(".search button").addEventListener("click",function(){
search();
});
document.querySelector(".search-bar").addEventListener("keypress", (event)=>{
    if(event.keyCode === 13){
        search();
    }
 });