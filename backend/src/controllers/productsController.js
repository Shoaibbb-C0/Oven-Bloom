import { categories, products } from '../data/products.js'

const truthy = (value) => value === 'true'

export function listProducts(req, res) {
  const { category, search, featured, bestseller, available } = req.query
  const query = search?.trim().toLowerCase()
  const result = products.filter((product) => {
    const text = `${product.name} ${product.category} ${product.subcategory} ${product.shortDescription}`.toLowerCase()
    return (!category || category === 'all' || product.category === category)
      && (!query || text.includes(query))
      && (!truthy(featured) || product.featured)
      && (!truthy(bestseller) || product.bestseller)
      && (!truthy(available) || product.available)
  })
  res.json({ success: true, data: result, meta: { count: result.length } })
}

export function getProduct(req, res) {
  const product = products.find((item) => item.slug === req.params.slug)
  if (!product) return res.status(404).json({ success: false, error: { code: 'PRODUCT_NOT_FOUND', message: 'Product not found.' } })
  res.json({ success: true, data: product })
}

export function listCategories(req, res) {
  res.json({ success: true, data: categories })
}
