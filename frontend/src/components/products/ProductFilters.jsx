export default function ProductFilters({ featured, bestseller, available, onChange }) {
  return <div className="product-filters" aria-label="Product filters">
    <button type="button" className={featured ? 'active' : ''} onClick={() => onChange('featured')}>Featured</button>
    <button type="button" className={bestseller ? 'active' : ''} onClick={() => onChange('bestseller')}>Bestsellers</button>
    <button type="button" className={available ? 'active' : ''} onClick={() => onChange('available')}>Available</button>
  </div>
}

