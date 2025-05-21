<template>
    <div class="loader flex-center flex-column full-size">
        <p>Chargement du site web...</p>
        <div class="spinner"></div>
    </div>
</template>

<style scoped lang="scss">
.loader{
    .spinner{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-top: 10px;
        border: 5px solid #000;
        border-top: 5px solid #3498db;
        animation: spin 1s ease-in-out infinite;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    } 100%{
        transform: rotate(360deg);
    }
}
</style>