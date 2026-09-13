import pastry from '../../../assets/products/chocolate-pastry.webp'
import pizza from '../../../assets/products/veg-pizza.webp'
import sandwich from '../../../assets/products/chocolate-sandwich.webp'
import falooda from '../../../assets/products/rose-falooda.webp'
import cake from '../../../assets/products/celebration-cake.webp'
import HeroProductImage from './HeroProductImage'

const products = [
  { id: 'pastry', src: pastry, alt: 'Chocolate and berry pastries served at Magic Mamta', label: 'bakery favourites', priority: true },
  { id: 'pizza', src: pizza, alt: 'Freshly baked vegetable cheese pizza from Magic Mamta', label: 'hot & cheesy' },
  { id: 'sandwich', src: sandwich, alt: 'Chocolate toasted sandwich from Magic Mamta' },
  { id: 'falooda', src: falooda, alt: 'Rose falooda drink from Magic Mamta', label: 'sip happy' },
  { id: 'cake', src: cake, alt: 'Celebration cake from Magic Mamta' },
]

export default function HeroProducts() {
  return <div className="hero-products" aria-label="A selection of Magic Mamta favourites">{products.map((product) => <HeroProductImage key={product.id} product={product} />)}</div>
}
