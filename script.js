const apiKey="d227b2698db9d5fcf6facb58d8597d28";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector("#search input");
const searchBtn=document.querySelector("#search button");

//const city=document.querySelectorAll('#weather .')


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;

}

    // Not called
    searchBtn.addEventListener('click', () => {
        checkWeather(searchBox.value);
    });