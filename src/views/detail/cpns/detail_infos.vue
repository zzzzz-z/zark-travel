<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags" :key="index">
        <span
          class="item"
          v-if="item.tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="score">{{ topInfos.commentBrief.overall }}分</span>
        <span class="title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">{{ topInfos.commentBrief.totalCount }}</span
        >条评论
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="location">
      <div class="left">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">地图*周边</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topInfos: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background-color: #fff;
  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }
  .tags {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    .item {
      font-size: 12px;
      margin: 2px;
      padding: 2px 4px;
      border-radius: 5px;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;
    .left {
      .score {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .title {
        color: #333;
        font-weight: 700;
        margin: 0 3px;
      }
      .brief {
        color: #666;
      }
    }
    .right {
      color: #ff9645;
    }
  }
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;
    .right {
      color: #ff9645;
    }
  }
}
</style>