<script setup lang="ts">
const props = defineProps({ dataSection: Object });

let serviceAvailableRef = ref(null)

let { scrollFade, fadeIn } = useAnimations()
let animateTitle
let animateCards

onMounted(() => {
  let titleEl = serviceAvailableRef.value.querySelector('.title-section')
  let cardsEls = serviceAvailableRef.value.querySelectorAll('.service-card')

  animateTitle = scrollFade(titleEl, fadeIn(titleEl, { y: 0 }))//tw css translate-y-10
  animateCards = scrollFade(cardsEls, fadeIn(cardsEls, { y: 0, stagger: 0.3 }))
})

onUnmounted(() => {
  animateTitle.revert()
  animateCards.revert()
})
</script>

<template>
  <section class="section-container py-32" ref="serviceAvailableRef">

    <div class="section-body">
      <h2 class="title-section opacity-0 translate-y-40"> {{ props.dataSection.title }} </h2>

      <div class="cards-container">
        <div v-for="(service, iService) in props.dataSection.content" :key="iService"
          class="service-card opacity-0 translate-y-40">
          <h3 class="card-title">{{ service.title }}</h3>
          <Icon :name="'icon:' + service.icon" class="fill-default text-6xl" />
          <p>{{ service.paragraph }}</p>
          <NuxtLink to="/services" class="btn">
            Ver mas
          </NuxtLink>
        </div>
      </div>

    </div>

    <div class="div-mask bg-layout absolute bottom-0 rotate-180 left-0 w-full h-40" />

  </section>
</template>

<style scoped>
.section-container {
  @apply min-h-screen relative;
  @apply flex flex-col;
  @apply justify-center items-center;
  @apply snap-start;
}

.section-body {
  @apply mx-auto container justify-center;
  @apply flex flex-col gap-8 px-8;
}

.title-section {
  @apply text-center font-bold text-3xl text-slate-100;
}

.cards-container {
  @apply grid gap-8;
  @apply grid-cols-1 sm:grid-cols-2 xl:grid-cols-4;
  @apply text-default;
}

.service-card {
  @apply card;
  @apply flex flex-1 flex-col gap-4;
  @apply items-center shadow-md;
}

.card-title {
  @apply font-bold text-2xl text-red-500;
}

.card-border {
  @apply border-4 border-solid transition-all;
  @apply border-t-red-500 border-r-red-400 border-b-red-300 border-l-red-400;
  @apply hover:border-red-500;
}

.div-mask {
  -webkit-mask-image: url("/img/home/paht33.svg");
  mask-image: url("/img/home/path33.svg");
  mask-repeat: repeat-x, no-repeat;
  mask-size: fill-box;
}

.btn {
  @apply bg-red-500 !text-slate-100 px-4 py-2;
  @apply hover:bg-red-400;
}
</style>
