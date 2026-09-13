import Container from '../../common/Container'
import SectionHeading from '../../common/SectionHeading'
import { categories } from '../../../data/homeContent'
import CategoryItem from './CategoryItem'

export default function CategoriesSection() {
  return (
    <section className="home-section categories-section" aria-labelledby="categories-title">
      <Container>
        <SectionHeading eyebrow="Explore the counter" title={<span id="categories-title">Something for<br /><em>every craving.</em></span>} copy="From celebrations to quick bites, find exactly what the moment calls for." />
        <div className="categories-grid">{categories.map((category, index) => <CategoryItem key={category.name} category={category} index={index} />)}</div>
      </Container>
    </section>
  )
}
