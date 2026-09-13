import ProductImage from './ProductImage'

export default function ProductGallery({ product }) {
  return <figure className="product-gallery"><ProductImage src={product.image} alt={product.name} /></figure>
}

