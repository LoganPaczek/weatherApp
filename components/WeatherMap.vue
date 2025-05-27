<script setup>
    import { onMounted, ref } from 'vue'

    const apiKey = '61eee57ae89b4a920d71db924b2272aa'
    const mapContainer = ref(null)

    onMounted(async () => {
        const L = await import('leaflet');
        import('leaflet/dist/leaflet.css');
        const map = L.map(mapContainer.value, {
            center: [48.8566, 2.3522],
            zoom: 6,
            minZoom: 3,
            maxZoom: 10
        })

        // Fond de carte
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map)

        // Définir les couches météo
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
        }

        layers["Précipitations"].addTo(map)

        L.control.layers(null, layers, { collapsed: false }).addTo(map)
    })
</script>

<template>
    <div class="section full-size">
        <SectionTitle
        :title="'Precipitation'"
        :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M288 0c17.7 0 32 14.3 32 32l0 17.7C451.8 63.4 557.7 161 573.9 285.9c2 15.6-17.3 24.4-27.8 12.7C532.1 283 504.8 272 480 272c-38.7 0-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C359 299.5 326.7 272 288 272s-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C167 299.5 134.7 272 96 272c-24.8 0-52.1 11-66.1 26.7C19.4 310.4 .1 301.5 2.1 285.9C18.3 161 124.2 63.4 256 49.7L256 32c0-17.7 14.3-32 32-32zm0 304c12.3 0 23.5 4.6 32 12.2l0 114.3c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4l0-114.3c8.5-7.6 19.7-12.2 32-12.2z'/></svg>`"
        />
        <div id="mapContainer" class="full-size">
            <div id="map" class="full-size" ref="mapContainer"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .section{
        #mapContainer{
            border-radius: 10px;
            overflow: hidden;
            margin-top: 10px;

            #map{
                border-radius: 10px;
            }
        }
    }
</style>