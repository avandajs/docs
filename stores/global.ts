import { defineStore } from "pinia";
import { ref } from "vue";
export const useGlobalStore = defineStore("global", () => {
  let gloablVar = ref("hello");
  return {
    gloablVar
  };
});
