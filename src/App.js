import React, { useState } from 'react';
import { CssBaseline, Container, Grid, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { getWeather, getForecast } from './services/weatherService';

const App = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (city) => {
        try {
            const weatherResponse = await getWeather(city);
            setWeather(weatherResponse.data);
            const { coord } = weatherResponse.data;
            const forecastResponse = await getForecast(coord.lat, coord.lon);
            setForecast(forecastResponse);
        } catch (error) {
            console.error("API Error:", error);
            setError('Failed to fetch weather data. Please check your API key and try again.');
        }
    };

    return (
        <>
            <CssBaseline />
            <Container style={{ paddingTop: '20px' }}>
                <Typography variant="h3" component="h1" gutterBottom align="center">
                    Weather Dashboard
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar onSearch={handleSearch} />
                    </Grid>
                    {weather && (
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={12} md={6}>
                                <CurrentWeather weather={weather} />
                            </Grid>
                        </Grid>
                    )}
                    {forecast && (
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={12}>
                                <Forecast forecast={forecast} />
                            </Grid>
                        </Grid>
                    )}
                </Grid>
                {error && (
                    <Typography color="error" variant="h6" align="center" style={{ marginTop: '20px' }}>
                        {error}
                    </Typography>
                )}
            </Container>
        </>
    );
};

export default App;
