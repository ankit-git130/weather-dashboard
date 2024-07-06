import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CurrentWeather = ({ weather }) => {
    return (
        <Card style={{ backgroundColor: '#98f5e1', borderRadius: 10, border: '1px solid #e0e0e0' }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {weather.name}
                </Typography>
                <Typography variant="body1">Temperature: {weather.main.temp} °C</Typography>
                <Typography variant="body1">Humidity: {weather.main.humidity} %</Typography>
                <Typography variant="body1">Wind Speed: {weather.wind.speed} m/s</Typography>
                <Typography variant="body1">Conditions: {weather.weather[0].description}</Typography>
            </CardContent>
        </Card>
    );
};

export default CurrentWeather;
