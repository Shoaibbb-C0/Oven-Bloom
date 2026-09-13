import Logo from '../common/Logo'
import Navbar from './Navbar'
import SearchTrigger from './SearchTrigger'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="header" data-animate="header">
      <Logo />
      <Navbar />
      <div className="header__actions"><SearchTrigger /><MobileMenu /></div>
    </header>
  )
}
