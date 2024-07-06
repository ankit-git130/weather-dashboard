import React from 'react';
import { Line } from 'react-chartjs-2';

const WeatherChart = ({ forecast }) => {
    const data = {
        labels: forecast.daily.slice(1, 8).map((_, index) => `Day ${index + 1}`),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: forecast.daily.slice(1, 8).map(day => day.temp.day),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return <Line data={data} />;
};

export default WeatherChart;
