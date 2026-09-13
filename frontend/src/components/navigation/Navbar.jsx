import NavLinks from './NavLinks'

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <NavLinks />
      <a className="navbar__order" href="https://www.swiggy.com/city/pusad" target="_blank" rel="noreferrer">
        Order now <span aria-hidden="true">↗</span>
      </a>
    </nav>
  )
}
