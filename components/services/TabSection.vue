<script setup lang="ts">
const props = defineProps({ dataSection: Object });
const { currentService, setCurrentService } = useService()

</script>

<template>
  <section class="relative bg-layout py-32 flex flex-col gap-4">

    <!-- tab buttons -->
    <div class="relative flex justify-center items-center mx-auto container gap-4 py-8">
      <div class="flex gap-4 overflow-x-auto px-4 py-2">

        <button v-for="(tab, iTab) in dataSection" :key="iTab"
          :class="[iTab == currentService ? 'btn-tab-active' : '', 'btn-tab']" @click="setCurrentService(iTab)">
          <Icon :name="'icon:' + tab.icon"
            :class="[iTab == currentService ? '!fill-slate-100' : '', 'text-4xl fill-default']" />
          {{ tab.name }}
        </button>

      </div>
    </div>

    <!-- tab content -->
    <div class="relative mx-auto container gap-4 text-default flex flex-col">

      <div v-for="(service, iService) in dataSection" :key="iService" class="px-4 rounded-xl flex flex-col gap-4"
        v-show="iService == currentService">

        <div class="flex flex-col md:flex-row gap-4 card col-span-2">
          <!-- imagen -->
          <div class="flex flex-1 overflow-x-scroll snap-x gap-4 h-50 pb-4 rounded-lg">
            <NuxtImg v-for="(imgItem, iImgItem) in service.img" :src="imgItem.urlImg1920" class="rounded-lg" />
          </div>

          <!-- title description -->
          <div class="flex-1 flex flex-col gap-4 card">
            <div class="flex gap-4">
              <Icon :name="'icon:' + service.icon" class="text-4xl fill-default" />
              {{ service.title }}
            </div>
            <div> {{ service.description }} </div>
            <div>
              <button class="bg-red-500 !text-slate-100 px-4 py-2 btn float-right">Pedir Servicio</button>
            </div>
          </div>

        </div>

        <div class="grid grid-rows-flow md:grid-rows-2 md:grid-flow-col gap-4">
          <div v-for="(detail, idetail) in service.details" :key="idetail"
            class="flex-1 card card-service flex flex-col gap-4">

            <div class="flex gap-2 items-center justify-center">
              <icon :name="'icon:' + detail.icon" class="text-4xl fill-default" />
              <div>{{ detail.title }}</div>
            </div>

            <div class="flex flex-col md:flex-row hij gap-4">
              <div class="flex-1 bg-white rounded-lg overflow-hidden min-h-50">
                <NuxtImg :src="detail.img" class="" />
              </div>
              <div class="flex-1 px-4">
                <p v-for="(paragraph, iparagraph) in detail.paragraphs" :key="iparagraph">{{ paragraph }}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="square-mask bg-red-500 h-40 w-full absolute bottom-0 rotate-180"></div>
  </section>
</template>

<style scoped>
.square-mask {
  -webkit-mask-image: url("/img/home/paht33.svg");
  mask-image: url("/img/home/path33.svg");
  mask-repeat: repeat-x, no-repeat;
  mask-size: fill-box;
}

.card-service:nth-child(2) {
  @apply bg-red-500 text-slate-100;
}

.card-service:nth-child(3) {
  @apply md:row-span-2;
}

.card-service:nth-child(3)>.hij {
  @apply flex-col;
}

.btn-tab {
  @apply p-4 bg-slate-100 dark:bg-slate-800 rounded-xl flex justify-center items-center gap-4 text-color-default;
}

.btn-tab-active {
  @apply !bg-red-500 text-slate-100 scale-110 font-bold;
}
</style>
