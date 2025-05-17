<template>
    <header id="header" class="flex-center flex-column">
        <input type="text" name="city" id="city" value="Frévent" disabled>
        <p id="currentTemp">17°</p>
        <p id="currentWeather">Brouillard</p>
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