import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'
import ProductMeta from './ProductMeta'
import { productPath } from '../../data/products'

export default function ProductCard({ product }) {
  return (
    <article className="product-card" data-reveal>
      <Link className="product-card__image" to={product.href || productPath(product)} aria-label={`View ${product.name}`}>
        <ProductImage src={product.image} alt={product.alt || product.name} />
      </Link>
      <div className="product-card__details">
        <div>
          <ProductMeta product={product} />
          <h3>{product.name}</h3>
          {product.shortDescription && <p className="product-card__copy">{product.shortDescription}</p>}
        </div>
        <Link to={product.href || productPath(product)} aria-label={`View ${product.name}`}>View <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  )
}
