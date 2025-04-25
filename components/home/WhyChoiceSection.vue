<script setup>
const props = defineProps({ dataSection: Object });

let whyChoiceRef = ref(null)

let { fadeIn, scrollFade } = useAnimations()
let animateTitle
let animateCards

onMounted(() => {
  let titleEl = whyChoiceRef.value.querySelector('.title-section')
  let cardsEls = whyChoiceRef.value.querySelectorAll('.why-choice-card')

  animateTitle = scrollFade(titleEl, fadeIn(titleEl, { y: 0 }))
  animateCards = scrollFade(cardsEls, fadeIn(cardsEls, { y: 0, stagger: .3 }))

})

onUnmounted(() => {
  animateTitle.revert()
  animateCards.revert()
})
</script>

<template>
  <section ref="whyChoiceRef" class="section-container">

    <SharedBgWaveWithMask />

    <div class="mx-auto container flex flex-col gap-8 py-32">
      <h2 class="title-section opacity-0 translate-y-40"> {{ props.dataSection.title }} </h2>

      <div class="cards-container">

        <div v-for="(item, iItem) in props.dataSection.content" :key="iItem"
          class="why-choice-card opacity-0 translate-y-40">

          <Icon name="icon:checkdouble-solid" class="text-2xl fill-red-500" />

          <div class="flex flex-1 flex-col gap-2">
            <h3 class="text-red-500 font-bold text-xl">{{ item.subTitle }}</h3>
            <p>{{ item.paragraph }}</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.section-container {
  @apply flex flex-col;
  @apply relative snap-start px-4 min-h-screen justify-center items-center text-default;
}

.title-section {
  @apply text-center !text-3xl font-bold;
}

.cards-container {
  @apply grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
}

.why-choice-card {
  @apply card flex shadow-md gap-2 rounded-xl;
}
</style>
