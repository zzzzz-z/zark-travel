<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{item.text}}</span>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAccessURL(item.image)"
              
            />
            <img v-else :src="getAccessURL(item.imageActive)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import tabbarData from "@/assets/data/tabbar.js";
import { getAccessURL } from "@/utils/getAssets.js";
 
const route = useRoute()
const currentIndex = ref(0);
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => {
    return item.path === newRoute.path
  })
  if(index === -1) return
  currentIndex.value = index
})

</script>

<style lang="less" scoped>
.tab-bar {
  img {
    width: 28px;
  }
}
</style>