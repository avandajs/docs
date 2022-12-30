<template>
    <div class="border px-4 py-2 rounded-lg flex gap-4 items-center" tabindex="0">
        <arrow-left-icon></arrow-left-icon>
        <div class="">
            <p class="text-sm text-pry-dark">{{ titleDetails.pathText }}</p>
            <p>{{ titleDetails.title }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '../icons/arrow-left-icon.vue'

interface Props {
    titleDetails: {
        title: string;
        pathText: string;
    };
}
let props = defineProps<Props>()
</script>

<style scoped>

</style>