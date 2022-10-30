<template>
    <div class="favor">
      <h2>zark1</h2>
      <template v-for="item in 100" :key="item">
        <div>{{item}}</div>
      </template>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.favor {
  height: 100vh;
  overflow-y: auto;
}
</style>