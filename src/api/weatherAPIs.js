import axios from 'axios';

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

let lat = '';
let lon = '';

navigator.geolocation.getCurrentPosition(
    (value) => {
        lat = value.coords.latitude;
        lon = value.coords.longitude;
    },
    (error) => {
        alert('위치 엑세스를 허용해 주세요...');
        console.error('위치 엑세스를 허용해 주세요...');
    },
    options
);

export { lat, lon };

export function locationlat() {
    return lat;
}

export function locationlon() {
    return lon;
}

export function toDayWeather() {
    //return axios.get('/json/toDayWeather.json');
    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat,
            lon,
            units: 'metric',
            lang: 'kr',
            appid: process.env.REACT_APP_WEATHER_API_KEY,
        },
    });
}

export function weekWeather() {
    return axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
            lat,
            lon,
            units: 'metric',
            lang: 'kr',
            appid: process.env.REACT_APP_WEATHER_API_KEY,
        },
    });
}

export function mapWeather(location) {
    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: location.Ma,
            lon: location.La,
            units: 'metric',
            lang: 'kr',
            appid: process.env.REACT_APP_WEATHER_API_KEY,
        },
    });
}
