<template>
    <div class="home-categories">
      <template v-for="item in categories" :key="item.id">
        <div class="item">
          <img :src="item.pictureUrl" alt="">
          <div class="text">{{item.title}}</div>

        </div>
      </template>
    </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.home-categories {
  display: flex;
  height: 80px;
  padding: 0 8px;
  overflow-x: auto;
  &::-webkit-scrollbar{display:none}
  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    text-align: center;
    img {
      width: 32px;
      height: 32px;
    }
    .text {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>