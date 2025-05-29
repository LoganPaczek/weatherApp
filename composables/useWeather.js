import { fetchWeather, fetchForecast, fetchGeoData, fetchAirQuality } from '@/services/apiService';

export function useWeather() {
  const weatherData = useState('weatherData', () => ({ main: {}, weather: [], wind: {} }));
  const forecasts = useState('forecastsData', () => ({ list: [] }));
  const airQualityData = useState('airQualityData', () => ({ list: [] }));
  const error = useState('error', () => null);
  const loading = useState('loading', () => true);

  const fetchWeatherData = async (city) => {
    error.value = null;
    loading.value = true;  // Début du chargement

    try {
      const geoData = await fetchGeoData(city);
      const { lat, lon } = geoData[0];

      weatherData.value = await fetchWeather(city);
      forecasts.value = await fetchForecast(city);
      airQualityData.value = await fetchAirQuality(lat, lon);
    } catch (err) {
      console.error(err);
      error.value = err.message;
    } finally {
      loading.value = false;  // Fin du chargement, succès ou erreur
    }
  };

  return { weatherData, forecasts, airQualityData, error, loading, fetchWeatherData };
}