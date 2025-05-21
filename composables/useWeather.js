import { ref } from 'vue';
import { fetchWeather, fetchForecast, fetchGeoData, fetchAirQuality } from '../services/apiService';

export function useWeather() {
  const weatherData = useState('weatherData', () => ({ main: {}, weather: [], wind: {} }));
  const forecasts = useState('forecastsData', () => []);
  const airQualityData = useState('airQualityData', () => ({ list: [] }));
  const loading = useState('loading', () => true);
  const error = useState('error', () => null);
  
  const fetchWeatherData = async (city) => {
    try {
      const geoData = await fetchGeoData(city);
      const { lat, lon } = geoData[0];
      weatherData.value = await fetchWeather(city);
      forecasts.value = await fetchForecast(city);
      airQualityData.value = await fetchAirQuality(lat, lon);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { weatherData, forecasts, airQualityData, error, fetchWeatherData };
}