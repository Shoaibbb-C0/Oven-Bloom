export default function ProductSearch({ value, onChange }) {
  return <label className="product-search"><span className="sr-only">Search products</span><span aria-hidden="true">⌕</span><input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search cakes, pizza, desserts..." /></label>
}

