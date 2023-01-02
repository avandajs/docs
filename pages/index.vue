<template>
    <div>
        <header class="">
            <page-nav-bar></page-nav-bar>
        </header>
        <main class=" mx-auto">
            <hero></hero>
        </main>
        <div class="w-full h-[2px] bg-pry-darker mt-16"></div>
        <why-avanda-section class="mt-16"></why-avanda-section>
        <div class="w-full h-[2px] bg-pry-darker mt-16"></div>
    </div>
</template>

<script setup lang="ts">
import WhyAvandaSection from '../components/UI/HomePage/WhyAvandaSection.vue'
import Hero from '../components/UI/HomePage/Hero.vue'
import PageNavBar from '../components/UI/HomePage/PageNavBar.vue'

</script>

<style scoped>

</style>