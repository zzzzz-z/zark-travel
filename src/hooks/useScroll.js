import { onMounted, onUnmounted, ref } from "vue";
//方法一调用时传入回调函数
// export default function useScroll(reachBottomCB) {
//   const scrollListenerHandler = () => {
//     const clientHeight = document.documentElement.clientHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     if (clientHeight + scrollTop >= scrollHeight) {
//       if (reachBottomCB) {
//         reachBottomCB()
//       }
//     }
//   };
//   onMounted(() => {
//     window.addEventListener("scroll", scrollListenerHandler);
//   });
  
//   onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListenerHandler);
//   });
// }
//外部使用方法
// useScroll(() => {
//   homeStore.fetchHoselistData();
// })

export default function useScroll() {
  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollListenerHandler = () => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return {isReachBottom, scrollTop, clientHeight, scrollHeight };
}