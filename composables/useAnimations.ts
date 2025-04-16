export const useAnimations = () => {
  const { $gsap } = useNuxtApp()
  const { $ScrollTrigger } = useNuxtApp()

  const fadeIn = (target: any, options = {}) => {
    const tl = $gsap.timeline({ duration: 0.3 })
    return tl.to(target, { opacity: 1, ...options })
  }

  const zoomSlide = (slides: any, total: number, zoomIn = true) => {
    // Hacemos visible la primera
    let ctx

    return ctx = $gsap.context(() => {
      $gsap.set(slides[0], { opacity: 1, scale: 1 })

      const play = (index: number) => {
        const current = slides[index]
        const nextIndex = (index + 1) % total
        const next = slides[nextIndex]

        // Preparamos el siguiente slide con la escala contraria
        $gsap.set(next, { opacity: 0, scale: zoomIn ? 1.4 : 1 })

        const tl = $gsap.timeline({
          onComplete: () => {
            // Actualizamos el índice y el estado de zoom
            zoomIn = !zoomIn
            play(nextIndex)
          }
        })

        tl.to(current, { scale: zoomIn ? 1.4 : 1, duration: 20, ease: "power1.inOut" })
          .to(current, { opacity: 0, duration: 1 }, "-=1")
          .to(next, { opacity: 1, duration: 1 }, "-=0.5")
      }

      play(0)

    })
  }

  const textSlide = (arryText: any, total: number) => {
    let ctx

    return ctx = $gsap.context(() => {
      $gsap.set(arryText, { opacity: 0, y: -20 })

      const play = (index: number) => {
        const current = arryText[index]
        const nextIndex = (index + 1) % total
        const next = arryText[nextIndex]

        const tl = $gsap.timeline({
          duration: 4,
          onComplete: () => {
            play(nextIndex)
          }
        })

        // tl.fromTo(current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 })

        tl.to(current, { y: -100, opacity: 0, duration: 0.5 })
          .to(next, { y: 0, opacity: 1 }, "-=0.5")
      }

      play(0)
    })
  }

  const scrollFade = (elements: any, gsapAnimation: any) => {
    let ctx

    return ctx = $ScrollTrigger.create({
      animation: gsapAnimation,
      trigger: elements,
      toggleActions: 'play none none none',
      start: 'top bottom',
    })
  }

  return { fadeIn, zoomSlide, textSlide, scrollFade }
}

