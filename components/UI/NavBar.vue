<template>
  <header class="h-header u-border-gray-100 sticky top-0 z-50 w-full border-b  backdrop-blur  bg-white">
    <nav class="max-w-7xl mx-auto ">
      <div class="flex justify-between items-center mx-auto py-2 lg-px-4">
        <a href="/"
          ><div class="">
            <img src="/Home-logo.png" alt="avanda logo" /></div
        ></a>
        <ul class="flex gap-4 ali">
          <li class="">
            <a href="/getting-started/quick-start">Get Started</a>
          </li>
          <li class=""><a href="/guide">Guide</a></li>
          <li class="">
            <a href="/components/avanda-cli">Components</a>
          </li>
          <li class=""><a href="/api">API</a></li>
        </ul>

        <ul class="flex gap-4">
          <li>
            <a href="https://github.com/avandajs"
              ><github-icon></github-icon
            ></a>
          </li>
          <li>
            <a href="https://github.com/avandajs"
              ><github-icon></github-icon
            ></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import GithubIcon from '../icons/githubIcon.vue'
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
