<script setup>
const props = defineProps({ dataSection: Object });
let hiringStepsRef = ref(null)

let { scrollFade, fadeIn } = useAnimations()
let animateTitle
let animateCards

onMounted(() => {
  let titleEl = hiringStepsRef.value.querySelector('.title-section')
  let cardEls = hiringStepsRef.value.querySelectorAll('.hiring-steps-card')

  animateTitle = scrollFade(titleEl, fadeIn(titleEl, { y: 0 }))
  animateCards = scrollFade(cardEls, fadeIn(cardEls, { y: 0, stagger: 0.3 }))
})

onUnmounted(() => {
  animateTitle.revert()
  animateCards.revert()
})

</script>

<template>
  <section ref="hiringStepsRef" class="section-container bg-layout">

    <h2 class="title-section opacity-0 translate-y-40">{{ props.dataSection.title }}</h2>

    <div class="cards-container">

      <div v-for="(step, iStep) in props.dataSection.content" :key="iStep"
        class="hiring-steps-card relative opacity-0 translate-y-40 overflow-hidden">

        <NuxtImg :src="step.bgImg" class="absolute h-full -z-10 object-center overflow-hidden" />
        <h3 class="title-card">{{ step.title }}</h3>
        <NuxtImg :src="step.img" class="img-card object-contain h-60 overflow-hidden" />

        <p class=""> {{ step.text }} </p>
        <div class="flex flex-grow items-end justify-center">
          <NuxtLink to="/services" class="btn"> Empieza aqui </NuxtLink>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.section-container {
  @apply relative min-h-screen;
  @apply flex flex-col gap-8 py-32;
  @apply items-center justify-center;
  @apply text-default snap-start;
}

.title-section {
  @apply text-center font-bold text-3xl text-color-default;
}

.cards-container {
  @apply container mx-auto;
  @apply flex flex-col md:flex-row gap-8;
  @apply p-4 gap-8;
}

.hiring-steps-card {
  @apply card gap-8;
  @apply flex flex-col flex-1;
  @apply shadow-md;
}

.title-card {
  @apply text-red-500 text-left font-bold capitalize text-2xl;
}

.img-card {
  @apply rounded-xl overflow-x-hidden bg-slate-100;
}

.btn {
  @apply py-2 px-4 bg-red-500 !text-slate-100
}
</style>
