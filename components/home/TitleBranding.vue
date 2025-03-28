<script setup lang="ts">
import generateWhatsappLink from '~/helper/generateWhatsappLink'

const props = defineProps({ dataTitle: Object });

let brandingTitle = ref(null)
let indexSubtitle = ref(0)

let whatsappLink = ref('')

let colorMode = useColorMode()

// color dark and light
let colorSlate100 = "#f1f5f9"
let colorSlate900 = "#0f172a"
const currentColor = computed(() => (colorMode.value === 'dark' ? colorSlate100 : colorSlate900))

let { $gsap } = useNuxtApp()

watch(colorMode, () => {
  $gsap.to('.letter-text', {
    color: currentColor.value,
    stagger: 0.1
  })
});

let nextSubtitle = () => { indexSubtitle.value = (indexSubtitle.value + 1) % props.dataTitle.subTitles.length }

function initTitle() {
  const animateTitle = $gsap.timeline()
  animateTitle.set('.branding-title', { x: '-100%', opacity: 0, color: currentColor.value })
    .to('.branding-title', {
      x: 0,
      opacity: 1,
      color: currentColor.value,
      // stagger: { each: 0.1, from: 'start' },
    })
  animateTitle.to('.letter-text', {
    color: '#ef4444',
    stagger: {
      each: 0.1,
      from: 'start'
    },
  })
    .to('.letter-text', {
      color: currentColor.value,
      stagger: {
        each: 0.1,
        from: 'start'
      },
      delay: -1.5
    })
}

function initSubtitle() {
  let animateSubTitle = $gsap.timeline()
  animateSubTitle.set(".branding-subtitle", {
    opacity: 0,
    y: "-100%",
  })
    .to(".branding-subtitle", {
      y: 0,
      opacity: 1,
      duration: 1,
      onComplete: () => slideSubtitle()
    })
}

function slideSubtitle() {
  let animateSlideSubtitle = $gsap.timeline({ repeat: -1, onRepeat: () => nextSubtitle(), duration: 5 })
  animateSlideSubtitle.to(".branding-subtitle", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"

  })
}

function initBtnActions() {
  let animateBtnActions = $gsap.timeline()
  animateBtnActions.set(".btn-slide-fade", { opacity: 0, y: "100%" })
    .to(".btn-slide-fade", {
      opacity: 1,
      y: 0,
      ease: "none",
      stagger: 0.1
    })
}

onMounted(() => {
  whatsappLink.value = generateWhatsappLink('59169157016 ', 'Hola, necesito un servicio')
  initTitle()
  initSubtitle()
  initBtnActions()
})
</script>

<template>
  <div class="branding-container">

    <div class="branding-subtitle">{{ props.dataTitle.subTitles[indexSubtitle] }}</div>

    <div class="relative branding-title" ref="brandigTitle">
      <span v-for="(letter, iLetter) in props.dataTitle.title" :key="iLetter" :class="['letter-text']">
        {{ letter }}
      </span>
    </div>

    <div class="branding-actions">
      <NuxtLink :to="props.dataTitle.btnActions[0].href" :title="props.dataTitle.btnActions[0].title"
        class="col-span-2 btn btn-slide-fade">
        {{ props.dataTitle.btnActions[0].text }}
      </NuxtLink>

      <NuxtLink :to="whatsappLink" target="_blank" rel="noopener noreferrer"
        :title="props.dataTitle.btnActions[1].title" class="btn btn-slide-fade">
        <Icon :name="'icon:' + props.dataTitle.btnActions[1].icon" class="fill-default mr-2" />
        {{ props.dataTitle.btnActions[1].text }}
      </NuxtLink>

      <NuxtLink :to="props.dataTitle.btnActions[2].href" :title="props.dataTitle.btnActions[2].title"
        class="btn btn-slide-fade">
        <Icon :name="'icon:' + props.dataTitle.btnActions[2].icon" class="fill-default mr-2" />
        {{ props.dataTitle.btnActions[2].text }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.branding-container {
  @apply flex flex-col gap-4;
}

.letter-text {
  @apply text-4xl md:text-7xl;
  @apply text-color-default;
  @apply font-bold;
  @apply transition-all;
}

.branding-title {
  @apply opacity-0 shadow-slate-100 dark:shadow-slate-900;
  text-shadow: var(--tw-shadow-color) 4px 4px 10px;
}

.branding-subtitle {
  @apply text-xl md:text-3xl text-color-default font-bold;
  @apply opacity-0 shadow-slate-100 dark:shadow-slate-900;
  text-shadow: var(--tw-shadow-color) 4px 4px 10px;
}

.branding-actions {
  @apply grid grid-cols-2 grid-rows-2 gap-4;
}

.btn {
  @apply cursor-pointer;
  @apply backdrop-blur-md;
  @apply px-4 py-2;
  @apply outline outline-1 outline-slate-900 dark:outline-slate-200;
  @apply hover:bg-slate-100/90 dark:hover:bg-slate-800/90;
  @apply hover:font-bold md:text-xl;
  @apply flex justify-center items-center;
  @apply opacity-0;
}

.btn:nth-child(1) {
  @apply bg-red-500 text-slate-100 hover:bg-red-400;
}
</style>
