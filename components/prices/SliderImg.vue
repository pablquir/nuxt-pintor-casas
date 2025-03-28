<script setup lang="ts">
let imgTemplate = [
  { id: 1, src: 'img/price/cocina1.webp', alt: 'cocina plantilla' },
  { id: 2, src: 'img/price/sala1.webp', alt: 'sala plantilla' },
  { id: 3, src: 'img/price/sala2.webp', alt: 'sala plantilla' },
  { id: 4, src: 'img/price/sala3.webp', alt: 'sala plantilla' },
  { id: 5, src: 'img/price/sala4.webp', alt: 'sala plantilla' },
  { id: 6, src: 'img/price/sala5.webp', alt: 'sala plantilla' },
  { id: 7, src: 'img/price/sala7.webp', alt: 'sala plantilla' },
]

let { currentImg, setCurrentImg } = useImg()

</script>

<template>
  <div class="flex flex-col rounded-md w-full p-8 gap-2">
    <div class="flex flex-wrap gap-4">
      <button v-for="(img, iImg) in imgTemplate" :key="iImg" class="btn w-40 rounded-lg bg-slate-300 dark:bg-slate-700"
        @click="setCurrentImg(img.src, img.alt)">
        <NuxtImg :src="img.src" :alt="img.alt" class="w-full rounded-lg" />
      </button>
    </div>
  </div>
</template>
