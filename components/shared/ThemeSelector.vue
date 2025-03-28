<script setup lang="ts">
type Theme = { text: string, value: string, icon: string }
const themes: Themes[] = [
  { text: 'Oscuro', value: 'dark', icon: 'icon:moon-regular' },
  { text: 'Claro', value: 'light', icon: 'icon:sun-regular' },
  { text: 'Sepia', value: 'sepia', icon: 'icon:mug-hot-solid' },
  { text: 'Sistema', value: 'system', icon: 'icon:laptop-solid' },
]

const colorMode = useColorMode()
const setTheme = (theme: string) => { colorMode.preference = theme }
</script>

<template>
  <ColorScheme placeholder="cargando..." tag="div" class="static flex flex-col gap-2">
    <div class="text-lg text-slate-900 dark:text-slate-100"><span class="font-bold">Tema - </span>{{
      $colorMode.preference
    }}</div>

    <div class="flex gap-2">
      <button v-for="(theme, iTheme) in themes" :key="iTheme"
        :class="[theme.value == $colorMode.preference ? 'btn-active' : '', 'btn']" @click="setTheme(theme.value)">
        <Icon :name="theme.icon"
          :class="[theme.value == $colorMode.preference ? 'fill-slate-100' : 'fill-default', 'outline-0']" />
      </button>
    </div>
  </ColorScheme>
</template>

<style scoped>
.btn {
  @apply p-4;
  @apply hover:bg-slate-100 dark:hover:bg-slate-700;
}

.btn-active {
  @apply hover:bg-red-400;
}
</style>
