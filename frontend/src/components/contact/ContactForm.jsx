import { useState } from 'react'
import { sendContactEnquiry } from '../../services/contactService'

export default function ContactForm() {
  const [notice, setNotice] = useState('')
  const [status, setStatus] = useState('default')
  async function submit(event) { event.preventDefault(); setStatus('submitting'); try { const result = await sendContactEnquiry(Object.fromEntries(new FormData(event.currentTarget))); setNotice(result.message); setStatus('success'); event.currentTarget.reset() } catch (error) { setNotice(error.message); setStatus('error') } }
  return <form id="enquiry-form" className="contact-form" onSubmit={submit}><div><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required maxLength="80"/></div><div><label htmlFor="contact-reply">Phone or email</label><input id="contact-reply" name="replyTo" required maxLength="120"/></div><div><label htmlFor="contact-subject">Subject</label><select id="contact-subject" name="subject" defaultValue="General Enquiry"><option>General Enquiry</option><option>Cake Enquiry</option><option>Product Question</option><option>Order Question</option><option>Celebration / Event Enquiry</option></select></div><div><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" required maxLength="1500"/></div><button className="button button--primary" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send enquiry →'}</button><p className={`contact-form__notice${status === 'error' ? ' is-error' : ''}`} aria-live="polite">{notice}</p></form>
}
