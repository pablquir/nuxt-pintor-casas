<script setup lang="ts">
let dataForm = reactive({
  price: 1000,
  name: 'Carlos Alejandro',
  width: 2,
  height: 1,
  layer: 1,
  color: {
    cod: { r: 255, g: 255, b: 255 },
    name: 'Verde'
  },
  type: 'Sintetica'
})

let { currentColor, setCurrentColor } = useColor()

</script>

<template>
  <form class="flex flex-col p-8 gap-2 text-default">

    <div class="font-bold !text-5xl p-4 rounded-lg text-center bg-slate-200 dark:bg-slate-700"> Bs {{ dataForm.price }}
    </div>

    <div class="flex flex-col gap-2">
      <label for="nameForm">Nombre</label>
      <input type="text" id="nameForm" v-model="dataForm.name" class="bg-slate-200 dark:bg-slate-700 rounded-lg p-2" />
    </div>

    <div class="flex gap-4">
      <div class="flex flex-col gap-2">
        <label for="widthForm">Ancho</label>
        <input type="number" id="widthForm" v-model="dataForm.width"
          class="bg-slate-200 w-full dark:bg-slate-700 rounded-lg p-2" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="heightForm">Alto</label>
        <input type="number" id="heightForm" v-model="dataForm.height"
          class="bg-slate-200 w-full dark:bg-slate-700 rounded-lg p-2" />
      </div>
    </div>

    <div class="flex gap-4">
      <div class="flex flex-col gap-2">
        <label for="layerForm">Capas</label>
        <input type="number" id="layerForm" v-model="dataForm.layer"
          class="bg-slate-200 w-full dark:bg-slate-700 rounded-lg p-2" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="typeForm">Tipo</label>
        <input type="text" id="typeForm" v-model="dataForm.type"
          class="bg-slate-200 w-full dark:bg-slate-700 rounded-lg p-2" />
      </div>

    </div>


    <div>
      <label>Color : </label>
      <span>{{ currentColor.name }}</span>
    </div>
    <div class="transition-colors h-20 text-slate-900 rounded-lg w-full"
      :style="`background-color: rgb(${currentColor.color.r}, ${currentColor.color.g}, ${currentColor.color.b})`">
    </div>
    <button>Enviar Cotizacion</button>
  </form>
</template>
