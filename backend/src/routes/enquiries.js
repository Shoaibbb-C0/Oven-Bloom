import { Router } from 'express'
import { z } from 'zod'
import { createContact, createOrder } from '../controllers/enquiriesController.js'
import { validate } from '../middleware/validate.js'

const clean = (max) => z.string().trim().min(1).max(max).transform((value) => value.replace(/[<>]/g, ''))
const replyAddress = clean(120).refine((value) => /^\+?[0-9][0-9\s()-]{6,}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), 'Enter a valid phone number or email address.')
const contactSchema = z.object({ body: z.object({
  name: clean(80), replyTo: replyAddress, subject: clean(80), message: z.string().trim().min(10).max(1500).transform((value) => value.replace(/[<>]/g, '')),
}), query: z.any(), params: z.any() })
const orderSchema = z.object({ body: z.object({
  productSlug: z.string().trim().min(1).max(120).regex(/^[a-z0-9-]+$/),
  name: clean(80), contact: replyAddress, quantity: z.coerce.number().int().min(1).max(50), notes: z.string().trim().max(1000).transform((value) => value.replace(/[<>]/g, '')).optional().default(''),
}), query: z.any(), params: z.any() })

const router = Router()
router.post('/contact', validate(contactSchema), createContact)
router.post('/orders', validate(orderSchema), createOrder)
export default router
