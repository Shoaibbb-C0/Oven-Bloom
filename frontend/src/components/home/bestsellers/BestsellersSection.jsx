import Container from '../../common/Container'
import SectionHeading from '../../common/SectionHeading'
import ProductCard from '../../products/ProductCard'
import { bestsellers } from '../../../data/homeContent'

export default function BestsellersSection() {
  return (
    <section className="home-section bestsellers-section" aria-labelledby="bestsellers-title">
      <Container>
        <SectionHeading eyebrow="Bestsellers" title={<span id="bestsellers-title">The favourites<br /><em>go fast.</em></span>} />
        <div className="products-grid">{bestsellers.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </Container>
    </section>
  )
}
