<template>
    <svg :width="size" :height="size" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M29.9999 54.0834V7.37508M38.1124 13.0292L29.9999 4.91675L21.8874 13.0292M12.7916 17.2084L7.87492 12.2917L2.95825 17.2084M57.0416 17.2084L52.1249 12.2917L47.2083 17.2084"
            :stroke="textColor" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M7.875 14.8484V27.0417C7.875 36.8751 12.7917 41.7917 22.625 41.7917H37.375C47.2083 41.7917 52.125 36.8751 52.125 27.0417V14.8484M22.625 49.1667H37.375"
            :stroke="textColor" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round" />
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
    textColor: "#fff",
    size: 59,
});
</script>
  
<style scoped>

</style>
  