<template>
  <div class="default-container">
    <div class="bg-wallpaper bg-red-500 h-screen w-full fixed" />
    <LayoutNavBar />
    <slot />
  </div>
</template>

<style scoped>
.default-container {
  @apply flex flex-col relative;
}

.bg-wallpaper {
  background-image: url("/img/home/mask-paint.svg");
  background-size: cover;
}
</style>
