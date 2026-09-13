import logo from '../../assets/brand/magic-mamta-logo.webp'

export default function Logo() {
  return (
    <a className="brand-logo" href="/" aria-label="Magic Mamta home">
      <img src={logo} alt="Magic Mamta" />
    </a>
  )
}
