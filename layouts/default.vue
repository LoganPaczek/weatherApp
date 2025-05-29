<template>
    <div class="container">
        <slot/>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: 100vh;
    }

    @media screen and (max-width: 768px) {
        .container{
            height: 160vh;
        }
    }

    @media screen and (max-width: 600px){
        .container{
            height: 200vh;
        }
    }
</style>