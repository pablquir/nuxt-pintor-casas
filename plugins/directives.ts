export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding) {
      const handleClickOutside = (event: any) => {
        if (!el.contains(event.target)) {
          binding.value(event)
        }
      }

      document.addEventListener('click', handleClickOutside)
      el._handleClickOutside = handleClickOutside

    },
    beforeMount(el) {
      document.removeEventListener('click', el._handleClickOutside)
      delete el._handleClickOutside
    }
  })
})
