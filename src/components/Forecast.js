import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
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
                borderColor: 'rgba(75,192,192,1)',
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

    return (
        <div>
            <Typography variant="h5" component="h2" gutterBottom align="center">
                5-Day Forecast
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Line data={data} options={options} />
                        </CardContent>
                    </Card>
                </Grid>
                {forecast.list.map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <Card>
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
