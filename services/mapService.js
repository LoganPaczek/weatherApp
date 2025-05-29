import 'leaflet/dist/leaflet.css';

const apiKey = '61eee57ae89b4a920d71db924b2272aa';

export async function initializeMap(container) {
  const L = await import('leaflet');

  const map = L.map(container, {
    center: [48.8566, 2.3522],
    zoom: 6,
    minZoom: 3,
    maxZoom: 10
  });

  // Fond de carte
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Couches météo
  const layers = {
    "Précipitations": L.tileLayer(`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
      opacity: 0.5,
      attribution: '© OpenWeatherMap'
    }),
    "Température": L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
      opacity: 0.5,
      attribution: '© OpenWeatherMap'
    }),
    "Vent": L.tileLayer(`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
      opacity: 0.5,
      attribution: '© OpenWeatherMap'
    }),
    "Nuages": L.tileLayer(`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
      opacity: 0.5,
      attribution: '© OpenWeatherMap'
    })
  };

  layers["Précipitations"].addTo(map);

  L.control.layers(null, layers, { collapsed: false }).addTo(map);

  return map;
}
