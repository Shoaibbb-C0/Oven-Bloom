import { useLayoutEffect } from 'react'
import gsap from 'gsap'

export default function useScrollReveal(scopeRef) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const elements = scopeRef.current?.querySelectorAll('[data-reveal]') ?? []
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        gsap.to(entry.target, { opacity: 1, y: 0, duration: .8, ease: 'power3.out' })
        observer.unobserve(entry.target)
      })
    }, { threshold: .12 })

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 26 })
      observer.observe(element)
    })
    return () => observer.disconnect()
  }, [scopeRef])
}
