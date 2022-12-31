<template>
    <header class="h-header sticky top-0 z-50 w-full  backdrop-blur  bg-white">
        <nav class="max-w-[1400px] md:px-auto mx-auto">
            <div class="flex justify-between items-center mx-auto py-2 lg:px-4">
                <router-link to="/">
                    <div class="flex gap-2 items-center">
                        <img src="../../../assets/images/page-logo.svg" alt="avanda logo" class="w-[50px] h-auto" />
                        <h2 class="linear-grad-avanda-text font-bold text-xl font-raleway ">Avanda</h2>
                    </div>
                </router-link>
                <ul class="absolute top-20 md:top-0 p-4 md:text-md min-w-[300px] md:min-w-auto  right-6 rounded-md bg-white md:bg-transparent md:relative md:flex flex-col md:flex-row gap-6 font-raleway "
                    :class="verticalMenu ? 'flex' : 'hidden'">
                    <li class=""><a href="/guide/controllers">
                            <div class="flex gap-1 items-center">
                                <p class="">Documentation</p>
                                <div class="bg-pry-darker rounded-md py-[2px] px-1">
                                    <p class="text-xs text-white py-[2px] px-2 font-raleway">New</p>
                                </div>
                            </div>
                        </a></li>
                    <li class="">
                        <a href="/components/avanda-cli/overview">Components</a>
                    </li>
                    <li class=""><a href="/api/response">API</a></li>
                </ul>

                <ul class="flex gap-4">
                    <li>
                        <a href="https://github.com/avandajs"><github-icon></github-icon></a>
                    </li>
                    <li>
                        <menu-icon class="block md:hidden cursor-pointer" @click="handleClickVerticalMenu"></menu-icon>

                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
  
<script setup lang="ts">
import VerticalMenuIcon from '../../icons/vertical-menu-icon.vue'
import MenuIcon from '../../icons/menu-icon.vue'
import GithubIcon from '../../icons/githubIcon.vue'

let emit = defineEmits(['clickNav'])

let verticalMenu = ref(false)

function handleClickVerticalMenu() {
    verticalMenu.value = !verticalMenu.value
}
function handleClickNav() {
    verticalMenu.value = false
    emit('clickNav')
}
</script>
  
<style scoped>
.main-header {
    border-style: none;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
    z-index: 50;
}
</style>
  