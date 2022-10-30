<template>
  <div class="app">
    <router-view />
    <tab-bar v-if="!route.meta.hideTaBar"></tab-bar>
  </div>
</template>

<script setup>
import tabBar from '@/components/tabBar/tabBar.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>

</style>
