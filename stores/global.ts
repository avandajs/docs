import { defineStore } from "pinia";
import { ref } from "vue";
export const useGlobalStore = defineStore("global", () => {
  let gloablVar = ref("hello");
  let docLoading = ref(true)
  let sideBarTitles = ref(null);
  async function getSidebarTitles(title) {
    const { data } = await useAsyncData("navigation", () => {
      return fetchContentNavigation(queryContent(title));
    });
    console.log("computedTitleData", data)
    sideBarTitles.value = data.value;
  }
  function changeDocLoading(loadingState: boolean){
    docLoading.value =  loadingState
  }
  return {
    gloablVar,
    docLoading,
    changeDocLoading,
    sideBarTitles,
    getSidebarTitles
  };
});
