import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    markdown: {
      // prism: {
      //     theme: "prism-themes/themes/prism-material-dark.css"

      // },
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: "dracula-soft",
    },
  },
  buildModules: ["@pinia/nuxt"],
//   ssr: false,
});
