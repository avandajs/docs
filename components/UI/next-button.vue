<template>
    <div class="border px-4 py-2 rounded-lg flex gap-4 items-center" tabindex="0">
        <div class="">
            <p class="text-sm text-pry-dark">{{ titleDetails.pathText }}</p>
            <p class="text-lg">{{ titleDetails.title }}</p>
        </div>
        <arrow-right-icon></arrow-right-icon>
    </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from '../icons/arrow-right-icon.vue'

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