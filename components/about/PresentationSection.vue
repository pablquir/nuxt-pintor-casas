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
  <section ref="presentationAboutRef" class="section-container">
    <div class="flex flex-col md:flex-row text-default mx-auto container">

      <div class="flex-1 flex justify-center items-center">
        <NuxtImg src="img/about/portada-about.webp" class="els" />
      </div>

      <div class="flex flex-col flex-1 gap-4 p-8">
        <h1 class="text-3xl font-bold text-red-500 text-center els"> {{ props.dataSection.title }} </h1>
        <h2 class="text-2xl font-bold els">{{ props.dataSection.subTitle }}</h2>
        <p v-for="(paragraph, iParagraph) in props.dataSection.content" :key="iParagraph" class="els">
          {{ paragraph }}
        </p>
      </div>

    </div>
    <div class="square-mask h-40 w-full absolute bg-red-500 bottom-0 rotate-180"></div>
  </section>
</template>

<style scoped>
.section-container {
  @apply relative;
  @apply flex justify-center items-center py-32;
  @apply min-h-screen snap-start;
}

.square-mask {
  -webkit-mask-image: url("/img/home/paht33.svg");
  mask-image: url("/img/home/path33.svg");
  mask-repeat: repeat-x, no-repeat;
  mask-size: fill-box;
}

.els {
  @apply opacity-0;
}
</style>
