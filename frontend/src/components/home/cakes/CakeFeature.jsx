import { Link } from 'react-router-dom'
import Container from '../../common/Container'
import { homeImages } from '../../../data/homeContent'

export default function CakeFeature() {
  return (
    <section className="home-section feature feature--cake">
      <Container className="feature__grid">
        <div className="feature__copy" data-reveal><p className="section-heading__eyebrow">Celebration cakes</p><h2>Made for<br /><em>your moments.</em></h2><p>Big days, small wins and everything worth making special.</p><Link to="/cakes">Explore cakes <span aria-hidden="true">→</span></Link></div>
        <div className="feature__image image-reveal" data-reveal><img src={homeImages.celebrationCake} alt="A celebration cake covered in colourful sprinkles" loading="lazy" /></div>
      </Container>
    </section>
  )
}
