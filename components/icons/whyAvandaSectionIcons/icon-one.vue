<template>
    <svg :width="size" :height="size" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.375 22.3953V36.5799C7.375 41.7916 7.375 41.7916 12.2917 45.1103L25.8125 52.9278C27.8529 54.1078 31.1717 54.1078 33.1875 52.9278L46.7083 45.1103C51.625 41.7916 51.625 41.7916 51.625 36.6045V22.3953C51.625 17.2083 51.625 17.2083 46.7083 13.8895L33.1875 6.07201C31.1717 4.89201 27.8529 4.89201 25.8125 6.07201L12.2917 13.8895C7.375 17.2083 7.375 17.2083 7.375 22.3953Z"
            :stroke="textColor" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M29.5 36.875C31.456 36.875 33.3318 36.098 34.7149 34.7149C36.098 33.3318 36.875 31.456 36.875 29.5C36.875 27.544 36.098 25.6682 34.7149 24.2851C33.3318 22.902 31.456 22.125 29.5 22.125C27.544 22.125 25.6682 22.902 24.2851 24.2851C22.902 25.6682 22.125 27.544 22.125 29.5C22.125 31.456 22.902 33.3318 24.2851 34.7149C25.6682 36.098 27.544 36.875 29.5 36.875V36.875Z"
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
  