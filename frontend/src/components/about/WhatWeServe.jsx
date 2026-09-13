import { Link } from 'react-router-dom'
import Container from '../common/Container'

const groups = [
  ['Cakes','/cakes','01'], ['Pastries','/menu?category=pastries','02'], ['Desserts','/menu?category=desserts','03'],
  ['Pizza','/menu?category=pizza','04'], ['Burgers & Rolls','/snacks','05'], ['Snacks','/snacks','06'], ['Beverages','/menu?category=beverages','07'],
]

export default function WhatWeServe() {
  return <section className="what-we-serve home-section"><Container><p className="page-intro__eyebrow">What we serve</p><h2>Sweet.<br/><em>Savoury.</em><br/>Everything between.</h2><div className="serve-list">{groups.map(([name,to,number]) => <Link key={name} to={to}><span>{number}</span><strong>{name}</strong><i aria-hidden="true">↗</i></Link>)}</div></Container></section>
}

