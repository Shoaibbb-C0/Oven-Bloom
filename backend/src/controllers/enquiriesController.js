import { products } from '../data/products.js'
import { ContactEnquiry } from '../models/ContactEnquiry.js'
import { OrderEnquiry } from '../models/OrderEnquiry.js'

export async function createContact(req, res, next) {
  try {
    const record = await ContactEnquiry.create(req.validated.body)
    res.status(201).json({ success: true, data: { id: record.id }, message: 'Thanks — your enquiry has been received.' })
  } catch (error) { next(error) }
}

export async function createOrder(req, res, next) {
  try {
    const product = products.find((item) => item.slug === req.validated.body.productSlug)
    if (!product) return res.status(404).json({ success: false, error: { code: 'PRODUCT_NOT_FOUND', message: 'That product could not be found.' } })
    if (!product.available) return res.status(409).json({ success: false, error: { code: 'PRODUCT_UNAVAILABLE', message: 'That product is currently unavailable.' } })
    const record = await OrderEnquiry.create({ ...req.validated.body, productId: product.id, productName: product.name })
    res.status(201).json({ success: true, data: { id: record.id }, message: 'Your order enquiry has been received. We will contact you to confirm details and availability.' })
  } catch (error) { next(error) }
}
