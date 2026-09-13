import Container from '../../common/Container'
import SectionHeading from '../../common/SectionHeading'
import { homeImages } from '../../../data/homeContent'

const gallery = [
  [homeImages.chocolateCake, 'Rich chocolate cake', 'gallery-item--tall'],
  [homeImages.fries, 'Crisp golden fries', 'gallery-item--small'],
  [homeImages.milkshake, 'Cookies and cream milkshake', 'gallery-item--wide'],
  [homeImages.burger, 'Freshly prepared burger', 'gallery-item--small'],
  [homeImages.croissants, 'Fresh golden croissants', 'gallery-item--wide'],
]

export default function FoodGallery() {
  return (
    <section className="home-section gallery-section">
      <Container>
        <SectionHeading eyebrow="A little taste" title={<>Big food.<br /><em>Zero distractions.</em></>} />
        <div className="food-gallery">{gallery.map(([src, alt, className]) => <figure className={className} key={alt} data-reveal><img src={src} alt={alt} loading="lazy" /></figure>)}</div>
      </Container>
    </section>
  )
}
