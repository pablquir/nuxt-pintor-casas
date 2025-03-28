export const useColor = () => {

  let currentColor = useState('currentColor', () => ({
    name: 'Blanco',
    type: 'Custom',
    marca: 'Picker',
    color: { r: 255, g: 255, b: 255 }
  }))

  const setCurrentColor = <K extends keyof typeof currentColor.value>(
    key: K,
    value: typeof currentColor.value[K]
  ) => {
    currentColor.value[key] = value
  }

  return { currentColor, setCurrentColor }
}
