<script setup lang="ts">
let { $gsap } = useNuxtApp()
let navbarRef = ref(null)

const { fadeIn } = useAnimations()

onMounted(() => {
  //animate navabar elements
  let logoEl = navbarRef.value.querySelector(".logo-element")
  let menuDesktopEl = navbarRef.value.querySelector(".menu-element")
  let menuMobileEl = navbarRef.value.querySelector(".menu-mobile-element")

  let arryEl = [logoEl, menuDesktopEl, menuMobileEl]
  fadeIn(arryEl, { stagger: 0.3 })
})

onUnmounted(() => {
  fadeIn().revert()
})

</script>

<template>
  <nav ref="navbarRef" class="navbar-container">

    <LayoutLogoEnterprise class="logo-element opacity-0" />

    <div class="flex gap-2">

      <div class="hidden md:block">
        <LayoutMenuPage class="menu-element opacity-0" />
      </div>

      <SharedMenuFloat class="menu-mobile-element opacity-0">
        <template #content>
          <div class="flex flex-col gap-2">
            <LayoutMenuPage class="sm:hidden" />
            <SharedThemeSelector />
          </div>
        </template>
      </SharedMenuFloat>
    </div>
  </nav>
</template>

<style scoped>
.navbar-container {
  @apply absolute text-white;
  @apply bg-slate-200/90 dark:bg-slate-900/90 w-full;
  @apply backdrop-blur-md py-4 px-2;
  @apply flex justify-between items-center top-0 fixed left-0 z-50;
}
</style>
