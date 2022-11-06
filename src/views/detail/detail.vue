<template>
  <div class="detail" ref="detailRef">
    <tab-control
      v-if="shownTabControl"
      :titles="names"
      class="control"
      @tabitemClick="tabClick"
      ref="tabcontrolRef"
    ></tab-control>
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <swipe :swipeData="mainPart.topModule.housePicture.housePics"></swipe>
      <detail-infos
        name="描述"
        :ref="getSectionRef"
        :topInfos="mainPart.topModule"
      ></detail-infos>
      <detail-facility
        name="设施"
        :ref="getSectionRef"
        :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"
      ></detail-facility>
      <detail-landlord
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></detail-landlord>
      <detail-comment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></detail-comment>
      <detail-notice
        name="须知"
        :ref="getSectionRef"
        :orderRules="mainPart.dynamicModule.rulesModule.orderRules"
      ></detail-notice>
      <detail-map
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      ></detail-map>
      <detail-intro
        :priceIntro="mainPart.introductionModule"
      ></detail-intro>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDatailInfos } from "@/service/modules/detail";
import useScroll from "@/hooks/useScroll";
import Swipe from "@/views/detail/cpns/swipe.vue";
import DetailInfos from "@/views/detail/cpns/detail_infos.vue";
import DetailFacility from "@/views/detail/cpns/detail_facility.vue";
import DetailLandlord from "@/views/detail/cpns/detail_landlord.vue";
import DetailComment from "@/views/detail/cpns/detail_comment.vue";
import DetailNotice from "@/views/detail/cpns/detail_notice.vue";
import DetailMap from "@/views/detail/cpns/detail_map.vue";
import DetailIntro from "@/views/detail/cpns/detail_intro.vue";
import TabControl from "@/components/tab-control/tab-control.vue";

const router = useRouter();
const route = useRoute();
const datailInfos = ref({});
const mainPart = computed(() => datailInfos.value.mainPart);

const houseId = route.params.id;
getDatailInfos(houseId).then((res) => {
  datailInfos.value = res.data;
  console.log(datailInfos.value);
});

const onClickLeft = () => {
  router.back();
};

//tab-control
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
const shownTabControl = computed(() => {
  return scrollTop.value >= 300;
});

const sectionEls = ref({});
const names = computed(() => {
  return Object.keys(sectionEls.value);
});
const getSectionRef = (value) => {
  if (!value) return
  const name = value.$el.getAttribute("name");
  sectionEls.value[name] = value.$el;
};
//点击tabitem的标签匹配对应页面
let isClick = false
let currentIDistance = -1
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  let distance = el.offsetTop;
  if (index !== 0) {
    distance = distance - 44;
  }
  isClick = true
  currentIDistance = distance
  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};
//滚动页面匹配对应tabitem的标签
const tabcontrolRef = ref()
watch(scrollTop, (newValue) => {
  if (newValue === currentIDistance) {
    isClick = false
  }
  if(isClick) return
  const els = Object.values(sectionEls.value);
  const values = els.map((el) => el.offsetTop);

  let index = values.length - 1 
  for(let i = 0; i < values.length; i++) {
    if(values[i] > newValue + 44) {
      index = i - 1
      break
    }
  }
  tabcontrolRef.value?.setCurrentIndex(index)
});
</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  overflow-y: auto;
  .control {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99999;
  }
}
</style>