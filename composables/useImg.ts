export const useImg = () => {
  let currentImg = useState('currentImg', () => ({
    url: '',
    alt: ''
  }))

  const setCurrentImg = (url: string, alt: string) => {
    currentImg.value.url = url
    currentImg.value.alt = alt
  }

  return { currentImg, setCurrentImg }
}
