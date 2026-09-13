import { Link } from 'react-router-dom'
import { brand } from '../../data/brand'

export default function Logo() {
  return (
    <Link className="brand-logo" to="/" aria-label={`${brand.name} home`}>
      <span>Oven &</span>
      <span>Bloom</span>
    </Link>
  )
}
