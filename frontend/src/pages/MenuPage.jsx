import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/navigation/Header'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'
import PageIntro from '../components/common/PageIntro'
import ProductGrid from '../components/products/ProductGrid'
import ProductSearch from '../components/products/ProductSearch'
import ProductFilters from '../components/products/ProductFilters'
import CategoryTabs from '../components/products/CategoryTabs'
import { products, menuCategories } from '../data/products'

export default function MenuPage() {
  const [params, setParams] = useSearchParams()
  const category = menuCategories.includes(params.get('category')) ? params.get('category') : 'all'
  const search = params.get('search') || ''
  const flags = { featured: params.get('featured') === 'true', bestseller: params.get('bestseller') === 'true', available: params.get('available') === 'true' }
  const update = (key, value) => { const next = new URLSearchParams(params); value ? next.set(key, value) : next.delete(key); setParams(next, { replace: true }) }
  const filtered = useMemo(() => products.filter((product) => {
    const haystack = `${product.name} ${product.category} ${product.subcategory}`.toLowerCase()
    return (category === 'all' || product.category === category) && (!search || haystack.includes(search.toLowerCase())) && (!flags.featured || product.featured) && (!flags.bestseller || product.bestseller) && (!flags.available || product.available)
  }), [category, search, flags.featured, flags.bestseller, flags.available])
  return <div className="catalogue-page"><Container><Header /></Container><PageIntro eyebrow="The complete counter" title={<>Find your<br/><em>favourite.</em></>} copy="From celebration cakes to quick bites, explore everything Magic Mamta has to offer."/><Container><div className="catalogue-tools"><ProductSearch value={search} onChange={(value) => update('search', value)} /><ProductFilters {...flags} onChange={(key) => update(key, flags[key] ? '' : 'true')} /></div><CategoryTabs active={category} onChange={(value) => update('category', value === 'all' ? '' : value)} /><p className="catalogue-count">{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p><ProductGrid products={filtered} /></Container><Footer /></div>
}
