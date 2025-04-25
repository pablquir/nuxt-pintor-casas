<template>
  <div class="absolute w-full h-full flex flex-col">
    <div class="bg-layout h-full" />
    <div class="bg-layout mask-wave h-20 w-full" />
  </div>
</template>

<style scoped>
.mask-wave {
  mask-image: url("/img/home/wave-mask.svg");
  -webkit-mask-image: url("/img/home/wave-mask.svg");
  mask-repeat: repeat-x;
  -webkit-mask-repeat: repeat-x;
  mask-size: fill-box;
  -webkit-mask-size: fill-box;
}
</style>
