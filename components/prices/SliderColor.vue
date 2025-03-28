<script setup lang="ts">
import colorsCoral from "~/pages/prices/colors_coral.json"
import colorsSuvinil from "~/pages/prices/colors_suvinil.json"

let brandColor = [
  { name: "Suvinil", data: colorsSuvinil, },
  { name: "Coral", data: colorsCoral },
  { name: "Picker", data: "picker" }
]

let { currentColor, setCurrentColor } = useColor()
let setCurrentColorNameColor = (name: string, color: object) => {
  setCurrentColor('name', name)
  setCurrentColor('color', color)
}

let currentGroupColor = ref(0)

let setCurrentGroupColor = (index: number) => { currentGroupColor.value = index }

let currentBrandColor = ref(0)
let setCurrentBrandColor = (index: number) => { currentBrandColor.value = index }
</script>

<template>
  <div class="flex flex-col gap-4 w-full min-h-full bg-card rounded-lg p-8">

    <div class="relative flex flex-col">
      <!-- buttons brands -->
      <div class="flex justify-center items-center gap-2">
        <button v-for="(brand, iBrand) in brandColor" :key="iBrand"
          :class="[currentBrandColor == iBrand ? 'btn-brand-active' : '', 'btn-brand']"
          @click="setCurrentBrandColor(iBrand)">
          {{ brand.name }}
        </button>
      </div>

      <!-- buttons groupColors -->
      <div class="flex gap-2 flex-wrap py-4">
        <button v-for="(groupColor, iGroupColor) in brandColor[currentBrandColor].data" :key="iGroupColor"
          class="btn flex flex-wrap h-14 w-14 rounded-md" @click="setCurrentGroupColor(iGroupColor)"
          :style="`background-color: rgb(${groupColor.color.rgb.r},${groupColor.color.rgb.g},${groupColor.color.rgb.b})`">
          <!-- {{ groupColor.name }} -->
        </button>
      </div>

      <!-- buttons colors -->
      <div class="flex flex-col gap-2">

        <div class="flex flex-col">
          <div>Colores</div>

          <div class="flex flex-wrap gap-1" v-for="(groupColor, iGroupColor) in brandColor[currentBrandColor].data"
            :key="iGroupColor" v-show="currentGroupColor == iGroupColor">


            <button v-for="(color, iColor) in groupColor.colors" :key="iColor"
              @click="setCurrentColorNameColor(color.name, color.rgb)" class="btn w-10 h-10 rounded-md"
              :style="`background-color: rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`">
            </button>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.btn-brand {
  @apply btn px-4 w-full py-2 bg-slate-200 dark:bg-slate-700;
}

.btn-brand-active {
  @apply bg-red-500 text-slate-100 font-bold;
}
</style>
