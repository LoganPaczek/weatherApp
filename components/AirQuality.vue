<script setup>
    import { ref } from 'vue';

    const city = ref("Frévent");
    const airQuality = ref(null)
    const AirQualityClassement = [
    {
        score: 1,
        quality: "Good",
        description: "Air quality is considered satisfactory, and air pollution poses little or no risk.",
    },
    {
        score: 2,
        quality: "Fair",
        description: "Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for sensitive individuals.",
    },
    {
        score: 3,
        quality: "Moderate",
        description: "Members of sensitive groups (children, elderly, and people with respiratory conditions) may experience health effects. The general public is not likely to be affected.",
    },
    {
        score: 4,
        quality: "Poor",
        description: "Everyone may begin to experience health effects; sensitive groups may experience more serious health issues.",
    },
    {
        score: 5,
        quality: "Very Poor",
        description: "Health alert: everyone may experience more serious health effects.",
    },
    ];

    onMounted(async () => {
    try {
        const apiKey = "61eee57ae89b4a920d71db924b2272aa"; //! temporaire


        const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city.value},FR&limit=1&appid=${apiKey}`);
        if (!geoResponse.ok) throw new Error("Erreur lors de la récupération des données géographiques");
        const geoData = await geoResponse.json();
        if (!geoData || geoData.length === 0) throw new Error("Impossible de trouver les coordonnées pour cette ville.");
        const { lat, lon } = geoData[0];

        const airQualityResponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        if (!airQualityResponse.ok) throw new Error("Erreur lors de la récupération des données de qualité de l'air");
        const airQualityData = await airQualityResponse.json();
        airQuality.value = airQualityData.list[0].main.aqi;

    } catch (err) {
        // Gérer les erreurs
        console.error("Erreur lors de la requête :", err);
        error.value = err.message;
    }
    });



</script>

<template>
    <div class="section full-size overflow-y-scroll" v-if="airQuality">
        <SectionTitle
        :title="'Air Quality'"
        :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z'/></svg>`"
        />
        <div id="air_quality_data-container">
            <p id="score" class="text-highlight-1">
              {{ airQuality }} - {{ AirQualityClassement[airQuality- 1].quality }}
            </p>
            <p id="comment">{{ AirQualityClassement[airQuality - 1].description }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #air_quality_data-container{
        padding-left: 15px;
        margin-top: 5px;

        #comment{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 600px){
        #air_quality_data-container{
            padding-bottom: 10px;
        }
    }
</style>