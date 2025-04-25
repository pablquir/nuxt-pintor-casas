<script setup>
const props = defineProps({ dataSection: Object });

let commentsRef = ref(null)

let { fadeIn, scrollFade } = useAnimations()
let animateTitle
let animateCards

onMounted(() => {
  let titleEl = commentsRef.value.querySelector('.title-section')
  let cardsEls = commentsRef.value.querySelectorAll('.comment-card')

  animateTitle = scrollFade(titleEl, fadeIn(titleEl, { y: 0 }))
  animateCards = scrollFade(cardsEls, fadeIn(cardsEls, { x: 0, stagger: .3 }))
})

onUnmounted(() => {
  animateTitle.revert()
  animateCards.revert()
})
</script>

<template>
  <section ref="commentsRef" class="section-containers snap-start">
    <!-- <NuxtImg src="img/home/paint-texture.png" class="-z-1 absolute top-0 left-0 w-full h-full" /> -->

    <h2 class="title-section opacity-0 translate-y-40"> {{ props.dataSection.title }} </h2>

    <div class="container mx-auto px-4">
      <div class="comments-container">
        <div v-for="(comment, iComment) in props.dataSection.comments" :key="iComment"
          class="comment-card translate-x-40 opacity-0">

          <cite>"{{ comment.content }}"</cite>

          <div class="flex justify-start items-end gap-4 h-full">
            <div class="flex gap-2 justify-center items-center">

              <!-- image perfil -->
              <div class="h-14 w-14 overflow-hidden flex justify-center items-center rounded-full">
                <NuxtImg :src="comment.imgUrl" @error="handleImageError(iComment)" />
              </div>

              <!-- letter perfil -->
              <!-- <div v-else -->
              <!--   class="text-2xl font-bold rounded-full bg-red-500 text-slate-100 w-12 h-12 flex justify-center items-center"> -->
              <!--   {{ comment.author.charAt(0) }} -->
              <!-- </div> -->

              <div class="bg-slate-200 rounded dark:bg-slate-700 px-2">{{ comment.author }}</div>


            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="div-mask bg-layout absolute bottom-0 rotate-180 left-0 w-full h-40"> </div>
  </section>
</template>
<style scoped>
.section-containers {
  @apply relative;
  @apply flex flex-col gap-8 pt-32 pb-32 h-screen justify-center items-center;
  @apply text-default;
}

.title-section {
  @apply text-center !text-3xl font-bold text-slate-100;
}

.comments-container {
  @apply flex gap-4 overflow-x-scroll snap-x pb-4;
}

.comment-card {
  @apply shadow-md card min-w-[400px] snap-center flex flex-col gap-4;
}

.div-mask {
  -webkit-mask-image: url("/img/home/wave-mask.svg");
  mask-image: url("/img/home/wave-mask.svg");
  mask-repeat: repeat-x, no-repeat;
  mask-size: fill-box;
}
</style>
