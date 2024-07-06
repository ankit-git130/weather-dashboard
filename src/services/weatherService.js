// src/services/weatherService.js
import axios from 'axios';

const API_KEY = 'fd4a5ef4823bd6963d949a2b418ac6a3';
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

export const getWeather = (city) => {
    return axios.get(WEATHER_URL, {
        params: {
            q: city,
            units: 'metric',
            appid: API_KEY,
        },
    });
};

export const getForecast = async (lat, lon) => {
    const response = await axios.get(FORECAST_URL, {
        params: {
            lat,
            lon,
            units: 'metric',
            appid: API_KEY,
        },
    });
    return filterForecastData(response.data);
};

const filterForecastData = (data) => {
    const dailyData = {};
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toISOString().split('T')[0]; // Get the date in YYYY-MM-DD format
        const time = date.getHours();
        // Choose the data point closest to 12:00 PM (noon)
        if (time === 12 || !dailyData[day]) {
            dailyData[day] = item;
        }
    });
    data.list = Object.values(dailyData);
    return data;
};
