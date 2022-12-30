<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" :stroke="textColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
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
  