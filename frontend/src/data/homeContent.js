import celebrationCake from '../assets/products/cakes/celebration-cake.webp'
import croissants from '../assets/products/pastries/golden-croissants.webp'
import pizza from '../assets/products/pizza/margherita-pizza.webp'
import burger from '../assets/products/burgers/classic-burger.webp'
import fries from '../assets/products/snacks/truffle-fries.webp'
import chocolateCake from '../assets/products/desserts/chocolate-cake.webp'
import milkshake from '../assets/products/beverages/cookies-milkshake.webp'

export const homeImages = { celebrationCake, croissants, pizza, burger, fries, chocolateCake, milkshake }

export const categories = [
  { name: 'Cakes', image: celebrationCake, href: '/cakes', className: 'category-item--wide', alt: 'Celebration cake covered in colourful sprinkles' },
  { name: 'Pastries & Desserts', image: croissants, href: '/menu?category=pastries', className: 'category-item--tall', alt: 'Golden croissants fresh from the oven' },
  { name: 'Pizza', image: pizza, href: '/menu?category=pizza', className: '', alt: 'Freshly baked pizza with basil and melted cheese' },
  { name: 'Burgers & Rolls', image: burger, href: '/snacks', className: '', alt: 'Loaded burger with lettuce, tomato and cheese' },
  { name: 'Snacks', image: fries, href: '/snacks', className: 'category-item--wide', alt: 'Crisp golden fries served in a basket' },
  { name: 'Beverages', image: milkshake, href: '/menu?category=beverages', className: '', alt: 'Cookies and cream milkshake topped with whipped cream' },
]

export const bestsellers = [
  { name: 'Celebration Cake', category: 'Cakes', image: celebrationCake, href: '/product/celebration-cake', alt: 'Colourful celebration cake' },
  { name: 'Butter Croissant', category: 'Bakery', image: croissants, href: '/product/butter-croissant', alt: 'Fresh butter croissants' },
  { name: 'Cheese Pizza', category: 'Savoury', image: pizza, href: '/product/cheese-pizza', alt: 'Cheese and basil pizza' },
  { name: 'Classic Burger', category: 'Everyday bites', image: burger, href: '/product/classic-burger', alt: 'Classic loaded burger' },
  { name: 'Chocolate Cake', category: 'Desserts', image: chocolateCake, href: '/product/classic-chocolate-cake', alt: 'Rich chocolate cake dessert' },
  { name: 'Cookies & Cream Shake', category: 'Beverages', image: milkshake, href: '/product/cookies-cream-shake', alt: 'Cookies and cream milkshake' },
]
