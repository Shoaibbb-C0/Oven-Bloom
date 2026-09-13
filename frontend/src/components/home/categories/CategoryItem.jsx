import { Link } from 'react-router-dom'

export default function CategoryItem({ category, index }) {
  return (
    <Link className={`category-item ${category.className}`} to={category.href} data-reveal>
      <img src={category.image} alt={category.alt} loading="lazy" />
      <span className="category-item__number">0{index + 1}</span>
      <span className="category-item__name">{category.name}</span>
      <span className="category-item__arrow" aria-hidden="true">↗</span>
    </Link>
  )
}
