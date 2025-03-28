<script setup lang="ts">
let isShowMenu = ref(false)

let closeMenu = () => isShowMenu.value = false
let toggleMenu = () => isShowMenu.value = !isShowMenu.value
</script>

<template>
  <div class="relative" v-click-outside="closeMenu">
    <button @click="toggleMenu" class="btn">
      <slot name="icon">
        <Icon name="icon:bars-solid" class="fill-slate-900 dark:fill-slate-100" />
      </slot>
    </button>

    <Transition>
      <div v-show="isShowMenu" class="content-container">
        <slot name="content">Menu</slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.btn {
  @apply relative h-full px-4;
  @apply fill-slate-100 border-0;
  @apply hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg;
}

.content-container {
  @apply absolute;
  @apply right-2 p-8 mt-2;
  @apply bg-slate-100/90 dark:bg-slate-800/90 rounded-xl;
  @apply backdrop-blur-md;
  @apply shadow shadow-slate-400 dark:shadow-slate-800;
}
</style>
