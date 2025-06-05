<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.2061 0.00488281C20.3194 0.112115 22 1.85996 22 4V18L21.9951 18.2061C21.8913 20.2512 20.2512 21.8913 18.2061 21.9951L18 22H4L3.79395 21.9951C1.7488 21.8913 0.108652 20.2512 0.00488281 18.2061L0 18V4C0 1.85996 1.68056 0.112115 3.79395 0.00488281L4 0H18L18.2061 0.00488281ZM4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V14L7.48047 12.4053C8.48903 12.1363 9.52847 12 10.5723 12H11.4277C12.4715 12 13.511 12.1363 14.5195 12.4053L20.5 14V4C20.5 2.61929 19.3807 1.5 18 1.5H4ZM6 4C7.10457 4 8 4.89543 8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4Z"
      :fill="color"
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
      default: '#3369F3',
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
