<template>
    <header id="header">
        <input type="text" name="city" id="city" value="Frévent" disabled>
        <p id="currentTemp">17°</p>
        <p id="currentWeather">Brouillard</p>
    </header>

    <div id="weatherDataContainer">
        <div id="leftPart">
            <div id="leftPartTopSide">

            </div>
            <div id="leftPartBottomSide">
                <div id="bottomSideLeftPart">

                </div>
                <div id="bottomSideRightPart">
                    <div id="airQuality">

                    </div>
                    <div id="sunsetAndFeelsLikeContainer">
                        
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
    header#header{
        width: 100%;
        height: 15%;
        background-color: green;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
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
        width: 100%;
        height: 75%;
        background-color: blue;
        display: flex;
        justify-content: space-around;
        align-items: stretch; // Assure que les enfants s'étirent uniformément

        #leftPart{
            width: 55%;
            height: 100%;
            background-color: chocolate;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            #leftPartTopSide{
                width: 100%;
                height: 35%;
                background-color: lightgreen;
            }

            #leftPartBottomSide{
                width: 100%;
                height: 60%;
                background-color: aqua;
                display: flex;
                justify-content: space-between;

                #bottomSideLeftPart{
                    height: 100%;
                    width: 40%;
                    background-color: lightcoral;
                }

                #bottomSideRightPart{
                    height: 100%;
                    width: 55%;
                    background-color: lightpink;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    #airQuality{
                        width: 100%;
                        height: 35%; // Hauteur définie ici
                        background-color: lightgrey;
                    }

                    #sunsetAndFeelsLikeContainer{
                        width: 100%;
                        height: 55%;
                        background-color: rgb(36, 218, 0);
                    }
                }
            }
        }

        #rightPart{
            width: 35%;
            height: 100%;
            background-color: lightblue;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            #rightPartTopSide{
                height: 61%;
                width: 100%;
                background-color: brown;
            }

            #rightPartBottomSide{
                width: 100%;
                height: 33%;
                background-color: lightyellow;
            }
        }
    }

    footer#footer{
        width: 100%;
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
                width: 100%;
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
                width: 100%;
                height: 30%;
                margin-top: 20px;
            
                #rightPartTopSide{
                    height: 100%;
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
                        width: 100%;
                    }

                    #bottomSideRightPart{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>