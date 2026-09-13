import ResponsiveImage from '../../common/ResponsiveImage'

export default function HeroProductImage({ product }) {
  return (
    <figure className={`product product--${product.id}`} data-animate="product">
      <ResponsiveImage src={product.src} alt={product.alt} loading={product.priority ? 'eager' : 'lazy'} fetchPriority={product.priority ? 'high' : 'auto'} />
      {product.label && <figcaption>{product.label}</figcaption>}
    </figure>
  )
}
