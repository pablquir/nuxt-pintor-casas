<script setup lang="ts">
const props = defineProps({ dataSection: Object });
let readMore = ref(true)

let presentationServicesRef = ref(null)

let { fadeIn, scrollFade } = useAnimations()
let animatePresentationCard

onMounted(() => {
  let cardEl = presentationServicesRef.value.querySelector('.card-container')

  animatePresentationCard = scrollFade(cardEl, fadeIn(cardEl))
})

onUnmounted(() => {
  animatePresentationCard.revert()
})

</script>

<template>
  <section ref="presentationServicesRef" class="section-container px-4">
    <div class="card-container opacity-0">

      <div class="presentation-card ">
        <h1 class="font-bold text-3xl text-red-500">{{ dataSection.title }}</h1>
        <div class="text-left flex flex-col gap-4">
          <p v-for="(paragraph, iParagraph) in dataSection.content" :class="['itema', { 'line-clamp-3': readMore }]">
            {{ paragraph }}
          </p>
          <div>
            <button class="btn overflow-hidden px-4 py-2 bg-red-500 !text-slate-100" @click="readMore = !readMore">
              <span v-if="readMore">Leer mas</span>
              <span v-else>Leer menos</span>
            </button>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <NuxtImg src="img/services/services-portada.webp" height="500" class="float-right" />
      </div>
    </div>

    <div class="div-mask bg-layout absolute bottom-0 rotate-180 left-0 w-full h-40"> </div>
  </section>
</template>

<style scoped>
/* .itema:nth-child(3) { @apply row-span-2; } */
.section-container {
  @apply relative bg-red-500 py-32;
}

.card-container {
  @apply text-default;
  @apply flex flex-col-reverse md:flex-row justify-center items-center;
  @apply mx-auto container;
  @apply bg-card rounded-xl overflow-hidden;
}

.presentation-card {
  @apply flex flex-col flex-1 p-8 text-center gap-4;
}

.div-mask {
  -webkit-mask-image: url("/img/home/paht33.svg");
  mask-image: url("/img/home/path33.svg");
  mask-repeat: repeat-x, no-repeat;
  mask-size: fill-box;
}
</style>
