const makeProduct = (id, slug, name, category, subcategory, shortDescription, options = {}) => ({
  id, slug, name, category, subcategory, shortDescription,
  description: options.description || shortDescription,
  image: options.image || null,
  price: null, featured: false, bestseller: false, available: true, ...options,
})

export const products = [
  makeProduct('cake-001','celebration-cake','Celebration Cake','cakes','celebration','A joyful centrepiece finished with colourful sprinkles.',{featured:true,bestseller:true}),
  makeProduct('cake-002','chocolate-truffle-cake','Chocolate Truffle Cake','cakes','chocolate','Rich chocolate layers with a smooth truffle finish.',{featured:true,bestseller:true}),
  makeProduct('cake-003','classic-chocolate-cake','Classic Chocolate Cake','cakes','chocolate','Deep cocoa flavour in a timeless bakery favourite.'),
  makeProduct('cake-004','party-sprinkle-cake','Party Sprinkle Cake','cakes','celebration','A bright cake made for birthdays and happy occasions.'),
  makeProduct('pastry-001','butter-croissant','Butter Croissant','pastries','croissant','Flaky golden layers with a delicate buttery finish.',{bestseller:true}),
  makeProduct('pastry-002','chocolate-pastry','Chocolate Pastry','pastries','chocolate','A rich individual chocolate treat for everyday cravings.'),
  makeProduct('pizza-001','cheese-pizza','Cheese Pizza','pizza','vegetarian','Bubbling cheese, tomato and basil on a freshly baked base.',{featured:true,bestseller:true}),
  makeProduct('pizza-002','classic-margherita','Classic Margherita','pizza','vegetarian','A simple, satisfying combination of tomato, cheese and basil.'),
  makeProduct('burger-001','classic-burger','Classic Burger','burgers','classic','A loaded burger layered with crisp lettuce, tomato and cheese.',{featured:true,bestseller:true}),
  makeProduct('roll-001','bakery-veg-roll','Bakery Veg Roll','rolls','vegetarian','A savoury bakery roll made for quick, satisfying bites.'),
  makeProduct('snack-001','loaded-fries','Loaded Fries','snacks','quick bites','Crisp golden fries made for sharing—or keeping to yourself.',{bestseller:true}),
  makeProduct('snack-002','classic-vada-pav','Classic Vada Pav','snacks','vada pav','A familiar, filling favourite for an everyday savoury craving.'),
  makeProduct('dessert-001','chocolate-dessert','Chocolate Dessert','desserts','chocolate','Smooth, indulgent chocolate with a refined bakery finish.'),
  makeProduct('beverage-001','cookies-cream-shake','Cookies & Cream Shake','beverages','shakes','A cold, creamy shake topped with cookie crumble.',{featured:true,bestseller:true}),
]

export const categories = [...new Set(products.map(({ category }) => category))]
