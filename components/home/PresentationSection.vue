<script setup lang="ts">
const props = defineProps({ dataSection: Object })

let homePresentationRef = ref()

let dataTitle = {
  title: props.dataSection.title,
  subTitles: props.dataSection.subTitles,
  targetAudience: props.dataSection.targetAudience,
  btnActions: props.dataSection.btnActions
}

let { fadeIn } = useAnimations()
let fadeAnimate

onMounted(() => {
  let logoPintura = homePresentationRef.value.querySelector(".logo-img")
  fadeAnimate = fadeIn(logoPintura)
})

onUnmounted(() => {
  fadeAnimate.revert()
})
</script>

<template>
  <section class="section-container snap-start" ref="homePresentationRef">

    <!-- image background effect slides -->
    <HomeSlider :dataSlides="props.dataSection.imgSlides" />

    <div class="presentation-container">

      <!-- title -->
      <div class="title-presentation-container">
        <HomeTitleBranding :dataTitle="dataTitle" />
      </div>

      <!-- logo -->
      <div class="logo-container">
        <NuxtPicture :src="props.dataSection.imgLog.url" :alt="props.dataSection.imgLog.alt"
          :imgAttrs="{ class: 'logo-img opacity-0' }" />
      </div>

    </div>

  </section>
</template>

<style scoped>
.section-container {
  @apply relative flex justify-center items-center w-full min-h-dvh md:min-h-screen;
}

.presentation-container {
  @apply absolute w-full h-full;
  @apply top-0 left-0;
  @apply flex flex-col-reverse md:flex-row;
}

.title-presentation-container {
  @apply flex-1 flex;
  @apply justify-center items-start md:items-center;
  @apply px-8;
}

.logo-container {
  @apply flex-1 flex relative;
  @apply justify-center items-end md:items-center;
  @apply p-8;
}

.logo-img {
  @apply flex justify-center items-center;
  @apply object-cover w-full;
}
</style>
