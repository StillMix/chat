<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5925 11.4138C10.1606 12.8457 7.83895 12.8457 6.40703 11.4138C4.97511 9.98187 4.97511 7.66027 6.40703 6.22834C7.83895 4.79642 10.1606 4.79642 11.5925 6.22834C13.0244 7.66027 13.0244 9.98187 11.5925 11.4138ZM12.0329 12.7968C10.0726 14.2961 7.25705 14.1494 5.46422 12.3566C3.5116 10.404 3.5116 7.23816 5.46422 5.28553C7.41684 3.33291 10.5827 3.33291 12.5353 5.28553C14.328 7.07828 14.4748 9.8937 12.9756 11.8539L16.5423 15.4206L15.5995 16.3634L12.0329 12.7968Z"
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
