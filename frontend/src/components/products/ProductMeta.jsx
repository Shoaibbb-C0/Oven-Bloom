import { categoryLabels } from '../../data/products'

export default function ProductMeta({ product }) {
  return <p className="product-meta">{categoryLabels[product.category] || product.category}{product.subcategory ? ` · ${product.subcategory}` : ''}</p>
}

