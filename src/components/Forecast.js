import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Forecast = ({ forecast }) => {
    const dates = forecast.list.map(item => new Date(item.dt * 1000).toLocaleDateString());
    const temperatures = forecast.list.map(item => item.main.temp);

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperatures,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
            },
        },
    };

    const getWeatherIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div>
            <Typography variant="h5" component="h2" gutterBottom align="center">
                5-Day Forecast
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card style={{ backgroundColor: '#fde4cf', borderRadius: 10, border: '1px solid #e0e0e0' }}>
                        <CardContent>
                            <Line data={data} options={options} />
                        </CardContent>
                    </Card>
                </Grid>
                {forecast.list.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card style={{ backgroundColor: '#98f5e1', borderRadius: 10, border: '1px solid #e0e0e0' }}>
                            <CardMedia
                                component="img"
                                alt="Weather icon"
                                height="140"
                                image={getWeatherIconUrl(item.weather[0].icon)}
                                title="Weather icon"
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    {new Date(item.dt * 1000).toLocaleDateString()}
                                </Typography>
                                <Typography>Temperature: {item.main.temp} °C</Typography>
                                <Typography>Conditions: {item.weather[0].description}</Typography>
                                <Typography>Humidity: {item.main.humidity} %</Typography>
                                <Typography>Wind Speed: {item.wind.speed} m/s</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Forecast;
