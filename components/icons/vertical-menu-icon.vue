<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" height="auto" viewBox="0 0 24 24" fill="none" :stroke="textColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="12" cy="5" r="1"></circle>
        <circle cx="12" cy="19" r="1"></circle>
    </svg>
</template>
  
<script setup lang="ts">
interface Props {
    bgColor: string;
    textColor: string;
    size: number;
}

let props = withDefaults(defineProps<Props>(), {
    bgColor: "#000",
    textColor: "#000",
    size: 24,
});
</script>
  
<style scoped>

</style>
  