import { env } from './config/env.js'
import app from './app.js'

app.listen(env.PORT, () => {
  console.log(`Oven & Bloom API listening on port ${env.PORT}`)
})
