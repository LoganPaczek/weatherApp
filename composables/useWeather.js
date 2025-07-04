import { fetchWeather, fetchForecast, fetchGeoData, fetchAirQuality } from '@/services/apiService';

export function useWeather() {
  const city = useState('city', () => 'Paris') // Valeur par défaut
  const weatherData = useState('weatherData', () => ({ main: {}, weather: [], wind: {} }));
  const forecasts = useState('forecastsData', () => ({ list: [] }));
  const airQualityData = useState('airQualityData', () => ({ list: [] }));
  const error = useState('error', () => null);
  const loading = useState('loading', () => true);

  const fetchWeatherData = async (newCity) => {
    if(newCity) city.value = newCity.trim();

    error.value = null;
    loading.value = true;  // Début du chargement

    try {
      const geoData = await fetchGeoData(city.value);

      if (!geoData || geoData.length === 0) {
        // Pas de données, on vide tout
        weatherData.value = null;
        forecasts.value = null;
        airQualityData.value = null;
        error.value = `No data found for "${city.value}"`;
        return;
      }
      
      const { lat, lon } = geoData[0];

      weatherData.value = await fetchWeather(city.value);
      forecasts.value = await fetchForecast(city.value);
      airQualityData.value = await fetchAirQuality(lat, lon);
    } catch (err) {
      console.error(err);
      error.value = err.message;
    } finally {
      loading.value = false;  // Fin du chargement, succès ou erreur
    }
  };

  return {
    city,
    weatherData,
    forecasts,
    airQualityData,
    error,
    loading,
    fetchWeatherData
  };
}