<script setup>
    const weatherData = useState('weatherData');

    const getDropCircleStyle = (humidity) => {
        const percentage = Math.min(Math.max(humidity, 0), 100);
        return {
            '--humidity-percentage': percentage,
        };
    };

    const getHumidityComment = (humidity) => {
        if (humidity < 30) {
            return "The air is dry, stay hydrated.";
        } else if (humidity >= 30 && humidity <= 60) {
            return "The weather feels comfortable.";
        } else if (humidity > 60 && humidity <= 80) {
            return "The weather is slightly humid.";
        } else {
            return "The weather is very humid, it might feel uncomfortable.";
        }
    };
</script>

<template>
    <div class="section full-height">
        <SectionTitle
        :title="'Humidity'"
        :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z'/></svg>`"
        />

        <div id="humidity-container" class="margin-left-15">
            <p id="humidityScore" class="text-highlight-1">{{ weatherData.main.humidity }}%</p>
            <div id="dropContainer">
                <div id="dropCircle" class="flex-center" :style="getDropCircleStyle(weatherData.main.humidity)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/>
                    </svg>
                </div>
            </div>
            <p id="humidityComment">{{ getHumidityComment(weatherData.main.humidity) }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.section {
    width: 45%;
    
    #humidity-container {
        #humidityScore {
            margin-top: 10px;
        }

        #humidityComment{
            font-size: 0.9em;
        }
    }

    #dropContainer {
        margin-right: 30px;

        #dropCircle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto;
            position: relative;
            overflow: hidden;

            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: conic-gradient(#0074F8 calc(var(--humidity-percentage, 0) * 1%), transparent 0%);
                mask: radial-gradient(circle, transparent 60%, black 61%);
                -webkit-mask: radial-gradient(circle, transparent 60%, black 61%);
            }

            svg {
                width: 80%;
                height: 80%;
                fill: #0074F8;
                position: absolute;
                top: 10%;
                left: 10%;
            }
        }
    }
}
</style>