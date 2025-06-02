<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 9L5 5L1 1" :stroke="color" />
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
