import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Container from '../../common/Container'
import Header from '../../navigation/Header'
import HeroHeading from './HeroHeading'
import HeroProducts from './HeroProducts'
import HeroCopy from './HeroCopy'

export default function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-animate="header"]', { opacity: 0, y: -18, duration: 0.65 })
        .from('[data-animate="line"]', { opacity: 0, y: 44, duration: 0.85, stagger: 0.12 }, '-=0.3')
        .from('[data-animate="product"]', { opacity: 0, y: 24, scale: 0.97, duration: 0.8, stagger: 0.09 }, '-=0.5')
        .from('[data-animate="copy"]', { opacity: 0, y: 20, duration: 0.6, stagger: 0.08 }, '-=0.55')
    }, heroRef)
    return () => context.revert()
  }, [])

  return (
    <main className="hero" ref={heroRef}>
      <Container className="hero__inner">
        <Header />
        <div className="hero__content">
          <section className="hero__message" aria-labelledby="hero-title">
            <div className="hero__eyebrow" data-animate="copy"><span>Bakery • Café • Everyday bites</span></div>
            <HeroHeading />
            <HeroCopy />
          </section>
          <HeroProducts />
        </div>
        <div className="hero__footer" data-animate="copy"><span>Pusad, Maharashtra</span><span>Scroll to discover <i aria-hidden="true">↓</i></span></div>
      </Container>
    </main>
  )
}
