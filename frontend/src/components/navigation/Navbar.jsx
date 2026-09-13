import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <NavLinks />
      <Link className="navbar__order" to="/contact">Enquire now <span aria-hidden="true">↗</span></Link>
    </nav>
  )
}
