<template>
  <div>
    <div class="flex justify-evenly max-w-7xl mx-auto px-4 pt-4">
      <nav class="w-full max-w-[250px] sticky top-20 h-full" v-if="sideBarTitles">
        <ul class="flex flex-col space-y-2">
          <li v-for="(pageTitleChild, idx) in sideBarTitles[0].children" :key="idx">
            <h1 v-if="sideBarTitles[0].title" class="text-bold">
              {{ sideBarTitles[0].title }}
            </h1>
            <router-link :to="`${pageTitleChild._path}`">
              {{ pageTitleChild.title }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="pb-10">
        <slot />
      </div>
      <div v-if="showTableContent && blog.excerpt" class="w-full max-w-[250px]">
        <div class="sticky top-20">
          <div class="grid justify-end">
            <h2 class="text-sm font-bold mb-4">Table Of Contents</h2>
            <ul class="space-y-2">
              <template v-for="(t, k) in toc" :key="`toc-item-${k}`">
                <li>
                  <router-link :class="{
                    'text-sm ml-4': t.depth == 2,
                    'text-[13px] ml-6': t.depth > 2,
                  }" class="capitalize" :to="`#${t.id}`">{{ t.title }}</router-link>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-nav">Avanda Js</div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";
import { useRoute } from "vue-router";
import { useAsyncData } from "#app";
import { queryContent } from "~~/.nuxt/imports";
import { useHead } from "~~/.nuxt/imports";
interface Props {
  title: string;
  blog: object;
  showTableContent: boolean;
}
let props = withDefaults(defineProps<Props>(), {
  title: "getting-started",
  showTableContent: false,
});
let sideBarTitles = ref(null)
let computedTitle = computed(() => {
  return props.title
})
// watch(useRoute(), async () => {
//   console.log("computedTitle")
//   const { data } = await useAsyncData("navigation", () => {
//     return fetchContentNavigation(queryContent(computedTitle.value));
//   });
//   console.log("computedTitleData", data)
//   sideBarTitles.value = data;
// }, { immediate: true })
async function fetchSideBarDetails(){
  const { data } = await useAsyncData("navigation", () => {
    return fetchContentNavigation(queryContent(computedTitle.value));
  });
  sideBarTitles.value = data.value;
  console.log(sideBarTitles.value)
}
onMounted(() => {
  fetchSideBarDetails()
})

const toc = computed(() => {
  if (!props.blog) return [];
  const items = props.blog.excerpt?.children;
  if (!items) return [];
  const toc = [];
  const tags = ["h2", "h3", "h4", "h5", "h6"];
  items.forEach((item) => {
    if (tags.includes(item.tag)) {
      toc.push({
        id: item.props.id,
        title: item.props.id.toString().replace(/-/g, " "),
        depth: Number(item.tag.replace(/h/g, "")),
      });
    }
  });
  return toc;
});
</script>

<style scoped>
</style>
