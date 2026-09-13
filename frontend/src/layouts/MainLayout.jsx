import { Outlet, useLocation } from 'react-router-dom'
import Seo from '../components/common/Seo'

const pages = {
  '/': ['Oven & Bloom — Cakes, Bakery & Everyday Bites', 'Explore cakes, pastries, savoury bites, desserts and everyday favourites from Oven & Bloom.'],
  '/menu': ['Menu — Oven & Bloom', 'Browse cakes, pastries, pizza, snacks, desserts and beverages from Oven & Bloom.'],
  '/cakes': ['Cakes — Oven & Bloom', 'Explore celebration cakes and rich bakery favourites from Oven & Bloom.'],
  '/snacks': ['Snacks — Oven & Bloom', 'Explore pizza, burgers, rolls and satisfying savoury bites from Oven & Bloom.'],
  '/about': ['About Oven & Bloom', 'Meet Oven & Bloom, where bakery favourites, celebrations and everyday cravings come together.'],
  '/contact': ['Contact — Oven & Bloom', 'Contact Oven & Bloom about products, cakes, celebrations and order enquiries.'],
}

export default function MainLayout() {
  const metadata = pages[useLocation().pathname]
  return <>{metadata && <Seo title={metadata[0]} description={metadata[1]} />}<Outlet /></>
}
