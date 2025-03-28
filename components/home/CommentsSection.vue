<script setup>
const props = defineProps({ dataSection: Object });
</script>

<template>
  <section class="section-container bg-red-500 text-default snap-start">
    <h2 class="text-center !text-3xl font-bold text-slate-100"> {{ props.dataSection.title }} </h2>

    <div class="container mx-auto px-4">
      <div class="flex gap-4 overflow-x-scroll snap-x pb-4">
        <div v-for="(comment, iComment) in props.dataSection.comments"
          class="shadow-md card min-w-[400px] snap-center flex flex-col gap-4">

          <cite>"{{ comment.content }}"</cite>

          <div class="flex justify-start items-end gap-4 h-full">
            <div class="flex gap-2 justify-center items-center">
              <div
                class="text-2xl font-bold rounded-full bg-red-500 text-slate-100 w-12 h-12 flex justify-center items-center">
                {{
                  comment.author.charAt(0) }}</div>
              <div class="">{{ comment.author }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="div-mask bg-layout absolute bottom-0 rotate-180 left-0 w-full h-40"> </div>

  </section>
</template>
<style scoped>
.section-container {
  @apply relative;
  @apply flex flex-col gap-8 pt-32 pb-32 h-screen justify-center items-center;
}

.div-mask {
  -webkit-mask-image: url("/img/home/paht33.svg");
  mask-image: url("/img/home/path33.svg");
  mask-repeat: repeat-x, no-repeat;
  mask-size: fill-box;
}
</style>
