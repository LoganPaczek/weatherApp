<script setup>
    import { useDateUtils } from '#imports';
    
    const { getHour } = useDateUtils();
    const forecastData = useState('forecastsData');
</script>

<template>
    <div class="section full-size">
        <SectionTitle
        :title="'Hourly forecast'"
        :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'/></svg>`"
        />

        <div id="hourlyForecasts" class="flex-space-between" v-if="forecastData">
            <div v-for="(forecast) in forecastData.list.slice(0,10)" class="hourly_weather margin-top-10">
                <p>{{ getHour(forecast.dt) }}:00</p>
                <img :src="`assets/images/${forecast.weather[0].main}.png`" :alt="forecast.weather[0].main">
                <p class="temperature">{{ Math.round((forecast.main.temp_min + forecast.main.temp_max) / 2) }}°</p>
            </div>
        </div>

        <ErrorData :errorMessage="'No forecasts available'" v-else/>
    </div>
</template>

<style scoped lang="scss">
    @use '/assets/styles/variables' as v;
    .section{
        overflow-x: scroll;

        #hourlyForecasts{
            .hourly_weather{
                max-width: 200px;
                text-align: center;
                margin-left: 20px;

                p{
                    font-size: 1.5em;
                }
    
                img{
                    width: 100px;
                    height: 100px;
                    margin: v.$ten-pixels 0px;
                    object-fit: contain;
                }
            }
        }


    .hourly_weather:not(:nth-child(1)){
        margin-left: 20px;
    }
}

    @media screen and (max-width: 600px){
        .section{
            #hourlyForecasts{
                padding-bottom: v.$ten-pixels;
            }
        }
    }
</style>