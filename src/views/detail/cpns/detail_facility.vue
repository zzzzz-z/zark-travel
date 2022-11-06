<template>
  <div class="facility">
    <detail-section title="房屋设施" moreText="查看全部设施">
      <div class="facility-inner">
        <template
          v-for="(item, index) in houseFacility.houseFacilitys"
          :key="index"
        >
          <div class="item" v-if="houseFacility.facilitySort.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="" />
              <span class="text">{{ item.groupName }}</span>
            </div>
            <div class="list">
              <template
                v-for="(iten, index) in item.facilitys.slice(0, 4)"
                :key="index"
              >
                <div class="iten">
                  <van-icon name="setting-o" color="#1989fa" />
                  <span class="text">{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>
<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";

const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({}),
  },
});

</script>

<style lang="less" scoped>
.facility-inner {
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;

  .item {
    display: flex;
    margin: 10px 0;

    .head {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90px;
      img {
        width: 20px;
        height: 20px;
      }

      .text {
        margin-top: 5px;
        color: #000;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .iten {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 4px 0;
        .text {
          color: #333;
          margin-left: 2px;
        }
      }
    }
  }
}
</style>