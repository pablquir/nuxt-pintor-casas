<script setup lang="ts">
import colorsCoral from "~/pages/prices/colors_coral.json"
import colorsSuvinil from "~/pages/prices/colors_suvinil.json"

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
onMounted(() => {

})
// onMounted(async () => {
//   dataRef.value = await (await fetch("/colors_coral.json")).json()
// })

// setCurrentColor(color) => { currentColor.value = color }

</script>

<template>
  <main class="min-h-screen bg-layout pt-40 py-20">
    <div>{{ dataRef }} </div>

    <div class="flex flex-col gap-8 mx-auto container px-4 max-h-full">
      <div class="relative bg-card rounded-xl flex flex-col md:flex-row max-h-full">
        <PricesFormPrice />
        <PricesViewerImg />
      </div>
    </div>

  </main>
</template>
