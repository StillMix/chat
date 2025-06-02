<template>
  <div class="leftMenu">
    <div class="leftMenu-header">
      <button type="button">
        Профиль <ProfileArrow :width="16" :height="19" color="#fffff" />
      </button>
      <input />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileArrow from '@/assets/Icons/ProfileArrow.vue'
</script>

<style lang="scss" scoped>
.leftMenu {
  background: #fbfbfb;
  height: 100%;
  width: 310px;
  flex-shrink: 0;
  border-right: 1px solid #eaeaea;
}
</style>
