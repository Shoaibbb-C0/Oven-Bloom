import ProductGrid from './ProductGrid'
import { products } from '../../data/products'

export default function RelatedProducts({ product }) {
  const related = products.filter((item) => item.id !== product.id).sort((a) => a.category === product.category ? -1 : 1).slice(0, 3)
  return <section className="related-products"><p className="page-intro__eyebrow">Keep exploring</p><h2>You may also like.</h2><ProductGrid products={related} /></section>
}
