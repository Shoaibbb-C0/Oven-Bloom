import Container from './Container'

export default function PageIntro({ eyebrow, title, copy }) {
  return <section className="page-intro"><Container><p className="page-intro__eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro__copy">{copy}</p></Container></section>
}

