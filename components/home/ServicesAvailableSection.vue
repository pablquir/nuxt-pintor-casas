<script setup lang="ts">
const props = defineProps({ dataSection: Object });

const { $gsap } = useNuxtApp()

onBeforeMount(() => {
  // $gsap.set(".title-section", {
  //   x: -400,
  //   opacity: 0
  // })
  //
  // $gsap.to('.title-section', {
  //   x: 0,
  //   opacity: 1,
  //   scrollTrigger: {
  //     trigger: 'h2',
  //     start: "top center",
  //     end: "top 25%",
  //     scrub: true
  //   }
  // })
  //
  // $gsap.set(".card-service", {
  //   x: 400,
  //   y: 400,
  //   opacity: 0
  // })
  //
  // $gsap.to(".card-service", {
  //   x: 0,
  //   y: 0,
  //   opacity: 1,
  //   scrollTrigger: {
  //     trigger: ".card-service",
  //     start: "top center",
  //     markers: true,
  //     end: "top 25%",
  //     scrub: true
  //   }
  //
  // })

})

onMounted(() => { })
</script>

<template>
  <section class="section-container py-32">

    <div class="mx-auto container justify-center flex flex-col gap-8">
      <h2 class="title-section"> {{ props.dataSection.title }} </h2>

      <div class="cards-container p-4">
        <div v-for="(service, iService) in props.dataSection.content" :key="iService" class="card card-service">
          <h3 class="card-title">{{ service.title }}</h3>
          <Icon :name="'icon:' + service.icon" class="fill-default text-6xl" />
          <p>{{ service.paragraph }}</p>
          <NuxtLink to="/services" class="btn bg-red-500 !text-slate-100 px-4 py-2">Ver mas</NuxtLink>
        </div>
      </div>
    </div>

    <div class="div-mask bg-layout absolute bottom-0 rotate-180 left-0 w-full h-40"> </div>

  </section>
</template>

<style scoped>
.section-container {
  @apply min-h-screen relative;
  @apply flex flex-col gap-8;
  @apply justify-center items-center;
  @apply bg-red-500;
  @apply snap-start;
}

.title-section {
  @apply text-center font-bold text-3xl text-slate-100;
}

.cards-container {
  @apply grid gap-8;
  @apply grid-cols-1 sm:grid-cols-2 xl:grid-cols-4;
  @apply text-default;
}

.card {
  @apply flex flex-col gap-4;
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
</style>
