<template>
  <div class="city-item">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, key, index) in groupData.hotCities" :key="index">
          <div class="hot" @click="cityClick(city)">
            {{ city.cityName}}
          </div>
        </template>
      </div>

      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(city, indexcity) in item.cities" :key="indexcity">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list;
})
 //监听城市的点击
 const router = useRouter()
 const cityStore = useCityStore()
const cityClick = (city) => {
  
  cityStore.currentCity = city
console.log(cityStore.currentCity );
  //返回到上一级
   
   router.back()
}

</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  .hot {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    margin: 8px 0;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    background: #fff4ec;
  }
}
</style>