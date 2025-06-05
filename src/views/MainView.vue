<template>
  <div class="main">
    <LeftMenu :selectedChatId="selectedChatId" @selectChat="handleSelectChat" />
    <RightChat :selectedChatId="selectedChatId" :selectedChatName="selectedChatName" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import LeftMenu from '@/components/LeftMenu.vue'
import RightChat from '@/components/RightChat.vue'
import type { ChatItem } from '@/Utils/ChatArray'

const selectedChatId = ref<string | number | null>(null)
const selectedChatName = ref<string>('')

const handleSelectChat = (chat: ChatItem) => {
  selectedChatId.value = chat.id
  selectedChatName.value = chat.name
}
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
