import { Link } from 'react-router-dom'

export default function Breadcrumbs({ product }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/menu">Menu</Link><span>/</span><span aria-current="page">{product.name}</span></nav>
}

