import { Link } from 'react-router-dom'
import Logo from './Logo'
import Container from './Container'

const columns = [
  ['Explore', [['Home','/'],['Menu','/menu'],['Cakes','/cakes'],['Snacks','/menu#snacks'],['About','/about']]],
  ['Help', [['Contact','/contact'],['Order','https://www.swiggy.com/city/pusad']]],
  ['Categories', [['Cakes','/cakes'],['Desserts','/menu#desserts'],['Pizza','/menu#pizza'],['Snacks','/menu#snacks'],['Beverages','/menu#beverages']]],
]

export default function Footer() {
  return (
    <footer className="footer"><Container className="footer__grid"><div className="footer__brand"><Logo /><p>Bakery, café and everyday bites.</p></div>{columns.map(([title, links]) => <div className="footer__column" key={title}><h3>{title}</h3>{links.map(([label,href]) => href.startsWith('http') ? <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a> : <Link key={label} to={href}>{label}</Link>)}</div>)}</Container><Container className="footer__bottom"><span>Magic Mamta</span><span>Pusad, Maharashtra</span></Container></footer>
  )
}
