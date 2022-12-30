<template>
    <div class="border px-4 py-2 rounded-lg flex gap-4 items-center" tabindex="0">
        <div class="">
            <p class="text-sm text-pry-dark">{{ computedPathName}}</p>
            <p class="text-lg">{{ titleDetails.title }}</p>
        </div>
        <arrow-right-icon></arrow-right-icon>
    </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from '../icons/arrow-right-icon.vue'

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