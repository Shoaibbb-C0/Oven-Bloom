import { Router } from 'express'
import { listCategories } from '../controllers/productsController.js'

const router = Router()
router.get('/', listCategories)
export default router
