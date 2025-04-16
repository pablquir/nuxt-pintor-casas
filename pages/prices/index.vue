<script setup lang="ts">
import colorsCoral from "~/pages/prices/colors_coral.json"
import colorsSuvinil from "~/pages/prices/colors_suvinil.json"
import fadeTransition from '~/helper/transitions/fade.ts'

definePageMeta({ pageTransition: fadeTransition })

let currentColorGroup = ref(0)
const setCurrentColorGroup = (index: number) => { currentColorGroup.value = index }

type Rgb = { r: number, g: number, b: number }

let { currentColor, setCurrentColor } = useColor()

let dataPrice = ref({
  typeService: 'Exterior',
  name: 'Luis Enrique',
  height: 10,
  width: 10,
  layer: 2,
  color: { r: 255, g: 255, b: 255 },
  price: 1000
})


let dataRef = ref("Esperando")

if (process.client) {
  const { data } = useAsyncData('colors', () => $fetch("/colors_coral.json"), { lazy: true, server: false })
  dataRef.value = data
}

onMounted(() => { })
onUnmounted(() => {
})
</script>

<template>
  <main class="min-h-dvh">

    <section class="relative pt-40 pb-20 flex flex-col gap-8 h-full">

      <div class="relative bg-card mx-auto container rounded-xl flex flex-col md:flex-row max-h-full px-4">
        <PricesFormPrice />
        <PricesViewerImg />
      </div>

      <SharedOrnament class="bg-red-500" />
    </section>

    <SharedFootSection class="bg-red-500" />
  </main>
</template>
