<script setup>
const props = defineProps({ dataSection: Object });
</script>

<template>
  <section class="section-container relative snap-start px-4 min-h-screen justify-center items-center text-default">
    <div class="mx-auto container flex flex-col gap-8">
      <h2 class="text-center !text-3xl font-bold"> {{ props.dataSection.title }} </h2>

      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div v-for="(item, iItem) in props.dataSection.content" :key="iItem"
          class="flex shadow-md gap-2 rounded-xl card">
          <Icon name="icon:checkdouble-solid" class="text-2xl fill-red-500" />
          <div class="flex flex-1 flex-col gap-2">
            <h3 class="text-red-500 font-bold text-xl">{{ item.subTitle }}</h3>
            <p>{{ item.paragraph }}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="div-mask bg-red-500 absolute bottom-0 rotate-180 left-0 w-full h-40"> </div>
  </section>
</template>

<style scoped>
.section-container {
  @apply flex flex-col py-32;
}
</style>
