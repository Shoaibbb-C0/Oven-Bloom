import { categoryLabels, menuCategories } from '../../data/products'

export default function CategoryTabs({ active, onChange, categories = menuCategories }) {
  return <div className="category-tabs" role="tablist" aria-label="Product categories">{categories.map((category) => <button key={category} type="button" role="tab" aria-selected={active === category} className={active === category ? 'active' : ''} onClick={() => onChange(category)}>{categoryLabels[category] || category}</button>)}</div>
}

