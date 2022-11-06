<template>
  <div class="notice">
    <detail-section title="位置周边" moreText="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DetailSection from "@/components/detail-section/detail-section.vue";
const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})
const mapRef = ref()
onMounted(() => {
var map = new BMapGL.Map(mapRef.value);  // 创建地图实例 
var point = new BMapGL.Point(props.position.longitude, props.position.latitude);  // 创建点坐标 
map.centerAndZoom(point, 15);
// map.enableScrollWheelZoom(true); 
var marker = new BMapGL.Marker(point);   
map.addOverlay(marker); 
})        
</script>

<style lang="less" scoped>
.baidu {
  height: 150px;
}
</style>