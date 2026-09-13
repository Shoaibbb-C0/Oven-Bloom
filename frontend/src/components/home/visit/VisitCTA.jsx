import { Link } from 'react-router-dom'
import Container from '../../common/Container'

export default function VisitCTA() {
  return (
    <section className="visit-section">
      <Container className="visit-section__inner">
        <p className="section-heading__eyebrow" data-reveal>Ready when you are</p>
        <h2 data-reveal>Find your<br /><em>favourite.</em></h2>
        <div className="visit-section__actions" data-reveal><Link className="button button--light" to="/contact">Contact us <span aria-hidden="true">→</span></Link><a className="visit-section__order" href="https://www.swiggy.com/city/pusad" target="_blank" rel="noreferrer">Order now ↗</a></div>
      </Container>
    </section>
  )
}
