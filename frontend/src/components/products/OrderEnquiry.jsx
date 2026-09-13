import { useState } from 'react'
import { sendOrderEnquiry } from '../../services/orderService'

export default function OrderEnquiry({ product, onClose }) {
  const [status, setStatus] = useState('default')
  const [notice, setNotice] = useState('')
  async function submit(event) {
    event.preventDefault()
    setStatus('submitting')
    const values = Object.fromEntries(new FormData(event.currentTarget))
    try { const result = await sendOrderEnquiry({ ...values, productSlug: product.slug }); setNotice(result.message); setStatus('success'); event.currentTarget.reset() }
    catch (error) { setNotice(error.message); setStatus('error') }
  }
  return <section className="order-enquiry" aria-labelledby="order-enquiry-title"><div className="order-enquiry__heading"><div><p className="page-intro__eyebrow">Order enquiry</p><h2 id="order-enquiry-title">Ask about {product.name}.</h2></div><button type="button" className="order-enquiry__close" onClick={onClose} aria-label="Close order enquiry">×</button></div><p>Send your details and we’ll contact you to confirm availability and next steps. This does not place or confirm an order.</p><form onSubmit={submit}><div><label htmlFor="order-name">Name</label><input id="order-name" name="name" autoComplete="name" required maxLength="80" /></div><div><label htmlFor="order-contact">Phone or email</label><input id="order-contact" name="contact" required maxLength="120" /></div><div><label htmlFor="order-quantity">Quantity</label><input id="order-quantity" name="quantity" type="number" min="1" max="50" defaultValue="1" required /></div><div><label htmlFor="order-notes">Notes</label><textarea id="order-notes" name="notes" rows="3" maxLength="1000" /></div><button className="button button--primary" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send enquiry →'}</button><p className={`contact-form__notice${status === 'error' ? ' is-error' : ''}`} aria-live="polite">{notice}</p></form></section>
}
