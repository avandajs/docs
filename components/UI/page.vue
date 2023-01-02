<template>
  <div>
    <nav-bar class="" @click-nav="handleShowNav"></nav-bar>
    <div class="progress-bar bg-pry-light h-2 w-full" v-if="isDocsLoading">
      <div class="progress" :style="`width: ${progressWidth}` + '%'"></div>
    </div>
    <div class="block md:flex md:justify-evenly max-w-7xl mx-auto px-4 pt-4">
      <nav
        class="md:w-full max-w-[250px] md:sticky md:top-20 h-full fixed top-16 md:block z-30 md:z-10 bg-white md:bg-transparent overflow-y-auto max-h-screen md:text-center md:max-h-[90vh] pb-30"
        :class="showNav ? 'w-full' : 'w-0'"
      >
        <ContentNavigation v-slot="{ navigation }">
          <div v-for="link of navigation" :key="link._path">
            <div v-if="link.title.toLowerCase() === title" class="">
              <!-- {{ link }} -->
              <ul class="flex flex-col space-y-2 pt-10 md:pt-0">
                <li v-for="(pageTitleChild, idx) in link.children" :key="idx">
                  <h1
                    v-if="pageTitleChild.children"
                    class="font-bold text-uppercase"
                  >
                    {{ pageTitleChild.title }}
                  </h1>
                  <ul
                    v-if="pageTitleChild.children"
                    class="list-inside mt-4 pl-2 space-y-3"
                  >
                    <li v-for="i in pageTitleChild.children">
                      <router-link :to="`${i._path}`">
                        {{ i.title }}
                      </router-link>
                    </li>
                  </ul>
                  <ul v-else class="list-inside mt-4 pl-2 space-y-3">
                    <li class="">
                      <router-link :to="`${pageTitleChild._path}`">
                        {{ pageTitleChild.title }}
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </ContentNavigation>
      </nav>
      <div class="pb-10">
        <slot />
      </div>
      <div
        v-if="showTableContent && toc.length > 0"
        class="w-full max-w-[250px] text-center hidden lg:block"
      >
        <div class="sticky top-20 overflow-y-auto md:max-h-[90vh] pb-30">
          <div class="grid justify-end">
            <h2 class="text-sm font-bold mb-4">Table Of Contents</h2>
            <ul class="space-y-2">
              <template v-for="(t, k) in toc" :key="`toc-item-${k}`">
                <li>
                  <router-link
                    :class="{
                      'text-sm ml-4': t.depth == 2,
                      'text-[13px] ml-6': t.depth > 2,
                    }"
                    class="capitalize"
                    :to="`#${t.id}`"
                    >{{ t.title }}</router-link
                  >
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bottom-nav flex justify-between items-center min-w-[200px] px-10 py-8"
      v-if="showPrevNext"
    >
      <router-link :to="prev._path" v-if="prev">
        <!-- {{ computedSourround }} -->
        <prev-button :title-details="prev"></prev-button>
      </router-link>
      <router-link :to="next._path" v-if="next" class="">
        <next-button :title-details="next"></next-button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import NextButton from "./next-button.vue";
import PrevButton from "./prev-button.vue";
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from "vue-router";
import { useAsyncData } from "#app";
import { queryContent } from "~~/.nuxt/imports";
import { useHead } from "~~/.nuxt/imports";
import { useGlobalStore } from "../../stores/global";
interface Props {
  title: string;
  blog: object;
  showTableContent: boolean;
}
let props = withDefaults(defineProps<Props>(), {
  title: "getting started",
  showTableContent: false,
});
let progressWidth = ref(0);
let showNav = ref(false);
let store = useGlobalStore();
let sideBarTitles = ref(null);
let testTitle = ref(null);
let computedTitle = computed(() => {
  if (testTitle.value) {
    return testTitle.value;
  }
  return props.title;
});
function handleShowNav() {
  showNav.value = !showNav.value;
}
let isDocsLoading = computed(() => store.docLoading);
async function fetchData() {
  console.log("isDocsLoading", isDocsLoading.value);
  // Set the progress bar to 0%
  let progress = 0;
  while (isDocsLoading.value && progress != 100) {
    // console.log("isDocsLoading22", isDocsLoading.value, progress);
    // Fetch the data here
    // Increment the progress bar by 10%
    if (progress < 100) {
      if (progress == 80 && isDocsLoading.value) {
        progress += 1;
      } else {
        progress += 2;
      }
    }
    // Update the progress value
    progressWidth.value = progress;
    // Sleep for 1 second to slow down the loop
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
watch(
  isDocsLoading,
  (val) => {
    fetchData();
  },
  { immediate: true }
);
// let computedSideBarTitles = computed(() => {
//   return store.sideBarTitles
// })
// onBeforeRouteLeave((to, from, next) => {
//   // store.sideBarTitles = computedTitle.value
//   console.log("this is befor leave", to.path)
//   testTitle.value = to.path.split("/")[1]
//   console.log(to.path.split("/")[1])
//   store.getSidebarTitles(to.path.split("/")[1])
//   console.log(store.sideBarTitles)
//   next()
// })
// onBeforeMount(() => {
//   console.log("this is befor mount")
//   store.getSidebarTitles(computedTitle)
// })
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
let { path } = useRoute();
console.log({ path });
let showPrevNext = ref(false);
const [prev, next] = await queryContent().findSurround(path);
if (prev || next) {
  showPrevNext.value = true;
}

console.log({ prev, next });
// let computedSourround = computed(() => {
//   return {
//     prev: {
//       title: prev?.title,
//       path: prev?._path,
//     },
//     next: {
//       title: next?.title,
//       path: next?._path,
//     },
//   };
// });
</script>

<style scoped>

.progress-bar > div {
  height: 100%;
  border-radius: 10px;
  /* background-image: linear-gradient(to right, lightskyblue, blue); */
  /* background-size: 360px 100%; */
  transition: width 200ms;
}

.progress-bar > div {
  @apply bg-gradient-to-r from-pry-dark to-pink-600;
}
</style>
