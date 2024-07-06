// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Grid, Paper, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { getWeather, getForecast } from './services/weatherService';
import theme from './theme';

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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div
                style={{
                    backgroundColor: theme.palette.background.default,
                    minHeight: '100vh',
                    paddingTop: '20px',
                }}
            >
                <Container>
                    <Typography variant="h3" component="h1" gutterBottom align="center">
                        Weather Dashboard
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <SearchBar onSearch={handleSearch} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {weather && (
                                <Paper elevation={6} style={{ backgroundColor: '#ffffff', borderRadius: 15 }}>
                                    <CurrentWeather weather={weather} />
                                </Paper>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {forecast && (
                                <Paper elevation={6} style={{ backgroundColor: '#ffffff', borderRadius: 15 }}>
                                    <Forecast forecast={forecast} />
                                </Paper>
                            )}
                        </Grid>
                    </Grid>
                    {error && (
                        <Typography color="error" variant="h6" align="center" style={{ marginTop: '20px' }}>
                            {error}
                        </Typography>
                    )}
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default App;
