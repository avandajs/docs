<template>
    <div class="flex mx-auto w-full max-w-[1200px] mt-16">
        <div class="left-part mt-20 w-full ">
            <div class="">
                <h1 class="text-5xl xxl:text-6xl font-semibold">Hello <span class="linear-grad-avanda-text">Avanda!</span></h1>
                <p class="text-xl text-black pr-4 mt-4">Avanda is the perfect starting point for your next project, a progressive framework for
                    building
                    an efficient and reliable server-side application.</p>
            </div>
            <div class="cta flex items-center gap-4 mt-8">
                <a href="#"
                    class="cta-1 inline-flex bg-pry-darker font-inter text-sm text-center justify-center items-center rounded-md text-white py-3 px-5">Get
                    Started <span class="mx-2"><arrow-right-icon text-color="#fff"
                            :size="18"></arrow-right-icon></span></a>
                <a href="#" class="inline-flex border border-pry-darker font-inter text-sm text-center justify-center items-center rounded-md text-black py-2 px-5"> <span class="mx-2"><github-icon></github-icon></span> View on
                    Github</a>
            </div>
        </div>
        <div class="right-part w-full ">
            <img src="../../../assets/images/code-hero-template.png" alt="code template hero picture" class="w-[900px] h-auto" >
        </div>
    </div>
</template>

<script setup lang="ts">
import GithubIcon from '../../icons/githubIcon.vue'
import ArrowRightIcon from '../../icons/arrow-right-icon.vue'

</script>

<style scoped>
.cta-1 {
    box-shadow: 5px 5px 12px rgba(158, 47, 211, 0.15);
}
</style>