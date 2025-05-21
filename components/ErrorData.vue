<script setup>
    const props = defineProps({
        errorMessage : {
            Type: String,
            required: true
        }
    })
</script>

<template>
    <div class="dataError">
        <p>{{ errorMessage }}</p>
    </div>
</template>