import { Link } from 'react-router-dom'
import Container from '../../common/Container'

export default function VisitCTA() {
  return (
    <section className="visit-section">
      <Container className="visit-section__inner">
        <p className="section-heading__eyebrow" data-reveal>One more craving?</p>
        <h2 data-reveal>Still<br /><em>craving more?</em></h2>
        <p className="visit-section__copy" data-reveal>Explore the full menu or get in touch for cakes, celebrations and enquiries.</p>
        <div className="visit-section__actions" data-reveal><Link className="button button--light" to="/menu">Explore Menu <span aria-hidden="true">→</span></Link><Link className="visit-section__order" to="/contact">Contact Us ↗</Link></div>
      </Container>
    </section>
  )
}
