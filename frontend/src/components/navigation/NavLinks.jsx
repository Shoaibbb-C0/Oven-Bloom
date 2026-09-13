import { NavLink } from 'react-router-dom'

const links = [
  ['Home', '/'], ['Menu', '/menu'], ['Cakes', '/cakes'], ['Snacks', '/snacks'], ['About', '/about'],
]

export default function NavLinks({ onNavigate }) {
  return links.map(([label, to]) => (
    <NavLink key={label} to={to} onClick={onNavigate} className={({ isActive }) => isActive ? 'active' : ''}>
      {label}
    </NavLink>
  ))
}
