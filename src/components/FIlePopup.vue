<template>
  <div class="filePopup" @click.stop>
    <button class="filePopup__button" @click="handlePhotoVideo">
      <PhotoVideoIcon :width="22" :height="22" /> Фото или Видео
    </button>
    <button class="filePopup__button" @click="handleFile">
      <FileIcon :width="22" :height="22" /> Файл
    </button>
  </div>
</template>
<script setup lang="ts">
import FileIcon from '@/assets/Icons/FileIcon.vue'
import PhotoVideoIcon from '@/assets/Icons/PhotoVideoIcon.vue'

interface Emits {
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

const handlePhotoVideo = () => {
  emit('close')
}

const handleFile = () => {
  emit('close')
}
</script>
<style lang="scss" scoped>
.filePopup {
  border-radius: 12px;
  width: 162px;
  padding: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.14);
  background: #fff;
  position: absolute;
  bottom: 64px;
  left: -10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 10;
  &__button {
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    color: #1e1e1e;
    transition: background-color 0.2s ease;
    border-radius: 6px;

    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
