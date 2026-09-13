import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/navigation/Header'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'
import Breadcrumbs from '../components/common/Breadcrumbs'
import EmptyState from '../components/common/EmptyState'
import ProductGallery from '../components/products/ProductGallery'
import ProductInfo from '../components/products/ProductInfo'
import RelatedProducts from '../components/products/RelatedProducts'
import { getProduct, getProducts } from '../services/productService'
import { ErrorState, LoadingState } from '../components/common/RequestState'
import Seo from '../components/common/Seo'

export default function ProductDetailsPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const load = useCallback(async () => { setStatus('loading'); try { const item = await getProduct(slug); setProduct(item); setRelated((await getProducts({ category: item.category })).filter(({ id }) => id !== item.id).slice(0, 3)); setStatus('success') } catch (err) { setError(err.message); setStatus(err.status === 404 ? 'not-found' : 'error') } }, [slug])
  useEffect(() => { load() }, [load])
  return <div className="catalogue-page">{status === 'success' && <Seo title={`${product.name} — Oven & Bloom`} description={product.shortDescription} type="product" product={product}/>}<Container><Header />{status === 'loading' && <main className="product-not-found"><LoadingState label="Loading product…" /></main>}{status === 'error' && <main className="product-not-found"><ErrorState message="We couldn’t load this product right now." onRetry={load} /></main>}{status === 'not-found' && <main className="product-not-found"><EmptyState title="Not on the menu." copy="We couldn’t find that product. Explore the menu for something else worth craving."/></main>}{status === 'success' && <><Breadcrumbs product={product}/><main className="product-detail"><ProductGallery product={product}/><ProductInfo product={product}/></main><RelatedProducts products={related}/></>}</Container><Footer /></div>
}
