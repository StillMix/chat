<template>
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style>
body {
  overflow-x: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.page-enter-active body,
.page-leave-active body {
  overflow: hidden;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
