import Header from '../components/navigation/Header'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'
import PageIntro from '../components/common/PageIntro'
import ProductGrid from '../components/products/ProductGrid'
import { products, productPath } from '../data/products'
import { Link } from 'react-router-dom'

export default function CakesPage() {
  const cakes = products.filter((product) => ['cakes','pastries'].includes(product.category))
  const featured = cakes.find((product) => product.featured) || cakes[0]
  return <div className="catalogue-page"><Container><Header /></Container><PageIntro eyebrow="Celebration, sorted" title={<>Made for<br/><em>your moments.</em></>} copy="Celebration cakes, rich chocolate favourites and pastries made for the moments worth remembering."/><Container><section className="editorial-feature"><img src={featured.image} alt={featured.name}/><div><p className="page-intro__eyebrow">Featured cake</p><h2>{featured.name}</h2><p>{featured.shortDescription}</p><Link to={productPath(featured)}>Explore Cake →</Link></div></section><section className="collection-section"><p className="page-intro__eyebrow">The cake counter</p><h2>Cakes & pastries.</h2><ProductGrid products={cakes} /></section></Container><section className="catalogue-cta"><Container><h2>Something<br/><em>to celebrate?</em></h2><Link to="/contact">Contact Us →</Link></Container></section><Footer /></div>
}
