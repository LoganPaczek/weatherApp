<script setup>
    import { ref, onMounted, watch } from 'vue'

    const minTemp = -10;
    const maxTemp = 40;
    const currenttemp = 25;
    const bar = ref(null);
    const cursorLeft = ref(0);

    const props = defineProps({
        currenttemp: {
            type: Number,
            default: currenttemp
        },
    })

    const updateCursorPosition = () => {
        const barWidth = bar.value?.offsetWidth || 0
        const percent = (props.currenttemp - minTemp) / (maxTemp - minTemp)
        cursorLeft.value = percent * barWidth
}

onMounted(updateCursorPosition);
</script>

<template>
    <div class="bars" ref="bar">
        <div class="cursor" :style="{ left: cursorLeft + 'px' }"></div>
    </div>
</template>


<style scoped lang="scss">
    .bars{
        height: 5px;
        width: 70%;
        background: linear-gradient(to right, #00f, #0ff, #0f0, #ff0, #f00);
        border-radius: 50px;
        position: relative;
        margin: 0px 5px;

        .cursor{
        height: 5px;
        width: 5px;
        background-color: #fff;
        border-radius: 50px;
        border: 1px solid #000;
        position: absolute;
    }
    }

    /* @media screen and (max-width: 480px) {
        .bars{
            width: 60%;
        }
    } */
</style>