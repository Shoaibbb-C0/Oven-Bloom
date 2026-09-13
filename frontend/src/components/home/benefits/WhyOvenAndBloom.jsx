import Container from '../../common/Container'
import SectionHeading from '../../common/SectionHeading'

const reasons = [
  ['Wide selection', 'Sweet and savoury favourites in one place.'],
  ['Celebration ready', 'Cakes and treats for memorable occasions.'],
  ['Everyday cravings', 'Quick bites, snacks and bakery favourites.'],
  ['Something for everyone', 'From desserts to satisfying savouries.'],
]

export default function WhyOvenAndBloom() {
  return (
    <section className="home-section reasons-section">
      <Container>
        <SectionHeading eyebrow="Why Oven & Bloom" title={<>One counter.<br /><em>Plenty to love.</em></>} />
        <div className="reasons-grid">{reasons.map(([title, copy], index) => <article key={title} data-reveal><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </Container>
    </section>
  )
}
