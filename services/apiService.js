const apiKey = "61eee57ae89b4a920d71db924b2272aa";

export async function fetchWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des données météo");
  return await response.json();
}

export async function fetchForecast(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des prévisions météo");
  return await response.json();
}

export async function fetchGeoData(city) {
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},FR&limit=1&appid=${apiKey}`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des données géographiques");
  return await response.json();
}

export async function fetchAirQuality(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des données de qualité de l'air");
  return await response.json();
}