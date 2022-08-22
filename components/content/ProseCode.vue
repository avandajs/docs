<template>
  <div class="container w-full  not-prose rounded-md px-4 pt-2 pb-4 bg-pry-code_light  max-w-full overflow-x-auto  relative">
    <div class="language-con" v-if="language">
        <p class="">{{language}}</p>
    </div>
    
    <div class="flex flex-col">
      <slot />
    </div>
    <div class="filename-con text-right" v-if="filename">
        <p class="">{{filename}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: "", language: null, filename: null, highlights: [] }
);
</script>

<style>
pre code {
    @apply flex flex-col 
}
pre code {
    /* background: linear-gradient(180deg, #760C5F 0%, #280067 100%); */
}
</style>
