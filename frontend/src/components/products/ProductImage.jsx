import ResponsiveImage from '../common/ResponsiveImage'

export default function ProductImage({ src, alt }) {
  return <ResponsiveImage className="product-image" src={src} alt={alt} loading="lazy" />
}
