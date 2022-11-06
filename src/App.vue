<template>
  <div class="app">
    <!-- <keep-alive include="home">
      <router-view />
    </keep-alive> -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component" />
      </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hideTaBar"></tab-bar>
    <loading></loading>
  </div>
</template>

<script setup>
import tabBar from "@/components/tabBar/tabBar.vue";
import Loading from "@/components/loading/loading.vue";

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped>
</style>
