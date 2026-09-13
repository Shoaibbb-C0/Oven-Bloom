import { useParams } from 'react-router-dom'
import Header from '../components/navigation/Header'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'
import Breadcrumbs from '../components/common/Breadcrumbs'
import EmptyState from '../components/common/EmptyState'
import ProductGallery from '../components/products/ProductGallery'
import ProductInfo from '../components/products/ProductInfo'
import RelatedProducts from '../components/products/RelatedProducts'
import { findProduct } from '../data/products'

export default function ProductDetailsPage() {
  const { slug } = useParams()
  const product = findProduct(slug)
  return <div className="catalogue-page"><Container><Header />{product ? <><Breadcrumbs product={product}/><main className="product-detail"><ProductGallery product={product}/><ProductInfo product={product}/></main><RelatedProducts product={product}/></> : <main className="product-not-found"><EmptyState title="Product not found." copy="That item may have moved or is no longer in the catalogue."/></main>}</Container><Footer /></div>
}
