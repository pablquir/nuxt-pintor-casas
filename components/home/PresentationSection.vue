<script setup lang="ts">
const props = defineProps({ dataSection: Object })
let { $gsap } = useNuxtApp()
let homePresentationRef = ref()

let dataSlides = {
  imgSalpicadura: props.dataSection.imgSalpicadura,
  imgSlides: props.dataSection.imgSlides
}

let dataTitle = {
  title: props.dataSection.title,
  subTitles: props.dataSection.subTitles,
  targetAudience: props.dataSection.targetAudience,
  btnActions: props.dataSection.btnActions
}

onMounted(() => {
  let logoPintura = homePresentationRef.value.querySelector(".logo-pintura")

  let logoPinturaAnimate = $gsap.timeline({ duration: 0.3 })
  logoPinturaAnimate.to(logoPintura, { opacity: 1 })
})
</script>

<template>
  <section class="section-container snap-start" ref="homePresentationRef">

    <HomeSlider :dataSlides="dataSlides" />

    <!-- <HomeTitleBranding :dataTitle="dataTitle" class="md:left-20 top-[50%] md:top-auto" /> -->
    <div class="absolute top-0 left-0 w-full h-full flex">
      <div class="flex-1 flex justify-center items-center">
        <HomeTitleBranding :dataTitle="dataTitle" class="" />
      </div>
      <div class="flex-1 flex justify-center items-center p-8 relative">
        <NuxtPicture src="/img/home/pintura-house.png" class="opacity-0 logo-pintura  w-[600px]" />
      </div>
    </div>

  </section>
</template>

<style scoped>
.section-container {
  @apply relative flex justify-center items-center w-full min-h-screen;
}
</style>
