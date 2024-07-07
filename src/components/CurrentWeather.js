import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

const CurrentWeather = ({ weather }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{weather.name}</Typography>
                <Typography>Temperature: {weather.main.temp} °C</Typography>
                <Typography>Conditions: {weather.weather[0].description}</Typography>
                <Typography>Humidity: {weather.main.humidity} %</Typography>
                <Typography>Wind Speed: {weather.wind.speed} m/s</Typography>
            </CardContent>
        </Card>
    );
};

export default CurrentWeather;
