<script setup>
import { onMounted, ref } from 'vue';
import { useWeather } from '#imports';

const city = ref("Frévent");
const { weatherData, loading, fetchWeatherData } = useWeather();

onMounted(() => {
  fetchWeatherData(city.value);
});
</script>

<template>

    <Loader v-if="loading"/>

    <div 
    id="weatherDataMainContainer" 
    class="flex-space-between flex-column full-height"
    v-else
    >
        <header id="header" class="flex-center flex-column">
            <div id="cityInputContainer" class="flex-center flex-column">
                <input 
                type="text" 
                name="city" 
                id="city" 
                v-model="city"
                >
                <input type="submit" id="changeCity" value="Changer">
            </div>
            <p id="currentTemp">
              {{ weatherData?.main?.temp ? Math.round(weatherData.main.temp) + '°C' : 'Chargement...' }}
            </p>
            <p id="currentWeather">
              {{ weatherData?.weather[0]?.main || 'Chargement...' }}
            </p>
        </header>
    
        <div id="weatherDataContainer" class="full-width">
            <div id="leftPart" class="flex-space-between flex-column">
                <div id="leftPartTopSide" class="full-width">
                    <HourlyForecast/>
                </div>
                <div id="leftPartBottomSide" class="flex-space-between full-width">
                    <div id="bottomSideLeftPart" class="full-height">
                        <DailyForecasts/>
                    </div>
                    <div id="bottomSideRightPart" class="flex-space-between flex-column full-height">
                        <div id="airQuality" class="full-width">
                            <AirQuality/>
                        </div>
                        <div id="sunsetAndFeelsLikeContainer" class="full-width flex-space-between">
                            <Sunset v-if="weatherData?.sys"/>
                            <FeelsLike/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="rightPart">
                <div id="rightPartTopSide">
                    <WeatherMap/>
                </div>
                <div id="rightPartBottomSide" class="flex-space-between">
                    <Humidity/>
                    <WindDirection/>
                </div>
            </div>
        </div>
    
        <footer id="footer">
            <p>Footer</p>
        </footer>
    </div>
</template>

<style scoped lang="scss">
    @use '/assets/styles/variables' as v;
    #weatherDataMainContainer{
            header#header{
            height: 15%;
            color: #FFFFFF;
            width: 200px;

            #cityInputContainer{
                width: 100%;

                input{
                    text-align: center;
                    background: transparent;
                    border: none;
                    font-weight: bold;
                    font-size: 1.8em;
                    color: #FFFFFF;
                    cursor: pointer;

                    &#changeCity{
                        font-size: 1.3em;
                        display: none;
                    }
                }
            }

            #currentTemp{
                font-size: 1.5em;
            }
        }

        #weatherDataContainer{
            height: 75%;
            // background-color: blue;
            display: flex;
            justify-content: space-around;
            align-items: stretch; // Assure que les enfants s'étirent uniformément

            #leftPart{
                width: 55%;
                // background-color: chocolate;

                #leftPartTopSide{
                    height: 37%;
                    // background-color: lightgreen;
                }

                #leftPartBottomSide{
                    height: 60%;

                    #bottomSideLeftPart{
                        width: 43%;
                    }

                    #bottomSideRightPart{
                        width: 55%;

                        #airQuality{
                            height: 35%; // Hauteur définie ici
                        }

                        #sunsetAndFeelsLikeContainer{
                            height: 60%;
                        }
                    }
                }
            }

            #rightPart{
                width: 35%;
                // background-color: lightblue;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                #rightPartTopSide{
                    height: 61%;

                }

                #rightPartBottomSide{
                    height: 36%;
                    // background-color: lightyellow;
                }
            }
        }

        footer#footer{
            height: 10%;
            background-color: yellow;
        }
    }

    

    @media screen and (max-width: 1000px) {
        #weatherDataMainContainer{
            #weatherDataContainer{
                justify-content: space-between;
                
                #leftPart{
                    width: 61%;
                }
    
                #rightPart{
                    width: 38%;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        #weatherDataMainContainer{
            header#header{
                height: 8%;
                background-color: orangered;
            }
    
            #weatherDataContainer{
                flex-direction: column;
                height: 87%;
                
                #leftPart{
                    width: v.$full-percentage-value;
                    height: 50%;

                    #leftPartTopSide{
                        height: 35%;
                    }
    
                    #leftPartBottomSide{
                        height: 60%;
    
                        #bottomSideRightPart{
                            width: 55%;
                        }
                    }
                }
    
                #rightPart{
                    width: v.$full-percentage-value;
                    height: 48%;
                    margin-top: 20px;
                
                    #rightPartTopSide{
                        height: v.$full-percentage-value;
                        height: 65%;
                        width: 100%;
                    }

                    #rightPartBottomSide{
                        height: 32%;
                    }
                }
            }
            
            footer#footer{
                height: 5%;
                background-color: yellow;
            }
        }
    }

    @media screen and (max-width: 600px){
        #weatherDataMainContainer{
            header#header{
                height: 7%;
            }

            #weatherDataContainer{
                background-color: aqua;
                margin-top: 20px;

                #leftPart{
                    background-color: red;

                    #leftPartTopSide{
                        background-color: yellow;
                        height: 28%;
                        margin-bottom: 20px;
                    }

                    #leftPartBottomSide{
                        flex-direction: column;
                        background-color: blue;
                        height: 70%;
    
                        #bottomSideLeftPart{
                            width: v.$full-percentage-value;
                            background-color: orangered;
                        }
    
                        #bottomSideRightPart{
                            width: v.$full-percentage-value;
                            margin-top: 20px;
                            background-color: pink;
    
                            #airQuality{
                                padding: 10px 0px;
                                background-color: black;
                            }
    
                            #sunsetAndFeelsLikeContainer{
                                margin-top: 20px;
                                background-color: antiquewhite;
                            }
                        }
                    }
                }

                #rightPart{
                    background-color: crimson;
                    height: 39%;

                }
            }

            footer#footer{
                height: 3%;
                background-color: rgb(51, 255, 0);
            }
        }
    }
</style>