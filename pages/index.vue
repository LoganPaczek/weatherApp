<script setup>
import { onMounted, ref } from 'vue';

const weatherData = ref(null); // Stocker les données météo
const error = ref(null); // Stocker les erreurs

onMounted(async () => {
  const config = useRuntimeConfig();
  const url = `${config.public.apiBase}?q=Paris&appid=${config.public.apiKey}&units=metric`;

  try {
    // Effectuer la requête avec fetch
    const response = await fetch(url);

    // Vérifier si la réponse est OK
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    // Convertir la réponse en JSON
    const data = await response.json();

    // Stocker les données dans weatherData
    weatherData.value = data;
  } catch (err) {
    // Gérer les erreurs
    console.error("Erreur lors de la requête :", err);
    error.value = err.message;
  }
});
</script>

<template>
    <header id="header" class="flex-center flex-column">
        <input type="text" name="city" id="city" value="Frévent" disabled>
        <p id="currentTemp">
          {{ weatherData?.main?.temp ? Math.round(weatherData.main.temp) + '°C' : 'Chargement...' }}
        </p>
        <p id="currentWeather">
          {{ weatherData?.weather[0]?.description || 'Chargement...' }}
        </p>
    </header>

    <div id="weatherDataContainer">
        <div id="leftPart" class="flex-space-between flex-column">
            <div id="leftPartTopSide" class="full-width">

            </div>
            <div id="leftPartBottomSide" class="flex-space-between full-width">
                <div id="bottomSideLeftPart" class="full-height">

                </div>
                <div id="bottomSideRightPart" class="flex-space-between flex-column full-height">
                    <div id="airQuality" class="full-width">

                    </div>
                    <div id="sunsetAndFeelsLikeContainer" class="full-width">
                        
                    </div>
                </div>
            </div>
        </div>
        <div id="rightPart">
            <div id="rightPartTopSide">

            </div>
            <div id="rightPartBottomSide">
                
            </div>
        </div>
    </div>

    <footer id="footer">

    </footer>
</template>

<style scoped lang="scss">
    @use '/assets/styles/variables' as v;

    header#header{
        height: 15%;
        background-color: green;
        color: #FFFFFF;

        input{
            text-align: center;
            background: transparent;
            border: none;
            font-weight: bold;
            font-size: 1.8em;
            color: #FFFFFF;
        }

        #currentTemp{
            font-size: 1.5em;
        }
    }

    #weatherDataContainer{
        height: 75%;
        background-color: blue;
        display: flex;
        justify-content: space-around;
        align-items: stretch; // Assure que les enfants s'étirent uniformément

        #leftPart{
            width: 55%;
            background-color: chocolate;

            #leftPartTopSide{
                height: 35%;
                background-color: lightgreen;
            }

            #leftPartBottomSide{
                height: 60%;
                background-color: aqua;

                #bottomSideLeftPart{
                    width: 40%;
                    background-color: lightcoral;
                }

                #bottomSideRightPart{
                    width: 55%;
                    background-color: lightpink;

                    #airQuality{
                        height: 35%; // Hauteur définie ici
                        background-color: lightgrey;
                    }

                    #sunsetAndFeelsLikeContainer{
                        height: 55%;
                        background-color: rgb(36, 218, 0);
                    }
                }
            }
        }

        #rightPart{
            width: 35%;
            background-color: lightblue;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            #rightPartTopSide{
                height: 61%;
                background-color: brown;
            }

            #rightPartBottomSide{
                height: 33%;
                background-color: lightyellow;
            }
        }
    }

    footer#footer{
        height: 10%;
        background-color: yellow;
    }

    @media screen and (max-width: 1000px) {
        #weatherDataContainer{
            justify-content: space-between;
            
            #leftPart{
                width: 60%;
            }

            #rightPart{
                width: 38%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        header#header{
            height: 11%;
        }

        #weatherDataContainer{
            flex-direction: column;
            height: 81%;
            
            #leftPart{
                width: v.$full-percentage-value;
                height: 75%;

                #leftPartTopSide{
                    height: 30%;
                }

                #leftPartBottomSide{
                    height: 65%;

                    #bottomSideRightPart{
                        width: 58%;
                    }
                }
            }

            #rightPart{
                flex-direction: row;
                width: v.$full-percentage-value;
                height: 30%;
                margin-top: 20px;
            
                #rightPartTopSide{
                    height: v.$full-percentage-value;
                }
            }
        }
        
        footer#footer{
            height: 8%;
        }
    }

    @media screen and (max-width: 500px){
        #weatherDataContainer{
            #leftPart{
                #leftPartBottomSide{
                    flex-direction: column;

                    #bottomSideLeftPart{
                        width: v.$full-percentage-value;
                    }

                    #bottomSideRightPart{
                        width: v.$full-percentage-value;
                    }
                }
            }
        }
    }
</style>