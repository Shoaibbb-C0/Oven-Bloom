import { useState } from 'react'

export default function ContactForm() {
  const [notice, setNotice] = useState('')
  return <form id="enquiry-form" className="contact-form" onSubmit={(event) => { event.preventDefault(); setNotice('This enquiry form is a preview. No message has been sent yet.') }}><div><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required/></div><div><label htmlFor="contact-reply">Phone or email</label><input id="contact-reply" name="replyTo" required/></div><div><label htmlFor="contact-subject">Subject</label><select id="contact-subject" name="subject" defaultValue="General Enquiry"><option>General Enquiry</option><option>Cake Enquiry</option><option>Product Question</option><option>Order Question</option><option>Celebration / Event Enquiry</option></select></div><div><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" required/></div><button className="button button--primary" type="submit">Prepare Enquiry →</button><p className="contact-form__notice" aria-live="polite">{notice}</p></form>
}

