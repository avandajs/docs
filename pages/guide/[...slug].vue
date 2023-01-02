<template>
    <page title="guide" :blog="article" :show-table-content="articleLoaded">
      <!-- <h1 v-if="computedDocLoading" class="text-4xl">Loading</h1> -->
      <article class="">
        <ClientOnly>
          <ContentRenderer class="prose lg:prose-base prose-sm prose-slate article-link lg:px-7  md:w-full  lg:max-w-[800px] mx-auto" :value="article">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </ClientOnly>
      </article>
    </page>
  </template>
  
  <script setup lang="ts">
  import Page from '../../components/UI/page.vue'
  import { useRoute, useRouter } from "vue-router";
  import { useAsyncData } from "#app";
  import { queryContent } from "~~/.nuxt/imports";
  import { useGlobalStore } from "../../stores/global";
  import { useHead } from "~~/.nuxt/imports";
  
  
  definePageMeta({
    layout: "page-render",
  })
  let store = useGlobalStore();
  let articleLoaded = ref(false);
  let articleExerpts = null;
  const slug = useRoute().params.slug.toString().replace(/,/g, "/");
  let computedSlug = computed(() => {
    return `/guide/${slug}`;
  });
  let computedDocLoading = computed(() => {
    return store.docLoading
  })
  // const { data: articleNav, pending } = await useAsyncData("navigation", () => {
  //   return fetchContentNavigation(queryContent("getting-started"));
  // });
  // console.log(unref(articleNav))
  const { path } = useRoute()
  
  const { data: article } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })
  watch(useRoute(), () => {
    console.log("route changed", store.gloablVar);
    store.changeDocLoading(true)

  })
  onMounted(() => {
    articleLoaded.value = true;
    store.changeDocLoading(false)
  })
  if(article.value) {
    useHead({
      title: `${article.value.title}`,
    });
  }
  // const [prev, next] = await queryContent().findSurround(
  //   computedSlug.value
  // );
  // console.log({ prev, next });
  </script>
  
  <style scoped>
  
  .lg\:prose-base :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"] *)) {
    max-width: 200px;
  }
  </style>
  