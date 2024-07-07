import axios from 'axios';

const API_KEY = 'fd4a5ef4823bd6963d949a2b418ac6a3';

export const getWeather = (city) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
};

export const getForecast = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    return filterForecastData(response.data);
};

const filterForecastData = (data) => {
    const dailyData = {};
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toISOString().split('T')[0];
        const time = date.getHours();
        if (time === 12 || !dailyData[day]) {
            dailyData[day] = item;
        }
    });
    data.list = Object.values(dailyData);
    return data;
};
