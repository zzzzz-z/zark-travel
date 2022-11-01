<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <swipe :swipeData="mainPart.topModule.housePicture.housePics"></swipe>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDatailInfos } from "@/service/modules/detail";
import Swipe from '@/views/detail/cpns/swipe.vue'

const router = useRouter();
const route = useRoute();
const datailInfos = ref({});
const mainPart = computed(() => datailInfos.value.mainPart);
console.log(mainPart);
const houseId = route.params.id;
getDatailInfos(houseId).then((res) => {
  datailInfos.value = res.data;
});

const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.detail {
}
</style>