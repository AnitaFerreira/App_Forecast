

const key = "7718fcb4c072d3897c2814fc2b609639"

function dataOnScreen(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Weather in " + data.name
    document.querySelector(".time").innerHTML = Math.floor(data.main.temp) + " °C"
    document.querySelector(".text-forecast").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchTheCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json())
    
    dataOnScreen(data)
}

/* This function is responsible for collecting the data */
function clickInButton(){
    const city = document.querySelector(".input-city").value

    searchTheCity(city)
}