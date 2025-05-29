<script setup>
  const weatherData = useState('weatherData');  

  const feelsLikeComments = [
    { minDiff: -Infinity, maxDiff: -5, comment: "The wind or humidity makes it feel much colder, bundle up!" },
    { minDiff: -5, maxDiff: -3, comment: "A chilly breeze, you can really feel it!" },
    { minDiff: -3, maxDiff: -1, comment: "The air feels slightly cooler than expected." },
    { minDiff: -1, maxDiff: 1, comment: "The temperature feels as expected." },
    { minDiff: 1, maxDiff: 3, comment: "A slight extra warmth in the air." },
    { minDiff: 3, maxDiff: 5, comment: "It feels warmer than expected, dress lightly!" },
    { minDiff: 5, maxDiff: Infinity, comment: "Heavy heat, possibly due to humidity!" }
  ];

  const getFeelsLikeComment = (temp, feelsLike) => {
  const diff = feelsLike - temp;
  const match = feelsLikeComments.find(({ minDiff, maxDiff }) => diff >= minDiff && diff < maxDiff);
  return match?.comment || "Sensation inconnue";
};
</script>

<template>
    <div class="section full-height overflow-y-scroll">
        <SectionTitle
        :title="'Feels like'"
        :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M128 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C249.8 332.6 256 349.5 256 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5L128 112zM176 0C114.1 0 64 50.1 64 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L288 112C288 50.1 237.9 0 176 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L192 112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 210.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zM480 160l32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 288c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288z'/></svg>`"
        />
        <div id="feelsLike-container" v-if="weatherData">
            <p id="feelsLikeTemperature" class="text-highlight-1 margin-left-15 margin-top-5">{{ Math.round(weatherData.main.feels_like) }}°</p>
            <div id="svgContainer" class="flex-center full-width">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 64c-26.5 0-48 21.5-48 48l0 164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5L208 112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112l0 164.4c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6L48 112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L144 208c0-8.8 7.2-16 16-16s16 7.2 16 16l0 114.7c18.6 6.6 32 24.4 32 45.3z"/></svg>
            </div>
            <p id="temperatureComment" class="margin-left-15 margin-top-10">{{ getFeelsLikeComment((Math.round(weatherData.main.temp)), Math.round(weatherData.main.feels_like)) }}</p>
        </div>

        <ErrorData :errorMessage="'No data available on the feeling'" v-else/>
    </div>

</template>

<style scoped lang=scss>
    .section{
        width: 48%;
        
        #feelsLike-container{
            #svgContainer{
                justify-content: center;
                margin-right: 20px;

                svg{
                    width: 70px;
                    height: 70px;
                    fill:  #BDBDBD;
                }
            }

            #temperatureComment{
                font-size: 1em;
                font-weight: 400;
            }
        }
    }
</style>