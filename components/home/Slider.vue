<script setup>
const props = defineProps({ dataSlides: Object });

const sliderRef = ref(null);

const { $gsap } = useNuxtApp();
let { zoomSlide } = useAnimations()
let zoomAnimation

onMounted(() => {
  const slideElements = sliderRef.value.getElementsByClassName("slide-img");
  const totalSlides = props.dataSlides.length;

  zoomAnimation = zoomSlide(slideElements, totalSlides)

});

onUnmounted(() => {
  zoomAnimation.revert()
})
</script>

<template>
  <div class="slider-container py-20" ref="sliderRef">
    <NuxtPicture v-for="(slide, index) in props.dataSlides" :key="index" :src="slide.url"
      :imgAttrs="{ class: 'absolute w-full h-full object-cover opacity-0 slide-img' }" :alt="slide.alt" loading="lazy"
      placeholder />
    <div class="slider-overlay"></div>
    <SharedOrnament class="bg-red-500" />
  </div>
</template>

<style scoped>
.slider-container {
  @apply relative w-full h-screen overflow-hidden;
}

.slider-overlay {
  @apply absolute flex justify-center items-center w-full h-full;
  @apply bg-slate-200/90 dark:bg-slate-900/90;
}
</style>
