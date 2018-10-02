const ui = new UI;
const storage = new Storage();
const weather = new Weather(storage.getLocationData());
console.log(storage.getLocationData());


const getWeather = () => {
    weather.getWeather()
        .then(results => {
            ui.showData(results);
        })
        .catch(err => console.log(err))
}

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value;
    weather.changeLocation(city);
    storage.setLocationData(city);
    getWeather();
    //close modal jquery
    $('#locModal').modal('hide');
});



