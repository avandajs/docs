<template>
    <div v-if="pageTitles">
    <div class="sticky top-3">
        <nav>
            <ul class="flex flex-col space-y-2">
                <li v-for="pageTitle in pageTitles" :key="pageTitle.slug">
                    <router-link :to="`${pageTitle._path}`">
                        {{ pageTitle.title }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    pageTitles: object[];
}
let props =  defineProps<Props>()
</script>

<style scoped>

</style>