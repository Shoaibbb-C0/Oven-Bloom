import { menuCategories } from '../../../data/menuCategories'

export default function HeroCategories() {
  return (
    <div className="hero-categories" data-animate="copy" aria-label="Menu categories">
      {menuCategories.map((category, index) => <span key={category}>{index > 0 && <i aria-hidden="true">/</i>}{category}</span>)}
    </div>
  )
}
