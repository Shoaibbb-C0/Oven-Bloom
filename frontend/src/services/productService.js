import { apiRequest } from './api'
import { products as catalogueFallback, withProductImage } from '../data/products'

export async function getProducts(filters = {}) {
  const query = new URLSearchParams(Object.entries(filters).filter(([, value]) => value !== '' && value != null && value !== false))
  try {
    const payload = await apiRequest(`/products${query.size ? `?${query}` : ''}`)
    return payload.data.map(withProductImage)
  } catch (error) {
    if (error.status) throw error
    const search = filters.search?.toLowerCase()
    return catalogueFallback.filter((product) => (!filters.category || filters.category === 'all' || product.category === filters.category)
      && (!search || `${product.name} ${product.category} ${product.subcategory}`.toLowerCase().includes(search))
      && (!filters.featured || product.featured) && (!filters.bestseller || product.bestseller) && (!filters.available || product.available))
  }
}

export async function getProduct(slug) {
  try {
    const payload = await apiRequest(`/products/${encodeURIComponent(slug)}`)
    return withProductImage(payload.data)
  } catch (error) {
    if (error.status) throw error
    const fallback = catalogueFallback.find((product) => product.slug === slug)
    if (!fallback) { const missing = new Error('Product not found.'); missing.status = 404; throw missing }
    return fallback
  }
}

export async function getCategories() {
  return (await apiRequest('/categories')).data
}
