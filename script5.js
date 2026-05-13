const button=document.getElementById("searchBtn");
const result=document.getElementById("result");
button.addEventListener("click",getWeather);
async function getWeather(){
    const city=document.getElementById("cityInput").value.trim();
    if(city===""){
        result.innerHTML="Please enter a city";
        return;
    }
    try{
        const geoURL=
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
            const geoResponse=await fetch(geoURL);
            const geoData=await geoResponse.json();
        if(!geoData.results||geoData.results.length===0){
            result.innerHTML="City not found";
            return;
        }
        const lat=geoData.results[0].latitude;
        const lon=geoData.results[0].longitude;
        const cityName=geoData.results[0].name;
        const country=geoData.results[0].country;
        const weatherURL=
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=
            ${lon}&current=temperature_2m,wind_speed_10m`;
            const weatherResponse=await fetch(weatherURL);
            const weatherData=await weatherResponse.json();
            console.log(weatherData);
            if(!weatherData.current){
                result.innerHTML="Weather data not available";
                return;
            }
        result.innerHTML=`
        <h3>${cityName},${country}</h3>
        <p>Tempereture:${weatherData.current.temperature_2m}C<p>
        <p>Wind Speed:${weatherData.current.wind_speed_10m}km/h</p>
        `;
    }catch(error){
        result.innerHTML="<p>Something went wrong</p>";
        console.log(error);
    }
}