<template>
  <header class="h-header u-border-gray-100 sticky top-0 z-50 w-full border-b  backdrop-blur  bg-white">
    <nav class="max-w-7xl mx-auto px-6 md:px-auto">
      <div class="flex justify-between items-center mx-auto py-2 lg-px-4">
        <menu-icon class="block md:hidden cursor-pointer" @click="handleClickNav"></menu-icon>
        <router-link to="/"
          ><div class="">
            <img src="/Home-logo.png" alt="avanda logo" /></div
        ></router-link>
        <ul class="absolute top-20 md:top-0 p-4 md:text-md min-w-[300px] md:min-w-auto  right-6 rounded-md bg-white md:bg-transparent md:relative md:flex flex-col md:flex-row gap-4 " :class="verticalMenu? 'flex':'hidden'">
          <li class="">
            <router-link to="/getting-started/quick-start">Get Started</router-link>
          </li>
          <li class=""><router-link to="/guide/controllers">Guide</router-link></li>
          <li class="">
            <router-link to="/components/avanda-cli/overview">Components</router-link>
          </li>
          <li class=""><router-link to="/api/response">API</router-link></li>
        </ul>

        <ul class="flex gap-4">
          <li>
            <a href="https://github.com/avandajs"
              ><github-icon></github-icon
            ></a>
          </li>
          <li>
           <vertical-menu-icon class="block md:hidden cursor-pointer" @click="handleClickVerticalMenu"></vertical-menu-icon>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import VerticalMenuIcon from '../icons/vertical-menu-icon.vue'
import MenuIcon from '../icons/menu-icon.vue'
import GithubIcon from '../icons/githubIcon.vue'

let emit = defineEmits(['clickNav'])

let verticalMenu = ref(false)

function handleClickVerticalMenu (){
  verticalMenu.value = !verticalMenu.value
}
function handleClickNav (){
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
