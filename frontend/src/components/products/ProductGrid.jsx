import ProductCard from './ProductCard'
import EmptyState from '../common/EmptyState'

export default function ProductGrid({ products: items }) {
  if (!items.length) return <EmptyState />
  return <div className="catalogue-grid">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div>
}

