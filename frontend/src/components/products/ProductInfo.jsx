import { Link } from 'react-router-dom'
import ProductMeta from './ProductMeta'
import { categoryLabels } from '../../data/products'

export default function ProductInfo({ product }) {
  return <section className="product-info"><ProductMeta product={product} /><h1>{product.name}</h1><p className="product-info__lead">{product.shortDescription}</p><p>{product.description}</p><dl><div><dt>Category</dt><dd>{categoryLabels[product.category]}</dd></div><div><dt>Type</dt><dd>{product.subcategory}</dd></div><div><dt>Availability</dt><dd>{product.available ? 'Available' : 'Currently unavailable'}</dd></div></dl><p className="product-info__price">Price on request</p><Link className="button button--primary" to="/contact">Order / Enquire <span aria-hidden="true">→</span></Link></section>
}

