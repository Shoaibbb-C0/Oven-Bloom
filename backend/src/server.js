import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'
import { env } from './config/env.js'
import healthRouter from './routes/health.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: env.ALLOWED_ORIGIN, methods: ['GET', 'POST'], credentials: false }))
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 120, standardHeaders: 'draft-8', legacyHeaders: false }))
app.use(express.json({ limit: '64kb' }))
app.use(express.urlencoded({ extended: false, limit: '64kb' }))

app.use('/api/health', healthRouter)
app.use(notFound)
app.use(errorHandler)

app.listen(env.PORT, () => {
  console.log(`Magic Mamta API listening on port ${env.PORT}`)
})
