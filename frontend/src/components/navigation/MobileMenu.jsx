import { useState } from 'react'
import NavLinks from './NavLinks'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="mobile-menu">
      <button type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      {open && <nav id="mobile-nav" aria-label="Mobile navigation"><NavLinks onNavigate={() => setOpen(false)} /></nav>}
    </div>
  )
}
