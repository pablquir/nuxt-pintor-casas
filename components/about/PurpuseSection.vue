<script setup lang="ts">
const props = defineProps({ dataSection: Object });

let purpuseRef = ref(null)

let { fadeIn, scrollFade } = useAnimations()
let animatePurpuse

onMounted(() => {
  let purpuseEls = purpuseRef.value.querySelectorAll('.card-purpuse')

  animatePurpuse = scrollFade(purpuseEls, fadeIn(purpuseEls, { stagger: 0.3 }))
})

onUnmounted(() => {
  animatePurpuse.revert()
})
</script>

<template>
  <section ref="purpuseRef" class="section-container">
    <div class="purpuse-card grid grid-flow-row md:grid-flow-col md:grid-rows-2 mx-auto container gap-4 px-4">
      <div v-for="(purpuse, iPurpuse) in dataSection" :key="iPurpuse" class="card-purpuse opacity-0">

        <Icon :name="'icon:' + purpuse.icon" class="fill-default text-6xl" />
        <h2 class="text-3xl font-bold text-red-500 self-start">{{ purpuse.title }}</h2>
        <div v-for="(paragraph, iParagraph) in purpuse.content">{{ paragraph }}</div>

      </div>
    </div>

    <div class="div-mask bg-layout absolute bottom-0 rotate-180 left-0 w-full h-40"> </div>
  </section>
</template>

<style scoped>
.section-container {
  @apply relative;
  @apply min-h-screen w-full py-32;
  @apply flex justify-center items-center snap-start;
  @apply text-default bg-red-500;
}

.card-purpuse {
  @apply flex flex-col rounded-xl p-8 bg-slate-100 dark:bg-slate-800 items-center justify-center;
}

.card-purpuse:nth-child(3) {
  @apply md:row-span-2;
}

.div-mask {
  -webkit-mask-image: url("/img/home/paht33.svg");
  mask-image: url("/img/home/path33.svg");
  mask-repeat: repeat-x, no-repeat;
  mask-size: fill-box;
}
</style>
