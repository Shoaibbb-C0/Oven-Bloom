import test from 'node:test'
import assert from 'node:assert/strict'
import app from '../src/app.js'

async function withServer(run) {
  const server = app.listen(0)
  await new Promise((resolve) => server.once('listening', resolve))
  try { await run(`http://127.0.0.1:${server.address().port}`) }
  finally { await new Promise((resolve) => server.close(resolve)) }
}

test('catalogue filters and enquiry validation work', async () => withServer(async (base) => {
  const products = await fetch(`${base}/api/products?category=cakes&bestseller=true`).then((response) => response.json())
  assert.equal(products.success, true)
  assert.equal(products.meta.count, 2)

  const contact = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: 'API Test', replyTo: 'test@example.com', subject: 'Question', message: 'Is this available?' }) })
  assert.equal(contact.status, 201)

  const invalidOrder = await fetch(`${base}/api/orders`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ productSlug: 'missing-product', name: 'API Test', contact: 'test@example.com', quantity: 1 }) })
  assert.equal(invalidOrder.status, 404)
}))
