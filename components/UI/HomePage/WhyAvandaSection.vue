<template>
    <section class="why-avanda-bg-sec px-8 py-20">
        <h2 class="text-4xl text-white font-raleway text-center">Why should you choose <span
                class="text-pry-dark">Avanda</span>?</h2>
        <div class="grid grid-cols-3 mt-10 items-center max-w-[1400px] mx-auto">
            <div class="flex flex-col justify-center text-center gap-2">
                <icon-one class="inline w-full mx-auto mb-4"></icon-one>
                <h3 class="text-2xl text-pry-dark font-raleway font-semibold">Quick Setup</h3>
                <p class="text-lg px-6 text-white">Avanda gives a quick starting experience for getting started with
                    your server, by
                    configuring your database so you can get started with the development.</p>
            </div>
            <div class="flex flex-col justify-center text-center gap-2">
                <icon-two class="inline w-full mx-auto mb-4"></icon-two>
                <h3 class="text-2xl text-pry-dark font-raleway font-semibold">Progressive Framework</h3>
                <p class="text-lg px-6 text-white">Take advantage of different nodejs libraries and APIs to give you the
                    best design patterns and a better developer experience as you develop your app.</p>
            </div>
            <div class="flex flex-col justify-center text-center gap-2">
                <icon-three class="inline w-full mx-auto mb-4"></icon-three>
                <h3 class="text-2xl text-pry-dark font-raleway font-semibold">Client and Server</h3>
                <p class="text-lg px-6 text-white">With Avanda JSGA you have a direct way to communicate with your
                    server and get some additional features by tagging on some methods.</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import IconThree from '../../icons/whyAvandaSectionIcons/icon-three.vue'
import IconTwo from '../../icons/whyAvandaSectionIcons/icon-two.vue'
import IconOne from '../../icons/whyAvandaSectionIcons/icon-one.vue'

</script>

<style scoped>
.why-avanda-bg-sec {
    background: #28103F;
    border-radius: 0px 100px;
}
</style>