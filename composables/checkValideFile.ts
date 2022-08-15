// import { useAsyncData } from "nuxt/dist/app/composables";
const useRedirectToValidFile = (name: string) => {
  let allNavs = null;
  
async function test(){
    const {data} = await useAsyncData("navigation", () => {
        return fetchContentNavigation(queryContent(name));
    })
    let unRefedBlogNav = unref(data)
    if(data){
      if(unRefedBlogNav[0].children[0].children){
        useRouter().push(`${unRefedBlogNav[0].children[0].children[0]._path}`)
        return
      }
      useRouter().push(`${unRefedBlogNav[0].children[0]._path}`);
    }
    console.log({ unRefedBlogNav });
}
  return {
    test
  };
};

export default useRedirectToValidFile;
