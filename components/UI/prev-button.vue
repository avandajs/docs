<template>
    <div class="border px-4 py-2 rounded-lg flex gap-4 items-center" tabindex="0">
        <arrow-left-icon></arrow-left-icon>
        <div class="">
            <p class="text-sm text-pry-dark">{{ computedPathName }}</p>
            <p>{{ titleDetails.title }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '../icons/arrow-left-icon.vue'

interface Props {
    titleDetails:object;
}
let props = defineProps<Props>()
let computedPathName = computed(() => {
    return props.titleDetails._path.split("/")[1]
})
</script>

<style scoped>

</style>