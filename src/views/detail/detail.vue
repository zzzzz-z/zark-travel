<template>
  <div class="detail" ref="detailRef">
    <tab-control
      v-if="shownTabControl"
      :titles="['描述', '设施', '房东', '评论', '须知','周边']"
      class="control"
      @tabitemClick="tabClick"
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
        :ref="getSectionRef"
        :topInfos="mainPart.topModule"
      ></detail-infos>
      <detail-facility
        :ref="getSectionRef"
        :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"
      ></detail-facility>
      <detail-landlord
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></detail-landlord>
      <detail-comment
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></detail-comment>
      <detail-notice
        :ref="getSectionRef"
        :orderRules="mainPart.dynamicModule.rulesModule.orderRules"
      ></detail-notice>
      <detail-map
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      ></detail-map>
      <detail-intro
        :ref="getSectionRef"
        :priceIntro="mainPart.introductionModule"
      ></detail-intro>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
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
  return scrollTop.value > 300;
});

//获取某个区域中的ref
const sectionEls = []
const getSectionRef = (value) => {
  if (!value) return
  sectionEls.push(value.$el)
}

const tabClick = (index) => {
  let instance = sectionEls[index].offsetTop
  if (index !== 0) {
    instance = instance - 44
  }
  detailRef.value.scrollTo({
    top: instance,
    behavior: "smooth",
  });
};
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