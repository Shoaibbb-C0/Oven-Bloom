import Container from '../common/Container'

const principles = [
  ['Variety','From celebration cakes to everyday bites.'],
  ['Everyday appeal','Food for quick cravings and special moments.'],
  ['Celebration','Cakes and desserts for moments worth remembering.'],
  ['Choice','Sweet and savoury together in one place.'],
]

export default function BrandPrinciples() {
  return <section className="brand-principles home-section"><Container><p className="page-intro__eyebrow">What matters here</p><div className="principles-grid">{principles.map(([title,copy], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p></article>)}</div></Container></section>
}

