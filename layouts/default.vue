<template>
  <div class="default-container">
    <LayoutNavBar />
    <slot />
  </div>
</template>

<style scoped>
.default-container {
  @apply flex flex-col min-h-screen relative;
}
</style>
