<script setup>
let { $gsap } = useNuxtApp()
let sliderRef = ref()

const props = defineProps({ dataSlides: Object });

//index para rotacion del slide
const currentIndex = ref(0)

//siguiente imagen vuelve al principio cuando llega al final
const nextImg = () => {
  currentIndex.value = (currentIndex.value + 1) % props.dataSlides.imgSlides.length
}

onMounted(() => {

  // const animateImgSlide = $gsap.timeline({ yoyo: true, repeat: -1, onRepeat: () => nextImg() })
  // animateImgSlide.to(".img-slide", { duration: 20, scale: 1.4, })
  //   .to(".img-slide", { opacity: 0, duration: 0.3 })
  //
  // const animateImgSalpicadura = $gsap.timeline()
  // animateImgSalpicadura.set('.pintura-salpicadura', { x: 800, scale: 0, opacity: 0 }).to('.pintura-salpicadura', { scale: 1, x: 0, opacity: 1 })

})

</script>

<template>
  <div class="slider-container py-20" ref="sliderRef">

    <NuxtPicture v-for="(image, index) in props.dataSlides.imgSlides" :key="index" :src="image.url"
      :imgAttrs="{ class: 'absolute w-full object-cover h-full' }" :style="{ opacity: currentIndex == index ? 1 : 0 }"
      :alt="image.alt" loading="lazy" placeholder />

    <div class="slider-overlay"> </div>

    <SharedOrnament class="bg-red-500" />

    <!-- <NuxtPicture :src="props.dataSlides.imgSalpicadura.urlDesktop" :imgAttrs="{ -->
    <!--   class: 'pintura-salpicadura absolute right-0 hidden md:block opacity-0 top-0 object-cover', -->
    <!-- }" placeholder :alt="dataSlides.imgSalpicadura.alt" /> -->
    <!-- <!---->
    <!-- <NuxtPicture :src="props.dataSlides.imgSalpicadura.urlMobile" :imgAttrs="{ -->
    <!--   class: 'pintura-salpicadura absolute w-full object-cover opacity-0 top-0 md:hidden right-180' -->
    <!-- }" placeholder :alt="dataSlides.imgSalpicadura.alt" /> -->
  </div>
</template>

<style scoped>
.slider-container {
  @apply relative w-full h-screen overflow-hidden;
}

.img-slide {
  @apply absolute w-full object-cover bg-red-500;
}

.slider-overlay {
  @apply absolute flex justify-center items-center w-full h-full;
  @apply bg-slate-200/90 dark:bg-slate-900/90;
}
</style>
