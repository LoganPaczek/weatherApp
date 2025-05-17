<template>
    <div class="container">
        <slot/>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: 100vh;
        background-color: red;
    }

    @media screen and (max-width: 768px) {
        .container{
            height: 120vh;
        }
    }
</style>