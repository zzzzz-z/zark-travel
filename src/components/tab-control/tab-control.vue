<template>
    <div class="conttol">
      <template v-for="(item,index) in titles" :key="index">
        <div class="item" @click="itemClick(index)" :class="{ active: index === currentIndex}">
          <span>{{item}}</span>
        </div>
      </template>
    </div>
</template>

<script setup>
import { ref } from "vue"

const emit = defineEmits(['tabitemClick'])
defineProps({
  titles: {
    type: Array,
    default: () => []
  }
})
const currentIndex = ref(0)
const itemClick = (index) => {
  currentIndex.value = index
  emit('tabitemClick', index)
}
const setCurrentIndex = (index) => {
  currentIndex.value = index
}
defineExpose({
  setCurrentIndex
})
</script>

<style lang="less" scoped>
.conttol {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #fff;
  .item {
    flex: 1;
  }
  .item.active {
    color: var(--primary-color);
    font-weight: 700;
    span {
      border-bottom: 3px solid var(--primary-color);
      padding: 4px;
    }
  }
}
</style>