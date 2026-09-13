import { Link } from 'react-router-dom'
import Container from '../../common/Container'
import { homeImages } from '../../../data/homeContent'

export default function SavouryFeature() {
  return (
    <section className="home-section feature feature--savoury">
      <Container className="feature__grid">
        <div className="feature__image image-reveal" data-reveal><img src={homeImages.pizza} alt="Fresh pizza with bubbling cheese and basil" loading="lazy" /></div>
        <div className="feature__copy" data-reveal><p className="section-heading__eyebrow">Hungry for more?</p><h2>Not just<br /><em>something sweet.</em></h2><p>From hot pizza to loaded burgers and quick snacks, there is plenty on the savoury side.</p><Link to="/snacks">Explore snacks <span aria-hidden="true">→</span></Link></div>
      </Container>
    </section>
  )
}
