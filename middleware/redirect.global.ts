import useRedirectToValidFile from "../composables/checkValideFile";
export default defineNuxtRouteMiddleware((to, from) => {
  let route = useRoute();
  let router = useRouter();
  // console.log();
  const slug = to.params?.slug.toString().replace(/,/g, "/");
  console.log({ slug });

  const { test } = useRedirectToValidFile(from.fullPath.split("/")[1]);
  if (!slug) {
    test();
  }
});
