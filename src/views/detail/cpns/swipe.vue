<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="props">
        <!-- <div class="indicator">{{ props.active + 1 }}/{{ props.total }}</div> -->
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span
              class="item"
              :class="{
                active: swipeData[props.active]?.enumPictureCategory == key,
              }"
            >
              <span class="text">
                {{ getName(value[0].title) }}
              </span>
              <span
                class="count"
                v-if="swipeData[props.active]?.enumPictureCategory == key"
                >{{ getCategoryIndex(swipeData[props.active]) + 1 }} /{{
                  value.length
                }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});

//对服务器返回的数据进行转换和分类
const swipeGroup = {};
// for (const item of props.swipeData) {
//   swipeGroup[item.enumPictureCategory] = []
// }
// for (const item of props.swipeData) {
//   const valueArry = swipeGroup[item.enumPictureCategory]
//   valueArry.push(item)
// }
for (const item of props.swipeData) {
  let valueArry = swipeGroup[item.enumPictureCategory];
  if (!valueArry) {
    valueArry = [];
    swipeGroup[item.enumPictureCategory] = valueArry;
  }
  valueArry.push(item);
}

const getName = (name) => {
  return name.replace("：", "").replace("【", "").replace("】", "");
};

const getCategoryIndex = (item) => {
  const valueArry = swipeGroup[item.enumPictureCategory];
  return valueArry.findIndex((data) => data === item);
};
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
      display: flex;
      align-items: center;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
      .item {
        margin: 0 5px;
        &.active {
          background: #fff;
          padding: 2px 5px;
          border-radius: 5px;
          color: #333;
        }
      }
    }
  }
}
</style>