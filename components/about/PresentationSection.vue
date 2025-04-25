<script setup lang="ts">
const props = defineProps({ dataSection: Object });

let presentationAboutRef = ref(null)

let { fadeIn } = useAnimations()
let animatePresentation

onMounted(() => {
  let els = presentationAboutRef.value.querySelectorAll('.els')
  animatePresentation = fadeIn(els, { stagger: 0.3 })
})

onUnmounted(() => {
  animatePresentation.revert()
})
</script>

<template>
  <section ref="presentationAboutRef" class="section-container-about">
    <SharedBgWaveWithMask />
    <div class="flex flex-col md:flex-row text-default mx-auto container z-0 py-32">
      <div class="flex justify-center items-center flex-1 p-8 relative">
        <NuxtImg src="img/about/portada-about.webp" class="els w-full md:w-[90%] " />
      </div>
      <div class="flex flex-1 flex-col gap-4 p-8">
        <h1 class="text-3xl font-bold text-red-500 text-center els"> {{ props.dataSection.title }} </h1>
        <h2 class="text-2xl font-bold els">{{ props.dataSection.subTitle }}</h2>
        <p v-for="(paragraph, iParagraph) in props.dataSection.content" :key="iParagraph" class="els">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container-about {
  @apply relative;
  @apply flex flex-col justify-center items-center;
  @apply min-h-screen snap-start;
}

.els {
  @apply opacity-0;
}
</style>
