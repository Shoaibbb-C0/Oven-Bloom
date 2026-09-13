import croissants from '../../../assets/products/online/croissants.webp'
import burger from '../../../assets/products/online/burger.jpg'

export default function HeroProducts() {
  return (
    <div className="hero-products" data-animate="product">
      <figure className="hero-products__main">
        <img src={croissants} alt="A bakery counter filled with freshly baked golden croissants" fetchPriority="high" />
        <figcaption><span>Fresh from the oven</span><strong>Bakery favourites, all day.</strong></figcaption>
      </figure>
      <figure className="hero-products__secondary">
        <img src={burger} alt="A freshly prepared burger with lettuce, tomato and cheese" />
        <figcaption>Savoury too.</figcaption>
      </figure>
    </div>
  )
}
