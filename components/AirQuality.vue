<script setup>
    import { ref, watch, computed } from 'vue';
    import { useWeather } from '@/composables/useWeather';

    const city = ref("Frévent");
    const { airQualityData, loading, error, fetchWeatherData } = useWeather();
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

    const airQualityScore = computed(() => {
        if (airQualityData.value && airQualityData.value.list && airQualityData.value.list.length > 0) {
            return airQualityData.value.list[0].main.aqi;
        }
        return null;
    });
</script>

<template>
    <div class="section full-size overflow-y-scroll" v-if="airQualityScore">
        <SectionTitle
        :title="'Air Quality'"
        :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z'/></svg>`"
        />
        <div id="air_quality_data-container">
            <p id="score" class="text-highlight-1">
              {{ airQualityScore }} - {{ AirQualityClassement[airQualityScore- 1].quality }}
            </p>
            <p id="comment">{{ AirQualityClassement[airQualityScore - 1].description }}</p>
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