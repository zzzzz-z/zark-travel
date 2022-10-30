<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" >
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import tabbarData from "@/assets/data/tabbar.js";
import { getAccessURL } from "@/utils/getAssets.js";

const currentIndex = ref(0);

</script>

<style lang="less" scoped>
.tab-bar {
  img {
    width: 28px;
  }
}
</style>