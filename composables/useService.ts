export const useService = () => {

  let currentService = ref(0)

  const setCurrentService = (index: number) => {
    currentService.value = index
  }

  return { currentService, setCurrentService }
}
