<template>
  <div ref="wrapper" class="scroll-wrapper" :class="{ 'dark-mode': isDark, 'light-mode': !isDark }">
    <div ref="content" class="scroll-content">
      <slot />
    </div>
    <div ref="scrollbar" class="scroll-bar"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue'

const { $gsap } = useNuxtApp()

const wrapper = ref(null)
const content = ref(null)
const scrollbar = ref(null)

const props = defineProps({
  theme: {
    type: String,
    default: 'light', // 'dark' or 'light'
  },
})

const isDark = computed(() => props.theme === 'dark')

onMounted(() => {
  const updateScrollBar = () => {
    const scrollHeight = content.value.scrollHeight
    const clientHeight = wrapper.value.clientHeight
    const scrollTop = wrapper.value.scrollTop
    const scrollRatio = scrollTop / (scrollHeight - clientHeight)
    const barHeight = (clientHeight / scrollHeight) * clientHeight
    const barPosition = scrollRatio * (clientHeight - barHeight)

    $gsap.to(scrollbar.value, {
      height: barHeight,
      y: barPosition,
      duration: 0.2,
      ease: 'power2.out',
    })
  }

  wrapper.value.addEventListener('scroll', updateScrollBar)
  updateScrollBar()
})
</script>

<style scoped>
.scroll-wrapper {
  height: 100vh;
  overflow-y: scroll;
  position: relative;
}

/* Opcional: que funcione con Tailwind también */
.scroll-content {
  padding: 2rem;
  min-height: 200vh;
}

/* Estilo de la barra */
.scroll-bar {
  position: absolute;
  top: 0;
  right: 4px;
  width: 4px;
  border-radius: 8px;
  opacity: 0.7;
}

/* Dark Mode */
.dark-mode .scroll-bar {
  background-color: #f43f5e;
  /* rose-500 */
}

.light-mode .scroll-bar {
  background-color: #3b82f6;
  /* blue-500 */
}
</style>
