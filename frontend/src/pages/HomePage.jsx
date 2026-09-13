import { useRef } from 'react'
import Hero from '../components/home/hero/Hero'
import CategoriesSection from '../components/home/categories/CategoriesSection'
import BestsellersSection from '../components/home/bestsellers/BestsellersSection'
import BrandStatement from '../components/home/brand/BrandStatement'
import CakeFeature from '../components/home/cakes/CakeFeature'
import SavouryFeature from '../components/home/savoury/SavouryFeature'
import WhyMagicMamta from '../components/home/benefits/WhyMagicMamta'
import FoodGallery from '../components/home/gallery/FoodGallery'
import VisitCTA from '../components/home/visit/VisitCTA'
import Footer from '../components/common/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

export default function HomePage() {
  const contentRef = useRef(null)
  useScrollReveal(contentRef)

  return (
    <>
      <Hero />
      <div className="home-content" ref={contentRef}>
        <CategoriesSection />
        <BestsellersSection />
        <BrandStatement />
        <CakeFeature />
        <SavouryFeature />
        <WhyMagicMamta />
        <FoodGallery />
        <VisitCTA />
        <Footer />
      </div>
    </>
  )
}
