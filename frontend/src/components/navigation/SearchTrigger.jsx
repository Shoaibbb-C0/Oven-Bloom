import { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchTrigger() {
  const [expanded, setExpanded] = useState(false)
  const inputId = useId()
  const navigate = useNavigate()

  return (
    <form className={`search ${expanded ? 'search--expanded' : ''}`} onSubmit={(event) => { event.preventDefault(); const value = new FormData(event.currentTarget).get('search').trim(); if (value) navigate(`/menu?search=${encodeURIComponent(value)}`) }}>
      <label className="sr-only" htmlFor={inputId}>Search the Magic Mamta menu</label>
      <span aria-hidden="true">⌕</span>
      <input
        id={inputId}
        type="search"
        name="search"
        placeholder={expanded ? 'Search cakes, pizza, shakes...' : 'Search'}
        onFocus={() => setExpanded(true)}
        onBlur={(event) => !event.currentTarget.value && setExpanded(false)}
        onClick={() => setExpanded(true)}
      />
    </form>
  )
}
