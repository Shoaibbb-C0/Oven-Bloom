import { useId, useState } from 'react'

export default function SearchTrigger() {
  const [expanded, setExpanded] = useState(false)
  const inputId = useId()

  return (
    <div className={`search ${expanded ? 'search--expanded' : ''}`}>
      <label className="sr-only" htmlFor={inputId}>Search the Magic Mamta menu</label>
      <span aria-hidden="true">⌕</span>
      <input
        id={inputId}
        type="search"
        placeholder={expanded ? 'Search cakes, pizza, shakes...' : 'Search'}
        onFocus={() => setExpanded(true)}
        onBlur={(event) => !event.currentTarget.value && setExpanded(false)}
        onClick={() => setExpanded(true)}
      />
    </div>
  )
}
