import { defineStore } from "pinia";
import { ref } from "vue";
export const useGlobalStore = defineStore("global", () => {
  let gloablVar = ref("hello");
  let sideBarTitles = ref(null);
  async function getSidebarTitles(title) {
    const { data } = await useAsyncData("navigation", () => {
      return fetchContentNavigation(queryContent(title));
    });
    console.log("computedTitleData", data)
    sideBarTitles.value = data.value;
  }
  return {
    gloablVar,
    sideBarTitles,
    getSidebarTitles
  };
});
