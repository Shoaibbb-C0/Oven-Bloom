import Container from '../common/Container'
import { homeImages } from '../../data/homeContent'

export default function AboutIntro() {
  return <section className="about-intro"><Container className="about-intro__grid"><div><p className="page-intro__eyebrow">The Oven & Bloom story</p><h1>More than<br/><em>a bakery.</em></h1><p>A place for celebration cakes, everyday favourites, savoury bites and something worth coming back for.</p></div><figure><img src={homeImages.celebrationCake} alt="Celebration cake finished with colourful sprinkles"/></figure></Container></section>
}
