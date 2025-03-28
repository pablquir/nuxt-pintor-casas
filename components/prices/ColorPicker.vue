<script setup lang="ts">
let colorPickerRef = ref()
let sizePicker = { w: 0, h: 0, cx: 0, cy: 0 }
let sizeSlider = { w: 0, h: 0, cx: 0, cy: 0 }

let { currenColor, setCurrentColor } = useColor()

let setSize = (canvas, elemWrap, size) => {
  size.w = canvas.width = elemWrap.clientWidth
  size.h = canvas.height = elemWrap.clientHeight
  size.cx = size.w / 2
  size.cy = size.h / 2
}

onMounted(() => {
  let wrapCnvColorPicker = colorPickerRef.value.querySelector('.cnv-wrap-color-picker')
  let cnvColorPicker = colorPickerRef.value.querySelector('#cnvColorPicker')

  let wrapCnvColorSlider = colorPickerRef.value.querySelector('.cnv-wrap-color-slider')
  let cnvColorSlider = colorPickerRef.value.querySelector('#cnvColorSlider')

  let ctxPicker = cnvColorPicker.getContext("2d", { willReadFrequently: true })
  let ctxSlider = cnvColorSlider.getContext("2d", { willReadFrequently: true })

  // size screen
  setSize(cnvColorPicker, wrapCnvColorPicker, sizePicker)
  setSize(cnvColorSlider, wrapCnvColorSlider, sizeSlider)

  window.addEventListener('resize', () => {
    setSize(cnvColorPicker, wrapCnvColorPicker, sizePicker)
    setSize(cnvColorSlider, wrapCnvColorSlider, sizeSlider)
    drawGradientPicker()
    drawGradientSlider()
  })

  // window.addEventListener("resize", setSize(cnvColorSlider, wrapCnvColorSlider, sizeSlider))

  // circle
  let circlePos = { x: cnvColorPicker.width / 2, y: cnvColorPicker.height / 2 }

  function drawGradientPicker() {
    // gradiente horizontal
    let gradientH = ctxPicker.createLinearGradient(0, 0, sizePicker.w, 0)
    gradientH.addColorStop(0, "#fff")
    gradientH.addColorStop(1, toneColor)
    ctxPicker.fillStyle = gradientH
    ctxPicker.fillRect(0, 0, sizePicker.w, sizePicker.h)

    // gradiente vertical
    let gradientV = ctxPicker.createLinearGradient(0, 0, 0, sizePicker.h)
    gradientV.addColorStop(0, "rgba(0,0,0,0)")
    gradientV.addColorStop(1, "#000")
    ctxPicker.fillStyle = gradientV
    ctxPicker.fillRect(0, 0, sizePicker.w, sizePicker.h)
  }

  function getColorPicker() {
    let imageData = ctxPicker.getImageData(circlePos.x, circlePos.y, 1, 1)
    let colorPickerSelected = { r: imageData.data[0], g: imageData.data[1], b: imageData.data[2] }

    //currenColor estado global
    setCurrentColor('color', colorPickerSelected)
  }

  function drawCircle() {
    ctxPicker.beginPath()
    ctxPicker.arc(circlePos.x, circlePos.y, 4, 0, 2 * Math.PI)
    ctxPicker.strokeStyle = "white"
    ctxPicker.lineWidth = 1
    ctxPicker.stroke()
    ctxPicker.closePath()
  }

  function updateCircle(e) {
    const rect = cnvColorPicker.getBoundingClientRect()
    circlePos.x = e.clientX - rect.left
    circlePos.y = e.clientY - rect.top

    circlePos.x = Math.max(0, Math.min(circlePos.x, cnvColorPicker.width))
    circlePos.y = Math.max(0, Math.min(circlePos.y, cnvColorPicker.height))

    ctxPicker.clearRect(0, 0, cnvColorPicker.width, cnvColorPicker.height)

    drawGradientPicker()
    drawCircle()
    getColorPicker()
  }



  // cnv color slider
  function drawGradientSlider() {
    let gradientColor = ctxSlider.createLinearGradient(0, 0, 0, sizeSlider.h)
    gradientColor.addColorStop(0, "rgb(255,0,0)")
    gradientColor.addColorStop(0.15, "rgb(255,0,255)")
    gradientColor.addColorStop(0.33, "rgb(0,0,255)")
    gradientColor.addColorStop(0.49, "rgb(0,255,255)")
    gradientColor.addColorStop(0.67, "rgb(0,255,0)")
    gradientColor.addColorStop(0.84, "rgb(255,255,0)")
    gradientColor.addColorStop(1, "rgb(255,0,0)")
    ctxSlider.fillStyle = gradientColor
    ctxSlider.fillRect(0, 0, sizeSlider.w, sizeSlider.h)

    drawRectangle()
  }

  let rectangle = { x: 0, y: 0, w: sizeSlider.w, h: 8 }

  function drawRectangle() {
    ctxSlider.strokeStyle = 'white'
    ctxSlider.lineWidth = 2
    ctxSlider.strokeRect(rectangle.x, rectangle.y - (rectangle.h / 2), rectangle.w, rectangle.h)
    ctxSlider.stroke()
  }

  //eventos mouse slider
  let isMouseDownSlider = false

  function onMouseDownSlider(e) {
    isMouseDownSlider = true
    updateRectangle(e)
  }

  function updateRectangle(e) {
    const rect = cnvColorPicker.getBoundingClientRect()
    rectangle.y = e.clientY - rect.top

    // rectangle.x = 0
    rectangle.y = Math.max(0, Math.min(rectangle.y, cnvColorSlider.height))

    ctxSlider.clearRect(0, 0, cnvColorSlider.width, cnvColorSlider.height)
    drawGradientSlider()
    drawRectangle()
    getToneColor()
  }

  let toneColor = "rgba(0, 110, 255, 1)"
  function getToneColor() {
    let imageData = ctxSlider.getImageData(rectangle.x + 2, rectangle.y, 1, 1)
    let colorPickerSelected = `rgba(
          ${imageData.data[0]},
          ${imageData.data[1]},
          ${imageData.data[2]}
    )`

    //currenColor estado global
    toneColor = colorPickerSelected
    ctxPicker.clearRect(0, 0, sizePicker.w, sizePicker.h)
    drawGradientPicker()
  }

  function onMouseUpSlider() { isMouseDownSlider = false }
  //eventos mouse picker
  let isMouseDown = false
  function onMouseDown(e) {
    isMouseDown = true
    updateCircle(e)
  }
  function onMouseUp() { isMouseDown = false }
  function onMouseMove() { }


  cnvColorPicker.addEventListener("mousedown", onMouseDown)
  cnvColorPicker.addEventListener("mouseup", onMouseUp)

  cnvColorSlider.addEventListener("mousedown", onMouseDownSlider)
  cnvColorSlider.addEventListener("mouseup", onMouseUpSlider)

  drawGradientSlider()
  drawGradientPicker()
})
</script>

<template>
  <div ref="colorPickerRef" class="Flex flex-col w-full">
    <!-- <div>Color Picker</div> -->
    <div class="cnv-container flex gap-2">

      <div class="cnv-wrap-color-picker">
        <canvas id="cnvColorPicker" height="350" width="800" class="rounded-md" />
      </div>

      <div class="cnv-wrap-color-slider">
        <canvas id="cnvColorSlider" height="350" class="w-full rounded-md" />
      </div>
    </div>
  </div>
</template>

<style scoped>
canvas {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
}

.cnv-wrap-color-picker {
  @apply relative w-full;
}

.cnv-wrap-color-slider {
  @apply relative w-8;
}
</style>
