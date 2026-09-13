import { Link } from 'react-router-dom'
import Logo from '../components/common/Logo'

export default function BrandPage({ eyebrow, title, body }) {
  return (
    <main className="brand-page">
      <Logo />
      <p className="brand-page__eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to="/">← Back to home</Link>
    </main>
  )
}
