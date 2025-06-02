<template>
  <div class="main">
    <LeftMenu />
    <RightChat />
  </div>
</template>
<script setup lang="ts">
import LeftMenu from '@/components/LeftMenu.vue'
import RightChat from '@/components/RightChat.vue'
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
