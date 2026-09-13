import celebrationCake from '../assets/products/cakes/celebration-cake.webp'
import croissants from '../assets/products/pastries/golden-croissants.webp'
import pizza from '../assets/products/pizza/margherita-pizza.webp'
import burger from '../assets/products/burgers/classic-burger.webp'
import fries from '../assets/products/snacks/truffle-fries.webp'
import chocolateCake from '../assets/products/desserts/chocolate-cake.webp'
import milkshake from '../assets/products/beverages/cookies-milkshake.webp'

const makeProduct = (id, slug, name, category, subcategory, shortDescription, image, options = {}) => ({
  id, slug, name, category, subcategory, shortDescription,
  description: options.description || shortDescription,
  image, images: [image], price: null, featured: false, bestseller: false, available: true,
  ...options,
})

export const products = [
  makeProduct('cake-001','celebration-cake','Celebration Cake','cakes','celebration','A joyful centrepiece finished with colourful sprinkles.',celebrationCake,{featured:true,bestseller:true}),
  makeProduct('cake-002','chocolate-truffle-cake','Chocolate Truffle Cake','cakes','chocolate','Rich chocolate layers with a smooth truffle finish.',chocolateCake,{featured:true,bestseller:true}),
  makeProduct('cake-003','classic-chocolate-cake','Classic Chocolate Cake','cakes','chocolate','Deep cocoa flavour in a timeless bakery favourite.',chocolateCake),
  makeProduct('cake-004','party-sprinkle-cake','Party Sprinkle Cake','cakes','celebration','A bright cake made for birthdays and happy occasions.',celebrationCake),
  makeProduct('pastry-001','butter-croissant','Butter Croissant','pastries','croissant','Flaky golden layers with a delicate buttery finish.',croissants,{bestseller:true}),
  makeProduct('pastry-002','chocolate-pastry','Chocolate Pastry','pastries','chocolate','A rich individual chocolate treat for everyday cravings.',chocolateCake),
  makeProduct('pizza-001','cheese-pizza','Cheese Pizza','pizza','vegetarian','Bubbling cheese, tomato and basil on a freshly baked base.',pizza,{featured:true,bestseller:true}),
  makeProduct('pizza-002','classic-margherita','Classic Margherita','pizza','vegetarian','A simple, satisfying combination of tomato, cheese and basil.',pizza),
  makeProduct('burger-001','classic-burger','Classic Burger','burgers','classic','A loaded burger layered with crisp lettuce, tomato and cheese.',burger,{featured:true,bestseller:true}),
  makeProduct('roll-001','bakery-veg-roll','Bakery Veg Roll','rolls','vegetarian','A savoury bakery roll made for quick, satisfying bites.',burger),
  makeProduct('snack-001','loaded-fries','Loaded Fries','snacks','quick bites','Crisp golden fries made for sharing—or keeping to yourself.',fries,{bestseller:true}),
  makeProduct('snack-002','classic-vada-pav','Classic Vada Pav','snacks','vada pav','A familiar, filling favourite for an everyday savoury craving.',fries),
  makeProduct('dessert-001','chocolate-dessert','Chocolate Dessert','desserts','chocolate','Smooth, indulgent chocolate with a refined bakery finish.',chocolateCake),
  makeProduct('beverage-001','cookies-cream-shake','Cookies & Cream Shake','beverages','shakes','A cold, creamy shake topped with cookie crumble.',milkshake,{featured:true,bestseller:true}),
]

export const categoryLabels = {
  all: 'All', cakes: 'Cakes', pastries: 'Pastries', pizza: 'Pizza', burgers: 'Burgers',
  rolls: 'Rolls', snacks: 'Snacks', desserts: 'Desserts', beverages: 'Beverages',
}

export const menuCategories = Object.keys(categoryLabels)
export const productPath = (product) => `/product/${product.slug}`
export const findProduct = (slug) => products.find((product) => product.slug === slug)

