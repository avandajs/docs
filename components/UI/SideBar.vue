<template>
  <div v-if="pageTitles" class="">
  {{pageTitles}}
    <div class="">
      <nav class="">
        <!-- <ul class="flex flex-col space-y-2">
          <li v-for="pageTitle in pageTitles" :key="pageTitle.slug">
            <router-link :to="`${pageTitle._path}`">
              {{ pageTitle.title }}
            </router-link>

            <ul
              v-if="pageTitle.children"
              class="list-disc list-inside mt-4 pl-2 space-y-3"
            >
              <template
                v-for="(child, k) in pageTitle.children"
                :key="`childNav-${child._path}-${k}-${i}`"
              >
                <li
                  class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
                >
                  <NuxtLink :to="`/guide${child._path}`">
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </template>
            </ul>
            <ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
              <li
                class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
              >
                <NuxtLink :to="`/guide${pageTitle._path}`"> Get Started </NuxtLink>
              </li>
            </ul>
          </li>
        </ul> -->
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  pageTitles: object[];
}
let props = defineProps<Props>();
</script>

<style scoped></style>
