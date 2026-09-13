import ProductGrid from './ProductGrid'
export default function RelatedProducts({ products }) {
  if (!products.length) return null
  return <section className="related-products"><p className="page-intro__eyebrow">Keep exploring</p><h2>You may also like.</h2><ProductGrid products={products} /></section>
}
