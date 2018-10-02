class UI{
    constructor(){
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.string = document.querySelector('#w-string');
        this.pressure = document.querySelector('#w-pressure');
        this.wind = document.querySelector('#w-wind');
        this.sun = document.querySelector('#w-sun');
    }

    showData(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.innerHTML = `${Math.round(weather.main.temp)} &#x2103;`;
        this.icon.setAttribute('src',`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
        this.sun.textContent = `Sunrise : ${this.converseTime(weather.sys.sunrise)} - Sunset : ${this.converseTime(weather.sys.sunset)}`;
    }
    converseTime(time){
        const date = new Date(time*1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        hours = hours < 10 ? '0' + hours : hours; 
        minutes = minutes < 10 ? '0'+minutes : minutes
        return `${hours}:${minutes}`;
    }
}

const resp = {"coord":{"lon":-122.09,"lat":37.39},
"sys":{"type":3,"id":168940,"message":0.0297,"country":"US","sunrise":1427723751,"sunset":1427768967},
"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],
"base":"stations",
"main":{"temp":285.68,"humidity":74,"pressure":1016.8,"temp_min":284.82,"temp_max":286.48},
"wind":{"speed":0.96,"deg":285.001},
"clouds":{"all":0},
"dt":1427700245,
"id":0,
"name":"Mountain View",
"cod":200}