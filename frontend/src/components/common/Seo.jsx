import { useEffect } from 'react'

const DEFAULT_DESCRIPTION = 'Explore cakes, pastries, savoury bites, desserts and everyday favourites from Oven & Bloom.'

function setMeta(name, content, property = false) {
  const selector = `meta[${property ? 'property' : 'name'}="${name}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(property ? 'property' : 'name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function Seo({ title, description = DEFAULT_DESCRIPTION, type = 'website', product }) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', type, true)
    const existing = document.getElementById('structured-data')
    existing?.remove()
    const script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(product ? {
      '@context': 'https://schema.org', '@type': 'Product', name: product.name, description: product.description,
    } : {
      '@context': 'https://schema.org', '@type': 'Bakery', name: 'Oven & Bloom', description,
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [title, description, type, product])
  return null
}
