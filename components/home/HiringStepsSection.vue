<script setup>
const props = defineProps({
  dataSection: Object
});
</script>

<template>
  <section class="section-container text-default snap-start">
    <h2 class="text-center text-3xl font-bold text-color-default">{{ props.dataSection.title }}</h2>

    <div class="container mx-auto p-4 flex flex-col md:flex-row gap-8">


      <div v-for="(step, iStep) in props.dataSection.content" :key="iStep" class="flex flex-col shadow-md flex-1 card">
        <h3 class="text-red-500 text-center font-bold capitalize text-2xl">{{ step.title }}</h3>
        <NuxtPicture :src="step.img" class="w-full rounded-xl overflow-x-hidden bg-slate-100" />
        <div class="flex flex-col px-4 gap-4">
          <p>{{ step.text }}</p>
          <NuxtLink to="/services" class="btn py-2 bg-red-500 !text-slate-100"> empieza aqui </NuxtLink>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
.section-container {
  @apply relative;
  @apply flex flex-col gap-8 py-32 min-h-screen justify-center;
}
</style>
