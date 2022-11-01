<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="props">
        <div class="indicator">{{ props.active + 1 }}/{{ props.total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }
    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>