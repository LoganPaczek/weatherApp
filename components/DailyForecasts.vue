<script setup>
    import { ref, onMounted  } from 'vue'

    const sortedDays = ref([])
    const forecastsData = useState("forecastsData");

    const getDay = (timestamp) => {
        const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        let date = new Date(timestamp * 1000);
        return days[date.getDay()];
    };

    const createSortedDays = () => {
    const dayData = {};

    forecastsData.value.list.forEach(forecast => {
        const day = getDay(forecast.dt);

        if (!dayData[day]) {
            dayData[day] = {
                tempMini: forecast.main.temp_min,
                tempMaxi: forecast.main.temp_max,
                weatherCounts: {}, // Pour compter les occurrences des conditions météo
            };
        } else {
            dayData[day].tempMini = Math.min(dayData[day].tempMini, forecast.main.temp_min);
            dayData[day].tempMaxi = Math.max(dayData[day].tempMaxi, forecast.main.temp_max);
        }

        // Comptez les occurrences des conditions météo
        const weather = forecast.weather[0].main;
        if (!dayData[day].weatherCounts[weather]) {
            dayData[day].weatherCounts[weather] = 1;
        } else {
            dayData[day].weatherCounts[weather]++;
        }
    });

    // Ajoutez la condition météo la plus fréquente à chaque jour
    const sortedDays = Object.entries(dayData)
        .map(([day, data]) => {
            const mostFrequentWeather = Object.entries(data.weatherCounts)
                .reduce((a, b) => (b[1] > a[1] ? b : a))[0]; // Trouve la condition météo la plus fréquente
            return {
                day,
                tempMini: Math.round(data.tempMini),
                tempMaxi: Math.round(data.tempMaxi),
                weather: mostFrequentWeather, // Ajoutez la condition météo la plus fréquente
            };
        })
        .splice(0, 5); // Garder les 5 premiers jours

    return sortedDays;
};

    onMounted(async () => {
        sortedDays.value = createSortedDays(forecastsData.value)        
    })
</script>

<template>
    <div class="section full-size overflow-y-scroll">
        <SectionTitle
          :title="'Daily forecast (5 days)'"
          :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z'/></svg>`"
        />
        <div id="daily_weather-container" class="full-height">
            <div class="daily_forecast-container" v-for="day in sortedDays">
                <div class="left flex-space-between half-width">
                    <p class="day">{{ day.day }}</p>
                    <img :src="`assets/images/${day.weather}.png`" alt="">
                </div>
                <div class="right flex-space-between half-width">
                    <p class="minTemp">{{ day.tempMini }}°</p>
                    <TemperatureBar :currenttemp="day.tempMaxi"/>
                    <p class="maxTemp">{{ day.tempMaxi }}°</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #daily_weather-container{
        .daily_forecast-container{
            display: flex;
            border-top: 2px solid #BDBDBD;
            padding: 3px 0px;
            margin-top: 20px;

            p{
                font-size: 1.2em;
            }

            .left{
                padding: 0px 5px;

                img{
                    width: 60px;
                    height: 60px;
                    object-fit: contain;

                    @media screen and (max-width: 1400px){
                        width: 50px;
                        height: 50px;
                    }
                }
            }

            .right{
                .minTemp{
                    color: #BDBDBD;
                }
            }
        }
    }

@media screen and (max-width: 1000px){
        #daily_weather-container{
            .daily_forecast-container{
                .right{
                    p{
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>