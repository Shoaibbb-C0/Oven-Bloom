import { useState } from 'react'
import ProductMeta from './ProductMeta'
import { categoryLabels } from '../../data/products'
import OrderEnquiry from './OrderEnquiry'

export default function ProductInfo({ product }) {
  const [showEnquiry, setShowEnquiry] = useState(false)
  return <section className="product-info"><ProductMeta product={product} /><h1>{product.name}</h1><p className="product-info__lead">{product.shortDescription}</p><p>{product.description}</p><dl><div><dt>Category</dt><dd>{categoryLabels[product.category]}</dd></div><div><dt>Type</dt><dd>{product.subcategory}</dd></div><div><dt>Availability</dt><dd>{product.available ? 'Available' : 'Currently unavailable'}</dd></div></dl><p className="product-info__price">Price on request</p><button className="button button--primary" type="button" disabled={!product.available} onClick={() => setShowEnquiry(true)}>Order / Enquire <span aria-hidden="true">→</span></button>{showEnquiry && <OrderEnquiry product={product} onClose={() => setShowEnquiry(false)} />}</section>
}
