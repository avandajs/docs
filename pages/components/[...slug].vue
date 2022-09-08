<template>
  <page title="components" :blog="article" :show-table-content="articleLoaded">
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
import Page from "../../components/UI/page.vue";
import { useRoute, useRouter } from "vue-router";
import { useAsyncData } from "#app";
import { queryContent } from "~~/.nuxt/imports";
import { useGlobalStore } from "../../stores/global";
import { useHead } from "~~/.nuxt/imports";

definePageMeta({
  layout: "page-render",
});
let articleLoaded = ref(false);
let store = useGlobalStore();
const slug = useRoute().params.slug.toString().replace(/,/g, "/");
let computedSlug = computed(() => {
  return `/components/${slug}`;
});
const { path } = useRoute();
// let article = ref(null);
// async function getArticle() {
//   article.value = await queryContent().where({ _path: path }).findOne();
// }
// if(slug) {
//   getArticle();
// }
const { data: article } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

onMounted(() => {
  articleLoaded.value = true;
  console.log(article)
});

if(article.value) {
  useHead({
    title: `${article.value.title}`,
  });
}
const [prev, next] = await queryContent(computedSlug.value).findSurround(
  computedSlug.value
);
console.log({ prev, next });
</script>

<style scoped>
.article-link {
  @apply prose-a:text-pry-dark before:prose-headings:content-['#'] before:prose-headings:mr-1 before:prose-headings:text-pry-dark before:prose-h1:content-[''];
}

.lg\:prose-base :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"] *)) {
  max-width: 200px;
}
</style>
