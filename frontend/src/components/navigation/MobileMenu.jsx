import { useEffect, useState } from 'react'
import NavLinks from './NavLinks'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const close = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', close) }
  }, [open])
  return (
    <div className="mobile-menu">
      <button type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      {open && <nav id="mobile-nav" aria-label="Mobile navigation"><NavLinks onNavigate={() => setOpen(false)} /><a className="navbar__order" href="/contact" onClick={() => setOpen(false)}>Order <span aria-hidden="true">↗</span></a></nav>}
    </div>
  )
}
