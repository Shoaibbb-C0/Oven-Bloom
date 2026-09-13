import Header from '../components/navigation/Header'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'
import PageIntro from '../components/common/PageIntro'
import ProductGrid from '../components/products/ProductGrid'
import CategoryTabs from '../components/products/CategoryTabs'
import { products } from '../data/products'
import { useState } from 'react'

const snackCategories = ['all','pizza','burgers','rolls','snacks']
export default function SnacksPage() {
  const [category, setCategory] = useState('all')
  const savouries = products.filter((product) => snackCategories.slice(1).includes(product.category))
  const filtered = category === 'all' ? savouries : savouries.filter((product) => product.category === category)
  return <div className="catalogue-page"><Container><Header /></Container><PageIntro eyebrow="The savoury side" title={<>Not just<br/><em>something sweet.</em></>} copy="Pizza, burgers, rolls and satisfying everyday bites for when the craving isn't dessert."/><Container><CategoryTabs categories={snackCategories} active={category} onChange={setCategory}/><div className="collection-section"><ProductGrid products={filtered}/></div></Container><Footer /></div>
}
