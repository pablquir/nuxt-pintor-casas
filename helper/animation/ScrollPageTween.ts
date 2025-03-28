import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const goToSection = (i: number, ctx: any, scrollTween: any) => {
  ctx.data.forEach((e: any) => {
    if (e.vars && e.vars.id === 'scrollTween') { e.kill() }
  })

  ctx.add(() => {
    scrollTween = gsap.to(window, {
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 1,
      id: 'scrollTween',
      onComplete: () => { scrollTween = null },
      overwrite: true
    })
  })
}

export const initScrollTriggers = (mainRef: any, scrollTween: any) => {
  let ctx = null
  if (mainRef) {
    ctx = gsap.context((self: any) => {
      const panels = self.selector('.panel')
      panels.forEach((panel: any, i: number) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top bottom',
          end: '+=200%',
          onToggle: (self) => self.isActive && !scrollTween && goToSection(i, ctx!, scrollTween)
        })
        ScrollTrigger.create({
          start: 0,
          end: 'max',
          snap: 1 / (panels.length - 1)
        })
      })
    }, mainRef)
  }

  return ctx
}


