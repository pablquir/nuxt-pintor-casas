<script setup lang="ts">
const props = defineProps({ isTop: { type: Boolean, default: false }, });
</script>

<template>
  <div :class="[isTop ? 'ornament-top' : 'ornament-bottom', 'ornament-container']">
  </div>
</template>

<style scoped>
.ornament-container {
  mask-image: url("/img/home/path33.svg");
  -webkit-mask-image: url("/img/home/path33.svg");
  mask-repeat: repeat-x, no-repeat;
  mask-size: fill-box;
  @apply h-40 w-full absolute;
}

.ornament-top {
  @apply top-0;
}

.ornament-bottom {
  @apply bottom-0 rotate-180;
}
</style>
