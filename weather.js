class Weather {
    constructor(city){
        this.apiKey = '5684aebb127fc8cd0fc67ce4072027f5';
        this.city = city;
    }
    
    //Fetch weatcher from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);
        const data = await response.json();
        return data;
    }

    //Change weatcher location
    changeLocation(city){
        this.city = city;
    }
}

// api call
// api.openweathermap.org/data/2.5/weather?q=Paris&APPID=5684aebb127fc8cd0fc67ce4072027f5