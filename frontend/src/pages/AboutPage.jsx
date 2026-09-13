import Header from '../components/navigation/Header'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'
import AboutIntro from '../components/about/AboutIntro'
import BrandStory from '../components/about/BrandStory'
import BrandVisual from '../components/about/BrandVisual'
import WhatWeServe from '../components/about/WhatWeServe'
import BrandPrinciples from '../components/about/BrandPrinciples'
import AboutCTA from '../components/about/AboutCTA'

export default function AboutPage() {
  return <div className="story-page"><Container><Header /></Container><main><AboutIntro/><BrandStory/><BrandVisual/><WhatWeServe/><BrandPrinciples/><AboutCTA/></main><Footer/></div>
}
