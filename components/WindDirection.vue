<script setup>
    const weatherData = useState('weatherData');    

    const getRotationAngle = (windDirection) => {
        // Return the windDirection or 0 if this one is undefined
        return windDirection || 0;
    };
</script>

<template>
    <div class="section full-height">
        <SectionTitle
        :title="'Wind'"
        :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z'/></svg>`"
        />
        <div id="windContainer" v-if="weatherData">
            <p id="windSpeed" class="text-highlight-1 margin-left-15">
                {{ Math.round(weatherData.wind.speed) }} Km/h
            </p>

            <div id="windCursorContainer" class="flex-center">
                <svg 
                :style="{ transform: `rotate(${getRotationAngle(weatherData?.wind?.deg)}deg)` }"
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 448 512"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg>
            </div>
        </div>
        <ErrorData :errorMessage="'No wind speed data available'" v-else/>
    </div>
</template>

<style scoped lang="scss">
    .section{
        width: 45%;

        #windContainer{
            margin-top: 5px;

            #windCursorContainer{
                width: 70px;
                height: 70px;
                border-radius: 50%;
                border: 5px solid #BDBDBD;
                margin: 10px auto;

                svg{
                    width: 60%;
                    height: 60%;
                    fill: #BDBDBD;
                    transition: transform 0.3s ease-in-out;
                }
            }
        } 
    }
</style>