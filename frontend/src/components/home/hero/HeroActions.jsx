import Button from '../../common/Button'

export default function HeroActions() {
  return (
    <div className="hero-actions" data-animate="copy">
      <Button href="/contact">Enquire now <span aria-hidden="true">↗</span></Button>
      <Button href="/menu" variant="secondary">Explore menu <span aria-hidden="true">→</span></Button>
    </div>
  )
}
