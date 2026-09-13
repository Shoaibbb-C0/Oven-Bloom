import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/navigation/Header'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'
import PageIntro from '../components/common/PageIntro'
import ProductGrid from '../components/products/ProductGrid'
import ProductSearch from '../components/products/ProductSearch'
import ProductFilters from '../components/products/ProductFilters'
import CategoryTabs from '../components/products/CategoryTabs'
import { menuCategories } from '../data/products'
import { getProducts } from '../services/productService'
import { ErrorState, LoadingState } from '../components/common/RequestState'

export default function MenuPage() {
  const [params, setParams] = useSearchParams()
  const category = menuCategories.includes(params.get('category')) ? params.get('category') : 'all'
  const search = params.get('search') || ''
  const flags = { featured: params.get('featured') === 'true', bestseller: params.get('bestseller') === 'true', available: params.get('available') === 'true' }
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const update = (key, value) => { const next = new URLSearchParams(params); value ? next.set(key, value) : next.delete(key); setParams(next, { replace: true }) }
  const load = useCallback(async () => {
    setStatus('loading')
    try { setProducts(await getProducts({ category, search, ...flags })); setStatus('success') }
    catch (requestError) { setError(requestError.message); setStatus('error') }
  }, [category, search, flags.featured, flags.bestseller, flags.available])
  useEffect(() => { load() }, [load])

  return <div className="catalogue-page"><Container><Header /></Container><PageIntro eyebrow="The complete counter" title={<>Find your<br/><em>favourite.</em></>} copy="From celebration cakes to quick bites, explore everything Oven & Bloom has to offer."/><Container><div className="catalogue-tools"><ProductSearch value={search} onChange={(value) => update('search', value)} /><ProductFilters {...flags} onChange={(key) => update(key, flags[key] ? '' : 'true')} /></div><CategoryTabs active={category} onChange={(value) => update('category', value === 'all' ? '' : value)} />{status === 'loading' && <LoadingState label="Loading the counter…" />}{status === 'error' && <ErrorState message={error || 'We couldn’t load the menu right now.'} onRetry={load} />}{status === 'success' && <><p className="catalogue-count">{products.length} {products.length === 1 ? 'product' : 'products'}</p>{products.length ? <ProductGrid products={products} /> : <div className="empty-state"><h2>Nothing matched.</h2><p>Try another product or category.</p><button className="button button--secondary" type="button" onClick={() => setParams({}, { replace: true })}>Clear Search</button></div>}</>}</Container><Footer /></div>
}
