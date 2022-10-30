<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        v-model="searchValue"
        shape="round"
        show-action
        @cancel="cancelClick"
        placeholder="城市/区域/位置"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in Allcities" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 方法一：切换效率低 -->
      <!-- <city-item :groupData="currentCityGroup"></city-item> -->
      <!-- 方法二 -->
      <template v-for="(value, key, index) in Allcities" :key="index">
        <city-item v-show="tabActive === key" :groupData="value"></city-item>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import cityItem from './cpns/city-item.vue'

const router = useRouter();
const searchValue = ref("");
const tabActive = ref();

const cancelClick = () => {
  router.back();
};

const cityStore = useCityStore();
cityStore.fetchAllcitiesData();
const { Allcities } = storeToRefs(cityStore);
//1.获取选中标签后的数据
//1-1 获取正确的key，将tabs中绑定的tabActive正常绑定key,默认是绑定
//1-2根据key从Allcities获取数据，直接Allcities.value[tabActive.value]获取会失去失去响应式，用computed包裹。
const currentCityGroup = computed(() => {
  return Allcities.value[tabActive.value]
})


</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 40px;
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>