import { Link } from 'react-router-dom'

export default function EmptyState({ title = 'No products found.', copy = 'Try another category or search term.', action = true }) {
  return <div className="empty-state"><h2>{title}</h2><p>{copy}</p>{action && <Link to="/menu">View All Products</Link>}</div>
}

