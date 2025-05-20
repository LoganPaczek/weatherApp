<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        icon : {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="section_title margin-left-15">
        <div v-html="icon" class="icon"></div>
        <p>{{ title }}</p>
    </div>
</template>

<style scoped lang="scss">
.section_title{
  color: #BDBDBD;
  display: flex;
  margin-top: 15px;

    .icon{
        fill: #BDBDBD;
        width: 18px;
        height: 18px;
        padding-right: 10px;
    }
}
</style>