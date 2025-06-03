<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 10 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      y1="-0.5"
      x2="3.765"
      y2="-0.5"
      transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33301)"
      :stroke="color"
    />
    <line
      y1="-0.5"
      x2="5.6475"
      y2="-0.5"
      transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.3584 5)"
      :stroke="color"
    />
    <line
      y1="-0.5"
      x2="5.6475"
      y2="-0.5"
      transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01611 5)"
      :stroke="color"
    />
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
