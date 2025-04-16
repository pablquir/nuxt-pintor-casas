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
  <section ref="hiringStepsRef" class="section-container">

    <h2 class="title-section opacity-0 translate-y-40">{{ props.dataSection.title }}</h2>

    <div class="cards-container">

      <div v-for="(step, iStep) in props.dataSection.content" :key="iStep"
        class="hiring-steps-card opacity-0 translate-y-40">

        <h3 class="title-card">{{ step.title }}</h3>
        <NuxtPicture :src="step.img" class="img-card" />

        <div class="flex flex-col px-4 gap-4">
          <p class="hiring-steps-card opacity-0 translate-y-80">
            {{ step.text }}
          </p>
          <NuxtLink to="/services" class="btn"> empieza aqui </NuxtLink>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.section-container {
  @apply relative;
  @apply text-default snap-start;
  @apply flex flex-col gap-8 py-32 min-h-screen justify-center;
}

.title-section {
  @apply text-center text-3xl font-bold text-color-default;
}

.cards-container {
  @apply container mx-auto;
  @apply flex flex-col md:flex-row gap-8;
  @apply p-4 gap-8;
}

.hiring-steps-card {
  @apply card;
  @apply flex flex-col shadow-md flex-1;
}

.title-card {
  @apply text-red-500 text-center font-bold capitalize text-2xl;
}

.img-card {
  @apply w-full rounded-xl overflow-x-hidden bg-slate-100;
}

.btn {
  @apply py-2 bg-red-500 !text-slate-100
}
</style>
