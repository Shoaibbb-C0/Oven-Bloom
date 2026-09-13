import Container from '../../common/Container'
import { homeImages } from '../../../data/homeContent'

export default function BrandStatement() {
  return (
    <section className="home-section brand-statement">
      <Container className="brand-statement__grid">
        <div className="brand-statement__image image-reveal" data-reveal><img src={homeImages.croissants} alt="A generous display of freshly baked croissants" loading="lazy" /></div>
        <div className="brand-statement__copy" data-reveal>
          <p className="section-heading__eyebrow">One place. Many moods.</p>
          <h2>Something for<br /><em>every mood.</em></h2>
          <p>Bakery favourites, celebration cakes, satisfying snacks, savoury food and indulgent desserts—all brought together for the way you feel today.</p>
        </div>
      </Container>
    </section>
  )
}
