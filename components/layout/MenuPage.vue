<script setup lang="ts">
type Route = { name: string, path: string }

const urls: Route[] = [
  { text: "Inicio", path: "/" },
  { text: "Nosotros", path: "/about" },
  { text: "Servicios", path: "/services" },
  { text: "Precios", path: "/prices" },
  { text: "Contacto", path: "/contact" }
]

</script>

<template>
  <div class="flex flex-col md:flex-row gap-2">
    <NuxtLink v-for="(url, iUrl) in urls" :key="iUrl" :to="url.path">
      {{ url.text }}
    </NuxtLink>
  </div>
</template>

<style scoped>
a {
  @apply no-underline hover:cursor-pointer;
  @apply py-4 px-6;
  @apply hover:bg-slate-100 dark:hover:bg-slate-800 btn;
}

.router-link-exact-active {
  @apply btn-active;
}
</style>
