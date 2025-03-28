<script setup lang="ts">
let tabGroupActive = ref(0)
let tabGroup = [
  { name: "Imágenes", icon: "images-regular" },
  { name: "Colores", icon: "palette-solid" },
  { name: "Picker", icon: "palette-solid" }
]

let isShowContent = ref(true)
let setIsShowContent = (index) => {
  isShowContent.value = true
  tabGroupActive.value = index
}


// color background viewer
let { currentColor } = useColor()

// init viewer img
let { currentImg, setCurrentImg } = useImg()
let imgDefault = { url: "img/price/sala1.webp", alt: "sala plantilla" }
setCurrentImg(imgDefault.url, imgDefault.alt)

</script>

<template>
  <div class="relative rounded-lg w-full min-h-full overflow-hidden">
    <!-- imagen -->
    <NuxtImg :src="currentImg.url" class="transition-colors w-full h-full object-cover"
      :style="`background-color: rgb(${currentColor.color.r}, ${currentColor.color.g}, ${currentColor.color.b})`" />

    <!-- tool tabs img and color -->
    <div class="absolute top-0 w-full h-full p-4">

      <div class="relative flex flex-col gap-2 h-full">

        <div class="flex gap-1">
          <button v-for="( tabGroup, iTabGroup ) in tabGroup" :key="iTabGroup"
            :class="[tabGroupActive == iTabGroup ? 'btn-group-active' : '', 'btn-group']"
            @click="setIsShowContent(iTabGroup)">
            <Icon :name="`icon:${tabGroup.icon}`"
              :class="[tabGroupActive == iTabGroup ? '!fill-slate-100' : '', 'fill-default']" />
            {{ tabGroup.name }}
          </button>
        </div>

        <div v-show="isShowContent" class="bg-card p-4 rounded-lg flex flex-col h-full overflow-hidden">
          <div class="flex justify-end">
            <button @click="isShowContent = false" class="btn px-4 py-2 bg-card">
              Cerrar
            </button>
          </div>
          <div class="overflow-y-auto">
            <PricesSliderImg v-if="tabGroupActive == 0" />
            <PricesSliderColor v-else-if="tabGroupActive == 1" />
            <PricesColorPicker v-else-if="tabGroupActive == 2" />
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.btn-group {
  @apply flex justify-center items-center gap-2;
  @apply bg-slate-200 dark:bg-slate-700;
  @apply px-4 py-2;
  @apply text-default rounded-md;
}

.btn-group-active {
  @apply bg-red-500 text-slate-100;
}

.bg-card {
  @apply bg-slate-100/80 dark:bg-slate-800/80
}
</style>
