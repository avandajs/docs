<template>
  <div class="code-group-con rounded-md bg-pry-code_light">
    <div class="tab-wrapper px-2 flex flex-row gap-4 text-white-100">
      <!-- <div> -->
        <!-- <div class="flex gap-4"> -->
        <p
          class="px-3 cursor-pointer rounded-md text-white"
          :class="showedTab === tab ? 'bg-pry-light' : ''"
          v-for="(tab, index) in tabTextArr"
          :key="index"
          @click="handleOpenYarnTabs(tab)"
        >
          {{ tab }}
        </p>
        <!-- </div> -->
      <!-- </div> -->
    </div>
    <div class="" v-for="(tab, index) in tabTextArr" :key="index">
      <div class="" v-show="showedTab === tab">
        <component :is="$slots[tab]"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  toggleText: string;
}
let showSecondTab = ref(false);
// let showFirstTab = ref(true);
let showedTab = ref(null);

let props = defineProps<Props>();

let tabTextArr = computed(() => {
  return props.toggleText.split(",");
});
showedTab.value = tabTextArr.value[0];
function handleOpenYarnTabs(toggleText: string) {
  if (toggleText) {
    showedTab.value = toggleText;
  }
}
// function closeYarnTab() {
//   showSecondTab.value = false;
//   showFirstTab.value = true;
// }
</script>

<style scoped>
/* .code-group-con {
    background: linear-gradient(180deg, #760C5F 0%, #280067 100%);
} */
</style>
