import { businessInfo } from '../../data/businessInfo'

export default function ContactActions() {
  return <div className="contact-actions">{businessInfo.phone && <a href={`tel:${businessInfo.phone}`}>Call Us</a>}{businessInfo.whatsapp && <a href={`https://wa.me/${businessInfo.whatsapp}`}>WhatsApp</a>}<a href="#enquiry-form">Send Enquiry ↓</a></div>
}

