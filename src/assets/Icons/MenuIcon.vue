<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 3 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1.5" cy="2" r="1.5" :fill="color" />
    <circle cx="1.5" cy="8" r="1.5" :fill="color" />
    <circle cx="1.5" cy="14" r="1.5" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'emailIcon',
  props: {
    width: {
      type: [String, Number],
      default: '24',
    },
    height: {
      type: [String, Number],
      default: '24',
    },
    color: {
      type: String,
      default: 'white',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
svg {
  display: block;
  min-width: 0;
  min-height: 0;
}
</style>
