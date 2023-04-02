<template>
  <div
    class="container w-full  not-prose rounded-md px-4 pt-2 pb-4 bg-pry-code_light  max-w-full overflow-x-auto  relative">
    <!-- <div class="language-con" v-if="language && showLang">
      <p class="">{{ language }}</p>
    </div> -->

    <div class="flex flex-col">
      <slot />
    </div>
    <div class="filename-con text-right" v-if="filename &&showFile">
      <p class="">{{ filename }}</p>
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
    meta?: string;
  }>(),
  { code: "", language: null, filename: null, highlights: [],   meta: null }
);
let computedMetaArrObj : any = computed(() => {
  if (props.meta) {
    let metaArr = props.meta.split(",");
    let metaObj = {};
    metaArr.forEach((meta) => {
      let metaArr = meta.split("=");
      metaObj[metaArr[0]] = metaArr[1];
    });
    return metaObj;
  }
  return null;
});
console.log(props.meta);
console.log(computedMetaArrObj.value);
let showLang = ref(computedMetaArrObj.value? computedMetaArrObj.value.showLang: true);
let showFile = ref(computedMetaArrObj.value? computedMetaArrObj.value.showFile: true);
</script>

<style>
pre code {
  @apply flex flex-col
}

pre code {
  /* background: linear-gradient(180deg, #760C5F 0%, #280067 100%); */
}
</style>
