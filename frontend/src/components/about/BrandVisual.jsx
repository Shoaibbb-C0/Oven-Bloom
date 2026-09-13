import Container from '../common/Container'
import { homeImages } from '../../data/homeContent'

export default function BrandVisual() {
  return <section className="about-visual home-section"><Container className="about-visual__grid"><figure className="about-visual__large"><img src={homeImages.croissants} alt="Golden croissants fresh from the oven" loading="lazy"/></figure><div className="about-visual__words"><span>Sweet.</span><em>Savoury.</em><span>Always tempting.</span></div><figure className="about-visual__small"><img src={homeImages.pizza} alt="Fresh pizza with cheese and basil" loading="lazy"/></figure></Container></section>
}

