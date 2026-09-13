import { Link } from 'react-router-dom'
import Container from '../common/Container'

export default function AboutCTA() {
  return <section className="about-cta"><Container><p className="page-intro__eyebrow">Ready for another look?</p><h2>Find your<br/><em>next favourite.</em></h2><div><Link className="button button--light" to="/menu">Explore Menu →</Link><Link to="/contact">Contact Us ↗</Link></div></Container></section>
}

