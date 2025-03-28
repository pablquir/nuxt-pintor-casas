import gsap from "gsap"

const fadeTransition = {
  name: 'fade-page',
  mode: 'out-in',
  onBeforeEnter: (el: object) => {
    gsap.set(el, { opacity: 0, filter: 'blur(1rem)' })
  },
  onEnter: (el: object, done: () => void) => {
    gsap.to(el, {
      opacity: 1,
      filter: 'blur(0rem)',
      duration: 0.3,
      onComplete: done
    })
  },
  onLeave: (el: object, done: () => void) => {
    gsap.to(el, {
      opacity: 0,
      filter: 'blur(1rem)',
      duration: 0.3,
      onComplete: done
    })
  }
}

export default fadeTransition
