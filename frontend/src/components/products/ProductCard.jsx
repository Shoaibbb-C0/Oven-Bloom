import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  return (
    <article className="product-card" data-reveal>
      <Link className="product-card__image" to={product.href} aria-label={`View ${product.name}`}>
        <ProductImage src={product.image} alt={product.alt} />
      </Link>
      <div className="product-card__details">
        <div>
          <p>{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <Link to={product.href} aria-label={`Explore ${product.name}`}>Explore <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  )
}
