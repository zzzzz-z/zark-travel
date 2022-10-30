<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search></home-search>
    <home-categories></home-categories>
    <div class="search-bar" v-if="isShowSearchBar">
      zark
    </div>
    <home-content></home-content>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import useHomeStore from "@/stores/modules/home";
import navBar from "./cpns/nav-bar.vue";
import HomeSearch from "./cpns/home-search.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import useScroll from '@/hooks/useScroll'

const homeStore = useHomeStore();
homeStore.fetchSuggestsData();
homeStore.fetchCategoriesData();
homeStore.fetchHoselistData();

//滚动到底部自动加载更多
//监听windows窗口的滚动
const { isReachBottom, scrollTop } =  useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHoselistData().then(() => {
      isReachBottom.value = false
    })
  }
 })

//搜索框控制是否显示
const isShowSearchBar = ref(false)
watch((scrollTop), (newValue) => {
  isShowSearchBar.value = newValue > 100
})
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>