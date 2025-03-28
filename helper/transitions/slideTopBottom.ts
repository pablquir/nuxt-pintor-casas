import gsap from "gsap";

const slideTopBottom = {
  name: 'slide-top-bottom',
  mode: 'out-in',
  onBeforeEnter: (el: object) => {
    gsap.set(el, {
      opacity: 0,
      filter: 'blur(4px)',
      y: -20,
    })
  },
  onEnter: (el: object, done: () => void) => {
    gsap.to(el, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 0.5,
      onComplete: done
    })
  },
  onLeave: (el: object, done: () => void) => {
    gsap.to(el, {
      opacity: 0,
      filter: 'blur(4px)',
      y: 20,
      duration: 0.5,
      onComplete: done
    })

  }
}

export default slideTopBottom
