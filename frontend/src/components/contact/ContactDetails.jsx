import { businessInfo } from '../../data/businessInfo'

export default function ContactDetails() {
  const details = [['Phone',businessInfo.phone],['WhatsApp',businessInfo.whatsapp],['Email',businessInfo.email]].filter(([,value]) => value)
  return <section className="contact-details"><p className="page-intro__eyebrow">Direct contact</p>{details.length ? <dl>{details.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> : <p>Contact details will appear here once they are confirmed.</p>}</section>
}

