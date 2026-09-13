import { Link } from 'react-router-dom'
import Container from '../components/common/Container'
import Footer from '../components/common/Footer'
import Header from '../components/navigation/Header'
import Seo from '../components/common/Seo'

export default function NotFoundPage() {
  return <div className="catalogue-page"><Seo title="Page Not Found — Oven & Bloom" description="That page is not on the Oven & Bloom menu."/><Container><Header/><main className="not-found-page"><p className="page-intro__eyebrow">404 · Off the menu</p><h1>Lost your<br/><em>way?</em></h1><p>That page isn’t on the menu.</p><div><Link className="button button--primary" to="/">Back Home</Link><Link className="button button--secondary" to="/menu">Explore Menu</Link></div></main></Container><Footer/></div>
}
